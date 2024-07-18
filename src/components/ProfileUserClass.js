import { Component } from "react";
import SocialProfileClass from "./SocialProfileClass";

class ProfileUserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);    //8
    const { name, html_url, avatar_url, bio } = this.props.userInfo; //accessing userInfo as props from parentclass 'ProfileClass'

    return (
      <div className="profile-user-card">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <img
            className="profile-user-img"
            src={avatar_url}
            alt={name}
            title={name}
          />
        </a>
        <p className="profile-user-bio">{bio}</p>
        {console.log('ProfileUserClass')}   { /* 9 */}
        <SocialProfileClass />
      </div>
    );
  }
}

export default ProfileUserClass;
