import PropTypes from "prop-types";

function UserCard({ name, age, city, isAdmin }) {
  return (
    <div>
      <p>
        Hi {name}, {age} years old from {city}
      </p>
      {isAdmin && <span style={{ color: "red" }}>Admin</span>}
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

export default UserCard;