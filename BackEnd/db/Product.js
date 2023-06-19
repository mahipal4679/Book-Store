const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
    {
        name:String,
        price:String,
        author:String,
        user_Id:String,
        
    }
)
module.exports = mongoose.model("products",productSchema);