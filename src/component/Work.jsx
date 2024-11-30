import "./Work.css";
import { gsap } from "gsap"; //installed
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import photo6 from "../assets/images/photo6.png";
import photo3 from "../assets/images/photo3.png";
import photo8 from "../assets/images/photo8.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo7 from "../assets/images/photo7.jpg";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const box = useRef();
  useGSAP(() => {
    let t17 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        //markers: true,
        scrub: 1,
      },
    });
    t17.to("#demo", {
      bottom: "7%",
    });

    t17.to(
      ".our-work-txt-div",
      {
        height: "80vh",
      },
      "height"
    );
    t17.to(
      ".our-work-txt",
      {
        height: "80vh",
      },
      "height"
    );
    t17.to(
      "#our",
      {
        left: "-10%",
      },
      "height"
    );
    t17.to(
      "#work",
      {
        right: "-10%",
      },
      "height"
    );
    t17.to(".scroll-img", {
      marginTop: "-300%",
    });
  }),
    { scope: box };

  return (
    <>
      <div id="main" ref={box}>
        <div className="part-7">
          <div className="our-work-txt">
            <h1 id="our">Our</h1>
            <h1 id="work">Work</h1>
          </div>
          <div className="our-work-txt-div">
            <div className="scroll-work">
              <div className="scroll-img">
                <img src={photo6} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
                <img src={photo8} alt="" />
                <img src={photo6} alt="" />
                <img src={photo7} alt="" />
              </div>
            </div>
          </div>
          <button id="demo">Book a demo</button>
        </div>
      </div>
    </>
  );
};

export default Work;
