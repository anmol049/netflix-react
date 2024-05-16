import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addmylist } from '../redux/slice/movieslice'

function MovieList({title,list}) {
  const dispatch = useDispatch()
    // console.log(list);
  return (
    <div className='text-white mt-4 ml-3  min-w-[400px] sm:min-w-screen'>
        <h1 className='text-xl font-medium pl-2'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar  mt-2 '>
        {list&&
        <div className='flex gap-3'>
            {list.map((obj,index)=>{
                return (
                  <div className='flex flex-col gap-y-2' key={index}>
                  <Link to={'/movie/'+obj.id} key={obj.id}><Cards path = {obj.poster_path} /></Link>
                  <button className='border-white hidden md:block hover:border w-[90px] relative left-[50px]  rounded-md' onClick={()=>{dispatch(addmylist(obj))}}>Add To List</button>
                  </div>
                )
            })}
        </div>
        }
        </div>
    </div>
  )
}

export default MovieList