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
  10.99,
  "5hrs and 35mins",
  "English",
  "An Easy and Proven Way to Build Good Habits and Break Bad Ones, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let UltraProcessedPeople = new AudioBook(
  "Ultra-Processed People",
  "Chris van Tulleken, Dr Xand van Tulleken",
  12.99,
  "11hrs and 35mins",
  "English",
  "Why Do We All Eat Stuff That Isn’t Food...and Why Can’t We Stop? ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let GrowAndMakeYourOwnDestiny = new AudioBook(
  "Grow and Make Your Own Destiny",
  "Paul & Lynette Penman",
  11.99,
  "3hrs and 3mins",
  "English",
  "Practical steps to live your best life at any age! ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let GrokkingAlgorithms = new AudioBook(
  "Grokking Algorithms",
  "Aditya Bhargava",
  11.99,
  "3hrs and 46mins",
  "English",
  "An illustrated guide for programmers and other curious people, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let TheArtOfThinkingClearly = new AudioBook(
  "The Art of Thinking Clearly",
  "Rolf Dobelli",
  12.99,
  "9hrs and 6mins",
  "English",
  "Better Thinking, Better Decisions, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let ThePowerOfHabit = new AudioBook(
  "The Power of Habit",
  "Charles Duhigg",
  10.99,
  "10hrs and 53mins",
  "English",
  "Why We Do What We Do in Life and Business, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let ScarySmart = new AudioBook(
  "Scary Smart",
  "Mo Gawdat",
  12.99,
  "11hrs and 20mins",
  "English",
  "The Future of Artificial Intelligence and How You Can Save Our World, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let ThePowerOfNow = new AudioBook(
  "The Power of Now",
  "Eckhart Tolle",
  16.0,
  "7hrs and 37mins",
  "English",
  "A Guide to Spiritual Enlightenment, ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
  "BookImage"
);
let TheMiracleMorning = new AudioBook(
  "The Miracle Morning",
  "Hal Elrod",
  14.99,
  "7hrs and 22mins",
  "English",
  "The 6 Habits That Will Transform Your Life Before 8AM: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis nulla nibh, at dictum ipsum maximus in. Proin faucibus nunc eget lorem suscipit convallis. Nam eu felis eu massa sagittis ullamcorper eu at mauris. Quisque non velit non dolor dapibus interdum non vel tellus. Pellentesque placerat euismod congue. Maecenas iaculis vitae ipsum et elementum. Praesent tristique diam erat, at mattis justo ornare sed. Vestibulum nec tortor in ipsum tempor elementum. Nam viverra dapibus lacus sagittis dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam sem mauris, blandit sit amet dolor nec, vehicula fringilla ligula. Morbi faucibus nunc eu lorem accumsan, vel rutrum mauris imperdiet. Integer tempus finibus dui, at sollicitudin orci ornare non. Ut urna est, hendrerit eget efficitur sit amet, auctor in ante. Etiam ut nisi eget tellus bibendum mollis. Suspendisse facilisis ex ut tincidunt aliquam. Fusce id pellentesque nibh. Aenean ligula quam, luctus non feugiat eu, venenatis id metus. Morbi ornare consequat ligula sed ornare. Suspendisse in lorem vel dui dapibus tempor ut non sem. Cras sagittis, eros quis laoreet lacinia, tellus est ullamcorper felis, sit amet commodo nunc sapien eleifend dolor. Aliquam vitae nunc ac turpis dictum semper et eu orci. Duis ultricies dapibus erat, non vehicula nulla euismod at.",
  "BookImage"
);
let NeverFinished = new AudioBook(
  "Never Finished",
  "David Goggins",
  19.99,
  "11hrs and 6mins",
  "English",
  "Unshackle Your Mind and Win the War Within. ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate"
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
