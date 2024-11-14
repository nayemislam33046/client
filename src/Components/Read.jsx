import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Read = () => {
    const [myData, setmyData] = useState([])
    useEffect(() => {
       axios.get("https://second-server.vercel.app")
       .then((res)=>{
        setmyData(res.data)
       }).catch((err)=>{
        console.log(err)
       })
    }, [])
    
  return (
    <div>
        {/* {myData?.map((data)=>{
          return <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.age}</p>
          </div>
        })} */}
        Hello
    </div>
  )
}

export default Read