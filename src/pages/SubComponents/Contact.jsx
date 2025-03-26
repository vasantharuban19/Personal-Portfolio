import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        "https://portfolio-backend-rmjr.onrender.com/api/v1/message/send",
        { senderName, senderEmail, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSenderEmail("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || "Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col px-4">
      {/* Title */}
      <div className="relative mb-5">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.5rem] 
          md:text-[2.8rem] lg:text-[3rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[5px] sm:tracking-[10px] mx-auto w-fit font-bold text-gray-900 dark:text-violet-600 bg-white dark:bg-[hsl(222.2_84%_4.9%)] "
        >
          CONTACT <span className="text-tubeLight-effect font-bold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 xs:h-0 xs:top-0 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-gray-400 dark:bg-slate-200"></span>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleMessage}
          className="w-full max-w-lg bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md space-y-6"
        >
          <div className="flex flex-col gap-2">
            <Label className="text-lg text-gray-900 dark:text-white">
              Name
            </Label>
            <Input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Your Name"
              className="p-3 rounded-lg border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-lg text-gray-900 dark:text-white">
              Email
            </Label>
            <Input
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="Your Email Address"
              className="p-3 rounded-lg border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-lg text-gray-900 dark:text-white">
              Subject
            </Label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="p-3 rounded-lg border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-lg text-gray-900 dark:text-white">
              Message
            </Label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              className="h-32 p-2 border border-gray-400 rounded-md dark:bg-gray-900 dark:text-white dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>

          <div className="flex justify-end">
            {!loading ? (
              <Button className="w-full sm:w-52 dark:bg-violet-900 dark:text-gray-100 dark:hover:bg-violet-700">
                SEND MESSAGE
              </Button>
            ) : (
              <LoadingButton
                bgColor="dark:bg-violet-900 "
                width="w-full sm:w-52"
                content="SENDING"
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
