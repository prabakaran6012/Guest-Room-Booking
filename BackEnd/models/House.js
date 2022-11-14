import mongoose from "mongoose";
const HouseSchema = new mongoose.Schema({
  adminId:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  houseOwnerName:{
    type: String,
    required: true,
  },
  contactNumber:{
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photos: {
    type: String,
    default:"https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
  },
  desc: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("House", HouseSchema)