import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';

const AddCar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostingKey = process.env.REACT_APP_imgbb_apiKey;
    console.log(imageHostingKey);

    const navigate = useNavigate();
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories')
            const data = await res.json();
            return data;
        }
    })

    const handleAddCar = data => {
        // console.log(data);
        const image = data.image[0];
        const formData = new FormData;
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const newCar = {
                        name: data.model,
                        email: data.email,
                        seller: data.seller,
                        price: data.sellingPrice,
                        image: imageData.data.url
                    }

                    fetch('http://localhost:5000/cars', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newCar)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data?.name} is added successfully`);

                            navigate('/dashboard/manage-cars')
                        })
                }
            })
    }

    if (isLoading) {
        return ('Loading')
    }

    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl">Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddCar)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text"
                        {
                        ...register('name', {
                            required: "Please insert your name"
                        })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email"
                        {
                        ...register('email', { required: true })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller</span></label>
                    <select
                        {
                        ...register("seller")
                        }
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo: Please upload image of your car</span></label>
                    <input type="file"
                        {
                        ...register('image', {
                            required: "Please insert  photos"
                        })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image.message}</p>}

                </div>
                <input className='btn btn-accent w-full' type="submit" value="Add A Doctor" />
                {/* {signUpError && <p className='text-red-600'> {signUpError}</p>} */}

            </form>
        </div>
    );
};

export default AddCar;