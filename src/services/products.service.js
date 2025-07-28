import { getAllProducts,findById,findByText, saveProduct,deleteProduct,updateProduct } from "../models/products.models.js";

const getAll = async ()=>{
    return await getAllProducts();
};


const getByid = async (id)=>{
     return await findById(id);
};


const getByDes = async (des)=>{
     return await findByText(des);   
};


const createNewProduct = async (product)=>{
     return await saveProduct (product)

};

const updatePrd = async (id,updateData) =>{

     return await updateProduct(id,updateData);

};




const deletePrd = async (id)=>{
     return await deleteProduct(id);
}


export default {getAll,getByid,getByDes,createNewProduct,deletePrd,updatePrd};