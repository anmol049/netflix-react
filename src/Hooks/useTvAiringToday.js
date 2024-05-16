import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { api_option } from '../utils/constants';
import { addairingtodayTvSeries} from '../redux/slice/movieslice';

function useTvAiringToday() {
    const dispatch = useDispatch();
    const fetchData = async()=>{
      const promise = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",api_option)
      const json = await promise.json()
      dispatch(addairingtodayTvSeries(json.results))
      
    }
    useEffect(()=>{
      fetchData()
    },[])
  }

export default useTvAiringToday