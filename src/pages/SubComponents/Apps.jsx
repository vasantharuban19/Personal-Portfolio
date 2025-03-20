import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyApps = async () => {
      try {
        const { data } = await axios.get(
          "https://portfolio-backend-rmjr.onrender.com/api/v1/softwareapplication/getall",
          { withCredentials: true }
        );
        // console.log(data);
        setApps(data.softwareApplications);
      } catch (error) {
        console.error("Error fetching Apps:", error);
      } finally {
        setLoading(false);
      }
    };
    getMyApps();
  }, []);

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      {/* Title */}
      <h1
        className="w-fit mx-auto flex items-center font-bold text-[2rem] sm:text-[2.5rem] 
          md:text-[2.8rem] lg:text-[3rem] tracking-[10px] text-gray-900 dark:text-violet-600 
          bg-white dark:bg-[hsl(222.2_84%_4.9%)]"
      >
        <span className="text-tubeLight-effect font-bold">MY</span> APPS
      </h1>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading apps...</p>}

      {/* App Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {apps.length > 0
          ? apps.map((app) => (
              <Card
                className="h-fit p-6 flex flex-col justify-center items-center gap-3 border border-gray-700 dark:border-none rounded-lg shadow-md"
                key={app._id}
              >
                <img
                  src={app?.svg?.url || "/loader.png"}
                  alt={app.name || "App Image"}
                  className="h-12 w-auto sm:h-14 md:h-16 lg:h-20 object-contain"
                  loading="lazy"
                />
                <p className="text-center text-gray-700 dark:text-gray-300 font-medium">
                  {app.name}
                </p>
              </Card>
            ))
          : !loading && (
              <p className="text-center text-gray-500">No apps available.</p>
            )}
      </div>
    </div>
  );
};

export default Apps;
