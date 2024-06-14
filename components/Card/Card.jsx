import React from "react";
import Image from "next/image";
import Link from "next/link";
import star2 from "../../components/assets/icons/star2.png";

const Card = ({ doctor, getColorClass }) => {
  const { userId, name, profilePhoto, helpOptions, rates, averageRating } =
    doctor;
  const doctorLink = `/user/${userId}`;
  return (
    <article>
      <div className="  border-jacarta-100 rounded-2xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
        <Link href={doctorLink}>
          <Image
            width={424}
            height={424}
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
        <div className="flex items-center" style={{ marginBottom: "5px" }}>
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
            {`${name}`}
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
};

export default Card;
