const InitialState={
    houses:[]
}
const HousesReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_HOUSE':
            return houses
       
        case 'GET_ALL_HOUSES':
            const{Houses}=payload
            const houses=Houses
            return {
                houses
            }


        case 'ADD_HOUSE':
            const { savedHouse } = payload
                return {
                    houses: [...state.houses,...savedHouse]
                }
       
        case 'ADD_HOUSE_FAILED':
            return state
        default:
            return state
    }
}
 
export default HousesReducer;









