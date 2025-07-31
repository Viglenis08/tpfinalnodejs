import productService from "../services/products.service.js";


const getProducts = async (req,res) =>{
    try {
     const products = await productService.getAll();
     res.status(200).json({message: 'Lista General de APP STORE',payload: products});
        
    } catch (error) {
      res  
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
        
    }
};

const getProductsById = async (req, res) => {
  try {
    const id = req.params.id;
    const producto = await productService.getByid(id);

    if (!producto || (Array.isArray(producto) && producto.length === 0)) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.status(200).json({
      mensaje: `Información del producto con id ${id}`,
      payload: producto
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del Servidor', error: error.message });
  }
};


const getProductsbyDesc = async (req, res) => {
  try {
    const des = req.params.des;
    const producto = await productService.getByDes(des);

    if (!producto || producto.length === 0) {
      return res.status(404).json({ mensaje: `No se encontraron productos que coincidan con "${des}"` });
    }

    res.status(200).json({
      mensaje: `Productos que coinciden con ${des}`,
      payload: producto
    });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del Servidor', error: error.message });
  }
};


const addProduct = async (req, res) => {
  try {
    const { SKU, descripcion, precio } = req.body;

    if (!descripcion || !SKU || isNaN(precio)) {
      return res.status(400).json({
        mensaje: "Datos de producto inválidos. Ingresar descripcion, SKU y precio"
      });
    }

    const newProduct = {
      descripcion,
      SKU,
      precio: +precio,
    };

    await productService.createNewProduct(newProduct);
    res.status(201).json({ mensaje: 'Se creo un nuevo articulo', payload: newProduct });

  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor", error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const rta = await productService.deletePrd(id);
    res.status(200).json({ mensaje: rta });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del Servidor', error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    await productService.updatePrd(id, updatedData);

    res.status(200).json({
      mensaje: `Producto con ID ${id} actualizado correctamente.`,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error interno del Servidor',
      error: error.message,
    });
  }
};

export default {
  getProducts,
  getProductsById,
  getProductsbyDesc,
  addProduct,
  deleteProduct,
  updateProduct
};
