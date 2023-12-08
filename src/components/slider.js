import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
import img1 from "../images/hassan.jpg";
import img2 from "../images/rabat.jpg";
import img3 from "../images/tanger.jpg";
import img4 from "../images/marakech.jpg";


const Slider = () => {
    const slideStyle = {
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
      };
    

    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforChange", previousSlide, nextSlide )}
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}

            style={{
                backgroundColor : "rgba(0,0,0,0.33)"
            }}

            settings={{
                slidingDuration : 250,
                slidingDelay : 100,
                shouldAutoplay : true,
                shouldDisplayButtons : true,
                autoplayDuration : 5000,
                height : "100vh"
            }}

        >

            <Slide
            background={{
                backgroundImage : `url(${img1})`,
                backgroundAttachment: "fixed",
                ...slideStyle,
            }}

            />

           <Slide
            background={{
                backgroundImage : `url(${img2})`,
                backgroundAttachment: "fixed",
                ...slideStyle,
            }}

            />

           <Slide
            background={{
                backgroundImage : `url(${img3})`,
                backgroundAttachment: "fixed",
                ...slideStyle,
            }}

            />
            <Slide
            background={{
                backgroundImage : `url(${img4})`,
                backgroundAttachment: "fixed",
                ...slideStyle,
            }}

            />
        </HeroSlider>
       
    )
}
export default Slider;
