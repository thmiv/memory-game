import React from "react";
import "../styles/Section.css";
import FriendCard from "./game-cards";
import friends from "./game-cards/gameIcons.json";

class Section extends React.Component {
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  render() {
    return (
      <section className="container">
        {this.state.friends.map(friend => (
          <FriendCard image={friend.image} />
        ))}
      </section>
    )
  }
}

export default Section;
