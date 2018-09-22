import React from "react";
import "../styles/Section.css";
import FriendCard from "./game-cards";
import friends from "./game-cards/gameIcons.json";

class Section extends React.Component {
  state = {
    friends,
    counter: 0,
    topScore: 0
  };

  componentDidMount() {
    this.shuffleArray(friends);
  }

  shuffleArray = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return this.setState({ friends })
  }

  checkGameStatus = (currentCard) => {
    this.state.friends.map(friend => {
      if (friend.name === currentCard) {
        if (friend.beenClicked !== true) {
          friend.beenClicked = true;
          return this.setState({ counter: this.state.counter + 1 });
        } else {
          let tempScore = this.state.counter;
          if (tempScore < this.state.topScore) {
            tempScore = this.state.topScore;
          }

          alert("YOU LOSE");
          this.resetGame(friends);
          return this.setState({
            friends,
            counter: 0,
            topScore: tempScore
          });
        }
      }
    });
  }

  resetGame = (friends) => {
    friends.forEach(function (friend) {
      friend.beenClicked = false;
    });
    return this.setState({ friends });
  }

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("alt").value;
    this.checkGameStatus(btnType);
    this.shuffleArray(friends);
    //console.log("Score: " + this.state.counter, " | Top Score: " + this.state.topScore);
  };

  render() {
    return (
      <section className="container">
      <div className="scoreHolder">
      Score: <span className="scores">{this.state.counter}</span> | Top Score: <span className="scores">{this.state.topScore}</span>
      </div>
      <div className="cardBox">
        {this.state.friends.map(friend => (
          <FriendCard
            image={friend.image}
            key={friend.id}
            id={friend.id}
            name={friend.name}
            onClick={this.handleBtnClick}
          />
        ))}
        </div>
      </section>
    )
  };
}

export default Section;