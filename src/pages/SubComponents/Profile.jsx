import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquareCode,
  Mouse,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Profile = ({ contactRef, aboutRef }) => {
  const [user, setUser] = useState({});

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToAbout = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="mt-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Online Status */}
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p className="text-gray-600 dark:text-gray-400">Online</p>
      </div>

      {/* Name & Title */}
      <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-wide mb-4">
        Hey, I'm {user.fullName || "User Loading..."}
      </h1>

      <h1 className="text-tubeLight-effect text-[1.3rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem] tracking-[10px]">
        FULLSTACK DEVELOPER
      </h1>

      {/* Social Media Links */}
      <div className="w-fit px-5 py-2 bg-slate-50 dark:bg-gray-800 rounded-[20px] flex gap-5 items-center mt-6">
        {user.githubURL && (
          <Link to={user.githubURL} target="_blank" rel="noopener noreferrer">
            <Github className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform" />
          </Link>
        )}
        {user.linkedinURL && (
          <Link to={user.linkedinURL} target="_blank" rel="noopener noreferrer">
            <Linkedin className="text-sky-500 hover:scale-110 transition-transform" />
          </Link>
        )}
        {user.gmailURL && (
          <Link
            to={`mailto:${user.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="text-red-300 hover:scale-110 transition-transform" />
          </Link>
        )}
      </div>

      {/* Buttons (GitHub & Resume) */}
      <div className="mt-6 flex flex-wrap gap-3 md:gap-5">
        {user.resume?.url && (
          // <Link to={user.resume.url} target="_blank" rel="noopener noreferrer">
          <Button className="w-32 flex items-center rounded-[30px]">
            <ExternalLink />
            <span>Resume</span>
          </Button>
          // </Link>
        )}

        <Button
          onClick={handleScrollToContact}
          className="w-32 flex items-center rounded-[30px]"
        >
          <MessageSquareCode />
          <span>Contact Me</span>
        </Button>
      </div>

      {/* About Me */}
      {user.aboutMe && (
        <p className="mt-8 text-lg tracking-wide text-gray-700 dark:text-gray-300">
          {user.aboutMe}
        </p>
      )}

      <div className="flex justify-center mt-6">
        <Mouse
          onClick={handleScrollToAbout}
          className="my-3 cursor-pointer text-gray-500 dark:text-gray-300 hover:scale-110 transition-transform"
          size={27}
        />
      </div>

      <hr className="my-8 md:my-10 border-gray-300 dark:border-gray-600" />
    </div>
  );
};

export default Profile;
