import PropTypes from 'prop-types';

const dogShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export default { dogShape };
