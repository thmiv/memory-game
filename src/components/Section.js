import React from "react";
import "../styles/Section.css";
import FriendCard from "./game-cards";
import friends from "./game-cards/gameIcons.json";

class Section extends React.Component {
  state = {
    friends,
    counter: 0
  };

  componentDidMount() {
    console.log("component mounted");
    this.shuffleArray(friends);
  }

  shuffleArray = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]]; // eslint-disable-line no-param-reassign
    }
    return this.setState({ friends })
}

  handleBtnClick = event => {
    console.log(this.state.counter);
    const btnType = event.target.attributes.getNamedItem("alt").value;
    const itemIndex = event.target.attributes.getNamedItem("id").value -1;


    friends.forEach(function(ele){
      
      if (ele.name === btnType) {
        ele.beenClicked = true;
      }
    });
    
    console.log(btnType);
    
    this.setState({ 
      friends,
      counter: this.state.counter + 1
     });

    this.shuffleArray(friends);
    
     console.log(this.state.friends);
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
            onClick={this.handleBtnClick}
          />
        ))}
      </section>
    )
  };
}

export default Section;
