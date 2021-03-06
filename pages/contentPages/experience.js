
import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";


const Experience =()=> {
  
    return (
      <div className={styles.container}>
        <Head>
        <title>Aminalaabidi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-amina-abidi.png" />
        </Head>
        <div className="container">
          <h1>Experience</h1>
          <p>From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS.</p>
 <h4>Check out my latest web application projects.</h4>
 <br></br><br></br>
<div className="d-flex justify-content-between container">
          <figure className="fir-image-figure">

  <img className="fir-author-image fir-clickcircle" src="/simplo.svg" alt="Simplon"/>
  <div className="fir-imageover-color"></div>

<figcaption>
  <div className="fig-author-figure-title">FullStack-Developer</div>
  <div className="fig-author-figure-title">Monitoring students</div>
  <div className="fig-author-figure-title">Feb. 20th, 2020 &#8212; Aug. 1st, 2020</div>
</figcaption>
</figure>

<figure className="fir-image-figure">

<img className="fir-author-image fir-clickcircle" src="/le152.png" width="80px" alt="le15"/>
<div className="fir-imageover-color"></div>

<figcaption>
<div className="fig-author-figure-title">FullStack-Developer</div>
<div className="fig-author-figure-title">Work with Simplonien Team</div>
<div className="fig-author-figure-title">Aug. 1st, 2020 &#8212; Sep. 30th, 2020</div>
</figcaption>
</figure>
<figure className="fir-image-figure">

<img className="fir-author-image fir-clickcircle" src="/thechangers.png" alt="thechangers"/>
<div className="fir-imageover-color"></div>

<figcaption>
<div className="fig-author-figure-title">Webmaster</div>
<div className="fig-author-figure-title">creation web site</div>
<div className="fig-author-figure-title">Mai. 1st, 2021</div>
</figcaption>
</figure>
<figure className="fir-image-figure">

<img className="fir-author-image " style={{borderRadius:"11px"}} src="/Deginov.png" alt="thechangers"/>
<div className="fir-imageover-color"></div>

<figcaption>
<div className="fig-author-figure-title">Front-End Developer</div>
<div className="fig-author-figure-title">creation application web</div>
<div className="fig-author-figure-title">July. 1st, 2021</div>
</figcaption>
</figure>
</div>
       
    </div>
      </div>
    );
  }



export default Experience;
