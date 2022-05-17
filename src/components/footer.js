import React from "react";
import "./footer.css";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      ©{year} <a href="mailto:elijahsamuels@gmail.com">Elijah Samuels</a>
    </div>
  );
}

export default Footer;
