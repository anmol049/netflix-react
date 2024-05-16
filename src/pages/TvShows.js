import React from 'react'
import BrowseNavBar from '../components/BrowseNavBar'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

function TvShows() {
    const movieList = useSelector((store)=>store.movie)
  return (
    <div className='bg-black w-fit'>
        <BrowseNavBar/>
    <div className='w-screen'>
      <MovieList title={"Top Rated Tv Series"} list={movieList.topTvSeries}/>
      <MovieList title={"Popular Tv series"} list={movieList.popularTvSeries}/>
      <MovieList title={"Airing Today"} list={movieList.airingtodayTvSeries}/>
      <MovieList title={"On The Air"} list={movieList.ontheairTvSeries}/>
      <MovieList title={"Upcoming"} list={movieList.upcoming}/>
    </div>
    <Footer/>
  </div>
  )
}

export default TvShows