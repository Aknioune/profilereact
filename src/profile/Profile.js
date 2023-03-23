import PropTypes from "prop-types";

function Profile(props) {
  const { fullName, bio, profession, children, handleName } = props;

  return (
    <div style={{ textAlign: "center" }} className="Box">
      <div className="photo">
        <div >
          {children}
        </div>
        <h1 >{fullName}</h1>
        <p>{profession}</p>
    
      </div>
      
      <div className="Bio">
      <h2>Bio :</h2>
        <p>{bio}</p>
        <button onClick={() => handleName(fullName)}>Show Name</button>
      </div>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Fatima Zahra Aknioune",
  bio: "No bio available.",
  profession: "Web developpement",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;
