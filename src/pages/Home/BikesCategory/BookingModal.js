import React from 'react';

const BookingModal = ({ bookingBike, setBookingBike }) => {
    const { title, resale_price } = bookingBike;

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

        // console.log(booking);
        setBookingBike(null)
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
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full mb-4" />
                        <input name="email" type="email" placeholder="Email address" className="input input-bordered w-full mb-4" />
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