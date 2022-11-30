import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
// import Loading from '../../Shared/Loading/Loading';

const AddCar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostingKey = process.env.REACT_APP_imgbb_apiKey;
    // console.log(imageHostingKey);

    const navigate = useNavigate();

    // const image = data.image[0];
    // const formData = new FormData;

    const handleAddCar = data => {

        const email = user?.email;

        const category_id = data.category_id;
        const country = data.country;
        const model = data.model;
        const manufacturingDate = data.manufacturingDate;
        const registrationDate = data.registrationDate;
        const manufacturer = data.manufacturer;
        const yearsUsed = data.yearsUsed;
        // const picture = data.picture;
        const seller = data.seller;
        const condition = data.condition;
        const sellPrice = data.sellPrice;
        const description = data.description;
        const phone = data.phone;
        const purchasePrice = data.purchasePrice;


        const picture = data.picture[0];
        const formData = new FormData;
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {
                console.log(imgdata);

                if (imgdata.success) {
                    const product = {
                        category_id: category_id,
                        email: email,
                        data: {
                            country: country,
                            model: model,
                            manufacturingDate: manufacturingDate, registrationDate: registrationDate, manufacturer: manufacturer, yearsUsed: yearsUsed, picture: imgdata.data.url, seller: seller, condition: condition, sellPrice: sellPrice, description: description, phone: phone, purchasePrice: purchasePrice
                        }
                    }

                    fetch('https://fantasy-car-server-marahim34.vercel.app/cars', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data?.model} is added successfully`);

                            navigate('/dashboard/my-products')
                        })

                }

            })



        //         fetch('https://fantasy-car-server-marahim34.vercel.app/cars', {
        //             method: 'POST',
        //             headers: {
        //                 'content-type': 'application/json',
        //                 // authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //             },
        //             body: JSON.stringify(newCar)
        //         })
        //             .then(res => res.json())
        //             .then(result => {
        //                 console.log(result);
        //                 toast.success(`${data?.name} is added successfully`);

        //                 navigate('/dashboard/manage-cars')
        //             })
        //     }
        // })
    }

    // if (isLoading) {
    //     return ('Loading')
    // }

    return (
        <div className='w-96 p-7'>
            <h3 className="text-3xl">Add A Car</h3>
            <form onSubmit={handleSubmit(handleAddCar)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text"
                        {
                        ...register('seller', {
                            required: "Please insert your name"
                        })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.seller && <p className='text-red-600'>{errors.seller.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Contact Number</span></label>
                    <input type="text"
                        {
                        ...register('phone', {
                            required: "Please insert your contact number"
                        })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-600'>{errors.phone.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select {...register('category_id')} className="select input-bordered w-full max-w-xs" name="category">
                        <option value="01">Hatch Back</option>
                        <option value="02">Sedan</option>
                        <option value="03">Station Wagon</option>
                        <option value="04">SUV</option>
                        <option value="05">Convertible</option>
                        <option value="06">Pick Up</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register('country', { required: "Please insert your location" })} className="input input-bordered w-full max-w-xs" />
                    {errors.country && <p className='text-red-600'>{errors.country.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Model</span></label>
                    <input type="text" {...register('model', { required: "Model" })} className="input input-bordered w-full max-w-xs" />
                    {errors.model && <p className='text-red-600'>{errors.model.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Manufacturing Date</span></label>
                    <input type="text" {...register('manufacturingDate', { required: "Manufacturing Date" })} className="input input-bordered w-full max-w-xs" />
                    {errors.manufacturingDate && <p className='text-red-600'>{errors.manufacturingDate.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Registration Date</span></label>
                    <input type="text" {...register('registrationDate', { required: "Manufacturing Date" })} className="input input-bordered w-full max-w-xs" />
                    {errors.registrationDate && <p className='text-red-600'>{errors.registrationDate.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Manufacturer</span></label>
                    <input type="text" {...register('manufacturer', { required: "Manufacturer Name" })} className="input input-bordered w-full max-w-xs" />
                    {errors.manufacturer && <p className='text-red-600'>{errors.manufacturer.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years Used</span></label>
                    <input type="text" {...register('yearsUsed', { required: "Years Used" })} className="input input-bordered w-full max-w-xs" />
                    {errors.yearsUsed && <p className='text-red-600'>{errors.yearsUsed.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo: Please upload image of your car</span></label>
                    <input type="file"
                        {
                        ...register('picture', {
                            required: "Please insert photograph"
                        })
                        }
                        className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-600'>{errors.image.sdemessage}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <select {...register('condition')} className="select input-bordered w-full max-w-xs" name="condition">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Purchase Price</span></label>
                    <input type="text" {...register('purchasePrice', { required: "Sell Price" })} className="input input-bordered w-full max-w-xs" />
                    {errors.purchasePrice && <p className='text-red-600'>{errors.purchasePrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Sell Price</span></label>
                    <input type="text" {...register('sellPrice', { required: "Sell Price" })} className="input input-bordered w-full max-w-xs" />
                    {errors.sellPrice && <p className='text-red-600'>{errors.sellPrice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <textarea type="text" {...register('description', { required: "Sell Price" })} className="input textarea textarea-primary h-32 input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                </div>

                {/* {country: "country", model: "model", manufacturingDate: "manufacturingDate", registrationDate: "registrationDate", manufacturer: "manufacturer", yearsUsed: "yearsUsed", picture: "picture", seller: "seller", "condition": "condition", sellPrice: "sellPrice", description: "description" } */}

                <input className='btn btn-accent w-full' type="submit" value="Add A Car" />
                {/* {signUpError && <p className='text-red-600'> {signUpError}</p>} */}

            </form>
        </div>
    );
};

export default AddCar;