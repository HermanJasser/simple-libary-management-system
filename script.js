let output = document.querySelector(".output");
//book class
class Book {
    title;
    author;
    isbn;
    available;

    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    };

   getInfo(){
    return `${this.title}, ${this.author}, ${this.isbn}`
   }

   borrowBook(){
    this.available = false;
   }

   returnBook(){
    this.available = true;
   }

   isAvailable(){
    return this.available;
   }
}

//ebook class

class EBook extends Book{
    fileSize;

    constructor(title, author, isbn, fileSize){
        super(title, author, isbn);
        this.fileSize = fileSize;
    }

    getInfo(){
        return `${this.title}, ${this.author}, ${this.isbn}, ${this.fileSize} MB`
    }
}

// printed book class
class PrintedBook extends Book{
    numPages;

    constructor(title, author, isbn, numPages){
        super(title, author, isbn);
        this.numPages = numPages;
    }

    getInfo(){
        return `${this.title}, ${this.author}, ${this.isbn}, ${this.numPages} pages`
    }
}


const ebook = new EBook("JavaScript Essentials", "John Doe", "123456789", 5);
const printedBook = new PrintedBook("Learn Python", "Jane Smith", "987654321", 300);

console.log(ebook.getInfo());
console.log(printedBook.getInfo());
//libary members

class LibraryMembers{
    #name;
    #memberId;
    #borrowedBooks = [];

    constructor(name, memberId){
        this.#name = name;
        this.#memberId = memberId;

    }

    borrowBook(book){
        if(book.isAvailable()){
            book.borrowBook();
        this.#borrowedBooks.push(book);
        console.log(`${this.#name} borrowed ${book.title}`);
        } else {
            console.log(`${book.title} is not available`)
        }
    }

    returnBook(book){
        const index = this.#borrowedBooks.indexOf(book);
        if (index > -1) {
            book.returnBook();
            this.#borrowedBooks.splice(index, 1);
            console.log(`${this.#name} returned ${book.title}`);
        }else {
            console.log(`${book.title} is already returned`)
        }
    }

    getBorrowedBooks(){
        return this.#borrowedBooks;
    }
}

const member = new LibraryMembers("Alice", "M001");


//libary class

class Library {
    #books = [];
    #members = [];

    constructor(books = [], members = []) { 
        this.#books = books;
        this.#members = members;
    }

    addBook(book){
        this.#books.push(book);
    }

    addMember(member){
        this.#members.push(member);
    }

    findBookByTitle(title){
        const foundBook = this.#books.find(book => book.title === title);
        return foundBook ? foundBook : `No book found with the title: ${title}`;
    }

    findMemberById(memberId){
        const foundMember = this.#members.find(member => member.memberId === memberId);
        return foundMember ? foundMember : `No member found with the member Id: ${memberId}`
    }

    borrowBook(memberId, title){
        const foundBook = this.#books.find(book => book.title === title);
        const foundMember = this.#members.find(member => member.memberId === memberId);
        if(foundBook && foundMember){
        }
    }

}



// Create a library and add books and members to it
const library = new Library();
library.addBook(EBook);
library.addBook(PrintedBook);
library.addMember(member);
console.log(library.findBookByTitle("JavaScript Essentials"))
console.log(library);
;// Borrow a book
    /*library.borrowBook("M001", "JavaScript Essentials");
// Check borrowed books
/*console.log(member.getBorrowedBooks()); // ["JavaScript Essentials"]
// Return a book
/*library.returnBook("M001", "JavaScript Essentials");
// Check available books
console.log(library.getAvailableBooks()); // ["JavaScript Essentials", "Learn Python"]

/**/


