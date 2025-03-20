import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/user/portfolio/me",
          { withCredentials: true }
        );
        // console.log(data);
        setUser(data.user);
      } catch (error) {
        console.error("Error fetching Profile:", error);
      }
    };
    getMyProfile();
  }, []);

  return (
    <div className="overflow-x-hidden w-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-20">
      {/* Title */}
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.5rem] 
          md:text-[2.8rem] lg:text-[3rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[5px] sm:tracking-[10px] mx-auto w-fit font-bold text-gray-900 dark:text-violet-600 bg-white dark:bg-[hsl(222.2_84%_4.9%)] "
        >
          ABOUT <span className="text-tubeLight-effect font-bold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-gray-400 dark:bg-slate-200"></span>
      </div>
      <div>
        {/* Content */}
        <div className="grid md:grid-cols-2 my-8 sm:my-16 gap-10 sm:gap-14">
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src={user?.avatar?.url || "/default-avatar.jpg"}
              alt={user.fullName || "User Avatar"}
              className="bg-gray-300 dark:bg-white p-2 sm:p-4 h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] shadow-lg object-cover"
            />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-center text-lg leading-relaxed tracking-wide">
            <p>
              Hello, I’m <span className="font-bold">Vasantharuban</span>, a{" "}
              <span className="font-semibold text-violet-600">
                Full Stack Developer
              </span>{" "}
              with a strong focus on building high-performance, user-centric web
              applications.
            </p>
            <p>
              I specialize in **MERN Stack** (MongoDB, Express.js, React,
              Node.js) and have hands-on experience in both front-end and
              back-end development, ensuring seamless functionality and
              scalability.
            </p>
            <p>
              I enjoy crafting **robust and efficient** solutions, prioritizing
              performance, security, and clean code.
            </p>
            <p>
              Always eager to **learn new technologies** and collaborate on
              challenging projects. Feel free to explore my work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
