const InitialState={}
const IsAdminReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case "IS_ADMIN":
            return{
                ...state,...payload
            }
         case "IS_ADMIN_UPDATE":
            return{
                ...state,...payload
            }
       

        default:
            return state
    }
}
 
export default IsAdminReducer;