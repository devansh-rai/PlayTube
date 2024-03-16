import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();
// import REACT_APP_YOUTUBE_API_KEY from "../../.env"

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': 'b6948c82c2msh0798a657c887088p1c8ae6jsnf917ec01a727',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  const fetchDataFromApi = async(url)=>{
    try {
        const response = await axios.get(`${BASE_URL}/${url}`, options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
  }

    export {fetchDataFromApi};