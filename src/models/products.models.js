import { db } from "../config/db.js";
import {        
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "firebase/firestore";


const productCollection = collection(db, "products");

export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);
    const products = productList.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    throw new Error(`Error al obtener productos: ${error.message}`);
  }

};



export const findById = async (id) => {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    if (!productSnap.exists()) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
    return { id: productSnap.id, ...productSnap.data() };
  } catch (error) {
    throw new Error(`Error al buscar producto: ${error.message}`);
  }
};

export const findByText = async (des) => {
  try {
    const q = query(
      productCollection,
      where("descripcion", ">=", des),
      where("descripcion", "<=", des + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error(`Error al buscar productos: ${error.message}`);
  }
};

export const saveProduct = async (product) => {
  try {
    const newProductRef = await addDoc(productCollection, product);
    return { id: newProductRef.id, ...product };
  } catch (error) {
    throw new Error(`No se pudo guardar el producto: ${error.message}`);
  }
};

export const updateProduct = async (id, updatedData) => {
  try {
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, updatedData);
    return { message: `Producto con ID ${id} actualizado correctamente.` };
  } catch (error) {
    throw new Error(`No se pudo actualizar el producto: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(db, "products", id);
    const productSnap = await getDoc(productRef);
    if (!productSnap.exists()) {
      return `El producto con ID ${id} no existe.`;
    }
    await deleteDoc(productRef);
    return `Producto con ID ${id} eliminado correctamente.`;
  } catch (error) {
    throw new Error(`No se pudo eliminar el producto: ${error.message}`);
  }
};
