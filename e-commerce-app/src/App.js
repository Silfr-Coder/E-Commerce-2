import "./App.css";
import { audioBookList } from "./AudioBook";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import AudiobookPage from "./Components/AudiobookPage";
import BookImage from "./Components/open-book-2.jpeg";
import { getAudiobooks } from "./e-commerce-API";

function App() {
  // using the useState hook to manage the state of the basket,
  // the total cost
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  // update the selected audiobook
  const [selectedAudiobook, setSelectedAudiobook] = useState(null);

  // setup scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 20, left: 20, behavior: "smooth" });
  };

  // function to add audiobook to basket and update the total cost
  const addAudiobookToBasket = (audioBook) => {
    //add the audiobook to the basket
    setBasket([...basket, audioBook]);
    //update the total cost
    setTotal(total + audioBook.price);
  };

  // function to handle the click event is an audiobook is clicked
  const handleAudiobookClick = (audioBook) => {
    setSelectedAudiobook(audioBook);
    console.log(`Audiobook clicked" ${audioBook.title} ${audioBook.author}`);
  };
  // //temporary function to print the selected audiobook to the console
  const printToScreen = () => {
    console.log("Something was clicked");
  };

  // function to handle the close event of the audiobook page
  const handleCloseAudiobookPage = () => {
    setSelectedAudiobook(null);
  };

  // using the useEffect hook to fetch the audiobooks from the Azure database
  const [audioBookList, setAudioBookList] = useState([]);
  async function fetchAudioBooks() {
    //including a try catch block to handle any errors
    try {
      const audioBooks = await getAudiobooks();
      setAudioBookList(audioBooks);
    } catch (error) {
      console.error("Error fetching audiobooks", error);
    }
  }

  useEffect(() => {
    fetchAudioBooks();
  }, []);

  // return the main content of the app
  return (
    <>
      <div className="App-container">
        {/* display the header */}
        <Header
          headerItems={[
            { className: "header-logo-box", text: "Ear Candy" },
            {
              className: "headerhandle-username-box",
              text: "Welcome: ",
            },
            { className: "header-welcome-box", text: "" },
            {
              className: "header-spend-summary-box",
              text: "Total: £" + total.toFixed(2),
            },
          ]}
        />
        {/* display the main content of audiobooks here */}
        <div className="main-page-content">
          {/* using ternary check if audiobook is selected */}
          {selectedAudiobook ? (
            // if audiobook is not selected, display the audiobook page
            <div className="books-container">
              display the audiobook page from Azure database
              {audioBookList.length > 0 &&
                audioBookList.map((audioBook, index) => {
                  return <h1>{audioBook.audioBook}</h1>;
                })}
              <AudiobookPage
                addAudiobookToBasket={addAudiobookToBasket}
                audioBook={selectedAudiobook}
                onClose={handleCloseAudiobookPage}
              />
            </div>
          ) : (
            // if audiobook is selected, display the audiobook list
            <div className="books-container">
              {/* map through the audiobook list and display each audiobook */}
              {audioBookList.map((audioBook, index) => (
                <div className="audiobook-wrapper" key={index}>
                  <div
                    className="audiobook-container"
                    // pass the audiobook object to the handleAudiobookClick function
                    onClick={() => handleAudiobookClick(audioBook)}
                  >
                    {/* display audiobook details and image */}
                    <h3>{audioBook.title}</h3>
                    <p>{audioBook.author}</p>
                    <p>£{audioBook.price.toFixed(2)}</p>
                    <img src={BookImage} alt="book" />
                  </div>
                  {/* button to pass audiobook object directly to basket */}
                  <button
                    className="add-audiobook-button"
                    onClick={() => addAudiobookToBasket(audioBook)}
                  >
                    <h3>Add to basket</h3>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Display the basket */}
      <div className="basket-container">
        <h3>Basket</h3>
        <ul>
          {basket.map((audioBook, index) => (
            <li key={index}>
              <p>
                {audioBook.title}: £{audioBook.price.toFixed(2)}
              </p>
              {/* button to remove audiobook from basket */}
              <button
                className="remove-Audiobook-button"
                onClick={() => {
                  const newBasket = [...basket];
                  newBasket.splice(index, 1);
                  setBasket(newBasket);
                  setTotal(total - audioBook.price);
                }}
              >
                <h5>Remove from basket</h5>
              </button>
            </li>
          ))}
        </ul>
        <h3>Total: £{parseFloat(total).toFixed(2)}</h3>
      </div>

      {/* Scroll to top of page button */}
      <button className="top-of-page-btn" onClick={scrollToTop}>
        Back to top
      </button>
    </>
  );
}

export default App;
