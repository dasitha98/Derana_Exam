export default (tok = [], action) => {
    switch (action.type) {
        case 'TOKEN':
            return action.payload
        default:
            return tok;
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