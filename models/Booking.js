import mongoose from "mongoose";
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  userId:{
    type: String,
    required: true
  },
  adminId:{
    type:String,
    required: true
  },
  houseId:{
    type:String,
    required: true
  },
  roomId:{
    type: String,
    required: true
  },
  dates:{
     type:[Date],
     required:true
  },
  people:{
    type: Number,
    required:true
  }

});

export default mongoose.model("Booking", BookingSchema)