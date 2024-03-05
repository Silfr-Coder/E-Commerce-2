import App from "../App";
import React from "react";
import BookImage from "../Components/open-book-2.jpeg";

// AudiobookPage component is used to render the audiobook information to the screen
// it takes in the audiobook information as a prop and renders it to the screen
function AudiobookPage({ audioBook, addAudiobookToBasket, onClose }) {
  const handleAddToBasket = () => {
    addAudiobookToBasket(audioBook);
  };
  return (
    // rendering the audiobook information to the screen
    <>
      <div className="audiobook-info-wrapper">
        <div className="audiobook-info">
          <img src={BookImage} alt="book" width={200} />
          <h3>Title: {audioBook.title}</h3>
          <h4>Author: {audioBook.author}</h4>
          <p>BookLength: {audioBook.bookLength}</p>
          <p>Language: {audioBook.language}</p>
          <p>
            <strong>Summary:</strong> {audioBook.summary}
          </p>
          <p>Price: £{audioBook.price}</p>
        </div>
        <div buttons>
          <button className="add-audiobook-button" onClick={handleAddToBasket}>
            <h3>Add to basket</h3>
          </button>
          <button className="home-button" onClick={onClose}>
            <h3>Return to Home Page</h3>
          </button>
        </div>
      </div>
    </>
  );
}

export default AudiobookPage;
