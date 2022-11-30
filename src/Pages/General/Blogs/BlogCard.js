import React from 'react';

const BlogCard = ({ blogCard }) => {
    const { name, picture, date, title, about } = blogCard;
    return (
        <div className="card bg-yellow-500 text-black shadow-xl mt-10 mb-10">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-96" />
            </figure>
            <div className='items-center text-center h-24'>
                <p>Blogger: {name}</p>
                <p>Date: <small>{date}</small></p>
            </div>
            <div className="card-body items-start">
                <div>
                    <div>
                        <h2 className="card-title">{title}</h2>
                    </div>
                    <div>
                        <p>{about}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default BlogCard;