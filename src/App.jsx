import React from "react";
import "./App.css"


const App = (props) => {
  

  return (
    <>
      <div className="card divcol">
        <img src={props.imgscr} className="card-img-top img" alt="moviename" />
          <div className="card-body">
            <h5 className="card-title card__title">{props.title}</h5>
            <p className="card-text card__text">{props.name}</p>
            <a href={props.href} target="_nxtpage" className="btn btn-primary"><button className="button">WATCH NOW</button></a>
          </div>
      </div>
    </>
  )
}

export { App };
