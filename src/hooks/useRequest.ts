/* istanbul ignore file */
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { HookResponse, ReturnedValues } from '../types';

const useRequest = <T>(
  method: string,
  url: null | string = null,
): ReturnedValues<T> => {
  const [response, setResponse] = useState<null | T | HookResponse>(null);
  const [error, setError] = useState(false);
  const execCall = async (
    params: null | URLSearchParams = null,
    callUrl: null | string = null,
  ) => {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const axiosConfig = {
      method,
      url: (url || callUrl) as string,
      params,
      headers,
    };
    try {
      const { data, status } = await axios(axiosConfig);
      setResponse({ data, status });
    } catch (err) {
      const errors = err as Error | AxiosError;
      if (axios.isAxiosError(errors)) {
        if (errors.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(errors.response.data);
          console.log(errors.response.status);
          console.log(errors.response.headers);
        } else if (errors.request) {
          // The request was made but no response was received
          // `err.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(errors.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', errors.message);
        }
        console.log(errors.config);
        setError(true);
      }
    }
  };
  return { response, execCall, error };
};

export default useRequest;
