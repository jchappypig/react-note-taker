import React, {Component} from 'react';
import SearchGitHub from './SearchGithub';

const Main = ({children}) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
        <SearchGitHub></SearchGitHub>
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

export default Main;


