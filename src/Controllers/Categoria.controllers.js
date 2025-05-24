import Categoria from "../models/Categorias.js";

const obtenCategory = async(req, res) =>{

    const categorias = await Categoria.find();

    res.json(categorias)
}

export {obtenCategory}