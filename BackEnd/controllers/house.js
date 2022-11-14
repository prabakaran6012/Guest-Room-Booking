import House from "../models/House.js";

export const createHouse = async (req, res, next) => {
  const newHouse = new House(req.body.details); 
  // getting like { details:{
  // House details
  // },...}

  try {
    const savedHouse = await newHouse.save();
    res.status(200).json({savedHouse:savedHouse});
  } catch (err) {
    next(err);
  }
};
export const updateHouse = async (req, res, next) => {
  try {
    const updatedHouse = await House.findByIdAndUpdate(
      req.body.id,
      { $set: req.body.details},
      { new: true }
    );
    // {id:HouseId,details:{...},token:token}
    res.status(200).json({updatedHouse:updatedHouse});
  } catch (err) {
    next(err);
  }
};
export const deleteHouse = async (req, res, next) => {
  try {
    await House.findByIdAndDelete(req.body.id); // By House Id
    res.status(200).json("House has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getHouse = async (req, res, next) => {
  try {
    const house = await House.findById(req.body.id); // By House Id
    res.status(200).json({house});
  } catch (err) {
    next(err);
  }
};
export const getHouses = async (req, res, next) => {
  const id = req.body.id
  try {
    const houses = await House.find({
      adminId:id,
    }) // wich Houses contains the adminId like requested body admin id
    res.status(200).json({houses});
  } catch (err) {
    next(err);
  }
};
export const getAllHouses = async (req, res, next) => {
 
  try {
    const houses = await House.find() // getting all houses in the db
    res.status(200).json({houses});
  } catch (err) {
    next(err);
  }
};


