import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { api_option } from '../utils/constants';
import { addontheairTvSeries } from '../redux/slice/movieslice';

function useTVOnTheAirToday() {
    const dispatch = useDispatch();
    const fetchData = async()=>{
      const promise = await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",api_option)
      const json = await promise.json()
      dispatch(addontheairTvSeries(json.results))
      
    }
    useEffect(()=>{
      fetchData()
    },[])
}

export default useTVOnTheAirToday