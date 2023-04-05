import React,{useState} from 'react'
import Elements from "./Elements";
function Signature() {
    // useStat for Name
    const [name,setName]=useState();

    const handleName=(e)=>{
        setName(e.target.value);
    }

    // UseState For Email
    const [email,setEmail]=useState()

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    
    // UseState For Date

    const [date,setDate]=useState();
    const handleDate=(e)=>{
        setDate(e.target.value);
    }

  return (
    <div>
        <div className='title text-center'>
            <Elements className={"title"} text={name}/>
            <Elements className={"title"} text={email}/>
            <Elements className={"subtitle"} text={date}/>
        </div>
        <footer>
        <input type="text" value={name} placeholder='Your_name' onChange={handleName}/>
        <span>  </span>
        <input type="email" value={email} placeholder='Your Email' onChange={handleEmail}/>
        <span>  </span>
        <input type="date" value={date} onChange={handleDate}/>
        </footer>
        

    </div>
  )
}

export default Signature