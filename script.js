const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.bookInfo = function _() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? "not read yet" : "read"
    }`;
};

function addBookToLibrary() {
  const book = prompt("Book title? ");
  const author = prompt("Author? ");
  const pages = prompt("How many pages? ");
  const read = prompt("Have you read the book? Y/N ");
  const readFlag = read === "Y";

  const newBook = new Book(book, author, pages, readFlag);
  myLibrary.push(newBook);
}

const book1 = new Book("Book1", "author 1", 123, true);
const book2 = new Book("Book2", "author 2", 123, true);
const book3 = new Book("Book3", "author 3", 123, true);
const book4 = new Book("Book4", "author 4", 123, true);
const book5 = new Book("Book5", "author 5", 123, true);
const book6 = new Book("Book6", "author 6", 123, true);

// add book button
const addBookButton = document.querySelector(".add-new-book");

addBookButton.addEventListener("click", addBookToLibrary);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);

const mainElem = document.querySelector(".main");

myLibrary.forEach((book) => {
  const newBookElem = document.createElement("div");
  const bookTitle = document.createElement("div");
  bookTitle.textContent = `"${book.title}"`;
  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = book.author;
  const bookPages = document.createElement("div");
  bookPages.textContent = book.pages;

  newBookElem.classList.add("book");

  newBookElem.appendChild(bookTitle);
  newBookElem.appendChild(bookAuthor);
  newBookElem.appendChild(bookPages);

  mainElem.appendChild(newBookElem);
});
