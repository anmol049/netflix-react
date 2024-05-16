import React from 'react'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'
import BrowseNavBar from '../components/BrowseNavBar'
import Footer from '../components/Footer'

function Movies() {
    const movieList = useSelector((store)=>store.movie)
  return (
    <div className='bg-black w-fit'>
        <BrowseNavBar/>
    <div className='w-screen'>
      <MovieList title={"Trending"} list={movieList.trending}/>
      <MovieList title={"Now Playing"} list={movieList.movie}/>
      <MovieList title={"Top Rated"} list={movieList.toprated}/>
      <MovieList title={"Popular"} list={movieList.popular}/>
      <MovieList title={"Popular Tv series"} list={movieList.popularTvSeries}/>
      <MovieList title={"Upcoming"} list={movieList.upcoming}/>
    </div>
    <Footer/>
  </div>
  )
}

export default Movies