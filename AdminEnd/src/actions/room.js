import axios from "axios"
import toast from "react-hot-toast"
export const deleteRoom= (RoomId,tk)=>async(dispatch) => {
    console.log(RoomId,tk)
try {
    const res = await axios.put("http://localhost:8080/api/room/delete",{
        id:RoomId,
        token:tk
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

export const addRoom = (id,HouseId,RoomNumber,imageUrl,Description,SquareFeet,Floor,MinStay,MaxStay,contactNumber,NormalRent,NumberOfBeds,todos,tk) => async (dispatch) => {
    
    if(imageUrl==null){
        imageUrl="https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
    }
    
    try {
        const res = await axios.post('http://localhost:8080/api/room/create',{
            details:{
                AdminId:id,
                HouseId:HouseId,
                RoomNumber:RoomNumber,
                photos:imageUrl,
                Description:Description,
                SquareFeet:SquareFeet,
                Floor:Floor,
                MinStay:MinStay,
                MaxStay:MaxStay,
                ContactNumber:contactNumber,
                NormalRent:NormalRent,
                NumberOfBeds:NumberOfBeds,
                DateByPrice:todos
            },
            token:tk
         
         
        })
        const {savedRoom}=res.data
        console.log(savedRoom)
        if(savedRoom){
            toast.success('Room Added Successfully!')
            dispatch({
                type: "ADD_ROOM",
                payload:{savedRoom}
            })
           
        }else{
            toast.error("ACTION FAILED")
            dispatch({
                type: "ADD_ROOM_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
    }
}

export const UpdateRoom = (id,RoomNumber,imageUrl,Description,SquareFeet,Floor,MinStay,MaxStay,contactNumber,NormalRent,NumberOfBeds,todos,tk) => async (dispatch) => {
    if(imageUrl==null){
        imageUrl="https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
    }
    try {
        const res = await axios.put(`http://localhost:8080/api/room/update`, {
            id:id,
            details:{
                
                RoomNumber:RoomNumber,
                photos:imageUrl,
                Description:Description,
                SquareFeet:SquareFeet,
                Floor:Floor,
                MinStay:MinStay,
                MaxStay:MaxStay,
                ContactNumber:contactNumber,
                NormalRent:NormalRent,
                NumberOfBeds:NumberOfBeds,
                DateByPrice:todos
            },
            token:tk
        })
        const {updatedRoom}=res.data
        console.log(res.data)
        if(updatedRoom){
            toast.success('Room Updated Successfully!')
            dispatch({
                type: "UPDATE_ROOM",
                payload:{updatedRoom}
            })
           
        }else{
            toast.error("ROOM Updation Failed! Try Again..")
            dispatch({
                type: "UPDATE_ROOM_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
    }
}

export const getRooms = () => async (dispatch) => {
   
    const Aid=localStorage.getItem('AdminId')
    const tk=localStorage.getItem('token')
   console.log(Aid,tk)
    const res = await axios.post(`http://localhost:8080/api/house/all`,{
        id:Aid,
        token:tk
    })
    const { houses } = res.data
    console.log(houses)
    localStorage.setItem("House",houses)
    dispatch({
        type: "GET_ALL_HOUSES",
        payload: { houses }
    })
    return houses
}
export const getRoom = (houseId) => async (dispatch) => {
    const res = await axios.get(`http://localhost:8080/api/house/find/${houseId}`)
    const { houses } = res.data
    dispatch({
        type: "GET_HOUSES",
        payload: { houses }
    })
}
