// DOM selectors
const mainElem = document.querySelector(".main");
const newBookForm = document.querySelector("#add-book-form");
const readCheckbox = document.querySelector(".read-checkbox");
const newBookSubmitButton = document.querySelector("#new-book-btn");
const popup = document.querySelector(".add-book-popup");
const filter = document.querySelector(".filter");
// vars
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showBook(book, index) {
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

function clearForm() {
  newBookForm.children.title.value = "";
  newBookForm.children.author.value = "";
  newBookForm.children.pages.value = "";
  readCheckbox.children.read.checked = false;
}

function createBook(e) {
  const title = newBookForm.children.title.value;
  const author = newBookForm.children.author.value;
  const pages = newBookForm.children.pages.value;
  const read = readCheckbox.children.read.checked !== false;
  if (title !== "" && author !== "" && pages !== "") {
    e.preventDefault();
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    const index = myLibrary.length - 1;
    showBook(newBook, index);
    // close popup & clear form
    popup.classList.remove("open-popup");
    filter.classList.toggle("filter-opened");
    clearForm();
  }
}

// open popup
const addBookButton = document.querySelector(".add-new-book");
addBookButton.addEventListener("click", () => {
  popup.classList.add("open-popup");
  filter.classList.toggle("filter-opened");
});

// close popup w/ click & w/ ESC
filter.addEventListener("click", () => {
  popup.classList.remove("open-popup");
  filter.classList.toggle("filter-opened");
});
window.addEventListener("keydown", (e) => {
  if (popup.classList[1] === "open-popup" && e.key === "Escape") {
    popup.classList.remove("open-popup");
    filter.classList.toggle("filter-opened");
  }
});
// create book
newBookSubmitButton.addEventListener("click", createBook);
