import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConformationModal from '../../Shared/ConformationModal/ConformationModal';

const MyProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://y-bay-pi.vercel.app/products', {

                })
                const data = await res.json();
                return data;
            }
            catch (error) {

            }

        }
    })

    const handleDeleteProduct = product => {
        fetch(`https://y-bay-pi.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${product.productName} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-900"></div>
        </div>
    }

    return (
        <div>
            <h2 className='text-3xl'>My Products : {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>price</th>
                            <th>Condition</th>
                            <th>phone</th>
                            <th>Add</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, i) => <tr key={product._key}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.productName}</td>
                                <td>${product.ResalePrice}</td>
                                <td>{product.conditions}</td>
                                <td>{product.mobileNumber}</td>
                                <td><button className='btn btn-primary btn-sm'>Advertisement</button></td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="conformation-Modal" className="btn btn-error btn-sm">Delete</label>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&
                <ConformationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.productName}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConformationModal>
            }
        </div>
    );
};

export default MyProducts;