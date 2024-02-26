import "./App.css";
import AudioBook from "./AudioBook";
import { audioBookList } from "./AudioBook";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState } from "react";
import AudiobookPage from "./Components/AudiobookPage";

function App() {
  // setting-up the header
  const headerItems = [
    { className: "header-logo-box", text: "Ear Candy" },
    { className: "header-username-box", text: "UserName" },
    { className: "header-credit-box", text: "Credit: " },
    { className: "header-welcome-box", text: "Welcome, " },
    { className: "header-spend-summary-box", text: "Total: " },
  ];
  // setting up the footer
  const footerItems = [
    { className: "footer-home", text: "Home" },
    { className: "footer-top-of-page", text: "Top of Page" },
  ];
  // using the useState hook to manage the state of the basket and the total cost
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

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
  const handleAudiobookClick = (audiobook) => {
    setSelectedAudiobook(audiobook);
  };

  return (
    <>
      <div className="App-container">
        <Header headerItems={headerItems} />
        {/* display the main content here */}
        <div className="main-page-content">
          <div className="books-container">
            {audioBookList.map((audioBook, index) => (
              <div
                key={index}
                className="audiobook-container"
                onClick={() => handleAudiobookClick(audioBook)}
              >
                <h3>{audioBook.title}</h3>
                <p>{audioBook.author}</p>
                <p>{audioBook.bookLength}</p>
                <p>{audioBook.language}</p>
                <p>{audioBook.summary}</p>
                <p>£{audioBook.price}</p>
                {/* button to pass audiobook object directly to basket */}
                <button onClick={() => addAudiobookToBasket(audioBook)}>
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
                  {audioBook.title}: £{audioBook.price}
                  <button>Remove {audioBook.title} from basket</button>
                </li>
              ))}
            </ul>
            <h3>Total: £{parseFloat(total).toFixed(2)}</h3>
          </div>
        </div>
        {/* display footer here */}
        <Footer footerItems={footerItems} />
        // check if an audiobook is selected and display the audiobook page
        {/* {selectedAudiobook && (
          <AudiobookPage audiobook={selectedAudiobook.audiobook} />
          console.log({selectedAudiobook.audiobook});
        )} */}
      </div>
    </>
  );
}

export default App;
