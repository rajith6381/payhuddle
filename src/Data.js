import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Data = () => {

    const [data,setdata]=useState(null)

    useEffect(()=>{
        fetch("http://localhost:3002/datas")
        .then((res)=>{
         return res.json()
        }).then((data)=>{
          setdata(data)
        })
    },[])
    console.log(data);
  return (
    <div className='container2'>
       { 
        data?.map((Item,index) => (

            <Card className="cord">
            <Card.Img variant="top" src={Item.image}  className="cord-img"/>
            <Card.Body>
              <Card.Title>{Item.name}</Card.Title>
              <Card.Text>
              {Item.prize}
              </Card.Text>
              <Button variant="primary">Add TO Cart</Button>
            </Card.Body>
          </Card>
        
        //  <img src={Item.image} key={index} alt="error"></img>
        ))
      }
    </div>
  )
}

export default Data
