import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Footer from "../components/admin/aditional/Footer";
import NavBar from "../components/admin/aditional/NavBar";

// only acces all routes in case of admin
const AdminRoute = ({child}) => { 
    const {isAdmin}=useSelector(state=>state.isAdmin)
   
    return isAdmin === true ?<><NavBar/>{child}<Footer/></>:<Navigate to="/SignUp"/>
}
 
export default AdminRoute;