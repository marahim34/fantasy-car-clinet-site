import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    const { _id, data } = car;
    console.log(data.data);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10 text-black">
                <img src={data.picture} className='h-44 w-full' alt="" />
                <div className="card-body bg-yellow-500">
                    <h2 className="card-title h-12 items-start">{data.model}</h2>
                    <p className='h-16'>Car Type: {data.vehicleType ? data.vehicleType : 'No category given'} </p>
                    <div className='flex justify-between'>
                        <div>
                            <p>Pricing: <small>€</small> <strong>{data.sellPrice}</strong> <small></small> </p>
                            <p>Manufacturing Date: {data.manufacturingDate}</p>
                        </div>
                        <div className='flex flex-col rating items-start'>
                            <p>Location: {data.country}</p>
                            <p>Years Used: {data.yearsUsed}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success"> <Link to={`/cars/${_id}`}>Details</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;