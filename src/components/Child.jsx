import PropTypes from "prop-types";

function Child({ user, onUserSelect }) {
  return (
    <div>
      <p>{user.name} - {user.email}</p>
      <button onClick={() => onUserSelect(user)}>Select</button>
    </div>
  );
}

Child.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onUserSelect: PropTypes.func.isRequired,
};

export default Child;