import React, { useRef, useState, useEffect } from "react";
import "./AppDownload.css";
import AppStoreButtons from "../../AppStoreButtons/AppStoreButtons";

const AppDownload = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setIsVisible(true), 150);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      className={`AppDownloadSection ${isVisible ? "AppDownload--visible" : ""}`}
      ref={sectionRef}
    >
      <div className="MainContainer">
        <div className="Container">
          <div className="AppDownload__inner">
            <div className="SectionTagLabelContainer AppDownload__label">
              <div>
                <div className="flexVertically">
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/RocketPng.png"
                    alt="Download App"
                  />
                </div>
                <p>Innovate Securities App</p>
              </div>
            </div>
            <div className="AppDownload__copy text-center">
              <h2 className="AppDownload__title">Download our app</h2>
              <p className="AppDownload__subtitle">
                Now available on iOS &amp; Android — download today and stay
                connected on the go.
              </p>
            </div>
            <AppStoreButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
