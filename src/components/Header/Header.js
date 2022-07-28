
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieSlice";
import users from "../../images/users.jpg";
import "./Header.scss";

const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()
   
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term));

  }
  return (
    <div className="header">
      <Link to="/">
        <div className="logo"> Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="search a movie or show" onChange={(e) => setTerm(e.target.value)
  } />
          <button type="submit"><i className="fa fa-search" /></button>
        </form>
      </div>

      <div className="user-image">
        <img src={users} alt="user" />
      </div>
    </div>
  );
};

export default Header;
