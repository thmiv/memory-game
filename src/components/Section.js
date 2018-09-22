import React from "react";
import "../styles/Section.css";
import FriendCard from "./game-cards";
import friends from "./game-cards/gameIcons.json";

class Section extends React.Component {
  state = {
    friends
  };

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("alt").value;
    this.setState({  });
    console.log(btnType);
  };

  render() {
    return (
      <section className="container">
        {this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
            key={friend.id}
            id={friend.id}
            name={friend.name}
            shake={false}
            onClick={this.handleBtnClick}
          />
        ))}
      </section>
    )
  }
}

export default Section;
