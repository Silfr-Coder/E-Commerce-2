import "./App.css";
import AudioBook from "./AudioBook";
import { audioBookList } from "./AudioBook";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import AudiobookPage from "./Components/AudiobookPage";
import BookImage from "./Components/open-book-2.jpeg";

function App() {
  // using the useState hook to manage the state of the basket and the total cost
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
  // setting up the footer
  const footerItems = [
    // { className: "footer-home", text: "Home" },
    { className: "footer-top-of-page", text: "Top of Page" },
  ];

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

  //
  const [selectedAudiobook, setSelectedAudiobook] = useState(null);

  // function to handle the click event is an audiobook is clicked
  const handleAudiobookClick = (audioBook) => {
    setSelectedAudiobook(audioBook);
  };

  const printToScreen = (audioBook) => {
    console.log(selectedAudiobook);
  };

  return (
    <>
      <div className="App-container">
        <Header headerItems={headerItems} />
        {/* display the main content here */}
        <div className="main-page-content">
          <div className="books-container">
            {selectedAudiobook && (
              <AudiobookPage
                audioBook={selectedAudiobook}
                onClose={() => setSelectedAudiobook(null)}
              />
            )}
            {audioBookList.map((audioBook, index) => (
              <div
                key={index}
                className="audiobook-container"
                // pass the audiobook object to the handleAudiobookClick
                //function
                onClick={() => {
                  handleAudiobookClick(audioBook);
                }}
              >
                <h3>{audioBook.title}</h3>
                <p>{audioBook.author}</p>
                {/* <p>{audioBook.bookLength}</p>
                <p>{audioBook.language}</p>
                <p>{audioBook.summary}</p> */}
                <p>£{audioBook.price}</p>
                <img src={BookImage} alt="book" width={200} />

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
        {/* display footer here */}
        <Footer footerItems={footerItems} />
      </div>
    </>
  );
}

export default App;
