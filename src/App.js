import { Route,Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AppLayout from './components/AppLayout';
import LoginPage from './pages/LoginPage';
import Body from './components/Body';
import BrowsePage from './pages/BrowsePage';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import {adduser,removeuser} from './redux/slice/userslice'
import MoviePage from './pages/MoviePage';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import NewAndPopular from './pages/NewAndPopular';
import MyList from './pages/MyList';
import SearchPage from './pages/SearchPage';





function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{

const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {displayName,email,uid,photoURL} = user;
    // console.log(user);
    dispatch(adduser({displayName:displayName,email:email,uid:uid,photoURL:photoURL}))
    navigate("/browse")

  } 
  else {
    // User is signed out
    dispatch(removeuser())
    navigate("/");
    
  }
});
return ()=> unsubscribe();

  },[])
  return (
    <div className="App">
      <Routes>
         <Route element={<AppLayout/>}>
            <Route path='/' element={<Body />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/browse' element={<BrowsePage/>}></Route>
            <Route path='/movie/:id' element={<MoviePage/>}></Route>
              <Route path='/TvShows' element={<TvShows/>}></Route>
              <Route path='/Movies' element={<Movies/>}></Route>
              <Route path='/newAndpopular' element={<NewAndPopular/>}></Route>
              <Route path='/mylist' element={<MyList/>}></Route>
              <Route path='/search' element={<SearchPage/>}></Route>
            
         </Route>
      </Routes>

    </div>
  );
}

export default App;
