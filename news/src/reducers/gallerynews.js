export default (gallerynews = [], action) => {
    switch (action.type) {
        case 'GET_GALLERY_NEWS':
            return action.payload
        default:
            return gallerynews;
    }
}

