import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "inc":
            return { count: state.count + 1 };
        case "dec":
            return { count: state.count - 1 };
        case "reset":
            return initialState;
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>

            <button onClick={() => dispatch({ type: "inc" })}>+</button>
            <button onClick={() => dispatch({ type: "dec" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
export default Counter;