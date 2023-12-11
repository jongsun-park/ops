import { Swiper, SwiperSlide } from "swiper/react";

import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { EffectCreative, Pagination } from "swiper/modules";

import aboutProjectBG from "./3d-render-smartphone-with-hand-fill-online-survey.jpg";
import aboutMeBG from "./digital_artist_male.jpg";

// https://codesandbox.io/p/sandbox/ch5rmf?file=%2Fsrc%2FApp.jsx%3A17%2C6

const Page = ({ title, description, link, bg }) => (
  <div
    className="flex h-full w-full flex-col items-start justify-center space-y-5 rounded pl-10 shadow-sm"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      backgroundColor: "white",
    }}
  >
    <h2 className="text-4xl font-bold text-blue-600">{title}</h2>
    <p className="text-md max-w-[70ch]">{description}</p>
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded bg-blue-500 px-5 py-3 text-sm font-bold uppercase text-white hover:bg-blue-600"
    >
      {link.text}
    </a>
  </div>
);

// <a href="https://www.freepik.com/free-photo/3d-render-smartphone-with-hand-fill-online-survey_33309533.htm#page=3&query=3d&position=2&from_view=search&track=sph&uuid=b56e765c-f7e0-414d-9cb0-994a1e364448">Image by upklyak</a> on Freepik
const AboutProject = () => (
  <Page
    title="About Project"
    description="Constructed using Laravel (PHP) and MySQL, this application is tailored to
    optimize Production Order management. The admin user can create products
    and production orders with various options, and designers or weavers can
    update the status. The dashboard also features a convenient shortcut for
    filtering to display a refined production order list."
    link={{ text: "Repository", url: "https://github.com/jongsun-park/ops" }}
    bg={aboutProjectBG}
  />
);

// <a href="https://www.freepik.com/free-psd/3d-nft-icon-digital-artist-male_25469816.htm#query=3d%20illustration&position=11&from_view=keyword&track=ais&uuid=c24c052d-a8cd-441c-8ecc-815ea95f0336">Image by Graphue</a> on Freepik
const AboutMe = () => (
  <Page
    title="About Me"
    description="I'm a self-motivated developer and designer specializing in building websites with CMS like WordPress. I stay updated on industry trends, collaborate with local businesses, and provide responsive, tailored solutions based on their models and target customers."
    link={{ text: "Online CV", url: "https://jongsun.co.uk/about-me" }}
    bg={aboutMeBG}
  />
);

const Banner = () => {
  const pages = [AboutProject, AboutMe];

  return (
    <SwiperContainer>
      <Swiper
        pagination={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Pagination, EffectCreative]}
        className="dashboardBannerSwiper"
      >
        {pages.map((page, idx) => (
          <SwiperSlide key={idx}>{page}</SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

const SwiperContainer = styled.div`
  .swiper {
    margin: 0 auto;
    width: 100%;
    height: 400px;
  }

  .swiper-slide {
  }

  .swiper-slide:nth-child(1n) {
  }
`;

export default Banner;
