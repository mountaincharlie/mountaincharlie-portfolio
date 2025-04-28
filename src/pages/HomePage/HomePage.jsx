import react from 'react';
import { FaGithubSquare, FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { IoDocumentText } from "react-icons/io5";
import './HomePage.scss';


const HomePage = () => {

  // TODO: make all items draggable for fun


  return (
    <div className="homepage">
      <div className="homepage-header">
        charlie harland
        <div className="homepage-header-small-text">software engineer</div>
      </div>

      {/* navigation */}
      <div className="homepage-nav">
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/charlie-harland' target='_blank'>
              <FaLinkedin/> <span className="homepage-nav-text">connect</span>
            </a>
          </li>

          <li>
            <a href='https://github.com/mountaincharlie' target='_blank'>
              <FaGithubSquare/> <span className="homepage-nav-text">code</span>
            </a>
          </li>

          <li>
            <a 
              href="/Charlie_Harland-CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoDocumentText/> <span className="homepage-nav-text">cv</span>
            </a>
          </li>

          {/* <li>
            <a href='' target='_blank'>
             <FaLaptopCode/> <span className="homepage-nav-text">Projects - coming soon...</span>
            </a>
          </li> */}
        </ul>
      </div>

      <div className="homepage-footer">
        <a href="https://www.youtube.com/@sounds_like_charlie" target="_blank">
          <span className="homepage-footer-item">
            <HiArrowSmLeft/> music
          </span>
        </a>
        <a href="https://unsplash.com/@mountaincharlie" target="_blank">
          <span className="homepage-footer-item">
            photos <HiArrowSmRight/>
          </span>
        </a>
      </div>
    </div>
  );
};

export default HomePage;