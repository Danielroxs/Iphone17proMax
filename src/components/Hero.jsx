import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 1023 ? smallHeroVideo : heroVideo,
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 17 Pro
        </p>
        <div className={isMobile ? "w-5/12" : "w-9/12"}>
          <video
            className={
              !isMobile
                ? "pointer-events-none absolute bottom-0 w-8/12 left-1/2 -translate-x-1/2 z-10"
                : "pointer-events-none"
            }
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        className={
          !isMobile ? "absolute bottom-0 left-1/2 -translate-x-1/2 z-20" : ""
        }
      >
        <div
          id="cta"
          className="flex
                   flex-col
                   items-center
                   opacity-0
                   translate-y-20"
        >
          <a href="highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
