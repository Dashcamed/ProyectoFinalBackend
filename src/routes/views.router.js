import { Router }  from "express";

const router = Router()

router.get("/", async (req, res)=>{
    res.render("index")
});

router.get("/newProduct", (req, res)=>{
    res.render("newProduct")
});

export default router