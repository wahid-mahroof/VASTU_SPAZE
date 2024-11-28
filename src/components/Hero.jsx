import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
          VASTUSPAZE
        </h1>
        <p className="lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
          Reimagine Your Space with Expert Renovation Services
        </p>
        <img
          src="https://img.freepik.com/free-photo/room-with-comfortable-chairs-cushions_1122-1544.jpg?t=st=1732779817~exp=1732783417~hmac=dbcb484fb6d7ed36e8a0357a1b01ed91010acea7aba6dee06c267e5494daa60a&w=1800"
          alt=""
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
        />
      </div>
    </section>
  );
};

export default Hero;
