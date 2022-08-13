export default (auth = [], action) => {
    switch (action.type) {
        case 'SIGNUP':
            return action.payload
        case 'SIGNIN':
            return action.payload
        case 'GET':
            return action.payload
        default:
            return auth;
    }
}





// export default (auth = [], action) => {
//     switch (action.type) {
//         case 'SIGNUP':
//             return action.payload
//         case 'SIGNIN':
//             return action.payload
//         case 'GET':
//             return action.payload
//         default:
//             return auth;
//     }
// }