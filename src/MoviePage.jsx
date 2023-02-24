import React from "react";

function MoviePage(){
    return(
        <div className="page-container">
        <div className="quick_info">
            <img src="" alt=""/>
            <h1>Title</h1>
            <h3 className="release_year">Year</h3>
            <span>2023</span>
        </div>
        <div className="plot">
            <p></p>
        </div>
        <div className="more_info">
            More information at
            <span>
            <a href="https://www.imdb.com/title/" target="_blank" rel="noreferrer" alt="imdb link">link</a>
            </span>
        </div>
    </div>
    );
}


export default MoviePage;