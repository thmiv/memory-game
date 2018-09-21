import React from "react";
import "../styles/Section.css";
import FriendCard from "./game-cards";
import friends from "./game-cards/gameIcons.json";

const Section = () => (
  <section className="container">
  
      <FriendCard
        image={friends[0].image}
      />
      <FriendCard
        image={friends[1].image}
      />
      <FriendCard
        image={friends[2].image}
      />
  
  </section>
);

export default Section;