import { REACT_APP_API_KEY } from '@env';
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { REACT_APP_API_KEY } from '../.env'
// const rapidApiKey = REACT_APP_API_KEY
// const rapidApiKey = process.env.REACT_APP_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,  
    headers: {
      'X-RapidAPI-Key': REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: {...query}
    // params: {
    //   query: 'Python developer in Texas, USA',
    //   page: '1',
    //   num_pages: '1'
    // }


  };

  // const headers = {
  //   'X-RapidAPI-Key': 'f36c52c764mshec7209541fef5d3p14cebbjsn8e3c5eb0c599',
  //   'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  // }
  
  // const params = {
  //   query: 'Python developer in Texas, USA',
  //   page: '1',
  //   num_pages: '1'}

  const fetchData = async () => {
    setIsLoading(true);

    try {
        // const response = await axios.get(`https://jsearch.p.rapidapi.com/search`, params, {headers: headers});
        const response = await axios.request(options);
        // setData(response.data.data);
        // setIsLoading(false);
    }catch(error) {
        setError(error);
        alert(error.message)
    }finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch};
}

export default useFetch;