import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    AdminId:{
      type:String,
      required:true,
    },
    HouseId:{
      type:String,
      required:true,
    },
    RoomNumber:{
      type:String,
    },
    photos: {
      type: String,
      default:"https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
    },
    Description:{
      type:String,
    },
    SquareFeet:{
      type:String,
      required:true,
    },
    Floor:{
      type:String,
    },
    MinStay:{
      type: String,
    },
    MaxStay:{
      type: String,
    },
    ContactNumber:{
      type:String,
    },
    NormalRent:{
      type:String,
      required:true
    },
    NumberOfBeds:{
      type:String,
      required:true,
    },
    DateByPrice:[{
     id:String, Date:String,DateByPrice:String
    }]
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
