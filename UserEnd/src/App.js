import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import {Routes,Route} from "react-router-dom"
import Bookings from "./components/user/Booking/Bookings"
import Home from "./components/user/Home"
import Login from "./components/auth/Login"
import SignUp from "./components/auth/SignUp"
import Rooms from "./components/user/Rooms/Rooms"
import RoomsDetails from "./components/user/Rooms/RoomDetails"
import Footer from "./components/user/aditional/Footer";
import NavBar from "./components/user/aditional/NavBar";
import jwt_decode from "jwt-decode"
import { getAllBookings } from "./actions/booking"
import BookingDetails from "./components/user/Booking/BookingDetails"
const App=()=>{
  const dispatch=useDispatch()

  useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token){
          const decoded=jwt_decode(token)
          const {isAdmin}=decoded
          if(!isAdmin){
            dispatch({
              type: "SET_AUTH_TOKEN",
              payload: {token}
            })
          }
        }else{
          localStorage.removeItem('username')
        }
  },[])
  return(
    <>
    <div>{<Toaster/>}</div>
    <NavBar/>
    <Routes>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/rooms/:HouseId" element={<Rooms/>}/>
    <Route path="/rooms/details/:RoomId" element={<RoomsDetails/>}/>
    <Route path="/booking/details/:BookingId" element={<BookingDetails/>}/>
    <Route path="/Bookings" element={<Bookings/>}/>
    </Routes>
    <Footer/>
    </>

  )
}
export default App