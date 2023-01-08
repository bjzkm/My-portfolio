import Head from "next/head";
import { useLayoutEffect, useRef } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import useElementOffsetContext from "../context/ElementOffsetContext";
import classes from '../styles/index.module.scss';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const { setMainContainer } = useElementOffsetContext();

  useLayoutEffect(() => {
    mainRef.current && setMainContainer({ main: mainRef.current })
  }, [setMainContainer])

  return (
    <>
      <Head>
        <title>Zin Kyaw Moe | Profile and Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Zin Kyaw Moe | Full-Stack Developer" />
        <meta property="twitter:title" content="Zin Kyaw Moe | Full-Stack Developer" />
        <meta property="og:image" content="/images/avatar.png" />
        <meta property="twitter:image" content="/images/avatar.png" />
        <meta property="og:description" content="My name is Zin Kyaw Moe, a full stack web developer from myanmar who have experience of 2 years in a web development." />
        <meta property="twitter:description" content="My name is Zin Kyaw Moe, a full stack web developer from myanmar who have experience of 2 years in a web development." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main ref={mainRef} className={classes.body}>
        <Header />
        <div className={classes.container}>
          <Sidebar />
          <MainContent />
        </div>
      </main>
    </>
  );
}
