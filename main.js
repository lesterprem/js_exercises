let myLibrary = [   
    {title:"LOTR",author:"JRR Tolkien",pages:749,read:"yes"},
    {title:"Air",author:"Nike Owner",pages:450,read:"yes"},
    {title:"1984",author:"George Orwell",pages:550,read:"no"},
    {title:"Hitchiker's Guide to Galaxy",author:"Douglas Adams",pages:250,read:"yes"}
];
const bookTable=document.querySelector("table");
myLibrary.forEach(item => {
    const tHead=bookTable.createTHead();
    
}
);
/*
function Book(title, author, pages, read){
    this.title= title,
    this.author= author;
    this.pages= pages;
    this.read= read;
    this.info= function() {
        return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
};

addToLibrary();
function addToLibrary(){
    const title=prompt("Enter book title");
    const author=prompt("Who authored this book?");
    const pages=prompt("How long is the book?");
    const read=prompt("Have you read it yet?");
    // myLibrary.push(new Book(title, author, pages, read));

}

//book1= new Book('The Hobbit','JRR Tolkien','794','is not read');
*/
console.table(myLibrary);

