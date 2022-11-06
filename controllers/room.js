import Room from "../models/Room.js";
import House from "../models/House.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const houseId = req.params.houseid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await House.findByIdAndUpdate(houseId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
export const updateRoomPriceList = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "pricelist._id": req.params.id },
      {
        $push: {
          "pricelist.$.day": req.body.days,
          "pricelist.$.price":req.body.prices
        },
      }
    );
    res.status(200).json("Room pricelist status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const updateRoomPriceListByDate = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "pricelistByDate._id": req.params.id },
      {
        $push: {
          "pricelistByDate.$.dates": req.body.dates,
          "pricelistByDate.$.price":req.body.prices
        },
      }
    );
    res.status(200).json("Room pricelistByDate status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const updateRoomAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  const houseId = req.params.houseid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await House.findByIdAndUpdate(houseId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};
