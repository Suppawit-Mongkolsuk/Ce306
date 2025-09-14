import React,{useState,useEffect} from "react";

const NpDepdency: React.FC = () =>{

    const [count , setcount] = useState<number>(0);
    const [name , setname] = useState<string>('');

    useEffect(() => {
        console.log('No Dependency Effect: Component re-redered')
        console.log(`Current Count: ${count} , Name: ${name}`)
    })  
    return(
        <div>
            <h2>No Dependency</h2>
            <p>Count: {count}</p>
            <button onClick={() => setcount(count + 1)}>Interment Count</button><br/>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
        </div>
    )
}
export default NpDepdency