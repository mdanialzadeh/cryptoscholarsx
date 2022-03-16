import React from "react";
import styled from "styled-components";
import discord from "./images/discord.png";
import twitter from "./images/twitter.png";

function Contacts() {
  return (
    <Contact.Container>
      <a
        href="https://discord.gg/cqfP6PJrA5"
        target="_blank"
        rel="noreferrer"
        style={{ height: "50px" }}
      >
        <Contact.Image src={discord} alt="discord logo" />
      </a>
      <a
        href="https://twitter.com/Crypt0Scholars"
        target="_blank"
        rel="noreferrer"
        style={{ height: "50px" }}
      >
        <Contact.Image src={twitter} alt="Twitter Logo" />
      </a>
    </Contact.Container>
  );
}

const Contact = {
  Container: styled.div`
    position: relative;
    bottom: 0;
    right: 0;
    background: #e2e2e2;
    z-index: 20;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    box-shadow: 0 -2px 4px 0px rgb(0 0 0 / 20%);

    @media (max-width: 640px) {
    }
  `,

  Image: styled.img`
    height: 50px;
    width: 50px;
    margin: 0 15px;
    filter: drop-shadow(0 0 0.2rem #9e9090);
    box-shadow: 0 4px 6px -10px rgb(0 0 0 / 10%),
      0 2px 4px -10px rgb(0 0 0 / 6%);
    &: hover {
      transform: scale(1.1);
    }
  `,
};

export default Contacts;
