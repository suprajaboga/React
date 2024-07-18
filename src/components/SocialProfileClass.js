import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link
} from "../utils/Common/constants";
import { Component } from "react";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);    //10
  }

  render() {
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiLinkedin title="Follow me on Linkedin" />
          </i>
        </a>
        <a
          href={Github_Link}
          title="Follow me on Github"
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiGithub title="Follow me on Github" />
          </i>
        </a>
        <a
          href={Email_Link}
          title="Any query! Mail me"
          className="icon-button linkedin"
          email="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <SiGmail title="Any query! Mail me" />
          </i>
        </a>
        {console.log("SocialProfileClass")}   { /* 11 */}
      </div>
    );
  }
}

export default SocialProfileClass;
