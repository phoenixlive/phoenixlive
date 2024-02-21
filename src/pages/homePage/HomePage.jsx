import React from "react";
import styles from "./homePage.module.css";
import PreLoader from "../../components/homePage/preLoader/PreLoader.jsx";
import Hero from "../../components/homePage/hero/Hero.jsx";
import WhatWeDo from "../../components/homePage/whatWeDo/WhatWeDo.jsx";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* pre loader */}
      <PreLoader />

      {/* hero section */}
      <Hero />

      {/* what we do */}
      <WhatWeDo />
    </div>
  );
}
