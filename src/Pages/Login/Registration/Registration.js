import React, { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/Auth';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Registration = () => {
    const { loading, setLoading, createUser, updateUser } = useContext(AuthContext);
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const navigate = useNavigate();
    const password = useRef({});
    password.current = watch("password", "");
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (data) => {
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                setSignUpError('');
                toast.success('Account created successfully');

                const userInfo = {
                    displayName: data.name
                };

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(error => console.error(error))
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error.message);
                setLoading(false);
            })
    }


    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('saveuser', data);
                getUserToken(email)
                setCreatedUserEmail(email);
            })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate('/')
                }
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://i.ibb.co/fHqZmSt/Login-graphic-svg.png" className="w-full" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-center'>Register Now!</h1>
                    <form onSubmit={handleSubmit(handleRegister)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' {...register('name', { required: "Name is required" })} type="text" placeholder="Name" className="input input-bordered" />
                                {errors.name && <p role="alert" className='text-red-600 text-sm'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' {...register('email', { required: true })} type="text" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' {...register('password', {
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        , message: 'password must have uppercase, lowercase, numbers and special characters'
                                    },
                                    minLength: { value: 6, message: 'Password must be six characters long' }
                                })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password && <p className='text-red-600 text-sm'>{errors.password.message} </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Your Password</span>
                                </label>
                                <input name='confirm' {...register('confirm', {
                                    required: true,
                                    validate: value =>
                                        value === password.current || "The passwords do not match"
                                })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.confirm && <p className='text-red-600 text-sm'>{errors.confirm.message} </p>}
                            </div>
                            <div className="form-control">
                                <div className="input-group flex">
                                    <p>How do you want to use our website?</p>
                                    <select {...register('role')} name="role">
                                        <option value="buyer">Buyer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {
                            loading ? <button className="btn btn-square loading"></button>
                                :
                                <><div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div></>
                        }
                        <>{signUpError && <p className='text-red-500 text-sm'>{signUpError}</p>}</>
                    </form>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an account? <Link to='/login' className="text-green-600 hover:text-green-700 focus:text-green-600 transition duration-200 ease-in-out">Login!</Link>
                    </p>

                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                        <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="text-lg mb-0 mr-4">Sign in with</p>
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                            <FcGoogle fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></FcGoogle>
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Registration;