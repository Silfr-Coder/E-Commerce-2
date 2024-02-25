import React from "react";

function Footer({ footerItems }) {
  return (
    <>
      <header className="footer-container">
        {footerItems.map((box, index) => (
          <div key={index} className={box.className}>
            {box.text}
          </div>
        ))}
      </header>
    </>
  );
}

export default Footer;
