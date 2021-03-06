import React from 'react';
import PropTypes from 'prop-types';
import './Walks.scss';
import WalkCard from '../WalkCard/WalkCard';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    deleteAWalk: PropTypes.func,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
  }

  render() {
    const {
      walks,
      deleteAWalk,
      setEditMode,
      setWalkToEdit,
    } = this.props;

    const walkCard = walks.map((walk) => <WalkCard key={walk.id} walk={walk} deleteAWalk={deleteAWalk} setEditMode={setEditMode} setWalkToEdit={setWalkToEdit}/>);

    return (
<div className="Walks">
  {walkCard}
</div>
    );
  }
}

export default Walks;
