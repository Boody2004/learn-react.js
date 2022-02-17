import React from "react";

function Header() {
  const client = "Programmer";

  const title = {
    designer: "Design",
    programmer: "Programming",
  };

  const clintInfo = {
    name: "Abd Elrahman",
    lastName: "Atef",
  };

  return (
    <section className="p-3 px-5 text-white bg-primary">
      Hello {`${clintInfo.name} ${clintInfo.lastName}`}
      <h2>
        {client === "Programmer" ? title.programmer : title.designer}
        is my life.
      </h2>
    </section>
  );
}

export default Header;
