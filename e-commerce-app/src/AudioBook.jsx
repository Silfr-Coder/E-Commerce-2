//  create a template class for each audiobook
class AudioBook {
  constructor(title, author, price, bookLength, language, summary) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.bookLength = bookLength;
    this.language = language;
    this.summary = summary;
  }
}
//  Creating instances of the audiobooks
let AtomicHabits = new AudioBook(
  "Atomic Habits",
  "James Clear",
  8.0,
  "5hrs and 35mins",
  "English",
  "An Easy and Proven Way to Build Good Habits and Break Bad Ones"
);
let UltraProcessedPeople = new AudioBook(
  "Ultra-Processed People",
  "Chris van Tulleken, Dr Xand van Tulleken",
  10.0,
  "11hrs and 35mins",
  "English",
  "Why Do We All Eat Stuff That Isn’t Food...and Why Can’t We Stop?"
);
let GrowAndMakeYourOwnDestiny = new AudioBook(
  "Grow and Make Your Own Destiny",
  "Paul & Lynette Penman",
  12.0,
  "3hrs and 35mins",
  "English",
  "Practical steps to live your best life at any age!"
);
let GrokkingAlgorithms = new AudioBook(
  "Grokking Algorithms",
  "Aditya Bhargava",
  15.0,
  "7hrs and 35mins",
  "English",
  "An illustrated guide for programmers and other curious people"
);
let TheArtOfThinkingClearly = new AudioBook(
  "The Art of Thinking Clearly",
  "Rolf Dobelli",
  20.0,
  "9hrs and 35mins",
  "English",
  "Better Thinking, Better Decisions"
);
let ThePowerOfHabit = new AudioBook(
  "The Power of Habit",
  "Charles Duhigg",
  25.0,
  "10hrs and 35mins",
  "English",
  "Why We Do What We Do in Life and Business"
);
let ScarySmart = new AudioBook(
  "Scary Smart",
  "Mo Gawdat",
  30.0,
  "12hrs and 35mins",
  "English",
  "The Future of Artificial Intelligence and How You Can Save Our World"
);
let ThePowerOfNow = new AudioBook(
  "The Power of Now",
  "Eckhart Tolle",
  35.0,
  "13hrs and 35mins",
  "English",
  "A Guide to Spiritual Enlightenment"
);
let TheMiracleMorning = new AudioBook(
  "The Miracle Morning",
  "Hal Elrod",
  40.0,
  "14hrs and 35mins",
  "English",
  "The 6 Habits That Will Transform Your Life Before 8AM"
);

// create a list of all the books to export
const audioBookList = [
  AtomicHabits,
  UltraProcessedPeople,
  GrowAndMakeYourOwnDestiny,
  GrokkingAlgorithms,
  TheArtOfThinkingClearly,
  ThePowerOfHabit,
  ScarySmart,
  ThePowerOfNow,
  TheMiracleMorning,
];

// export audiobookList as a named export, a list of objects as a React component
export { audioBookList };
// export as the default export
export default AudioBook;
