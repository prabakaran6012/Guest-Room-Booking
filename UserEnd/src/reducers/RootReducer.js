import { combineReducers } from "redux";
import auth from "./AuthReducer"
import userdetails from "./UserDetailReducer"
import isAdmin from "./IsAdmin"
import houses from "./House"
import bookings from "./Booking"
import rooms from "./Room"
import HouseId from "./HouseId";
import allbookings from "./AllBookings"
export default combineReducers({
    auth,userdetails,isAdmin,houses,rooms,HouseId,bookings,allbookings
})