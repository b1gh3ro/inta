import React from 'react'

function Navbar() {
    return (
        <div>
                  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">my posts</a>
        <button className="navbar-toggler" type data-bs-toggle="collapse" data-bs-target="#navbar-items"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbar-items">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item"><a href="#" className="nav-link">test</a></li>
            <li className="nav-item"><a href="#" className="nav-link">test</a></li>
            <li className="nav-item"><a href="#" className="nav-link">test</a></li>
          </ul>
        </div>
        </div>
      </nav>
        </div>
    )
}

export default Navbar
