const mongoose=require("mongoose")

const covidSchema=mongoose.Schema

(
{
    patientName:String,
    mobileNo:String,
    adress:String,
    symptoms:String,
    status:String
}
)

module.exports=mongoose.model("covidData",covidSchema)