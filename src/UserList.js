import axios from 'axios';
import react_axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
    const [listOfUSer , setlistOfUSer ]=useState([])
    useEffect(()=>{
        const getData=async()=>{ const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
        setlistOfUSer(data)
    }
    getData()}
    ,[])
  return (
    <div className='flex row justify-content-evenly'>
        <h1 className='text-center my-5 fw-bold font-monospace text-success '>Users cards</h1>
        {listOfUSer.map(elemnt=>
        <Card key={elemnt.id} style={{ width: '18rem',marginTop:'20px' }}>
      <Card.Body>
        <Card.Title className='text-center' ><b> {elemnt.name}</b></Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{elemnt.username}</Card.Subtitle>
        <Card.Text>
          <p><b>Email :</b> {elemnt.email}</p>
          <p> <b>Phone :</b> {elemnt.phone} </p>
          <p> <b>Adress :</b> {elemnt.address.street}, {elemnt.address.suite}- {elemnt.address.city} </p>
        </Card.Text>
      </Card.Body>
    </Card>)}
    </div>
  )
}

export default UserList