import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { setAuthToken } from '../../../api/Auth';

const Login = () => {
    const { logIn, googleLogIn, setLoading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then(result => {
                // console.log(user);
                toast.success('Login Successful!');
                // setAuthToken(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
                setLoading(false);
            })
    }

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                // setAuthToken(user);
                navigate(from, { replace: true })
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                    <img src="https://i.ibb.co/fHqZmSt/Login-graphic-svg.png" className="w-full" alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold text-center'>Login Now!</h1>
                    <form onSubmit={handleSubmit(handleLogIn)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: "Email address is required" })} type="text" placeholder="email" className="input input-bordered" />
                                {errors?.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register('password',
                                    { required: "Password is required" }
                                )} type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                {errors?.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        {loginError && <p className='text-red-600 text-sm'>{loginError}</p>}
                    </form>

                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account? <Link to='/register' className="text-green-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out">Register Now!</Link>
                    </p>
                    <div
                        className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                    >
                        <p className="text-center font-semibold mx-4 mb-0">Or</p>
                    </div>
                    <div className="flex flex-row items-center justify-center lg:justify-start">
                        <p className="text-lg mb-0 mr-4">Sign in with</p>
                        <button
                            onClick={handleGoogleLogin}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1">
                            <FcGoogle fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></FcGoogle>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;