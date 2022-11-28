import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const CategoryItem = ({ categoryItem }) => {
    const { country, model, manufacturingDate, picture, yearsUser, vehicleType, sellPrice } = categoryItem.data;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mt-10">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} className='h-44 w-full' alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body bg-yellow-500">
                    <h2 className="card-title h-12 items-start">{model}</h2>
                    <p className='h-16'>{ }... <Link to='/service/:id' className="link link-primary">Read More</Link> </p>
                    <div className='flex justify-between'>
                        <div>
                            <p>Price: <small>€</small> <strong>{sellPrice}</strong> <small></small> </p>
                        </div>
                        <div className='rating items-center'>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <p>{ }</p>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success"> <Link to={`/car/${model}`}>Details</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryItem;