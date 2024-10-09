import "./styles.css";

export default function Cube({images, pos, randomNum}) {
    let currVal = images[pos];
    return (
        <div className="divBlock">
            <img src={currVal} className="photoCube"></img>
            <button onClick={randomNum} className="btn">Бросить кубик</button>
        </div>
    );
}