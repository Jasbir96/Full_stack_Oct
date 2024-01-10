import React, { useState, useEffect } from 'react'

function GetData() {
    const [data, setData] = useState(null);
    /**
     * user patience -> 
     *  1. something to happen on the UI-> 
     * Problem : usually these web Apps are very complex and 
     *  * can contain a lot of logic
     *  *  Assets that are large in size 
     * 
     * Solution : 
     *  1. start with skeleton UI, Simr UI, loader -> send it to browser
     *  2. render that skeleton UI
     *  3. Asap -> make the API request to get the data
     *  4. replace the skeleton UI with actual Data 
     * Requirement : there should a functionality that should -> tell you if the component is rendred or not -> useEffect
     * **/
    console.log("before render");

    async function fetchUser() {
        console.log("handler->after render");
        const resp = await
            fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await resp.json();
        console.log("data", data);
        setData(data);
    }

    useEffect(() => {
        fetchUser()
    }
        , []);

    return (<>
        {console.log("during render")}
        {!data ? <h2>...Loading</h2> : <div>
            <h2>Name :{data.name}</h2>
            <h3>Email: {data.email}</h3>
            <h3>Username: {data.email}</h3>
        </div>
        }
    </>

    )
}
export default GetData;