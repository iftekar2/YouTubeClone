import React from "react";
import "./Style.css";

function FooterPage() {
  return (
    <section className="FooterSection">
      <div className="footerPage">
        <div className="copyRights">
          <p>© 2023 FitZone</p>
        </div>
        <div className="footerIcons">
          <a
            className="linkedIn"
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
          >
            <img src="../Images/linkedin.png" />
          </a>
          <a
            className="portfolio"
            href="https://inspiring-tartufo-2934f8.netlify.app/"
            target="_blank"
          >
            <img src="../Images/internet.png" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default FooterPage;
