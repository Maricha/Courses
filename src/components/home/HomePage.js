import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
        <div className="jumbostron">
          <h1>Hello</h1>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>  
        </div>
    );
  }
}

export default HomePage;