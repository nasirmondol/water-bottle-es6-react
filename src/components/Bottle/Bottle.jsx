import PropTypes, { func } from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleBottlePurchase }) => {
    const { name, img, price } = bottle;
    return (
        <div className='bottle-container'>
            <h2>{name}</h2>
            <img src={img} alt="" />
            <p>Price: {price}</p>
            <button onClick={() =>handleBottlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleBottlePurchase: func.isRequired
}

export default Bottle;