import React, { useEffect, useState } from 'react';
import Cat from '../Cat/Cat';




const Cats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        fetch('cats.json')
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])
    return (
        <div>
            {
                cats.map(cat => <Cat cat={cat}></Cat>)
            }
        </div>
    );
};

export default Cats;