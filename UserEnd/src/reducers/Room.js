const InitialState={
    rooms:[]
}
const RoomsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_ROOM':
            return rooms
       
        case 'GET_ALL_ROOMS':
            const{Rooms}=payload
            const rooms=Rooms
            return {
                rooms
            }


        case 'ADD_ROOM':
            const { savedRoom } = payload
                return {
                    rooms: [...state.rooms,...savedRoom]
                }
       
        case 'ADD_ROOM_FAILED':
            return state
        default:
            return state
    }
}
 
export default RoomsReducer;









