import React,{useState,useEffect} from 'react'
import{Table} from 'react-bootstrap'
function Users(){
  const [data,setData] = useState([])
  const [onlineMode,setOnlineMode] = useState(true)

  useEffect(()=>{
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url).then((response)=>{
      response.json().then((result)=>{
        console.log(result);
        setData(result)
        localStorage.setItem("users",JSON.stringify(result))
      })
    }).catch(err => {
      setOnlineMode(false)
      setData(JSON.parse(localStorage.getItem("users")))
    })
  },[])
  return (
    <>
    {!onlineMode && <div class="alert alert-danger" role="alert">
  You are in OFFLINE MODE....
</div>}
<div className='container py-4'> 
    <Table striped bordered hover responsive >
    <thead> 
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
    {
      data.map((item)=>(
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address.city}</td>
      </tr>
      ))
    }
    </tbody>
  </Table>
  </div>
  </>
  )
}

export default Users
