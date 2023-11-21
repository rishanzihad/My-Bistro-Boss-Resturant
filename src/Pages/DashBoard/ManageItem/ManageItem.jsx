import React from 'react';
import SectionTitle from '../../../Components/SectionTittle/SectionTitle';
import useMenu from '../../../Hooks/UseMenu';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItem = () => {
    const [menu,refetch] = useMenu()
    const axiosSecure =useAxiosSecure()
    const handleDeleteiItem = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res =await axiosSecure.delete( `/menu/${item._id}`)
                if(res.data.deletedCount>0){
                    refetch()
                    Swal.fire({
                        position:'top-end',
                        icon:'success',
                        title:`${item.name} has Been Deleted`,
                        showConfirmButton:false,
                        timer:1500
                    })
                }
             // Swal.fire({
               // title: "Deleted!",
               // text: "Your file has been deleted.",
               // icon: "success"
              //});
            }
          });
    }
    const handleUpdateItem =()=>{

    }
    return (
        <div>
            <SectionTitle heading="MAnage All Item" subHeading='Hurry up'></SectionTitle>
            <div>
                <div className="overflow-x-auto w-ful">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                  #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th> Update</th>
                                <th> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            menu.map((item,index)=> <tr key={item._id}>
                                <td>
                                {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                {item.name}
                                </td>
                                <td className='text-right'>${item.price}</td>
                                <td>
                                   <Link to={`/dashboard/updateItem/${item._id}`}>
                                       <button
                                       onClick={() => handleUpdateItem(item)}
                                       className="btn btn-md btn-ghost bg-orange-500">
                                       <FaEdit className="text-white 
                                     "></FaEdit>
                                       </button>
                                    </Link>
                                </td>
                                <td>
                                <button
                                        onClick={() => handleDeleteiItem(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                           </tr>  )
                            }
                                                
                        </tbody>
                     
                    

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;