const InitialState={}
const AdminDetailReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case "AD_FETCH":
            return{
                ...state,...payload
            }
         case "AD_UPDATE":
            return{
                ...state,...payload
            }
       

        default:
            return state
    }
}
 
export default AdminDetailReducer;