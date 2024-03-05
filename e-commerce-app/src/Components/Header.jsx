import React from "react";
// Receive headerItems as a prop, which is then used to render the
// header elements using headerItems.map.
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
