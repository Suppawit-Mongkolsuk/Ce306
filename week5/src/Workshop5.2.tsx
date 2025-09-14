import React,{useState} from "react";

interface FormData {
    name?: string;
    email?: string;
};

const UserForm: React.FC<FormData> = () => {
    const [name , setname] = useState<string>('');
    const [email , setemail] = useState<string>('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // กัน reload หน้า
        alert(`ข้อมูลที่กรอก:\nชื่อ: ${name}\nอีเมล: ${email}`);
    };
    const handleClear = () => {
        setname('');
        setemail('');
    }

    return(
        
        <div>
            <h2>User Form Exercise-Solution</h2>
            
            <div style={{}}>
            <p>Name:</p>
            <input type="text" value={name} placeholder="กรุณากรอกชื่อ" onChange={(e) => setname(e.target.value)}/>
            <p>Email:</p>
            <input type="text" value={email} placeholder="กรุณากรอกอีเมล" onChange={(e) => setemail(e.target.value)}/>
            </div>
            <div style={{ marginTop: '50px' }}>
                <button type="submit" onClick={handleSubmit}
                    style={{
                    backgroundColor: 'green',
                    color: 'white',
                    padding: '10px 20px',
                    marginRight: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',     
                    }}
                    >Submit</button>
                    
                <button onClick={handleClear} style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px 20px',
                    marginRight: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>Clear</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <div style={{
                    backgroundColor: '#414141ff',
                    color: "balck",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "300px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                    
                }}>
                    <h3>ข้อมูลที่กรอก</h3>
                    <p>ชื่อ: {name}</p>
                    <p>อีเมล: {email}</p>
                </div>
                
            </div>
                
        </div>
   
    )
}

export default UserForm