import React,{useState} from "react";

interface CounterProps{
    initialCount?:number;
}
const Counter: React.FC<CounterProps> = ({initialCount = 0}) =>{
    const [count , setcount] = useState<number>(initialCount);
    const [name , setName] = useState<string>('');
    
    
    const increment = () => {
        setcount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setcount(count - 1)
    }
    
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <h2>Your Name: {name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    )
     
}
 export default Counter