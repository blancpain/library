const mainElem = document.querySelector(".main");
const myLibrary = [];

function addBookToDisplay() {
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
}

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
  addBookToDisplay();
}
const popup = document.querySelector(".add-book-popup");

// add book button JUST TESTING BELOW THAT IT WORKS...
const addBookButton = document.querySelector(".add-new-book");
addBookButton.addEventListener("click", () => {
  popup.classList.add("open-popup");
});
