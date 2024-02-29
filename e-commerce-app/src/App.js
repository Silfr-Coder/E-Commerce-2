import "./App.css";
import AudioBook from "./AudioBook";
import { audioBookList } from "./AudioBook";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import { useRef } from "react";
import AudiobookPage from "./Components/AudiobookPage";
import BookImage from "./Components/open-book-2.jpeg";

function App() {
  // using the useState hook to manage the state of the basket
  //and the total cost
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  // setting-up the header
  const headerItems = [
    { className: "header-logo-box", text: "Ear Candy" },
    { className: "header-username-box", text: "UserName" },
    // { className: "header-credit-box", text: "Credit: " },
    { className: "header-welcome-box", text: "Welcome, " },
    {
      className: "header-spend-summary-box",
      text: "Total: £" + total.toFixed(2),
    },
  ];
  // setup scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // function to add audiobook to basket and update the total cost
  const addAudiobookToBasket = (audioBook) => {
    console.log(audioBook);
    //add the audiobook to the basket
    setBasket([...basket, audioBook]);
    //update the total cost and make audioBook.price a number
    const price = parseFloat(audioBook.price);
    console.log(audioBook.price);
    //update the total cost and round to 2 decimal places
    const newTotal = parseFloat(total + price).toFixed(2);
    setTotal(total + audioBook.price);
  };

  // update the selected audiobook
  const [selectedAudiobook, setSelectedAudiobook] = useState(null);

  // function to handle the click event is an audiobook is clicked
  const handleAudiobookClick = (audioBook) => {
    setSelectedAudiobook(audioBook);
  };
  //temporary function to print the selected audiobook to the console
  const printToScreen = (audioBook) => {
    console.log("Something was clicked", audioBook);
  };

  return (
    <>
      <div className="App-container">
        <Header headerItems={headerItems} />
        {/* display the main content of audiobooks here */}
        <div className="main-page-content">
          {/* if no audiobook is selected, display the whole list of audiobooks */}
          {!selectedAudiobook && (
            <div className="books-container">
              {/* map through the audiobook list and display each audiobook */}
              {audioBookList.map((audioBook, index) => (
                <div className="audiobook-wrapper">
                  <div
                    key={index}
                    className="audiobook-container"
                    // pass the audiobook object to the handleAudiobookClick
                    // function
                    onClick={() => handleAudiobookClick(audioBook)}
                  >
                    {/* display audiobook details and image */}
                    <h3>{audioBook.title}</h3>
                    <p>{audioBook.author}</p>
                    <p>£{audioBook.price}</p>
                    <img src={BookImage} alt="book" width={200} />
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
          {selectedAudiobook && (
            <div className="books-container">
              <AudiobookPage
                addAudiobookToBasket={addAudiobookToBasket}
                audioBook={selectedAudiobook}
                onClose={() => setSelectedAudiobook(null)}
              />
            </div>
          )}
          <div className="basket-container">
            {/* display the basket here */}
            <h3>Basket</h3>
            <ul>
              {basket.map((audioBook, index) => (
                <li key={index}>
                  <p>
                    {audioBook.title}: £{audioBook.price}
                  </p>
                  {/* button to remove audiobook from basket */}
                  <button
                    className="remove-Audiobook-button"
                    onClick={() => {
                      //remove the audiobook from the basket
                      const newBasket = [...basket];
                      newBasket.splice(index, 1);
                      // update the basket and the total cost
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
        </div>
        <button className="footer-top-of-page" onClick={scrollToTop}>
          Back to top
        </button>
      </div>
    </>
  );
}

export default App;
