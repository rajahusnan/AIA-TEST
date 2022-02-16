import React, { useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
import axios from "axios";

export const Gallery = (props) => {
  const [listGalerry, setlistGalerry] = useState([]);
  const [search, setSearch] = React.useState("");
  useEffect(() => {
    getTaskdata();
  }, []);

  function getTaskdata() {
 
    axios.get(`http://localhost:3000/galerries/${search}`).then((response) => {
      setlistGalerry(response.data.items);
      // console.log("respon get task list", response.data.items);
    });
  }

  return (
    <div className="container">
      <form className="needs-validation">
        <div className="mb-3">
          <label for="search" className="form-label">

          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
         
        </div>

        <center>
          <button
            type="button"
            className="btn btn-primary col-12"
            onClick={(e) => getTaskdata()}
          >
            Search
          </button>
        </center>
      </form>
      {listGalerry.map((item, i) => (
        <img className="item" key={item.link} src={item.media.m} />
      ))}
    </div>
  );
};
