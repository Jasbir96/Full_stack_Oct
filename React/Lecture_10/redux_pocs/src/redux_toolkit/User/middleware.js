
import userslice from "./UserSlice";
const actions = userslice.actions;
// 1 to send data to middleWare
const fetchMiddleWare = (params) => {
    // 2. you automatically get the dispatch
    return async function (dispatch) {
        try {
            dispatch(actions.userLoading(true));
            const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const user = await resp.json();
            console.log("user", user);
            dispatch(actions.userData(user));
        } catch (err) {
            dispatch(actions.userError());
        } finally {
            dispatch(actions.userLoading(false));
        }
    }
}
export default  fetchMiddleWare;
