import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/project/getall",
          { withCredentials: true }
        );
        // console.log(data);
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    getMyProjects();
  }, []);
  return (
    <div>
      {/* Title */}
      <div className="relative mb-12">
        <h1
          className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.5rem] 
          md:text-[2.8rem] lg:text-[3rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] sm:tracking-[10px] mx-auto w-fit font-bold text-gray-900 dark:text-violet-600 bg-white dark:bg-[hsl(222.2_84%_4.9%)]"
        >
          <span className="text-tubeLight-effect font-bold">MY</span> PROJECTS
        </h1>
        <h1
          className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.5rem] 
          md:text-[2.8rem] lg:text-[3rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[5px] sm:tracking-[10px] mx-auto w-fit font-bold text-gray-900 dark:text-violet-600 bg-white dark:bg-[hsl(222.2_84%_4.9%)]"
        >
          <span className="text-tubeLight-effect font-bold">MY</span> WORK
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-gray-400 dark:bg-slate-200"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {(viewAll ? projects : projects.slice(0, 8)).map((project) => {
          return (
            <Link
              to={`/project/${project._id}`}
              key={project._id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.projectBanner?.url || "/avatarHolder.jpg"}
                alt={project.title || "Project Banner"}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              {/* Project Details */}
              <div className="p-3 flex justify-between items-center">
                <div className="relative group w-full">
                  <h2 className="text-md sm:text-lg font-bold text-gray-900 dark:text-white w-full">
                    {project.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 dark:text-violet-400 ">
                  View
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Show More / Less Button */}
      {projects.length > 8 && (
        <div className="w-full text-center my-9">
          <Button
            className="dark:bg-violet-900 dark:text-gray-100 dark:hover:bg-violet-700"
            onClick={() => setViewAll(!viewAll)}
          >
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Projects;
