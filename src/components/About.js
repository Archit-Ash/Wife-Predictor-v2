import React from "react";
import "./photo.css";

export default function About() {
  const wifestyle2 = {
    margin: "0",
    background: "#A7C7E7",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px 20vw",
    minHeight: "200px",
    color: "rgb(248, 122, 143)",
    // fontFamily:
  };

  return (
    <>
      <div
        className="superClass"
        style={{
          backgroundColor: "#A7C7E7",
          color: "rgb(248, 122, 143)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="circular-image">
          <img
            src="CVmin.jpg"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid rgb(248, 122, 143)",
              boxSizing: "border-box",
              animation: "border-pulse 2s infinite",
            }}
            alt="Shubham Singh"
          />
        </div>
        <div
          className="text"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <section style={wifestyle2}>
            <h1 style={{ textDecoration: "underline" }}>About Me</h1>
            <p>
              This is Shubham Singh Mahar. I am a First Year Undergrad pursuing
              Bachelors in Technology with Computer Science Eng. major from a
              tier-3 college in Ghaziabad. I am from Haldwani, Nanital,
              Uttarakhand. The code for this project is available in the GitHub
              repository{" "}
              <a href="https://github.com/1Shubham7/Wife-Predictor">
                Wife-Predictor
              </a>
              . Starring the repository on GitHub would be really helpful!
            </p>
            <p>
              Do check out my blog{" "}
              <a href="https://1shubham7.hashnode.dev/">1Shubham7</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
