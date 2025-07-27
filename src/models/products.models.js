import {db} from"../config/db.js";
import{
   collection,
   doc,
   getDoc,
   getDocs,
   addDoc,
   updateDoc,
   deleteDoc, 

}from "firebase/firestore";

const productCollection = collection(db,"productos");

export const getAllProducts= async ()=>{
    try {
        const productList =  await getDocs(productCollection);
        const products = [];
        productList.forEach((doc)=>products.push({id: doc.id,...doc.data()}));

        return products;

        
    } catch (error) {
        throw new Error("Error",error.message);
        
    }
};



export const findById = async (id)=>{

        const productos = await getAllProducts();
        return productos.filter((pro)=> pro.id ===id);


};


export const findByText = async (des)=>{

        const productos = await getAllProducts();
        return productos.filter((pro)=> pro.descripcion && pro.descripcion.includes(des.toUpperCase()));        

};



export const saveProduct = async (product) =>{

        try {
         const newProduct = await addDoc(productCollection,product);
         return newProduct;    
            
        } catch (error) {
          throw new Error("Error", error.message);   
            
        }

};


export const updateProduct = async (id, updatedData) => {
    try {
        const productRef = doc(db, "productos", id);
        await updateDoc(productRef, updatedData);
        console.log(`Producto con ID ${id} actualizado correctamente.`);
    } catch (error) {
        console.error("Error al actualizar producto:", error.message);
        throw new Error(`No se pudo actualizar el producto: ${error.message}`);
    }
};



export const deleteProduct = async (id) => {
    try {
        const productRef = doc(db, "productos", id);
        const productSnap = await getDoc(productRef);
        let resul

        if (!productSnap.exists()){
            resul = `El producto con ID ${id} no existe.`;
            } else{
                await deleteDoc(productRef);
                resul = `Producto con ID ${id} eliminado correctamente.`;
                console.log(resul);
            }
    

        
        return resul;

    } catch (error) {
        console.error("Error al eliminar producto:", error.message);
        throw new Error(`No se pudo eliminar el producto: ${error.message}`);
    }
};