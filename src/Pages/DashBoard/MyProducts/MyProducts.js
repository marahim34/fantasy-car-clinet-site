import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/cars?email=${user.email}`

    const { data: myCars } = useQuery({
        queryKey: ['myCars', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json();
            console.log(data);
            return data
        }
    })

    return (
        <div>
            <h3 className='text-3xl'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Car Image</th>
                            <th>Model</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myCars.map((car, index) =>
                                <tr key={car._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={car?.data?.picture} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{car?.data?.model}</td>
                                    <td>{car?.data?.sellPrice}</td>
                                    <td>Advertise</td>
                                    <td>
                                        <label onClick={() => {
                                            // setDeletingDoctor(doctor)
                                        }} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>

                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {/* {deletingDoctor &&
                <ConfirmationModal
                    title={`Are you sure you want to delete ${deletingDoctor.name}?`}
                    message={'If you delete, it can not be recovered'}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    modaldata={deletingDoctor}
                    closeModal={closeModal}
                ></ConfirmationModal>
            } */}
        </div>
    );
};

export default MyProducts;