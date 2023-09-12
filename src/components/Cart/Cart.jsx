import './Cart.css'
const Cart = ({ bottle }) => {
    const { img } = bottle;
    return (
        <div className="cart">
            <img width={80} src={img} alt="" />
        </div>
    );
};

export default Cart;