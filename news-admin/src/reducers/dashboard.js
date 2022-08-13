export default (dashboard = [], action) => {
    switch (action.type) {
        case 'ORDERS':
            return [ ...dashboard, action.payload]
        default:
            return dashboard;
    }
}