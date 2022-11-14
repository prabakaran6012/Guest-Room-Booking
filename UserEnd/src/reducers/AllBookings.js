const InitialState={
    allbookings:[]
}
const AllBookingReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
      
       
        case 'GET_ALL_BOOKINGS':
            const{booking}=payload
            const allbookings=booking
            return {
                allbookings
            }


        default:
            return state
    }
}
 
export default AllBookingReducer;









