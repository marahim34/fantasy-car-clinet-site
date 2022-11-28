import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { id, name } = category;
    return (
        <div className="card w-96 bg-yellow-500 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`category/${id}`}><button className="btn">Visit Collection</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;