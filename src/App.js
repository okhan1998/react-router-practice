import './App.css';
import {useState, useEffect} from 'react';
import Movie from './components/Movie';
import MovieAdd from './components/MovieAdd';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import routes from './routes';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Routes>
      {routes.map(route => {
        return (
          <Route
          key={route.path} 
          path={route.path}
          element={<route.component/>}/>
        )
      })}
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
