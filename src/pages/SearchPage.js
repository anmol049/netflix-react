import React from 'react'
import BrowseNavBar from '../components/BrowseNavBar'
import GptSearchBar from '../components/GptSearchBar'
import GptSearchSuggestion from '../components/GptSearchSuggestion'
import { useDispatch } from 'react-redux'
import { searchvalue } from '../redux/slice/gptSearchslice'
import { useNavigate } from 'react-router-dom'

function SearchPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  function handleImageClick(){
    dispatch(searchvalue())
    navigate('/browse')

  }
  return (
    <div className="bg-black relative w-fit"  >
      <img onClick={handleImageClick} src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="baground-image" className='h-full sm:w-screen fixed'/>
      <div className='absolute top-0 sm:w-screen bg-gradient-to-r from-black  overflow-y-scroll w-fit overflow-x-hidden'>
        <BrowseNavBar/> 
      <GptSearchBar/>
      <GptSearchSuggestion/>
      </div>
    </div>
  )
}

export default SearchPage