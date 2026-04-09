import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 10000,
  withCredentials: true, // send cookies if needed
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`; // Standard header key
<<<<<<< HEAD
      console.log("JWT token attached to request");
    }   
=======
      console.log("JWT token attached to request",jwtToken);
    }
>>>>>>> 660ac708c050f5f0a0e5ab1dc3a9dc826a6ba620
    return config;
  },  
  (error) => {     
    // Handle request errors
    console.error("Axios request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Axios response:", response);
    return response;
  },  
  (error) => {
    // Handle response errors
    if (error.response) {
      console.error("Axios response error:", error.response.status, error.response.data);
      if (error.response.status === 401) {
        console.warn("Unauthorized! Token might be invalid or expired.");
        // Optionally, redirect to login page or clear localStorage
        // localStorage.removeItem("jwtToken");
        // window.location.href = "/login";
      }
    } else {
      console.error("Axios network/error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;