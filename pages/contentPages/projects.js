//import styles from '../../styles/Home.module.css'

import lottie from "lottie-web";
import Head from "next/head";
import React ,{useEffect,useRef} from "react"
import styles from "../../styles/Home.module.css";
import Data from '../../data.json'
export default function projects(){


  const contain=useRef(null)
  useEffect(()=>{
    lottie.loadAnimation({
      container:contain.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData: require("../../public/cssjson/project.json.json")
       })
	},[])

    return (
      <div className={styles.container}>
      <Head>
      <title>AminaAbidi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-amina-abidi.png" />
      </Head>


  
<br></br> <br></br> 
<div class="container ">
  projects
{Data.map((projectsDetails, index) => {
   return (
  <div id="card" class="dark-bg">
  </div>
     );
  })}
</div>




  
    
{/* <div className="container">
<h1 className="mt-5">My projects</h1>

  <p className="description">From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS.</p>
 <h4>Check out my latest web application projects.</h4>

	
		
				<div className="col-md-12">
       
					<div className="row">
						<div className="col-md-6">
              <img src="/project.gif" width="400px"></img>
						</div>
						<div className="col-md-6 mt-5">
          
{Data.map((projectsDetails, index) => {
            return (
<div key={index} className="blog-card">
    <div className="meta">
      <div className="photo" style={{ 
      backgroundImage: `url(${projectsDetails.image})` 
    }}></div>
      <ul className="details">
      <i className="fab fa-react fa-3x"></i> &ensp;&ensp;
      
      <i className="fab fa-node fa-3x"></i> &ensp;&ensp;
      <i className="fab fa-sass fa-3x"></i> &ensp;&ensp;
      <i className="fab fa-git fa-3x"></i>&ensp;&ensp;
      <i className="fab fa-html5 fa-3x"></i>
      </ul>
    </div>
    <div className="description">
      <h1>{projectsDetails.name}</h1>
      <h2>Releasing date: {projectsDetails.Releasing_Date}</h2>
      <p>{projectsDetails.description} </p>
      <p className="read-more">
        <a href={projectsDetails.link}><i className="fab fa-github"></i></a>
      </p>
    </div>
  </div>
       );
      })}
      </div>
					
					</div>
				</div>
			</div> */}
		
    </div>


    );
  }
