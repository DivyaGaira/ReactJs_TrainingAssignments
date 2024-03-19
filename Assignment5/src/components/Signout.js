import React from 'react';
import { useNavigate } from 'react-router-dom';


function Signout() {
  let navigate = useNavigate();

  function handleSignout() {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      localStorage.removeItem('user-token');
      sessionStorage.removeItem('user-token');
      navigate('/');
    }
  }

  return (
    <fieldset>
        <legend>Signout</legend>
        <label>Signout: </label><br/><br />
        <input type="button"  onClick={handleSignout}  value="Signout"  />
    </fieldset>
    
  );
}

export default Signout;
