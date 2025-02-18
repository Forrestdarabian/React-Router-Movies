import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    let id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);}

  export default Movie;