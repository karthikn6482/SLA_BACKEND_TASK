import "./ProfileCard.css";
import avatar from "../assets/avatar.jpg";

function ProfileCardFn() {
  return (
    <div className="card">
      <img src={avatar} alt="Profile" className="avatar" />
      <h2>Karthikeyan</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default ProfileCardFn;