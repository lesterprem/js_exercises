const myLibrary=[];

function Book(title, author, pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
};

function addToLibrary() {
    const title = prompt("What's the book's title?");
    const author = prompt("Who wrote this book?");
    const pages = prompt("How long is the book?");
    return new Book(title, author, pages);
};

const table=document.querySelector(".booktable");
const thTitle=document.createElement('th'); 
thTitle.textContent="Title";
const thAuthor=document.createElement('th');
thAuthor.textContent="Author";
const thPages=document.createElement('th');
thPages.textContent="Pages";

table.appendChild(thTitle);
table.appendChild(thAuthor);
table.appendChild(thPages);

// Function to add a new table row for a book
function addTableRow(book) {
    const table = document.querySelector(".booktable");
    const trow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAutho = document.createElement('td');
    const tdPages = document.createElement('td');
    tdTitle.textContent = book.title;
    tdAutho.textContent = book.author;
    tdPages.textContent = book.pages;
    trow.appendChild(tdTitle);
    trow.appendChild(tdAutho);
    trow.appendChild(tdPages);
    table.appendChild(trow);
}

const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
    const newbook= addToLibrary();
    myLibrary.push(newbook);
    console.log(newbook);
    addTableRow(newbook);
});
