export const initialData = {
    cartList: [],
    productList: [
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 3,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 2,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
    ]
}

export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: state.cartList.filter(item=>item.id!==action.payload)
            }
        default: return state;
    }
}