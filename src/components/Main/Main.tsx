import React from "react";
import "./Main.scss";
import WhatIsClover from "../WhatIsClover/WhatIsClover";
import ThreeIph from "../ThreeIph/ThreeIph";
import UniqDesign from "../UniqDesign/UniqDesign";
import Shtick from "../Shtick/Shtick";
import Android from "../Android/Android";
import Acquaintance from "../Acquaintance/Acquaintance";

const Main: React.FC = () => {
  function isVisible(elem: HTMLElement) {
    if (!elem) return;
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    let extendedTop = -windowHeight;
    let extendedBottom = 2 * windowHeight;

    let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
    let bottomVisible =
      coords.bottom < extendedBottom && coords.bottom > extendedTop;

    return topVisible || bottomVisible;
  }

  window.addEventListener("scroll", showVisible);
  showVisible();

  function showVisible() {
    let vis = document.querySelectorAll("#vis") as NodeList | null;
    if (vis != null) {
      vis.forEach((visEl) => {
        let visVal = visEl as HTMLElement;
        if (isVisible(visVal)) {
          visVal.style.transform = "translateY(0)";
        }
      });
    }
  }

  return (
    <main className="main">
      <WhatIsClover />
      <ThreeIph />
      <UniqDesign />
      <Shtick />
      <Android />
      <Acquaintance />
    </main>
  );
};

export default Main;
