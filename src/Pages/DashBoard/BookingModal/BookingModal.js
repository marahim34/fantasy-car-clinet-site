import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = () => {
    // const {  } = treatment; //treatment is appointment option a different name used
    const date = new Date();
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        const booking = {
            date,
            clinetName: name,
            slot,
            phone,
            email,
            // price
        }
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text " disabled value={date} className='input w-full input-bordered' />
                        <select name='slot' className="select select-bordered w-full">
                            {/* {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            } */}
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className='input w-full input-bordered' />
                        <input name='email' defaultValue={user?.email} type="text " disabled placeholder="Email Address" className='input w-full input-bordered' />
                        <input name='phone' type="text " placeholder="Phone Number" className='input w-full input-bordered' />
                        <input type='submit' className='btn btn-accent w-full' value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;