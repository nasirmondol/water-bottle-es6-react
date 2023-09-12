const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return [];
}

const saveToLs = cart => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addToLs = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveToLs(cart)
}
export { addToLs, getStoredCart }