import axios from "axios"

const axiosInstance =  axios.create({
    baseURL:"http://localhost:5001/api",
    timeout:3000
})



axiosInstance.interceptors.request.use(
    (config)=>{
   const jwtToken =   localStorage.getItem(jwtToken)
        console.log("jwttoken is getting from local storage",jwtToken)

console.log(config)

    }
)
axiosInstance.interceptors.response.use()
export default axiosInstance

//   if(jwtToken){
//         config.headers.authorization = `Bearer ${jwtToken}`;
//     }
//     return config;