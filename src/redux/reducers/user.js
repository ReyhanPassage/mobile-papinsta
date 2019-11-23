const users = {
   email :'',
   username: ''
}

function UsersReducer(state = users, action){
    if(action.type === 'REGISTER_SUCCESS'){
        return action.payload
    }else {
        return state
    }
}

export default UsersReducer