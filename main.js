const myLibrary=[];

function Book(title, author, pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
};

myLibrary.push(new Book("JK Rowling","Harry Potter", "800"));
myLibrary.push(new Book("Phil Knight","Shoe Dog", "600"));
myLibrary.push(new Book("Marcus Aurelius","Meditations", "200"));
// addToLibrary();
function addToLibrary(){
    const title=prompt("What's the book's title?");
    const author=prompt("Who wrote this book?");
    const pages=prompt("How long is the book?");
    myLibrary.push(new Book(title,author,pages));
    printTable(myLibrary);
};


function printTable(myLibrary){
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

myLibrary.forEach(item => {
    const trow=document.createElement('tr');
    const tdTitle=document.createElement('td');
    const tdAutho=document.createElement('td');
    const tdPages=document.createElement('td');
    tdTitle.textContent= item.title;
    tdAutho.textContent=item.author;
    tdPages.textContent=item.pages;
    table.appendChild(trow);
    table.appendChild(tdTitle);
    table.appendChild(tdAutho);
    table.appendChild(tdPages);
})
};

const newbook=document.querySelector('.btn');
newbook.addEventListener("click",addToLibrary);