import React, { useRef, useState, useEffect } from "react";
import "./AppDownload.css";
import { FaGooglePlay, FaApple, FaChartLine, FaShieldAlt, FaBell } from "react-icons/fa";

const features = [
    {
        icon: <FaChartLine />,
        title: "Live Market Data",
        desc: "Real-time quotes, charts, and portfolio tracking — all in one place.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Bank-Grade Security",
        desc: "Every transaction is protected with enterprise-level encryption.",
    },
    {
        icon: <FaBell />,
        title: "Instant Alerts",
        desc: "Price movement and order updates delivered to you the moment they happen.",
    },
];

const AppDownload = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setTimeout(() => setIsVisible(true), 150); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    return (
        <div className={`AppDownloadSection ${isVisible ? "AppDownload--visible" : ""}`} ref={sectionRef}>
            <div className="MainContainer">
                <div className="Container">
                    <div className="paddingSide AppDownload__inner">

                        {/* Header */}
                        <div className="CommonHeader AppDownload__header">
                            <div className="SectionTagLabelContainer">
                                <div>
                                    <div className="flexVertically">
                                        <img
                                            src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/RocketPng.png"
                                            alt="Download App Icon"
                                        />
                                    </div>
                                    <p>Available on iOS &amp; Android</p>
                                </div>
                            </div>
                            <h2 className="text-center AppDownload__headline">
                                Trade Smarter —&nbsp;
                                <span className="AppDownload__headline-accent">Anywhere, Anytime.</span>
                            </h2>
                            <p className="AppDownload__desc text-center">
                                The Innovate Securities app puts 30+ years of market expertise in your pocket.
                                Monitor your portfolio, execute trades, and stay ahead of every market move.
                            </p>
                        </div>

                        {/* Feature cards */}
                        <div className="AppDownload__features">
                            {features.map((f, i) => (
                                <div key={i} className="AppDownload__feature-card">
                                    <span className="AppDownload__feature-icon">{f.icon}</span>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Store badges */}
                        <div className="AppDownload__badges">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.saral_info.moneymakerapi.innovate&pcampaignid=web_share"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="AppDownload__badge"
                            >
                                <FaGooglePlay className="AppDownload__badge-icon" />
                                <div className="AppDownload__badge-text">
                                    <span className="AppDownload__badge-sub">Get it on</span>
                                    <span className="AppDownload__badge-title">Google Play</span>
                                </div>
                            </a>
                            <a
                                href="https://apps.apple.com/app/id6762111197"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="AppDownload__badge"
                            >
                                <FaApple className="AppDownload__badge-icon" />
                                <div className="AppDownload__badge-text">
                                    <span className="AppDownload__badge-sub">Download on the</span>
                                    <span className="AppDownload__badge-title">App Store</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDownload;
