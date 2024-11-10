import Image from "next/image";
import Card from "@/app/components/recent-card";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hello!My name is Sana Moin.Thanks for visiting my website.Kindly
                check my professional portfolio.
              </h1>
              <p className="main-para">
                I am a passionate web developer with a love for creating
                modern,user-friendly websites.I am also a sudent of GIAIC.I am
                specializing in Artificial Intelligence,Meta verse and Web3.0.I
                specialize in front-end development using technologies like
                React, Next.js, and Tailwind CSS.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div></div>
            <div>
              <Image
                src="/image.jpg"
                width={400}
                height={400}
                alt="person"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div>
              <div className="heading">
                <div></div>
                <h3>Recent Projects</h3>
              </div>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
            </div>
          </div>
        </div>
        <div className="featured-section">
          <div className="container">
            <div className="main">
              <div className="main-heading">
                <h3>Featured Works</h3>
              </div>

              <div className="card-parent">
                </div>
                
                <div className="card">
                  <Image
                    src="/image 3.jpg"
                    width={500}
                    height={450}
                    alt="image"
                  ></Image>
                  <div className="card-content">
            
     <h2>To-Do-List</h2>
                  
                <p>"A React & Type Script Based App"</p>
              </div>
           </div>
              <div className="card">
                <Image
                  src="/images 4 .jpg"
                  width={500}
                  height={250}
                  alt="image"
                ></Image>
                <div className="card-content">
                  <h2>Responsive Resume Builder</h2>
              
              <p>"HTML,CSS & Type Script Based Project"</p>
            </div>
            </div>
            <div className="card">
              <Image
                src="/image 1.png"
                width={600}
                height={300}
                alt="image"
              ></Image>
              <div className="card-content">
              <h2>Simple Calculator</h2>
              
              <p>"A React CSS,HTML & Type Script Based Project"</p>
          </div>
           </div> 
          </div>
          </div>
          </div>
          </div>
       
      </>
      
    
  );
};
