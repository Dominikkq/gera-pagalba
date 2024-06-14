import React from "react";

export default function Process() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "1024px",
    margin: "0 auto",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "30px",
  };

  const processContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const processCardStyle = {
    flexBasis: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "4px",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
  };

  const processCardHoverStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transform: "translateY(-5px)",
  };

  const processIconStyle = {
    width: "50px",
    height: "50px",
    marginBottom: "10px",
  };

  const processTitleStyle = {
    fontSize: "1.5rem",
    color: "#000",
    margin: "10px 0",
  };

  const processDescriptionStyle = {
    fontSize: "1rem",
    color: "#4a4a4a",
    textAlign: "center",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Procesas</h2>
      <div style={processContainerStyle}>
        <div
          style={processCardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, processCardHoverStyle)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, processCardStyle)
          }
        >
          <img
            style={processIconStyle}
            src="https://www.w3schools.com/spaces/files/window.10dd677d.svg"
            alt="Registration Icon"
          />
          <h3 style={processTitleStyle}>Registracija</h3>
          <p style={processDescriptionStyle}>
            Pakanka pateikti savo vardą, pavardę ir elektroninio pašto adresą.
          </p>
        </div>
        <div
          style={processCardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, processCardHoverStyle)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, processCardStyle)
          }
        >
          <img
            style={processIconStyle}
            src="https://www.w3schools.com/spaces/files/layout-wtf.2da17533.svg"
            alt="Registration Icon"
          />
          <h3 style={processTitleStyle}>Specialistai</h3>
          <p style={processDescriptionStyle}>
            Pasirinkite specialistą iš daugiau nei 20 skirtingų kategorijų.
            Raskite tinkamiausią ekspertą jūsų poreikiams ir situacijai.
          </p>
        </div>
        <div
          style={processCardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, processCardHoverStyle)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, processCardStyle)
          }
        >
          <img
            style={processIconStyle}
            src="https://www.w3schools.com/spaces/files/Frame.a8fb68c5.svg"
            alt="Registration Icon"
          />
          <h3 style={processTitleStyle}>Vizitas</h3>
          <p style={processDescriptionStyle}>
            Lengvai ir patogiai išsirinkite vizito laiką, pagal Jūsų poreikius.
          </p>
        </div>
      </div>
    </div>
  );
}
