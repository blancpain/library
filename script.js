// DOM selectors
const mainElem = document.querySelector(".main");
const newBookForm = document.querySelector("#add-book-form");
const readCheckbox = document.querySelector("#read-checkbox");
const newBookSubmitButton = document.querySelector("#new-book-btn");
const popup = document.querySelector(".add-book-popup");
// vars
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Book.prototype.bookInfo = function _() {
//   return `${this.title} by ${this.author}, ${this.pages} pages, ${!this.read ? "not read yet" : "read"
//     }`;
// };

function showBookElement(book, index) {
  const newBookElem = document.createElement("div");
  const bookTitle = document.createElement("div");
  bookTitle.textContent = `"${book.title}"`;
  const bookAuthor = document.createElement("div");
  bookAuthor.textContent = book.author;
  const bookPages = document.createElement("div");
  bookPages.textContent = book.pages;
  newBookElem.classList.add("book");
  newBookElem.setAttribute("data-index", index);
  newBookElem.appendChild(bookTitle);
  newBookElem.appendChild(bookAuthor);
  newBookElem.appendChild(bookPages);

  // TODO: add read/not-read toggle + remove button
  mainElem.appendChild(newBookElem);
}

function createBookElement(e) {
  const title = newBookForm.children.title.value;
  const author = newBookForm.children.author.value;
  const pages = newBookForm.children.pages.value;
  const read = readCheckbox.children.read.checked !== false;
  if (title !== "" && author !== "" && pages !== "") {
    e.preventDefault();
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    const index = myLibrary.length - 1;
    showBookElement(newBook, index);
  }
}

// popup
const addBookButton = document.querySelector(".add-new-book");
addBookButton.addEventListener("click", () => {
  popup.classList.add("open-popup");
});

// create book
newBookSubmitButton.addEventListener("click", createBookElement);
