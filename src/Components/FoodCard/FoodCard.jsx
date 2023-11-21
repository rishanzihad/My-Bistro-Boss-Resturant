import  { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location =useLocation()
    const axiosSecure =useAxiosSecure()
    const [,refetch] =useCart()
    const {image,price,name,recipe,_id}=item
    const handleAddCard =()=>{
        if(user&& user.email){
            
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                if(res.data.insertedId){
                    toast.success(`${name} Added to the Cart`)
                }
            })
            refetch()

        }
        else{
            Swal.fire({
                title: "You are Not Login",
                text: "Please Login Add to the Cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                navigate('/login',{state:{from:location}})
                }
              });
        }
    }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=' bg-slate-900 text-white right-0 absolute mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddCard} className="btn text-black btn-outline bottom-0 border-orange-400 bg-slate-100 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;