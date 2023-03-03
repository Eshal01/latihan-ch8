/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlayerList = () => {
const [players, setPlayer] = useState([]);

useEffect(() =>{
    getPlayers();
},[]);

const getPlayers = async () => {
    const response = await axios.get('http://localhost:4000/api/v1/players');
    setPlayer(response.data)
}

const deletePlayer = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/v1/players/${id}`);
            getPlayers();
        } catch (error) {
            console.log(error);
        }
}

  return (
    <div className='container-fluid'>
                <Link to={'add'} className='btn btn-success mt-5' >Add Player</Link>
        <div className="row mt-2 text-center">
            <div className="col-12">
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Experience</th>     
                            <th>Level</th>     
                            <th>Action</th>     
                        </tr>
                    </thead>
                    <tbody>
                        { players.map((player, index) => (
                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td>{player.username}</td>
                            <td>{player.email}</td>
                            <td>{player.password}</td>
                            <td>{player.experience}</td>
                            <td>{player.lvl}</td>
                            <Link to={`edit/${player.id}`} className='btn btn-primary'>Edit</Link>
                            <button onClick={() =>deletePlayer(player.id)} className='btn btn-danger'>Delete</button>
                        </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PlayerList
