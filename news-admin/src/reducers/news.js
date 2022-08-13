export default (news = [], action) => {
    switch (action.type) {
        case 'ADD':
            return action.payload
        case 'GET_ALL_NEWS':
            return action.payload
        case 'GET_SPORT_NEWS':
            return action.payload
        case 'GET_TECH_NEWS':
            return action.payload
        case 'GET_GALLERY_NEWS':
            return action.payload
        case 'UPDATE_NEWS':
            return [ ...news, action.payload]
        case 'GET_NEWS':
            return action.payload
        case 'DELETE_NEWS':
            return action.payload
        default:
            return news;
    }
}

