let state;

// Take in state & action
// Return updated state obj based on action
function reducer(state = { count: 0 }, action) {
    switch(action.type) {
        case("INCREASE_COUNT"):
            return {count: state.count + 1}
        default:
            return state;
    }
}

// Assigns state based on reducer value
// Renders
function dispatch(action) {
    state = reducer(state, action);
    render();
}

function render() {
    const container = document.querySelector("#container");
    container.innerHTML = state.count;
}

const btnEl = document.querySelector("#button");
btnEl.addEventListener("click", () => {dispatch({type: "INCREASE_COUNT"})});

dispatch({type: "@@INIT"});