import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const NotFoundPage = () => {
  return (
    <main>
      <Navbar />
      <div className="px-5 py-10 md:py-32 md:px-10 lg:px-20 xl:px-24 2xl:px-32">
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-16 xl:gap-28 items-center justify-center">
            <h2 className="text-9xl lg:text-[15vw] text-[#000065] text-right font-medium">
              404
            </h2>
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl font-medium text-center lg:text-left">
              Sorry, This page isn't available.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
