import axios from 'axios'
import { toast } from 'react-hot-toast'

export const loginUser = (email, password) => async (dispatch) => {

    try {
        const base_Url = 'http://localhost:8080'
        const res = await axios.post(`${base_Url}/api/auth/login`, {
            email:email,
            password:password
        })
        // { details: { ...otherDetails }, isAdmin ,token}
        const { details,isAdmin,token} = res.data
        console.log(res.data)
        // console.log(houses)
        


        if (token) {
            if(isAdmin){
                console.log(token)
                toast.success('Login Success')
                localStorage.setItem('username',details.username)
                localStorage.setItem('AdminId',details._id)
                localStorage.setItem('token',token)
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { token }
                }) 
                dispatch({
                    type: "AD_FETCH",
                    payload: {details}
                })
                dispatch({
                    type: "IS_ADMIN",
                    payload:{isAdmin}
                })
                // dispatch(getHouses())
            }
           
        } else {
            toast.error("login route problem")
            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};


export const signupUser = (username,email,phone,password) => async (dispatch) => {
      console.log(username,email,phone,password)
    try {
        const base_Url = 'http://localhost:8080'

        const res = await axios.post(`${base_Url}/api/auth/register`, {
            username:username,
            email:email,
            phone:phone,
            password:password,
            isAdmin:true
        })
        
        const st = res.data
        if (st=="Success") {
            toast.success('Signup Success')
            dispatch({
                type: "SIGNUP_SUCCESS",
                payload: {
                    signup: true
                }
            })
        } else {
            toast.error('Signup Failed')
            dispatch({
                type: "SIGNUP_FAILED",
                payload: { signup: false }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
}; 