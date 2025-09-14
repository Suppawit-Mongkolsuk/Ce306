import React,{useState} from "react";

interface CounterProps{
    initialCount?:number;
}

const Counter: React.FC<CounterProps> = ({initialCount = 0}) => {
    const [count , setcount] = useState<number>(initialCount);

    const increment = () => {
        setcount(prevCount => prevCount + 1)
    }

    const decrement = () => {
          if (count > 0) {
            setcount(count - 1);
        }
    };

    const reset = () => {
        setcount(count * 0)
    }

    return(
        <div style={{ padding: '20px' , textAlign: 'center'}}>
            <h1>Counter Exercise</h1>
            <h2>{count}</h2>
            <div>  
                <button onClick={increment}style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px 20px',
                    marginRight: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>+เพิ่ม</button>
                <button onClick={decrement}style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px 20px',
                    marginRight: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>-ลบ</button>
                <button onClick={reset}style={{
                    backgroundColor: 'orange',
                    color: 'white',
                    padding: '10px 20px',
                    marginRight: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>Reset</button>
            </div>
        </div>

        
    )
};

export default Counter