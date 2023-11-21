import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTittle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

//const image_hosting_key = import.meta.env.ViTE_IMAGE_HOSTE


const image_hosting_api =`https://api.imgbb.com/1/upload?key=a3ba9efa7295c0b8c2f7185bb90553c6`

console.log(image_hosting_api)
const AddItem = () => {
    

    const axiosPublic =useAxiosPublic()
    const axiosSecure =useAxiosSecure()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async (data) => {
       // console.log(data)
       const imageFile={image: data.image[0]}
       const res =await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
       })
       if(res.data.success){
        const menuItem ={
            name:data.name,
            category:data.category,
            price:parseFloat(data.price),
            recipe:data.recipe,
            image:res.data.data.display_url
        }
        const menuRes =await axiosSecure.post('/menu',menuItem)
        if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position:'top-end',
                title: `${data.name} is added to the menu`,
               showConfirmButton: false,
               timer: 1500
              })
        }
       }
       console.log(res.data)
    }
    return (
        <div>
            <SectionTitle heading={"add an Item"} subHeading={"what's new?"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  
                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>

                        </label>
                        <input required type="text" {...register('name',{required:true})} placeholder="Recipe Name" className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-5">
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Category</span>

                            </label>
                            <select defaultValue={"default"} {...register("category")} className="select select-bordered w-full ">
                                <option disabled value={"default"}>Select A Category</option>
                                <option value="salad">Salad</option>
                                <option value="soup">Soup</option>
                                <option value="Pizza">Pizza</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input required type="number" {...register('price',{required:true})} placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                         
                        </label>
                        <textarea required {...register('recipe',{required:true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                       
                    </div>
                    <div className="form-control w-full my-6">
                        <input required {...register('image',{required:true})} type="file" className="file-input w-full"/>
                    </div>

                   <div>
                   <button className="btn bg-green-600 text-white w-full">Add Item <FaUtensils></FaUtensils></button>
                   </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;