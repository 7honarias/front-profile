import axios from 'axios';

export function getPortfile(id){
    return async function(dispatch){
        var json = await axios.get(`http://localhost:8081/portfolio/${id}`);
        return dispatch({
            type:'GET_PORTFILE',
            payload: json.data.data,
        })
    }
}



export function getRepos(username){
    return async function (dispatch){
        var json = await axios.get(`http://localhost:8081/github/repos/${username}`);
        if(json.data.code === -1) {
            return dispatch({
                type: 'GET_REPOS',
                payload: []
            })
        }
        return dispatch({
            type:"GET_REPOS",
            payload: json.data.data,
        })
    }
}