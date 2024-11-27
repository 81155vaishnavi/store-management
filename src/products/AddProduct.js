import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

function AddProduct() {
          const {register,handleSubmit,setValue,reset} =useForm();
            const {id}=useParams()
      
          const saveData=product=>{
            if(!id){
                axios.post('http://localhost:4000/products',product)
                .then(res=>{
                   if(res.status===201){
                    alert("Product Details Saved...!")
                    reset();
                   }

                })
                .catch(error=>console.log(error));
              }
              else{
                    axios.put(`http://localhost:4000/products/${id}`,product)
                    .then(res=>{
                          if(res.status===200){
                            alert("Product Details updated...!")
                          }
                    })
                    .catch(error=>console.log(error));
              }
          }
         
          const getEditData=()=>{
            if(id)
            {
                 axios.get(`http://localhost:4000/products/${id}`)
                 .then(res=>{
                         for(let prop in res.data)
                         {
                          setValue(prop,res.data[prop])
                            // console.log(prop + " =>  " +res.data[prop])
                         }
                 })
            }
          }

          useEffect(()=>getEditData,[]);

  return (
    <div className='d-flex justify-content-center'>
          <div className='bg-white w-50 mt-3 p-3'>
            <h1>{id}</h1>

          <h1 className='text-center fs-3 text-primary'>Add Product Details...!</h1>
          <form onSubmit={handleSubmit(saveData)}>
            <div>
                <label className='form-label'>Enter Product Id</label>
                <input type="text" {...register('id')} disabled={id} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter Productname</label>
                <input type="text" {...register('ProductName')} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter Product manufacture</label>
                <input type="text" {...register('manufacture')} className='form-control border border-dark'></input>
            </div>

            <div>
                <label className='form-label'>Enter Product specification</label>
                <input type="text" {...register('specification')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter Product quantity</label>
                <input type="number" {...register('quantity')} className='form-control border border-dark'></input>
          </div>

          <div>
                <label className='form-label'>Enter Product price</label>
                <input type="number" {...register('price')} className='form-control border border-dark'></input>
          </div>

          <div className='mt-3'>
                <label className='form-check-label me-4'>Enter Product instock?</label>
                <input type="checkbox" {...register('instock')} className='form-check-input border border-dark'></input>
          </div>

         <button className='btn btn-success mt-3'>Submit</button>
          </form>
          </div>
    </div>
  )
}

export default AddProduct;