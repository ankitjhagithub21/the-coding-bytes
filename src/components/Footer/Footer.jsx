import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "#151414",
  };

  return (
    <footer style={myStyle}>
      <div className="container mx-auto flex flex-wrap py-14 gap-3">
        <div className="w-full ml-3 lg:w-96">
          <Link to="/" aria-label="The Coding Bytes Home">
            <span className="text-3xl">
              The <span className="text-yellow-500">Coding</span> Bytes
            </span>
          </Link>
          <p className="ml-1 mb-5">Your Placement Buddy!</p>
          <p className="text-sm">
          We are providing free placement guidance, job opportunities and placement resources.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 text-left w-fit mx-auto">
          {/* Quick Links */}
          <div className="lg:w-1/4 w-1/2 px-4">
            <nav className="list-none mb-10">
              <h2 className="text-xl font-bold mb-3 border-b-2 pb-2 w-fit" style={{ borderColor: "#FF5E14" }}>Quick Links</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/courses"}>Courses</Link>
                </li>
                <li>
                  <Link to={"/code"}>Code</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Other Sections */}
          <div className="lg:w-1/4 w-1/2 px-4">
            <nav className="list-none mt-12">
             
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
                <li>
                  <Link to={"/compiler"}>Compiler</Link>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* More Sections */}
          <div className="lg:w-1/4 w-1/2 px-4">
            <nav className="list-none mb-10">
              <h2 className="text-xl font-bold mb-3 border-b-2 pb-2 w-fit" style={{ borderColor: "#FF5E14" }}>Explore</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Youtube</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Media */}
          <div className="lg:w-1/4 w-1/2 px-4">
            <nav className="list-none mt-12">
             
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
