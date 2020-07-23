import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL="http://localhost:3001"
//we can also set default headers for authorization and content type etc.
// axios.defaults.headers.common['Authorization']="AUTH TOKEN";

axios.interceptors.request.use(reqConfig=>{
    // console.log(reqConfig);
    //we can edit the reqConfig header and all here.
    return reqConfig;
},error=>{
    // console.error(error);
    console.log(error);
    return Promise.reject(error)
})
axios.interceptors.response.use(resConfig=>{
    // console.log(resConfig);
    //we can edit the reqConfig header and all here.
    return resConfig;
},error=>{
    // console.error(error);
    console.log(error);
    return Promise.reject(error)
})


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
