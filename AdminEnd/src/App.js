import { Toaster } from "react-hot-toast"
import {Routes,Route} from "react-router-dom"
import AddHouse from "./components/admin/House/AddHouse"
import AddRooms from "./components/admin/Rooms/AddRooms"
import Bookings from "./components/admin/Booking/Bookings"
import Home from "./components/admin/Home"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import AdminRoute from "./routes/AdminRoute"
import Rooms from "./components/admin/Rooms/Rooms"
import EditHouse from "./components/admin/House/EditHouse"
import AddRoomsForm from "./components/admin/Rooms/AddRoomForm"
import EditRoom from "./components/admin/Rooms/EditRoom"
import BookingDetails from "./components/admin/Booking/BookingDetails"
const App=()=>{
  
  return(
    <>
    <div>{<Toaster/>}</div>
    <Routes>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/> 
{/* House CRUD ROUTES */}
    <Route path="/" element={<AdminRoute child={<Home/>}/>}/>
    <Route path="/AddHouse" element={<AdminRoute child={<AddHouse/>}/>}/>
    <Route path="/editHouse/:HouseId" element={<AdminRoute child={<EditHouse/>}/>}/>

    {/* Room CRUD ROUTES */}
    <Route path="/rooms/:HouseId" element={<AdminRoute child={<Rooms/>}/>}/>
    <Route path="/AddRooms" element={<AdminRoute child={<AddRooms/>}/>}/>
    <Route path="/addroom/:_id" element={<AdminRoute child={<AddRoomsForm/>}/>}/>
    <Route path="/editRoom/:RoomId" element={<AdminRoute child={<EditRoom/>}/>}/>

  {/* Booking Route */}
    <Route path="/Bookings" element={<AdminRoute child={<Bookings/>}/>}/>
    <Route path="/booking/details/:BookingId" element={<AdminRoute child={<BookingDetails/>}/>}/>
 
    </Routes>
    </>

  )
}
export default App