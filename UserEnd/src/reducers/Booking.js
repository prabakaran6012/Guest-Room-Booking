const InitialState={
    bookings:[]
}
const BookingReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_BOOKING':
            return bookings
       
        case 'GET_ALL_BOOKINGS':
            const{Bookings}=payload
            const bookings=Bookings
            return {
                bookings
            }


        case 'ADD_BOOKING':
            const { savedBooking } = payload
                return {
                    bookings: [...state.bookings,...savedBooking]
                }
       
        case 'ADD_BOOKING_FAILED':
            return state
        default:
            return state
    }
}
 
export default BookingReducer;









