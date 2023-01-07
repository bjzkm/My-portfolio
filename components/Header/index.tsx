import { useLayoutEffect, useRef } from "react";
import useElementOffsetContext from "../../context/ElementOffsetContext";
import classes from "./styles/index.module.scss";

export default function Header() {
  const homeRef = useRef<HTMLInputElement>(null);
  const { setHomeOffset, activeElement} = useElementOffsetContext();

  useLayoutEffect(() => {
    homeRef.current && setHomeOffset(homeRef.current.offsetTop)
  }, [])

  return <header className={classes.header}>
    <h1 ref={homeRef} className={classes.title}>
      <span className={classes.titleHighlight}>Zin Kyaw Moe, </span> 
      full stack developer living in Myanmar.
    </h1>

    <div className={classes.actionButtons}>
      <a href="#" className={`
        ${classes.downloadCvButton}
        ${activeElement !== "home" && classes.small}
      `}>
        <span>Download&nbsp;</span>
        <span>CV</span>
      </a>
      <a href="mailto: zinkyawmoe.bj@gmail.com" className={classes.contactMeButton}>Contact Me</a>
    </div>
  </header>;
}
