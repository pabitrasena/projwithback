// const mongoose=require("mongoose")
// mongoose.connect("mongodb://localhost:27017/LoginSignup")
// .then(()=>{
//     console.log("mongo connected");
// })
// .catch(()=>{
//     console.log("failed to connect");
// })

// const LogInSchema=new mongoose.Schema({
//     name: {
//         type:String,
//         required:true
//     },
//     password:{
//         type: String,
//         required: true
//     }
// })

// const collection=new mongoose.model("LogInCollection",LogInSchema)

// module.exports=collection


const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection