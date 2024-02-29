//  create a template class for each audiobook
class AudioBook {
  constructor(title, author, price, bookLength, language, summary, image) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.bookLength = bookLength;
    this.language = language;
    this.summary = summary;
    this.image = image;
  }
}
//  Creating instances of the audiobooks
let AtomicHabits = new AudioBook(
  "Atomic Habits",
  "James Clear",
  8.0,
  "5hrs and 35mins",
  "English",
  "An Easy and Proven Way to Build Good Habits and Break Bad Ones",
  "BookImage"
);
let UltraProcessedPeople = new AudioBook(
  "Ultra-Processed People",
  "Chris van Tulleken, Dr Xand van Tulleken",
  10.0,
  "11hrs and 35mins",
  "English",
  "Why Do We All Eat Stuff That Isn’t Food...and Why Can’t We Stop?",
  "BookImage"
);
let GrowAndMakeYourOwnDestiny = new AudioBook(
  "Grow and Make Your Own Destiny",
  "Paul & Lynette Penman",
  12.0,
  "3hrs and 35mins",
  "English",
  "Practical steps to live your best life at any age!",
  "BookImage"
);
let GrokkingAlgorithms = new AudioBook(
  "Grokking Algorithms",
  "Aditya Bhargava",
  15.0,
  "7hrs and 35mins",
  "English",
  "An illustrated guide for programmers and other curious people",
  "BookImage"
);
let TheArtOfThinkingClearly = new AudioBook(
  "The Art of Thinking Clearly",
  "Rolf Dobelli",
  20.0,
  "9hrs and 35mins",
  "English",
  "Better Thinking, Better Decisions",
  "BookImage"
);
let ThePowerOfHabit = new AudioBook(
  "The Power of Habit",
  "Charles Duhigg",
  25.0,
  "10hrs and 35mins",
  "English",
  "Why We Do What We Do in Life and Business",
  "BookImage"
);
let ScarySmart = new AudioBook(
  "Scary Smart",
  "Mo Gawdat",
  30.0,
  "12hrs and 35mins",
  "English",
  "The Future of Artificial Intelligence and How You Can Save Our World",
  "BookImage"
);
let ThePowerOfNow = new AudioBook(
  "The Power of Now",
  "Eckhart Tolle",
  35.0,
  "13hrs and 35mins",
  "English",
  "A Guide to Spiritual Enlightenment",
  "BookImage"
);
let TheMiracleMorning = new AudioBook(
  "The Miracle Morning",
  "Hal Elrod",
  40.0,
  "14hrs and 35mins",
  "English",
  "The 6 Habits That Will Transform Your Life Before 8AM: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis nulla nibh, at dictum ipsum maximus in. Proin faucibus nunc eget lorem suscipit convallis. Nam eu felis eu massa sagittis ullamcorper eu at mauris. Quisque non velit non dolor dapibus interdum non vel tellus. Pellentesque placerat euismod congue. Maecenas iaculis vitae ipsum et elementum. Praesent tristique diam erat, at mattis justo ornare sed. Vestibulum nec tortor in ipsum tempor elementum. Nam viverra dapibus lacus sagittis dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sem mauris, blandit sit amet dolor nec, vehicula fringilla ligula. Morbi faucibus nunc eu lorem accumsan, vel rutrum mauris imperdiet. Integer tempus finibus dui, at sollicitudin orci ornare non. Ut urna est, hendrerit eget efficitur sit amet, auctor in ante. Etiam ut nisi eget tellus bibendum mollis. Suspendisse facilisis ex ut tincidunt aliquam. Fusce id pellentesque nibh. Aenean ligula quam, luctus non feugiat eu, venenatis id metus. Morbi ornare consequat ligula sed ornare. Suspendisse in lorem vel dui dapibus tempor ut non sem. Cras sagittis, eros quis laoreet lacinia, tellus est ullamcorper felis, sit amet commodo nunc sapien eleifend dolor. Aliquam vitae nunc ac turpis dictum semper et eu orci. Duis ultricies dapibus erat, non vehicula nulla euismod at.",
  "BookImage"
);
let NeverFinished = new AudioBook(
  "Never Finished",
  "David Goggins",
  12.99,
  "11hrs and 6mins",
  "English",
  "Unshackle Your Mind and Win the War Within"
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
  NeverFinished,
];

// export audiobookList as a named export, a list of objects as a React component
export { audioBookList };
// export as the default export
export default AudioBook;
