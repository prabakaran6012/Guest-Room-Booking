const InitialState={
    HouseId:''
}
const HouseIdReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'ADD_HOUSEID':
            const{HouseId}=payload
            return HouseId
     
        default:
            return state
    }
}
 
export default HouseIdReducer;









