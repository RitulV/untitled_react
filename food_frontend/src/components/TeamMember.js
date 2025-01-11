// class based component application
import React from "react";

class TeamMember extends React.Component {
  constructor(props) {
    // for passing the props as an object
    super(props);

    this.state = {
      // define state variable here
      userInfo: {
        name: "User",
        location: "undefined",
        avatar_url: "https://ritulv.github.io/image-hosting/avatar.png",
      },
    };
  }

  async componentDidMount() {
    // api call

    const data = await fetch(
      "https://api.github.com/users/" + this.props.userID
    );
    const json = await data.json();

    this.setState({
      // for changing state of state variables
      userInfo: json,
    });
  }

  render() {
    // this method will return our jsx
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className={this.props.class}>
        <div className={this.props.class + "-details"}>
          <p>{name}</p>
          <p>{location}</p>
        </div>

        <div>
          <img src={avatar_url} className={this.props.class + "-avatar"} />
        </div>
      </div>
    );
  }
}

export default TeamMember;
