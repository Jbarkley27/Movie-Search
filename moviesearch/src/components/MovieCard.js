import React from "react";

function MovieCard(props) {
  const defaultImage = "moviesearch/src/jakob-owens-CiUR8zISX60-unsplash.jpg";
  return (
    <div class="card 1">
      <div class="card_image">
        {" "}
        <img
          style={({ height: 200 }, { width: 380 })}
          src={props.image}
          alt={defaultImage}
        />
      </div>
      <div class="card_title title-white">
        <p>{props.title}</p>
      </div>
      <div className="more-info">
        <p className="rating">Average Rating: {props.rating}</p>
        <a target="blank" href={`https://www.themoviedb.org/movie/${props.id}`}>
          More Info
        </a>
      </div>
    </div>
    // <div
    //   style={{
    //     backgroundImage: `url(${props.image})`,
    //   }}
    //   className="card"
    // >

    // </div>
  );
}

export default MovieCard;
