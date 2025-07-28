import productService from "../services/products.service.js";


const getProducts = async (req,res) =>{
    try {
     const products = await productService.getAll();
     res.status(200).json({message: 'Lista de productos',payload: products});
        
    } catch (error) {
      res  
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
        
    }
};


const getProductsById = async (req,res) =>{

    try {
    const id = req.params.id;
    const producto = await productService.getByid(id);

    if (producto.length ===0)
      return res.status(200).json({mensaje: "Producto no encontrado"})


    res.status(200).json({mensaje: `Este es la información del producto con id ${id}`,
                          payload: producto});
        
    } catch (error) {
        res
        .status(500)
        .json({mensaje :'Error interno del Servidor',error : error.message})
        
    }


   
};

const getProductsbyDesc = async(req,res) =>{
      try {
    const des = req.params.des;
    const producto = await productService.getByDes(des);

    if (producto.length ===0)
      return res.status(200).json({mensaje:`No se ha encontrado coincidencia con la descripción ${des} `})    


    res.status(200).json({mensaje: `Productos que coinciden con ${des}`,
                          payload: producto});
        
    } catch (error) {
        res
        .status(500)
        .json({mensaje :'Error interno del Servidor',error : error.message})
        
    }



};






const addProduct = async (req,res) =>{
    
    try {
      const {EAN,descripcion,precio} = req.body;
      
      const newProduct={
        descripcion: descripcion,
        EAN : EAN,
        precio : +precio,
      };

      await productService.createNewProduct(newProduct);
      res.status(200).json({mensaje: 'Nuevo producto creado', payload: newProduct});

    } catch (error) {
       res
      .status(500)
      .json({ message: "error interno del servidor", error: error.message });
        
    }
    
    
    //res.status(200).json({mensaje: "Este es el Create"})
};




const deleteProduct = async (req,res) =>{

   try {
    const id = req.params.id;
    const rta = await productService.deletePrd(id);
    res.status(200).json({mensaje: rta});
        
    } catch (error) {
        res
        .status(500)
        .json({mensaje :'Error interno del Servidor',error : error.message})
        
    }

};







export default{getProducts,getProductsById,getProductsbyDesc,addProduct,deleteProduct}