export default function Cat(props) {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', display: "inline-block", width: "300px", height: "auto" }}>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name} width="200" height="200" />
            <p>Origen: {props.origin}</p>
            <p>Temperamento: {props.temperament}</p>
            <p>Descripción: {props.description}</p>
        </div>
    );
}