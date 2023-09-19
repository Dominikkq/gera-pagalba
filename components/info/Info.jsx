import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import { review1, review2, review3 } from "./Reviews";
export default function Info() {
  return (
    <section>
      <div className="text-white pb-28">
        <div className="rounded-md bg-brand3 w-11/12 mx-auto flex flex-col md:flex-row items-center">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-6 md:p-20">
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 text-brand2">
              Specialisto pagalba už 15min
            </h2>
            <a
              href="#"
              className="bg-transparent text-yellow-300 rounded shadow py-2 px-4 border border-yellow-300 text-brand2 mt-4"
            >
              Rezervuoti vizitą
            </a>
          </div>
          <div className="lg:w-2/3 justify-center mt-4 mb-4">
            <div className="flex flex-wrap content-center justify-center">
              <div
                id="1"
                className="relative ml-10 hover:z-11 pr-4 md:pr-20 mt-2 mb-2 hover:scale-110 transition-transform"
              >
                <img className="block" src={person1.src} />
                <div className="text-brand bg-white opacity-75 px-2 md:px-4 py-2 rounded z-2 mt-2 mb-2 absolute top-1/2">
                  {review1}
                </div>
              </div>
              <div
                id="2"
                className="relative hover:z-10 mt-2 mb-2 mt-20 hover:scale-110 transition-transform"
              >
                <img
                  className="block p-4 md:p-0 scale-x-\[-1\] md:scale-x-\[1\]"
                  src={person2.src}
                />
                <div className="text-brand bg-white opacity-75 px-2 md:px-4 py-2 rounded mt-2 mb-2 absolute bottom-0 md:left-12 sm:left-12">
                  {review2}
                </div>
              </div>
              <div
                id="3"
                className="relative xl:pr-20 hover:z-11 mt-2 mb-2 lg:block hover:scale-110 transition-transform"
              >
                <img className="block" src={person3.src}></img>
                <div className="text-brand bg-white opacity-75 px-2 md:px-4 py-2 rounded absolute ">
                  {review3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
