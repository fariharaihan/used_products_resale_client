import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookingBike, setBookingBike }) => {
    const { title, resale_price } = bookingBike;
    const { user } = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value
        const booking = {
            productName: title,
            name,
            email,
            phone,
            location
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookingBike(null)
                toast.success('Order Confirmed')
            })

        // console.log(booking);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className='text-xl font-semibold mb-4'>Price: {resale_price}</p>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full mb-4" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email address" className="input input-bordered w-full mb-4" />
                        <input name="phone" type="number" placeholder="Phone number" className="input input-bordered w-full mb-4" />
                        <input name="location" type="text" placeholder="Location" className="input input-bordered w-full mb-4" />
                        <br />
                        <input className='w-full btn btn-primary ' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;