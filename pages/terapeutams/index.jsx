import React, { useState } from "react";
import axios from "axios";
import "tippy.js/dist/tippy.css"; // optional
import Image from "next/image";
const Create = () => {
  const [image, setImage] = useState(null);
  const [therapistDetails, setTherapistDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    extraDetails: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = () => {
      const base64Image = btoa(reader.result);
      setImage(`data:${file.type};base64,${base64Image}`);
    };
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTherapistDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/therapistSignUp",
        therapistDetails
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="relative py-24" style={{ height: "100vh" }}>
        <picture className="pointer-events-none absolute inset-0 -z-10 ">
          <Image
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
            layout="fill"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium ">
            Terapistų registracijos forma
            <p className="mt-4 text-sm text-center text-gray-600">
              Susisieksime su Jumis per 24 valandas, kad patvirtintume Jūsų
              registraciją.
            </p>
          </h1>

          <div className="mx-auto max-w-[48.125rem] px-6">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
                {[
                  {
                    name: "fullname",
                    label: "Vardas, pavardė",
                    required: true,
                  },
                  { name: "email", label: "El. Paštas" },
                  { name: "phoneNumber", label: "Tel. Numeris" },
                ].map((input) => (
                  <div key={input.id} className="col-span-1 sm:col-span-2">
                    <span className="font-display text-jacarta-700 text-sm font-semibold ">
                      {input.label} <span style={{ color: "red" }}>*</span>
                    </span>
                    <div
                      className="bg-white rounded-md "
                      style={{
                        boxShadow:
                          "5px 5px 20px rgba(174, 174, 192, 0.4), -5px -5px 20px rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      <input
                        className="w-full min-w-0 py-2 px-3 bg-transparent border-none rounded-md shadow-none focus:outline-none focus:ring-0 focus:border-0"
                        placeholder={input.placeholder}
                        id={input.id}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-span-1 sm:col-span-2">
                  <span className="font-display text-jacarta-700 text-sm font-semibold ">
                    Papildoma informacija
                  </span>
                  <div
                    className="bg-white rounded-md "
                    style={{
                      boxShadow:
                        "5px 5px 20px rgba(174, 174, 192, 0.4), -5px -5px 20px rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <textarea
                      className="w-full min-w-0 py-2 px-3 bg-transparent border-none rounded-md shadow-none focus:outline-none focus:ring-0 focus:border-0"
                      name="extraDetails"
                      id="extraDetails"
                      rows="4"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  style={{
                    backgroundColor: "#00E573",
                    borderRadius: "20px",
                    minWidth: "80px",
                    flexFlow: "column",
                  }}
                  className={
                    "text-jacarta-700 font-display hover:text-accent focus:text-accent flex items-center justify-between py-3.5 text-base lg:px-5"
                  }
                >
                  <span style={{ color: "white" }} className={"text-white"}>
                    Siūsti
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
