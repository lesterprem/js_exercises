const myLibrary=[];

function Book(title, author, pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.is_deleted='false';
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
const thAction=document.createElement('th');
thAction.textContent="Action";

table.appendChild(thTitle);
table.appendChild(thAuthor);
table.appendChild(thPages);
table.appendChild(thAction);

// Function to add a new table row for a book
function addTableRow(book) {
    const table = document.querySelector(".booktable");
    const trow = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAutho = document.createElement('td');
    const tdPages = document.createElement('td');
    const tdAction = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'actionbutton';
    tdTitle.textContent = book.title;
    tdAutho.textContent = book.author;
    tdPages.textContent = book.pages;
    deleteButton.textContent="Delete";
    trow.appendChild(tdTitle);
    trow.appendChild(tdAutho);
    trow.appendChild(tdPages);
    trow.appendChild(tdAction);
    tdAction.appendChild(deleteButton);
    table.appendChild(trow);
}

myLibrary.push(new Book("Harry Potter", "JK Rowling", "999"))
myLibrary.push(new Book("When Breathe Becomes Air", "Harishchandran", "200"))
myLibrary.push(new Book("Shoe Dog", "Phil Knight", "450"))
myLibrary.forEach((item) => addTableRow(item));

const btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
    const newbook= addToLibrary();
    myLibrary.push(newbook);
    console.log(newbook);
    addTableRow(newbook);
});

const deletebuttons= document.querySelectorAll('.actionbutton');
deletebuttons.forEach((item) => {
    document.addEventListener("click", () => {
        const row= this.closest('tr');
        console.log(row);
    } )
})