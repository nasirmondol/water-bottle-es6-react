import Watch from "../Watch/Watch";
import  { add, amarGunfolbetweenTwoNumber as multi } from "../utility";

const Sunglass = () => {
    let first = 100;
    let second = 200;
    const result = add(first, second);
    const mult = multi(first, second);

    return (
        <div>
            <h2>Result: {result}</h2>
            <h2>Multip result: {mult}</h2>
            <Watch />
        </div>
    );
};

export default Sunglass;