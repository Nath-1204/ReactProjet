
const Component = ({count, handleIncrementClick, handleDecrementClick}) => (
    <div>
        <h1>Coucou React Redux {count}</h1>
        <button onClick={handleDecrementClick}>décrementer</button>
        <button onClick={handleIncrementClick}>incrémenter</button>
    </div>
);

export default Component;
