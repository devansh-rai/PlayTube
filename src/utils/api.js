import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
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