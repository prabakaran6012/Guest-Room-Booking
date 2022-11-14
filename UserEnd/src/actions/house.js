import axios from "axios"
import toast from "react-hot-toast"
import { useSelector } from "react-redux"
export const deleteHouse= (HouseId,tk)=>async(dispatch) => {
    console.log(HouseId,tk)
try {
    const res = await axios.put("http://localhost:8080/api/house/delete",{
        id:HouseId,
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

export const addHouse = (id,HouseName,HouseOwnerName,contactNumber,imageUrl,Description,City,Address,tk) => async (dispatch) => {
    
    if(imageUrl==null){
        imageUrl="https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
    }
    console.log({
        details:{
            adminId:id,
            name:HouseName,
            houseOwnerName:HouseOwnerName,
            contactNumber:contactNumber,
            city:City,
            address:Address,
            photos:imageUrl,
            desc:Description
        },
        token:tk
     
    })

   
    try {
        const res = await axios.post('http://localhost:8080/api/house/',{
            details:{
                adminId:id,
                name:HouseName,
                houseOwnerName:HouseOwnerName,
                contactNumber:contactNumber,
                city:City,
                address:Address,
                photos:imageUrl,
                desc:Description
            },
            token:tk
         
        })
        const {savedHouse}=res.data
        console.log(savedHouse)
        if(savedHouse){
            toast.success('House Added Successfully!')
            dispatch({
                type: "ADD_HOUSE",
                payload:{savedHouse}
            })
           
        }else{
            toast.error("ACTION FAILED")
            dispatch({
                type: "ADD_HOUSE_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
    }
}

export const UpdateHouse = (id,HouseName,imageUrl,HouseOwnerName,contactNumber,Description,City,Address,tk) => async (dispatch) => {
    // const {details}=useSelector(state=>state.admindetails)
    if(imageUrl==null){
        imageUrl="https://cartrabbit.io/wp-content/uploads/elementor/thumbs/cartrabbit_logo-pkzmj5imgyigk48dds0gvfykru9ke5f3ntqh4ssbjk.png"
    }
    try {
        const res = await axios.put(`http://localhost:8080/api/house/update`, {
            id:id,
            details:{
                        name:HouseName,
                        houseOwnerName:HouseOwnerName,
                        contactNumber:contactNumber,
                        city:City,
                        address:Address,
                        photos:imageUrl,
                        desc:Description
            },
            token:tk
        })
        const {updatedHouse}=res.data
        if(updatedHouse){
            toast.success('House Updated Successfully!')
            dispatch({
                type: "UPDATE_HOUSE",
                payload:{updatedHouse}
            })
           
        }else{
            toast.error("House Updation Failed! Try Again..")
            dispatch({
                type: "UPDATE_HOUSE_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
    }
}

export const getHouses = () => async (dispatch) => {
   
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
export const getHouse = (houseId) => async (dispatch) => {
    // const {details}=useSelector(state=>state.admindetails)
    const res = await axios.get(`http://localhost:8080/api/house/find/${houseId}`)
    const { houses } = res.data
    dispatch({
        type: "GET_HOUSES",
        payload: { houses }
    })
}
