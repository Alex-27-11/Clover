// Закомментировн способ добавления изображений в зависимости от ширины экрана
// import React, { useEffect, useState } from "react";
import React from "react";
import "./UniqDesign.scss";
import UniqComponent from "./UniqComponent";
// import Iph1Mob from "../../assets/images/mobil/UniqDesign/Iph1.png";
// import Iph2Mob from "../../assets/images/mobil/UniqDesign/Iph2.png";
// import Iph3Mob from "../../assets/images/mobil/UniqDesign/Iph3.png";
// import Iph1Tabl from "../../assets/images/tabl/UniqDesign/Iph1.png";
// import Iph2Tabl from "../../assets/images/tabl/UniqDesign/Iph2.png";
// import Iph3Tabl from "../../assets/images/tabl/UniqDesign/Iph3.png";
import Iph1Desc from "../../assets/images/desc/UniqDesign/Iph1.png";
import Iph2Desc from "../../assets/images/desc/UniqDesign/Iph2.png";
import Iph3Desc from "../../assets/images/desc/UniqDesign/Iph3.png";

const UniqDesign: React.FC = () => {
  //   const [width, setWidth] = useState(window.innerWidth);
  //   const breakpointDes = 769;
  //   const breakpointTab = 481;
  //   const breakpointDes = 1366;
  //   const breakpointTab = 769;

  //   useEffect(() => {
  //     const handleResizeWindow = () => setWidth(window.innerWidth);

  //     window.addEventListener("resize", handleResizeWindow);

  //     return () => {
  //       window.removeEventListener("resize", handleResizeWindow);
  //     };
  //   }, []);

  interface SliderImage {
    url: string;
  }

  //   const sliderImagesMob: SliderImage[] = [
  //     {
  //       url: Iph1Mob,
  //     },
  //     {
  //       url: Iph2Mob,
  //     },
  //     {
  //       url: Iph3Mob,
  //     },
  //   ];
  //   const sliderImagesTab: SliderImage[] = [
  //     {
  //       url: Iph1Tabl,
  //     },
  //     {
  //       url: Iph2Tabl,
  //     },
  //     {
  //       url: Iph3Tabl,
  //     },
  //   ];
  const sliderImagesDes: SliderImage[] = [
    {
      url: Iph1Desc,
    },
    {
      url: Iph2Desc,
    },
    {
      url: Iph3Desc,
    },
  ];

  //   if (width >= breakpointDes) {
  return <UniqComponent SliderImage={sliderImagesDes} />;
  //   }
  //   if (width >= breakpointTab) {
  //     return <UniqComponent SliderImage={sliderImagesTab} />;
  //   }
  //   return <UniqComponent SliderImage={sliderImagesMob} />;
};

export default UniqDesign;
