import axios from 'axios';

export let loginServiceObj = 
{
    getLogin
};

let url = "http://localhost:3001/users";

function getLogin()
{
    return axios.get(url);
}