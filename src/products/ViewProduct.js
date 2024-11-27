import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ViewProduct() {
    const[products,setproducts]=useState([]);

    const getData= ()=>{
            axios.get('http://localhost:4000/products')
                 .then((res)=>setproducts(res.data))
    }

    useEffect(getData,[])

    function deleteProduct(id)
    {
        axios.delete(`http://localhost:4000/products/${id}`)
        .then(res=>{
              if(res.status===200)
              {
                alert("Product Details removed..!")
                window.location.reload();
              }
        })

        .catch(error=>console.log(error))
    }
  return (
    <div>ViewProduct
        <table className='table tabel-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>productname</th>
                    <th>specification</th>
                    <th>manufacture</th>
                    <th>quantity</th>
                    <th>instock</th>
                    <th>price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=><tr>
                        <td>{product.id}</td>
                        <td>{product.productname}</td>
                        <td>{product.specification}</td>
                        <td>{product.manufacture}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                         <td><input type='checkbox' checked={product.instock}></input></td>
                         <td>
                            <button className='btn btn-outline-danger me-4'onClick={()=>deleteProduct(product.id)}>
                                <i class="bi bi-trash3"></i></button>

                                <Link className='btn btn-outline-primary'to={`/edit/${product.id}`}>
                                
                                <i class="bi bi-pencil"></i></Link>
                         </td>
                    </tr>)
                }
            </tbody>
        </table>
        {/* <button onClick={getData}>Get Data</button> */}
    </div>
  )
}

export default ViewProduct;