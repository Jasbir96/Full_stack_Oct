let initialState =
{
    count: 0
};
function CounterReducer(state = initialState, action) {
    // actions should been written
    console.log("reducer" ,state)
    switch (action.type) {
        case "dec_count":
            return {
                count: state.count - 1,
            };
        case "inc_count":
            return {
                count: state.count + 1,
            };

        case "inc_by_n":
            return {
                count: state.count + Number(action.payload)
            }
        default:
            return state;
    }
}
export default CounterReducer;
/***
 * Redux -> 
 * 1. you cannot update the original state variable 
 * 2. for updates -> compares using reference-> unless outer object address is not changed till 
 * then redux will not update the state 
 * **/ 