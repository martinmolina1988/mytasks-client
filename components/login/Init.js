import React, { useState } from 'react'
import Register from './Register';
import Login from './Login';

export default function Init() {
    const [changeLogin, setChangeLogin] = useState(true);
    return (
        <div>{
             changeLogin ? (
         <Register setChangeLogin={setChangeLogin} changeLogin={changeLogin} />
       ) : (
         <Login setChangeLogin={setChangeLogin} changeLogin={changeLogin} />
       ) }
        </div>
    )
}
