import React, {Component} from 'react'

class Navbar extends Component{
  render(){
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <p>Logo</p>
        </div>
        <div className="navbar-nav">
          <div className="navbar-button">
            <p>Button 1</p>
          </div>
          <div className="navbar-button">
            <p>Button 2</p>
          </div>
          <div className="navbar-button">
            <p>Button 3</p>
          </div>
        </div>
      </div>
    )
  }
}


module.exports = Navbar
