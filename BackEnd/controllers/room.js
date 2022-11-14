import Room from "../models/Room.js";

//  Create Room
export const createRoom = async (req, res, next) => {
  const newRoom = new Room(req.body.details); // {details:{...}}

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json({savedRoom:savedRoom});
  } catch (err) {
    next(err);
  }
};
// Update Room
export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(  
      // {id:HouseId,details:{....}}
      req.body.id,
      { $set: req.body.details},
      { new: true }
    );
    res.status(200).json({updatedRoom:updatedRoom});
  } catch (err) {
    next(err);
  }
};
// Delete Room
export const deleteRoom = async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.body.id); // {id:HouseId}
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
// Get Rooms By House Id
export const getRooms = async (req, res, next) => {
  const id = req.body.id
  try {
    const rooms = await Room.find({   // {id:HouseId}
      HouseId:id,
    })
    res.status(200).json({rooms});
  } catch (err) {
    next(err);
  }
};
