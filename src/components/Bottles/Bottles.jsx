import { useEffect } from 'react';
import { useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import Cart from '../Cart/Cart';
import { addToLs, getStoredCart } from '../../utilites/LocalStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [bottleCart, setBottlesCart] = useState([]);

    // console.log(bottles);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log(bottles.length);
        if (bottles.length > 0) {
            const storedCartId = getStoredCart();
            console.log(storedCartId);
        }
    }, [bottles])

    
    const handleBottlePurchase = bottle => {
        const newArray = [...bottleCart, bottle];
        setBottlesCart(newArray)
        addToLs(bottle.id);
    }

    return (
        <div>
            <div>
                <h2>Bottles: {bottleCart.length}</h2>
                <div className='bottle-cart'>
                    {
                        bottleCart.map(bottle => <Cart key={bottle.id} bottle={bottle}></Cart>)
                    }
                </div>
            </div>
            <h2>Bottles: {bottles.length}</h2>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleBottlePurchase={handleBottlePurchase}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;