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

addBookToLibrary();
