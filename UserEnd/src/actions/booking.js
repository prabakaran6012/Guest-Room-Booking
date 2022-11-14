import axios from "axios"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
export const DeleteBooking= (BookingId,token)=>async(dispatch) => {
    console.log(BookingId,token)
try {
    const res = await axios.put("http://localhost:8080/api/booking/delete",{
        id:BookingId,
        token:token
    })
    const message=res.data
    if(message){
        toast.success(message)
       
    }else{
        toast.error(message)
        
    }
  

} catch (error) {
    console.log(error)

}
}

export const addBooking = (details,selectedHouse,selectedRoom,FromDate,TillDate,NumberOfPeoples,token) => async (dispatch) => {
 console.log(details,selectedHouse,selectedRoom,FromDate,TillDate,NumberOfPeoples,token)
    try {
        const res = await axios.post('http://localhost:8080/api/booking/',{
            details:{
                UserId:details._id,
                AdminId:selectedRoom.AdminId,
                RoomId:selectedRoom._id,
                ImageUrl:selectedRoom.photos,
                Floor:selectedRoom.Floor,
                HouseName:selectedHouse.name,
                Address:selectedHouse.address,
                UserName:details.username,
                phone:details.phone,
                FromDate:FromDate,
                TillDate:TillDate,
                NumberOfPeoples:NumberOfPeoples
            },
            token:token
         
        })
        const {savedBooking}=res.data
        console.log(savedBooking)
        if(savedBooking){
            toast.success('Booking Added Successfully!')
            dispatch({
                type: "ADD_BOOKING",
                payload:{savedBooking}
            })
           
        }else{
            toast.error("ACTION FAILED")
            dispatch({
                type: "ADD_BOOKING_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
    }
}

export const getBookings = () => async (dispatch) => {
   
    const Uid=localStorage.getItem('UserId')
    const tk=localStorage.getItem('token')
   console.log(Uid,tk)
    const res = await axios.post(`http://localhost:8080/api/booking/user/bookings`,{
        id:Uid,
        token:tk
    })
    const { booking } = res.data
    console.log(booking)
    dispatch({
        type: "GET_ALL_BOOKINGS",
        payload: { booking }
    })
    return booking
}

export const getBookingsByRoomId = (RoomId) => async (dispatch) => {
    
    const tk=localStorage.getItem('token')

    const res = await axios.post(`http://localhost:8080/api/booking/find`,{
        id:RoomId,
        token:tk
    })
    const { booking } = res.data
    dispatch({
        type: "GET_BOOKINGS",
        payload: { booking }
    })
}

export const getAllBookings = () => async (dispatch) => {
    
    
    const res = await axios.get(`http://localhost:8080/api/booking/all`)
    const { booking } = res.data
    dispatch({
        type: "GET_ALL_BOOKINGS",
        payload: { booking }
    })
}