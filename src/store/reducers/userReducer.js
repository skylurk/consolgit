const initState = {
    users: [
        {id: '1', name: 'Full Name', department: 'Flight Crew', position: 'Captain'},
        {id: '2', name: 'First Last', department: 'Operations', position: 'Operations'},
        {id: '3', name: 'First Second', department: 'Maintenance', position: 'Engineer'},
        {id: '', name: 'First Second', department: 'Maintenance', position: 'Engineer'},
    ]
} 

const userReducer = (state = initState, action) => {
    return state
}

export default userReducer