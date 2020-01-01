import React from 'react';
import PropTypes from 'prop-types';
import './Walks.scss';
import WalkCards from '../WalkCards/WalkCards';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';

import dogShape from '../../helpers/propz/dogShape';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addWalks: PropTypes.func,
  }

  render() {
    const { walks } = this.props;

    const walkCards = walks.map((walk) => <WalkCards key={walk.id} walk={walk}/>);

    return (
<div className="Walks">
  {walkCards}
</div>
    );
  }
}

export default Walks;
