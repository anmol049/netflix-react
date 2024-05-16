import React from 'react'
import BrowseNavBar from '../components/BrowseNavBar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, deletemylist } from '../redux/slice/movieslice';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';

function MyList() {
    const listData = useSelector((store)=>store.movie.mylist) 
    const dispatch = useDispatch();
    console.log(listData);
    
  return (
    <div>
        <BrowseNavBar/>
        <div className='flex justify-center mt-2'>
            <button className='bg-black px-4 py-1 text-white rounded-md' onClick={()=>{dispatch(deletemylist())}}>Clear list</button>
        </div>
        <div className='flex gap-4 mt-6 flex-wrap ml-7'>
            {listData.map((obj,index)=>{
                    return (
                    <div className='flex flex-col gap-y-1' key={index}>
                    <Link to={'/movie/'+obj.id} key={obj.id}><Cards path = {obj.poster_path} /></Link>
                    <button className='border-white hover:border w-[90px] relative left-[50px] bg-black text-white rounded-md' onClick={()=>{dispatch(deleteData(index))}}>Delete</button>
                    </div>
                    )
                })}
        </div>
    </div>
  )
}

export default MyList