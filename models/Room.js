import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    minStay:{
      type: Number,
      required: true
    },
    maxStay:{
      type: Number,
      required: true
    },
    pricelist:[{
     number:Number, day:[Number],price:[Number]
    }],
    pricelistByDate:[{
      number:Number, dates:{type: [Date]},price:[Number]
     }],
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
