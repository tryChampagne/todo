const mongoose =require('mongoose');
const express =require('express');
const dotenv =require('dotenv');
const cors =require('cors');

dotenv.config();
const PORT =process.env.PORT || 5000;
const MONGODB_URI =process.env.MONGODB_URI;

const app =express();

app.use(cors());
app.use(express.json());

//MONGODB CONNECTION
const connectDB =async() =>{
    try{
        await mongoose.connect(MONGODB_URI);
          console.log('MongoDB connected successfully');
    }catch(error){
        console.error('failed to connect to database\n',error);
        process.exit(1);
    }
}

connectDB();

app.get('/',(req,res)=>{
    res.json({message: "server root directory\n"});
})

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
});