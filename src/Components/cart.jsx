/* eslint-disable react/prop-types */
import { useState } from "react";
import Topbar from "./topbar";
import { useNavigate } from "react-router";
import { AppState } from "../contetapi/contextapi";

export default function Cart({id}){

    const{info}=AppState();
    const selectedproduct=info?.filter((data)=>data.id==id.id)
    const [cart,setcart]=useState(1);
    const navigate=useNavigate();
    // console.log(`Data:${selectedproduct}`)
       
    const handleQuantityChange =(event) => {
        const quantity = parseInt(event.target.value, 10);
        if (!isNaN(quantity) && quantity > 0) {
          setcart(quantity);
        } else {
          setcart(1);
        }
      };
    return(
        <div className="flex flex-col w-full">
        <div className="grid h-20 card rounded-box place-items-center m-1">
            <Topbar/>
        </div>
        <div className="flex flex-nowrap rounded-box justify-center items-center">
            <div className="grid m-1">
                {selectedproduct&&selectedproduct?.map((data,id)=>
                <div className="card lg:card-side bg-base-100 shadow-xl" key={id}>
                <figure><img src={data.thumbnail} alt="Mobile"/></figure>
                <div className="card-body">
                       <h1 className="card-title">Model Name: {data.title} </h1>
                            <h2 className="card-title">Brand:{data.brand} <div className="badge badge-accent badge-outline">Rating: {data.rating}/5</div> </h2>
                            <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-title">OfferPrice:</div>
                                <div className="stat-value"> ₹ {data.price*90}</div>
                                <div className="stat-desc">discount:{data.discountPercentage}% </div>
                            </div>
                            
                            </div>
                            <kbd className="kbd w-64"><h2>Mrp: ₹ {((data.price / (1 - data.discountPercentage / 100))*90).toFixed(2)}</h2></kbd>
                            <p>{data.description}</p> 
                            
                         <div className="card-actions justify-center">       
                            <select
                            className="select select-bordered select-sm w-24 max-w-xs"
                            onChange={handleQuantityChange}
                            value={cart}
                            >
                                    <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            </select>
                         </div>
                         <div className="stat">
                                <div className="stat-title">Total price:</div>
                                <div className="stat-value"> ₹ {cart*data.price*90}</div>
                            </div>
                         <div className="card-actions justify-center">
                         <button className="btn btn-primary" onClick={()=>navigate(`/`)}>Order Now</button>
                         </div>
                        </div>
              </div>
                )
                }
            </div>
        </div>

       </div>
    )
}