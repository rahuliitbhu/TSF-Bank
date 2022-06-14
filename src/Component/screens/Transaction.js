import React, { useEffect, useState } from 'react'
import { users } from '../../sampleDB';


import History from './History'



const Transaction = () => {
    

var count=0;
var bal=0;
const [data,setData]=useState([])
 
useEffect(()=>{
    fetch('https://tsfbank.herokuapp.com/user',{
        method:"GET",
        headers:{
                 "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then((result)=>{
       
       setData(result.user)
      
       
    })
 
},[])
       
     
    const [senderemail,setSender]=useState("");
    const [reciveremail,setReciver]=useState("");
    const [amount,setAmount]=useState(0.0);



  const sendMoney=()=>{
 
        fetch('https://tsfbank.herokuapp.com/transaction',{
            method:"POST",
            headers:{
                     "Content-Type":"application/json"
            }, body:JSON.stringify({
              senderemail,
              reciveremail,
              amount
            })
        })
       
        .then(res=>res.json())
        .then((result)=>{
            console.log(result)
           
          
           
        })
     
    
              
    
  }
 



  return (
    <div>
        



    <div className="my-info text-center">
        

        <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#money"
        
      
        >Send Money</button>

        <a className="btn btn-info" href="/History" data-bs-toggle="modal" data-bs-target="#transactionHistory">See All Transactions</a>
    
        <div className="modal fade" id="transactionHistory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-scrollable modal-fullscreen">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Transaction History</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <History/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
    

    <div>
        
        <div className="modal fade " id="money" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog " role="document">
             <div className="modal-content">
                 <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">Send Money</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                     </button>
                 </div>
                 <div className="modal-body">
                 
                             <div className="input-group mb-3">
                                 <p style={{margin:"9px",color:"blue"}}>From</p>
                             <input type="text"  value={senderemail} id="enterSName"  placeholder="Sender's username"
                                 onChange={(e)=>{
                                    setSender(e.target.value)}}
                                 aria-label="Sender's username" />
                             <div className="input-group-append">
                                 <span className="input-group-text" >@gmail.com</span>
                             </div>
                         </div>
                         <div className="input-group mb-3">
                             <p style={{margin:"9px",color:"green"}}>To</p>
                             <input type="text" id="enterName" value={reciveremail}   placeholder="Recipient's username"
                                  onChange={(e)=>{setReciver(e.target.value)}}
                                 aria-label="Recipient's username" />
                             <div className="input-group-append">
                                 <span className="input-group-text" >@gmail.com</span>
                             </div>
                         </div>
                         <div className="input-group mb-3">
                             <div className="input-group-prepend">
                                 <span className="input-group-text">Rs</span>
                             </div>
                             <input type="text" id="enterAmount"  value={amount}  placeholder=" Enter Amount"
                                onChange={(e)=>{setAmount(e.target.value)}}
                                aria-label="Amount"/>
                             <div className="input-group-append">
                                 <span className="input-group-text">.00</span>
                             </div>
                           
                         </div>
 
                    
                 </div>
                 <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                     <button type="button" className="btn btn-success"  data-bs-dismiss="modal"
                     onClick={()=>{
                         sendMoney()
                     }}
                    
                     >Send
                         Money</button>
                 </div>
             </div>
         </div>
     </div>
 
 
     </div>









    











    <div className="container">
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="table-danger1">
                        <th scope="col" className="color">S. No.</th>
                        <th scope="col" className="color">Name</th>
                        <th scope="col" className="color">E-mail</th>
                        <th scope="col" className="color">Bank Balance(in ₹)</th>
                        <th scope="col" className="color">Payment(in ₹)</th>
                    </tr>
                </thead>
                <tbody>

                    {
                      
                        data.map((item)=>{

                            count=count+1
                            bal=item.balance
                          
                            
                            if(item.email==senderemail)
                            {
                                
                                bal=bal-amount
                                
                            }
                         

                            return(
                               
                                    <tr className="table-light1">
                                        <td>{count}</td>
                                <td scope="row">{item.name}</td>
                               
                              
                                <td>{item.email}</td>
                             
                                    <td>{ bal}</td>
            
                               
                                <td>
                                    
                                    <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#money"
        
        onClick={()=>{

            setSender(item.email)
        }}
      
        >Send Money</button>
        
                                    
                                </td>
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



  



export default Transaction