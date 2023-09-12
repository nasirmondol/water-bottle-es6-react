
const Cat = ({cat}) => {
    console.log(cat);
    const {url, width} = cat;
    return (
        <div>
            <img width={200} height={200} src={url} alt="" />
            <p>{width}</p>
        </div>
    );
};

export default Cat;