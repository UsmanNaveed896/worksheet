import axios from 'axios'

//GET API CALL SERVICE
export const getApiService=(URL)=>{
    return axios.get(process.env.REACT_APP_FRONTEND_URL + URL)
}
//POST API CALL SERVICE
export const postApiService=(URL ,payLoad)=>{
    return axios.post(process.env.REACT_APP_FRONTEND_URL + URL , payLoad)
    
}
//UPDATE API CALL SERVICE