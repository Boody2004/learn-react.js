import React from "react";
import TeamMember from "./TeamMember";

function Team() {
  return (
    <section>
      <header className="navbar text-white bg-dark rounded">
        <h2 className="px-3">Our Team</h2>
      </header>

      <div className="row">
        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />

        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />

        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />

        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />

        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />

        <TeamMember
          info={{
            img: "/img/img.png",
            name: "Walter White",
            position: "Web develpar",
            phone: "+49 12345678",
            email: "walter@b-bad.com",
            website: "www.test.com",
          }}
        />
      </div>
    </section>
  );
}

export default Team;
