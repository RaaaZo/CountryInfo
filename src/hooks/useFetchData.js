import { useState } from 'react';
import Axios from 'axios';

const useFetchData = () => {
  const [countryData, setCountryData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = (inputValue) => {
    setIsLoading(true);

    Axios({
      method: 'GET',
      url: `https://restcountries-v1.p.rapidapi.com/${inputValue}`,
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
    })
      .then((response) => {
        setCountryData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
        setIsLoading(false);
      });
  };

  return { countryData, isLoading, error, fetchData };
};

export default useFetchData;
