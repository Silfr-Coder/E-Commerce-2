import React from "react";

function Header({ headerItems }) {
  return (
    <>
      <header className="header-container">
        {headerItems.map((box, index) => (
          <div key={index} className={box.className}>
            {box.text}
          </div>
        ))}
      </header>
    </>
  );
}

export default Header;
