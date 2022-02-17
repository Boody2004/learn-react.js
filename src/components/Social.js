import React from "react";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <section>
      <ul className="list-group">
        <SocialItem
          media="Facebook"
          smaillMedia="facebook"
          img="https://picsum.photos/61"
        />
        <SocialItem
          media="Youtube"
          smaillMedia="youtube"
          img="https://picsum.photos/62"
        />
        <SocialItem
          media="Instagram"
          smaillMedia="instagram"
          img="https://picsum.photos/63"
        />
        <SocialItem
          media="Linkedin"
          smaillMedia="linkedin"
          img="https://picsum.photos/64"
        />
      </ul>
    </section>
  );
}

export default Social;
