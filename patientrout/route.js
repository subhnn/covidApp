const express=require("express")
router=express.Router()

const patientModel=require("../model/model")



router.post("/add", async(req,res)=>{


    let data=req.body
    let covid=new patientModel(data)
    let result=await covid.save()

    res.json({status:"success......"})
})
router.get("/viewall",async(req,res)=>{


    let data= await patientModel.find()
    res.json(data)
})

module.exports=router