import { combineReducers } from "redux";
import auth from "./AuthReducer"
import admindetails from "./AdminDetailReducer"
import isAdmin from "./IsAdmin"
import houses from "./House"
import rooms from "./Room"
import HouseId from "./HouseId";
export default combineReducers({
    auth,admindetails,isAdmin,houses,rooms,HouseId
})