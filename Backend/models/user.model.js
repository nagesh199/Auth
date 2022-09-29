
const {Schema,model} = require("mongoose")

const Useresshema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    profile:{type:String,required:true},
    hash:String
},
{
    timestamps:true
}
);

const Users = model("Auth",Useresshema);

module.exports = Users