import { Router }  from "express";

import ProductModel from "../models/product.model.js"

const router = Router()

router.post("/", async (req, res)=>{
    try{
        const newProduct = await ProductModel.create(req.body)
        console.log("info del body", req.body)
        await newProduct.save();
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.get("/", async (req, res)=>{
    try{
        const elementsPerPage = req.query.limit ?? 5;
        const page = req.query.page ?? 1;

        let infoPaginate = await ProductModel.paginate(
            {},
            {
                limit: elementsPerPage,
                page: page
            }
        );
        console.log(infoPaginate)
        infoPaginate.docs = infoPaginate.docs.map((doc)=> doc.toObject())
        res.render("products", {info: infoPaginate})
        
    } catch (error) {
        res.status(500).json({message: "No existen productos"})
    }
})

export default router