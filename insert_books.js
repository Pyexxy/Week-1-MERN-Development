// Insert 10 sample books into the 'books' collection of 'plp_bookstore'
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 9.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 15.50,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    published_year: 2011,
    price: 20.00,
    in_stock: false,
    pages: 498,
    publisher: "Harper"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 14.99,
    in_stock: true,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 16.99,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 8.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 12.00,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 18.00,
    in_stock: false,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 10.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 13.49,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  }
]);