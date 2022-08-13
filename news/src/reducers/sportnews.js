export default (sportnews = [], action) => {
    switch (action.type) {
        case 'GET_SPORT_NEWS':
            return action.payload
        default:
            return sportnews;
    }
}

