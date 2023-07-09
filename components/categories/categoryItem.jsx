import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import star2 from "../../components/assets/icons/star2.png";
const CategoryItem = (props) => {
  function getColorClass(option) {
    const optionColors = {
      Traumos: "bg-amber-500",
      Nerimas: "bg-green-500",
      Depresija: "bg-red-500",
      Stresas: "bg-purple-500",
      Savigarba: "bg-indigo-500",
      Priklausomybės: "bg-sky-500",
      "LGBTQ+ klausimai": "bg-blue-500",
      "Šeimos problemos": "bg-pink-500",
      "Asmeninis augimas": "bg-cyan-500",
      "Santykių problemos": "bg-yellow-500",
      "Karjeros klausimai": "bg-teal-500",
      "Miego problemos": "bg-rose-500",
      "Mokymosi sunkumai": "bg-fuchsia-500",
      "Tėvystės klausimai": "bg-warm-gray-500",
      "Lytinės problemos": "bg-violet-500",
      "Emocinės problemos": "bg-emerald-500",
      "Gyvenimo pokyčiai": "bg-blue-gray-500",
      "Sveika gyvensena": "bg-cool-gray-500",
      "Socialinės fobijos": "bg-lime-500",
      "Konfliktų sprendimas": "bg-orange-500",
    };

    return optionColors[option] || "bg-gray-500";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {props.doctors.map((doctor) => {
        const {
          userId,
          name,
          profilePhoto,
          helpOptions,
          rates,
          averageRating,
        } = doctor;
        const doctorLink = `/user/${userId}`;

        return (
          <article key={userId}>
            <div className="  border-jacarta-100 rounded-2xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <Link href={doctorLink}>
                <Image
                  height={424}
                  width={424}
                  style={{
                    marginBottom: "10px",
                    borderRadius: "0.625rem",
                    cursor: "pointer",
                  }}
                  src={profilePhoto || "/images/collections/collection_1_1.jpg"}
                  alt="Doctor"
                  className="w-full h-full object-cover"
                />
              </Link>
              <div
                className="flex items-center"
                style={{ marginBottom: "5px" }}
              >
                <div
                  className=" flex items-center"
                  style={{
                    backgroundColor: "#64b551",
                    borderRadius: "15px",
                    justifyContent: "center",
                    width: "25%",
                  }}
                >
                  <p
                    className="text-md mr-1"
                    style={{ color: "white", fontWeight: "1000" }}
                  >
                    {averageRating}
                  </p>
                  <Image
                    width={22}
                    height={22}
                    alt="rating"
                    src={star2.src}
                    style={{ width: "20px" }}
                  />
                </div>
              </div>
              {Object.entries(rates)
                .filter(([time, value]) => value > 0) // Filter out zero rates
                .sort((a, b) => a[1] - b[1]) // Sort rates by value
                .map(([time, value], index, array) => {
                  if (index === 0 || value === array[0][1]) {
                    return (
                      <p
                        key={value}
                        style={{
                          fontWeight: "500",
                          fontSize: "1.3rem",
                        }}
                      >
                        {`${time}min/`}
                        <span style={{ color: "grey" }}>{`${value}€`}</span>
                      </p>
                    );
                  }
                  return null;
                })}

              <Link href={doctorLink}>
                <a
                  className="hover:text-accent mt-1 block"
                  style={{ fontSize: "1.2rem" }}
                >
                  {`${name} `}
                </a>
              </Link>

              <div
                className="mt-2 flex flex-wrap"
                style={{
                  borderTop: "solid 1px #D9D9D9",
                  paddingTop: "10px",
                }}
              >
                {helpOptions.map((option, index) => (
                  <span
                    key={index}
                    className={`text-xs rounded-full px-2 py-1 mr-1 mb-1 ${getColorClass(
                      option
                    )}`}
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default CategoryItem;
