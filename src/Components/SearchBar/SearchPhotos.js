import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";


export default function SearchPhotos() {

  const [query, setQuery] = useState()
  const [pics, setPics] = useState([]);

  const unsplash = new Unsplash({
    accessKey: "Eb47ogZL50PQXXRTq6GW6YDr4ZZ2GTtI7Q_lqFk1iMo",
  });

  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
    .photos(query, 20, 50)
    .then(toJson)
    .then((json) => {
       console.log(json);
      setPics(json.results);
    });
  };



  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="button">
          Search
          </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
  );
}