import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'

const SingleCar = () => {
    const car = useLoaderData().data;
    const { condition, country, description, manufacturer, manufacturingDate, model, picture, sellPrice, vehicleType, yearsUsed } = car;
    const date = new Date();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            date,
            clinetName: name,
            phone,
            email,
            meetingLocation: location,
            price: sellPrice
        }
        // console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // form.reset();
                    toast.success('booking confirmed');
                    navigate(from, { replace: true })
                    // refetch();
                }
                // else {
                //     toast.error(data.message);
                // }
            })


    }

    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32">
                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0">
                            <div className="flex lg:py-12">
                                <img src={picture} className="w-full rounded-lg shadow-lg" id="cta-img-nml-50" alt="" />
                            </div>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div
                                className="bg-yellow-500 h-full rounded-lg p-6 lg:pl-12 text-white flex items-center text-center lg:text-left">
                                <div className="lg:pl-12">
                                    <h2 className="text-3xl font-bold mb-6">{model}</h2>
                                    <p className="mb-6 pb-2 lg:pb-0"> {description} </p>
                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            {condition} Condition
                                        </p>
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            {vehicleType}
                                        </p>
                                        <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            {yearsUsed} years used
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:justify-around xl:justify-start mb-6 mx-auto">
                                        <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 xl:mr-20">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            {manufacturer}
                                        </p>

                                        <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                                <path fill="currentColor"
                                                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                                </path>
                                            </svg>
                                            Manufacturing Date: {manufacturingDate}
                                        </p>
                                    </div>

                                    <p>
                                        <strong>Selling Price:</strong> <small>€</small>  <strong>{sellPrice}</strong> <small></small>
                                    </p>

                                    <div className="card-actions justify-center">
                                        <label
                                            htmlFor="booking-modal"
                                            className="btn btn-primary text-white">Book Now</label>

                                    </div>
                                </div>
                                <input type="checkbox" id="booking-modal" className="modal-toggle" />

                                <div className="modal">
                                    <div className="modal-box relative">
                                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold">{ }</h3>
                                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                                            <p><span className='font-bold'>Selected Model</span>
                                                <input type="text " disabled defaultValue={model} className='input w-full input-bordered' />
                                            </p>
                                            <p><span className='font-bold'>Name</span> <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className='input w-full input-bordered' /></p>
                                            <p><span className='font-bold'>Email</span>
                                                <input name='email' defaultValue={user?.email} type="text " disabled placeholder="Email Address" className='input w-full input-bordered' />
                                            </p>
                                            <p><span className='font-bold'>Price</span>
                                                <input name='price' defaultValue={sellPrice} type="text " disabled placeholder="Price" className='input w-full input-bordered' />
                                            </p>
                                            <p> <span className='font-bold'>Contact Number</span>
                                                <input name='phone' type="text " placeholder="Phone Number" className='input w-full input-bordered' required />

                                            </p>
                                            <p><span className='font-bold'>Meeting Location</span>
                                                <input name='location' type="text " placeholder={`Preferable Meeting Location in ${country}`} className='input w-full input-bordered' required />
                                            </p>
                                            <input type='submit' className='btn btn-accent w-full' value="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default SingleCar;