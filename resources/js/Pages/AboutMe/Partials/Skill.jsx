import styled, { keyframes } from "styled-components";
import css from "./skills/css-3-svgrepo-com.svg";
import gatsby from "./skills/gatsby-svgrepo-com.svg";
import html from "./skills/html-5-svgrepo-com.svg";
import javascript from "./skills/javascript-svgrepo-com.svg";
import laravel from "./skills/laravel-svgrepo-com.svg";
import mongo from "./skills/mongo-svgrepo-com.svg";
import mysql from "./skills/mysql-logo-svgrepo-com.svg";
import nextjs from "./skills/nextjs-svgrepo-com.svg";
import nodejs from "./skills/nodejs-icon-svgrepo-com.svg";
import php from "./skills/php-svgrepo-com.svg";
import react from "./skills/react-svgrepo-com.svg";
import shopify from "./skills/shopify-svgrepo-com.svg";
import woocommerce from "./skills/woocommerce-icon-svgrepo-com.svg";
import wordpress from "./skills/wordpress-color-svgrepo-com.svg";

const Skill = () => {
  const skills = Object.entries({
    html,
    css,
    javascript,
    php,
    laravel,
    mysql,
    mongo,
    react,
    gatsby,
    nextjs,
    nodejs,
    shopify,
    wordpress,
    woocommerce,
  }).map(([name, src]) => (
    <img key={name} alt={name} src={src} className="h-12 w-12" />
  ));

  return (
    <Marquee className="relative py-10">
      <div className="mask-image absolute z-10 h-full w-full"></div>

      <div className="marquee__content">{skills}</div>
      <div className="marquee__content" aria-hidden="true">
        {skills}
      </div>
    </Marquee>
  );
};

// https://codepen.io/hexagoncircle/pen/wvmjomb
const scroll = keyframes`
from {
    transform: translateX(0);
}
to {
    transform: translateX(calc(-100% - var(--gap)));
}
`;

const Marquee = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);

  .mask-image {
    background: linear-gradient(
      to right,
      white,
      transparent,
      transparent,
      transparent,
      white
    );
  }

  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: var(--gap);
    animation: ${scroll} 30s linear infinite;
  }
`;

export default Skill;
