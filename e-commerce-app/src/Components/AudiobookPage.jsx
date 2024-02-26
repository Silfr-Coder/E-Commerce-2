function AudiobookPage() {
  return (
    <>
      {audiobookList.map((audiobook, index) => (
        <Audiobook
          key={index}
          title={audiobook.title}
          author={audiobook.author}
          bookLength={audiobook.bookLength}
          language={audiobook.language}
          summary={audiobook.summary}
        />
      ))}
    </>
  );
}

export default AudiobookPage;
