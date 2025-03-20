import axios from "axios";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [user, setUser] = useState({});

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        // console.log(data);
        setUser(data.user || {});
      } catch (error) {
        console.error("Error fetching Profile:", error);
      }
    };
    getMyProfile();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 ">
      <div className=" max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vasantharuban. All rights reserved.
        </p>

        {/* Right Section: Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors duration-300 hover:scale-105"
          >
            Home
          </button>
          <FooterLink to={user.githubURL} label="GitHub" />
          <FooterLink to={user.linkedinURL} label="LinkedIn" />
          <FooterLink to={`mailto:${user.email}`} label="Email" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors duration-300 hover:scale-105"
  >
    {label}
  </a>
);

export default Footer;
