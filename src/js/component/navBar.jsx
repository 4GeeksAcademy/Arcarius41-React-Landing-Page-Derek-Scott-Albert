import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://tinyurl.com/linkstartnow">Link Start!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://www.homedepot.com/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://en.wikipedia.org/wiki/Aardvark">Ardvarks Anonymous</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.imdb.com/title/tt0084787/">The place with the thing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://vault.fbi.gov/UFO">The truth is out there!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavBar;