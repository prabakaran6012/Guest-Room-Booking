import Booking from "../models/Booking.js";
// Making Booking 
export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body.details); // {details:{..}}
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({savedBooking:savedBooking});
  } catch (err) {
    next(err);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    await Booking.findByIdAndDelete(req.body.id);   // {id:BookingId}
    res.status(200).json("Booking has been deleted.");
  } catch (err) {
    next(err);
  }
};
// Bookings Belong to the wich Admin By the AdminId
export const getAdminBookings = async (req, res, next) => {
  const id = req.body.id 
  try {
    const booking = await Booking.find({   // {id:AdminId}
      AdminId:id,
    })
    res.status(200).json({booking});
  } catch (err) {
    next(err);
  }
};
// Bookings By the individual User By the UserId
export const getUserBookings = async (req, res, next) => {
  const id = req.body.id
  try {
    const booking = await Booking.find({
      UserId:id,
    })
    res.status(200).json({booking});
  } catch (err) {
    next(err);
  }
};
// getting Specific Booking By Booking DocumentId
export const getUserBookingsById = async (req, res, next) => {
  const id = req.body.id
  try {
    const booking = await Booking.findById(id)
    res.status(200).json({booking});
  } catch (err) {
    next(err);
  }
};
// check the date avilabilty associate with the Specific Room Bookings
export const getBookingsByRoomId = async (req, res, next) => {
  const id = req.body.id
  try {
    const booking = await Booking.find({
      RoomId:id,
    })
    res.status(200).json({booking});
  } catch (err) {
    next(err);
  }
};
// get All Bookings for filter
export const getBookings = async (req, res, next) => {
  
  try {
    const booking = await Booking.find()
    res.status(200).json({booking});
  } catch (err) {
    next(err);
  }
};

