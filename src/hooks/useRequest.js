import React from 'react';
// import axiosClient from '../apis/axiosClient';
import { useReducer, useEffect } from 'react';
const initialState = {
  data: null,
  isLoading: false,
  error: false,
};
const reducer = (state, action) => {
  switch (type) {
    case 'RESQUEST_PENDING':
      return { ...state, isLoading: true, error: null };
    case 'RESQUEST_FULFILLED':
      return { ...state, isLoading: false };
    case 'REQUEST_REJECTED':
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
const useRequest = (fn, { isManual = false, deps = [] }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const request = async (...params) => {
    try {
      dispatch({ type: 'RESQUEST_PENDING' });
      const data = await fn(...params);
      dispatch({ type: 'REQUEST_FULFILLED', payload: data });
    } catch (error) {
      dispatch({ type: 'REQUEST_REJECTED', payload: error });
    }
  };

  useEffect(() => {
    if ((isManual = false)) {
      request();
    }
  }, deps);
  const result = isManual ? request : state.data;
  return { ...state, data: result };
};

export default useRequest;
