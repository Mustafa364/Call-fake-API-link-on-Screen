
import axios from 'axios'; 
import { useState } from 'react';
import { Button } from '@mui/material';

function Comments() {
  const [data, setdata] = useState([])
  let api = "https://jsonplaceholder.typicode.com/comments"
  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {
        setdata([...res.data])
      })
      .catch((err) => {
        console.log(err)
      })
      axios.post(api,{
        body:'Custom Body',
        title:'ABH',
        userid:1
  })
  .then((res)=>{console.log("Data Sent")})
  .Catch((err)=>{console.log("Data Not Sent")})
axios.put(api+'/1',{ body:'Custom Body'})
.then((res)=>{
  console.log("Data SUcessfully Sent",res)
})
.catch((err)=>{
  console.log(err)
})
axios.delete(api+'/2')
.then((res)=>{
  console.log("Data SUcessfully Sent",res)
})
.catch((err)=>{
  console.log(err)
})
  }

  return (
    <>
      <div className="App">
        {data.map((x, i) => {
          return (
            <div key={i}>
              <h3>{x.id}</h3>
              <h3>{x.title}</h3>
              <p>{x.body}</p>
            </div>
          )
        })}
        <br />
        <Button onClick={getAPIData} variant="contained" > Click here to show the Comments</Button>
      
      </div>
    </>
  );
}

export default Comments;