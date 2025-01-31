import React from 'react';

export default function Counter(props) {
    const [count, setCount] = React.useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ border: '1px solid black' , padding: '10px', margin: '10px', position: 'fixed', top: '70%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1>Counter: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
