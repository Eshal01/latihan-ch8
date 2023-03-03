/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('');
    const navigate = useNavigate();

    const savePlayer = async (e) =>{
    e.preventDefault();
    try {
        await axios.post(`http://localhost:4000/api/v1/players`,
        {
            username,
            email,
            password,
            experience
        });
        navigate('/');
    } catch (error) {
        console.log(error);
    }
    }

  return (
    <div className="container-fluid">
    <div className="row m-5">
        <div className="col-md-12">
            <form onSubmit={savePlayer}>
                <div className="field">
                    <label className='label'>Username</label>
                        <div className="control">
                            <input type="text" className='input' 
                            value={username}
                            onChange= { (e) => setUsername (e.target.value)}
                             placeholder='Username' />            
                        </div>
                </div>
                <div className="field">
                    <label className='label'>Email</label>
                        <div className="control">
                            <input type="text" className='input' 
                            value={email}
                            onChange= { (e) => setEmail (e.target.value)}
                            placeholder='Email' />            
                        </div>
                </div>
                <div className="field">
                    <label className='label'>Password</label>
                        <div className="control">
                            <input type="text" className='input' 
                            value={password}
                            onChange= { (e) => setPassword (e.target.value)}
                            placeholder='Password' />            
                        </div>
                </div>
                <div className="field">
                    <label className='label'>Experience</label>
                        <div className="control">
                            <input type="text" className='input' 
                            value={experience}
                            onChange= { (e) => setExperience (e.target.value)}
                            placeholder='Experience' />            
                        </div>
                </div>
                <div className="field">
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddPlayer