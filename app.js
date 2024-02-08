const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const covidRoute=require("./patientrout/route")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://subhan413:413627@cluster0.qb2tssv.mongodb.net/covidDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)


app.use("/api/patient",covidRoute)




app.listen(3001,()=>{
    console.log("server running")
}

)