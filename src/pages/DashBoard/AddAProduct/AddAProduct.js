import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostkey = process.env.REACT_APP_imgbb_key;

    const { loading } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-900"></div>
        </div>
    }

    const handleAddProduct = data => {
        console.log(data)
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const products = {
                        productName: data.productName,
                        originalPrice: data.originalPrice,
                        ResalePrice: data.ResalePrice,
                        conditions: data.condition,
                        mobileNumber: data.number,
                        usesYear: data.year,
                        image: imgData.data.url
                    }
                    fetch('https://y-bay-pi.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.productName} is added successfully`);
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }


    return (
        <div>
            <h3 className='text-3xl mb-5'>Add A Product</h3>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Product name</span></label>
                    <input type="text" {...register('productName', {
                        required: "name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Original price</span></label>
                    <input type="text" {...register('originalPrice', {
                        required: "price is required"
                    }
                    )} className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Resale price</span></label>
                    <input type="text" {...register('ResalePrice', {
                        required: "price is required"
                    }
                    )} className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Conditions</span></label>
                    <select {...register('condition')}
                        className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Type of product</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fine</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Mobile number</span></label>
                    <input type="text" {...register('number', {
                        required: ""
                    }
                    )} className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs ">
                    <label className="label"><span className="label-text">Year of use</span></label>
                    <input type="text" {...register('year', {
                        required: ""
                    }
                    )} className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file" {...register('img', {
                        required: "photo is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-primary mt-4' value='Add Product' type="submit" />

            </form>
        </div>
    );
};

export default AddAProduct;