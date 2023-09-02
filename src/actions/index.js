import axios from 'axios';

export function getPortfile(id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:8081/portfolio/${id}`);
        console.log(json);
        return dispatch({
            type:'GET_PORTFILE',
            payload: json.data.data,
        })
    }
}



export function getRepos(username){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:8081/github/repos/${username}`);
        console.log(json);
        return dispatch({
            type:"GET_REPOS",
            payload: json.data.data,
        })
    }
}