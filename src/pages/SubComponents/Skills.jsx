import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/skill/getall",
          { withCredentials: true }
        );
        // console.log(data);
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };
    getMySkills();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      {/* Title */}
      <h1
        className="w-fit mx-auto flex items-center font-bold text-[2rem] sm:text-[2.5rem] 
        md:text-[2.8rem] lg:text-[3rem] tracking-[10px] text-gray-900  dark:text-violet-600
        bg-white dark:bg-[hsl(222.2_84%_4.9%)]"
      >
        S<span className="text-tubeLight-effect font-bold">KILL</span>S
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-500">Loading skills...</p>
      )}

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {skills.length > 0
          ? skills.map((skill) => (
              <Card
                className="h-fit p-6 flex flex-col justify-center items-center gap-3 border border-gray-700 dark:border-none rounded-lg shadow-md"
                key={skill._id}
              >
                <img
                  src={skill?.svg?.url || "/loader.png"}
                  alt={skill.title || "Skill Image"}
                  className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain"
                  loading="lazy"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                  {skill.title}
                </p>
              </Card>
            ))
          : !loading && (
              <p className="text-center text-gray-500">No skills available.</p>
            )}
      </div>
    </div>
  );
};

export default Skills;
