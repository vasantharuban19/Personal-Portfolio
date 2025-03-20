import axios from "axios";
import { ChartGantt } from "lucide-react";
import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const getMyTimeline = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/timeline/getall",
          { withCredentials: true }
        );
        // console.log(data);
        setTimeline(data.timelines || []);
      } catch (error) {
        console.error("Error fetching timeline:", error);
      }
    };
    getMyTimeline();
  }, []);

  return (
    <div className="overflow-x-hidden w-full px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.7rem] mb-4 tracking-[3px] font-semibold text-gray-900 dark:text-white">
        Education
      </h1>
      <ol className="relative border-l-2 border-gray-400 dark:border-gray-800">
        {timeline?.map((e) => (
          <li className="mb-10 ml-6" key={e._id}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-800">
              <ChartGantt className="h-4 w-4 text-blue-600 dark:text-blue-300" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {e.title}
            </h3>
            <time className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              {e.timeline?.from || "Unknown"} - {e.timeline?.to || "Present"}
            </time>
            <p className="text-gray-600 dark:text-gray-400">{e.description}</p>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {e.grade}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
