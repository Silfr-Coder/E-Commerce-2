import App from "../App";

function AudiobookPage({ selectedAudiobook }) {
  return (
    <div>
      <h3>title={selectedAudiobook.title}</h3>
      <p>author={selectedAudiobook.author}</p>
      <p>bookLength={selectedAudiobook.bookLength}</p>
      <p>language={selectedAudiobook.language}</p>
      <p>summary={selectedAudiobook.summary}</p>
      <p>£{selectedAudiobook.price}</p>
    </div>
  );
}

export default AudiobookPage;
