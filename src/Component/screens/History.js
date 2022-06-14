import React, { useEffect, useState } from 'react'
import { transact } from '../../sampleDB'

const History = () => {

    var count=0;
    const [newdata,setData]=useState([])
    const fetchUser=()=>{
        fetch('https://tsfbank.herokuapp.com/gettransaction',{
        method:"GET",
        headers:{
                 "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then((data)=>{
       
     
       setData(data.transac)
       
    })
    }
    useEffect(()=>{
      
      fetchUser()
     
     },[])

    

  return (
    <div>
            <div className="container">
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="table-danger1">
                        <th scope="col" className="color">S. No.</th>
                        <th scope="col" className="color">Sender Name</th>
                        <th scope="col" className="color">Reciver Name</th>
                        <th scope="col" className="color">Transfer Amount(in ₹)</th>
                      
                    </tr>
                </thead>
                <tbody>

                    {
                        newdata.map((item)=>{
                            count=count+1
                            
                            return(
                               
                                    <tr className="table-light1">
                                        <td scope="row">{count}</td>
                                <td scope="row">{item.senderemail}</td>
                                <td>{item.reciveremail}</td>
                               
                             
                                    <td>{ item.amount}</td>
            
                               
                               
                            </tr>
                              
                              
                            )
                            }
                           
                        )
                    
                    }

                    


                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default History