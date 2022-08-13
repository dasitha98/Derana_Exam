export default (technews = [], action) => {
    switch (action.type) {
        case 'GET_TECH_NEWS':
            return action.payload
        default:
            return technews;
    }
}

