export default (category = [], action) => {
    switch (action.type) {
        case 'ADD':
            return action.payload
        case 'GET':
            return action.payload
        default:
            return category;
    }
}

