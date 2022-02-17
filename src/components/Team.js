import React from "react";
import Data from "./ItemMembers.json";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <section>
      <header className="navbar text-white bg-dark rounded">
        <h2 className="px-3">Our Team</h2>
      </header>

      <div className="row">
        {Data.map((item) => (
          <TeamMember
            key={item.id}
            img={item.img}
            name={item.name}
            position={item.position}
            phone={item.phone}
            email={item.email}
            website={item.website}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
