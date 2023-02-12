// DOM selectors
const mainElem = document.querySelector(".main");
const newBookForm = document.querySelector("#add-book-form");
const readCheckbox = document.querySelector(".read-checkbox");
const newBookSubmitButton = document.querySelector("#new-book-btn");
const popup = document.querySelector(".add-book-popup");
const filter = document.querySelector(".filter");
const addBookButton = document.querySelector(".add-new-book");
// vars
const myLibrary = [];
let index = 0;

class Book {
  constructor(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
  }
}

function showBook(book, index) {
  const newBookElem = document.createElement("div");
  // book title
  const bookTitleContainer = document.createElement("div");
  const bookTitle = document.createElement("span");
  bookTitle.textContent = `"${book.title}"`;
  bookTitleContainer.appendChild(bookTitle);
  // author
  const authorContainer = document.createElement("div");
  const authorLabel = document.createElement("span");
  const author = document.createElement("span");
  authorLabel.textContent = "by ";
  author.textContent = book.author;
  authorContainer.appendChild(authorLabel);
  authorContainer.appendChild(author);
  // pages
  const bookPagesContainer = document.createElement("div");
  const pagesLabel = document.createElement("span");
  const pages = document.createElement("span");
  pagesLabel.textContent = "pages";
  pages.textContent = book.pages;
  bookPagesContainer.appendChild(pages);
  bookPagesContainer.appendChild(pagesLabel);
  // read & remove buttons
  const buttonContainer = document.createElement("div");
  const readToggleButton = document.createElement("button");
  const removeButton = document.createElement("button");
  readToggleButton.classList.add("toggle-read-button");
  if (book.read) {
    readToggleButton.textContent = "Read";
    readToggleButton.classList.add("bgc-read");
  } else {
    readToggleButton.textContent = "Not read";
    readToggleButton.classList.add("bgc-not-read");
  }
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");

  // add event listeners for buttons
  removeButton.addEventListener("click", () => {
    const bookIndex = Number(
      removeButton.parentElement.parentElement.getAttribute("data-index")
    );
    const currentBook = removeButton.parentElement.parentElement;
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].index === bookIndex) {
        myLibrary.splice(i, 1);
        currentBook.remove();
      }
    }
  });

  readToggleButton.addEventListener("click", () => {
    const bookIndex = Number(
      readToggleButton.parentElement.parentElement.getAttribute("data-index")
    );
    for (let i = 0; i < myLibrary.length; i++) {
      if (
        myLibrary[i].index === bookIndex &&
        readToggleButton.textContent === "Read"
      ) {
        myLibrary[i].read = false;
        readToggleButton.classList.remove("bgc-read");
        readToggleButton.classList.add("bgc-not-read");
        readToggleButton.textContent = "Not read";
      } else if (
        myLibrary[i].index === bookIndex &&
        readToggleButton.textContent === "Not read"
      ) {
        myLibrary[i].read = true;
        readToggleButton.classList.remove("bgc-not-read");
        readToggleButton.classList.add("bgc-read");
        readToggleButton.textContent = "Read";
      }
    }
  });

  buttonContainer.appendChild(readToggleButton);
  buttonContainer.appendChild(removeButton);
  // book general
  newBookElem.classList.add("book");
  newBookElem.setAttribute("data-index", index);
  newBookElem.appendChild(bookTitleContainer);
  newBookElem.appendChild(authorContainer);
  newBookElem.appendChild(bookPagesContainer);
  newBookElem.appendChild(buttonContainer);

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
    const newBook = new Book(title, author, pages, read, index);
    myLibrary.push(newBook);
    // const index = myLibrary.length - 1;
    showBook(newBook, index);
    // close popup & clear form
    popup.classList.remove("open-popup");
    filter.classList.toggle("filter-opened");
    index += 1;
    clearForm();
    addBookButton.classList.remove("disableButtons");
  }
}

// open popup
addBookButton.addEventListener("click", () => {
  addBookButton.classList.add("disableButtons");
  popup.classList.add("open-popup");
  filter.classList.toggle("filter-opened");
});

// close popup w/ click & w/ ESC
filter.addEventListener("click", () => {
  addBookButton.classList.remove("disableButtons");
  popup.classList.remove("open-popup");
  filter.classList.toggle("filter-opened");
});
window.addEventListener("keydown", (e) => {
  if (popup.classList[1] === "open-popup" && e.key === "Escape") {
    addBookButton.classList.remove("disableButtons");
    popup.classList.remove("open-popup");
    filter.classList.toggle("filter-opened");
  }
});
// create book
newBookSubmitButton.addEventListener("click", createBook);
