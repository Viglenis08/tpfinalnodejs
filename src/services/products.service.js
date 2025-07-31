import { getAllProducts,findById,findByText, saveProduct,deleteProduct,updateProduct } from "../models/products.models.js";

const getAll = async ()=>{
    return await getAllProducts();
};


const getByid = async (id) => {
  try {
    return await findById(id);
  } catch (error) {
    throw new Error(`No se pudo obtener el producto con ID ${id}: ${error.message}`);
  }
};

const getByDes = async (des)=>{
     return await findByText(des);   
};

const createNewProduct = async (product) => {
  if (!product || !product.descripcion) {
    throw new Error("Datos de producto incompletos.");
  }
  return await saveProduct(product);
};

const updatePrd = async (id,updateData) =>{

     return await updateProduct(id,updateData);

};

const deletePrd = async (id)=>{
     return await deleteProduct(id);
}

export default {getAll,getByid,getByDes,createNewProduct,deletePrd,updatePrd};