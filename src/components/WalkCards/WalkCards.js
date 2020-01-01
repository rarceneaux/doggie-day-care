import React from 'react';
import PropTypes from 'prop-types';
import './WalkCards.scss';

import walkShape from '../../helpers/propz/walkShape';

class WalkCards extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  render() {
    const { walk } = this.props;
    return (
    <div className="card walk">
    <div class="card-body walk2">
    <p class="card-text">Dog Name: {walk.dogId}</p>
    <p class="card-text">Employee Name: {walk.employeeId}</p>
    <p class="card-text">Date: {walk.date}</p>
</div>
</div>
    );
  }
}

export default WalkCards;
