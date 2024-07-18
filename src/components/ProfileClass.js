import { Component } from "react";
import ProfileRepoClass from "./ProfileRepoClass";
import ProfileUserClass from "./ProfileUserClass";
import {
  Github_API_User,
  Github_Username,
  options
} from "../utils/Common/constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      repoInfo: null
    };
    console.log("Constructor called"); //1
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_Username, options), //Fetch the data from github User API - https://api.github.com/users/suprajaboga
        fetch(Github_API_User + Github_Username + "/repos", options) // Fetch the data from github User API for Repository - https://api.github.com/users/suprajaboga/repos
      ]); // handle Multiple API Requests usign Promise.all()

      const resData = await Promise.all(response.map((r) => r.json()));
      console.log(resData); //4

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1]
      });
    } catch (error) {
      console.error(error); // show error in console
    }

    console.log("Profile-Parent componentDidMount"); //5
  }

  componentDidUpdate() {
    console.log("Profile-Parent componentDidUpdate");   //13
  }

  componentWillUnmount() {
    console.log("Profile-Parent componentWillUnmount");
  }

  render() {
    const { userInfo, repoInfo } = this.state; // object destructuring for state data
    console.log("Profile-Parent render"); //2, 6

    return (
      <>
        {console.log("ProfileClass")} {/* 3, 7 */}
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
              {/* Passing props data (full json data) from parent to child */}
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Tasty<span>Eats</span> App Github Repository
              </h1>
              {/* Passing props followers from parent to child */}
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
