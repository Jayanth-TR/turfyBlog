import React, { useState } from 'react';
import '../../Css/App.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const[error,setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleContactSubmit =async (e) => {
        e.preventDefault();
        const contactData = {name, email, message};
        try{
            const response = await fetch('http://localhost:5000/api/contacts',{
                method:'POST',
                headers:{
                    'Content-type':"application/json",
                },
                body:JSON.stringify(contactData),
            })  ;
            if(!response.ok){
                throw new Error("Network response was not ok");
            }

            setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
            setError('null');
                
            }catch(error){
                console.error(error);
                setError('There was an error submitting your message. Please try again.')
                setSuccess('false');
            }
        }

    
  return (
    <div style={{backgroundColor:" rgb(0, 30, 43)"}} className='container-flex'>
        <h1 style={{fontFamily:"'Halant', Arial, sans-serif", fontSize:"45px",color:"rgb(0, 237, 100"}} className='col-12   d-flex justify-content-center mb-5'>Contact Us</h1>
        <div className='container bg-light p-5 border rounded'>
        <form  onSubmit={handleContactSubmit}>
            <div className='form-group'>
                <label className='text-black mb-2'>Name</label>
                <input
                className='form-control text-black mb-2'
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
                />
            </div>
            <div className='form-group'>
                <label className='text-black mb-2'>Email</label>
                <input
                className='form-control text-black mb-2'
                type='email'
                value={email}
                placeholder='Enter your Email Id'
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
            </div>
            <div className='form-group'>
                <label className='text-black mb-2'>Message</label>
                <textarea
                className='form-control text-black mb-2'
                placeholder='Enter your message'
                type='text'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
                />
            </div>
            <button className=' btn btn-primary mt-2' type='submit'> Submit</button>
        </form>
        </div>
        
        
        {error && <p className='text-danger'>{error}</p>}
        {success && <p className='tetx-success'>Message submitted Successfully!</p> }
           
    </div>
  )
}

export default Contact