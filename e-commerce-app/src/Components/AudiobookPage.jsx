import App from "../App";

function AudiobookPage({ audioBook }) {
  return (
    <div>
      <h3>Title: {audioBook.title}</h3>
      <p>author: {audioBook.author}</p>
      <p>bookLength: {audioBook.bookLength}</p>
      <p>language: {audioBook.language}</p>
      <p>summary: {audioBook.summary}</p>
      <p>£{audioBook.price}</p>
    </div>
  );
}

export default AudiobookPage;
