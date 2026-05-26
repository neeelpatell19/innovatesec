import React from "react";
import "./AppStoreButtons.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const APP_STORE_URL = "https://apps.apple.com/app/id6762111197";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saral_info.moneymakerapi.innovate&pcampaignid=web_share";

const AppStoreButtons = () => (
  <div className="AppStoreButtons">
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="AppStoreButtons__btn"
    >
      <FaApple className="AppStoreButtons__icon" aria-hidden />
      <div className="AppStoreButtons__text">
        <span className="AppStoreButtons__sub">Download on the</span>
        <span className="AppStoreButtons__title">App Store</span>
      </div>
    </a>
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="AppStoreButtons__btn"
    >
      <FaGooglePlay className="AppStoreButtons__icon" aria-hidden />
      <div className="AppStoreButtons__text">
        <span className="AppStoreButtons__sub">Get it on</span>
        <span className="AppStoreButtons__title">Google Play</span>
      </div>
    </a>
  </div>
);

export default AppStoreButtons;
