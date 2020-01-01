import React from 'react';
import PropTypes from 'prop-types';
import './Dog.scss';

import dogShape from '../../helpers/propz/dogShape';

class Dog extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }


  render() {
    const { dog } = this.props;
    return (
    // <h1>{dog.name}</h1>
    <div className="card text-center dog">
        <img src={dog.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body dog2">
        <h1 className="card-title">{dog.name}</h1>
        <p className="card-text">{dog.description}</p>
        <p className="card-text"> Owner: {dog.owner}</p>
    </div>
  </div>
    );
  }
}

export default Dog;
