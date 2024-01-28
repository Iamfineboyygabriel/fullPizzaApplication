import PropTypes from 'prop-types';
import Button from '../../ui/Button';

function UpdateOrder({ order }) {
  return (
    <Button type="primary">Make priority</Button>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object.isRequired,
};

export default UpdateOrder;
