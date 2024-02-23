//  create a template for audiobooks
class AudioBook {
  constructor(title, author, narrator, bookLength, language, summary) {
    this.title = title;
    this.author = author;
    this.bookLength = bookLength;
    this.language = language;
    this.summary = summary;
  }
}
//  Creating instances of the audiobooks
let atomicHabits = new Audiobook(
  "Atom Habits",
  "James Clear",
  "5hrs and 35mins",
  "English",
  "An Easy and Proven Way to Build Good Habits and Break Bad Ones"
);
let ultraProcessedPeople = new Audiobook(
  "Ultra-Processed People",
  "Chris van Tulleken, Dr Xand van Tulleken",
  "11hrs and 35mins",
  "English",
  "Why Do We All Eat Stuff That Isn’t Food...and Why Can’t We Stop?"
);

// create a list of all the books to export
const audioBookList = [atomicHabits, ultraProcessedPeople];

// export audiobookList as a named export, a list of objects as a React component
export { audioBookList };
// export as the default export
export default AudioBook;
