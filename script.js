var books = [
  //Biography
  { title: 'Leonardo da Vinci ', author: 'Walter Isaacson'},
  { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou and Oprah Winfrey' },
  { title: 'Spare Parts', author: 'Joshua Davis' },
  { title: 'Open', author: 'Andre Agassi' },
  { title: 'Educated', author: 'Tara Westover' },
  { title: 'Kissinger', author: 'Niall Ferguson' },
  { title: 'Washington', author: 'Ron Chernow' },

  //Business & Money
  { title: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!', author: 'Robert T. Kiyosaki' },
  { title: 'The Psychology of Money: Timeless lessons on wealth, greed, and happiness ', author: 'Morgan Housel' },
  { title: 'High Output Management', author: 'Andrew S. Grove' },
  { title: 'Shop Management', author: 'Andrew S. Grove' },
  { title: 'High Output Management', author: 'Andrew S. Grove' },
  { title: 'High Output Management', author: 'Frederick Winslow Taylor' },
  { title: 'Principles For Dealing With the Changing World Order: Why Nations Succeed and Fail', author: 'Ray dalio' },
  { title: 'The Richest Man in Babylon', author: 'George S. Clason' },

  //literature fiction
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'High Output Management', author: 'Andrew S. Grove' },
  { title: '1984', author: 'George Orwell, Thomas Pynchon' },
  { title: 'Pride and Prejudice', author: 'Jane Austen, Anna Quindlen' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'Moby-Dick', author: 'Herman Melville ' },
  { title: 'War and Peace Leo Tolstoy', author: 'Aylmer Maude (Translator), Louise Maude (Translator)' },

  //philosophy
  { title: 'The Art of War', author: 'Sun Tzu, Thomas Cleary ' },
  { title: '  Meditations ', author: 'Marcus Aurelius' },
  { title: ' The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living', author: ' Ryan Holiday' },
  { title: 'Deep Thinking: Where Machine Intelligence Ends and Human Creativity ', author: 'Beginsby Garry Kasparov,Mig Greengard' },
  { title: ' Lives of the Stoics: The Art of Living from Zeno to Marcus Aurelius', author: 'Marcus Aurelius' },
  { title: '  Meditations ', author: '  Ryan Holiday' },
  { title: 'The Metamorphosis', author: 'Marcus Aurelius' },
  { title: '  Meditations ', author: 'Franz Kafka, Stanley Corngold' },
  { title: '  The Laws of Human Nature ', author: 'Robert Greene' },

  //Self-help
  { title: '  The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life', author: ' Mark Manson' },
  { title: 'How to Win Friends and Influence People', author: 'Dale Carnegie' },
  { title: 'Talk Like TED: The 9 Public-Speaking Secrets of the Worlds Top Minds ', author: 'Carmine Gallo' },
  { title: 'How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships', author: 'Leil Lowndes' },
  { title: 'The Power of Now: A Guide to Spiritual Enlightenment', author: 'Eckhart Tolle ' },

  // Add more books as needed
  
   
  
  
  
  
, 
];

function generateBook() {
  var randomIndex = Math.floor(Math.random() * books.length);
  var randomBook = books[randomIndex];
  document.getElementById('title').textContent = randomBook.title;
  document.getElementById('author').textContent = randomBook.author;
}
