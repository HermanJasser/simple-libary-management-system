/**hei på deg */

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

   getTitle(){
    return this.title;
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
        return `${super.getInfo()}, ${this.fileSize} MB`
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
        return `${super.getInfo()}, ${this.numPages} pages`
    }
}





//libary members

class LibraryMembers{
    #name;
    #memberId;
    #borrowedBooks = [];

    constructor(name, memberId){
        this.#name = name;
        this.#memberId = memberId;
        this.#borrowedBooks = [];

    }

    borrowBook(book){
        if(book.isAvailable()){
            book.borrowBook();
        this.#borrowedBooks.push(book);
        console.log(`${this.#name} borrowed ${book.title}`);
        } else {
            console.log(`${book.getTitle()} is not available`)
        }
    }

    returnBook(book){
        const index = this.#borrowedBooks.indexOf(book);
        if (index > -1) {
            this.#borrowedBooks.splice(index, 1);
            book.returnBook();
            console.log(`${this.#name} returned ${book.getTitle()}`);
        }else {
            console.log(`${book.getTitle()} is already returned`)
        }
    }

    getBorrowedBooks(){
        return this.#borrowedBooks;
    }

    getMemberId(){
        return this.#memberId;
    }
}

const member = new LibraryMembers("Alice", "M001");


//libary class

class Library {
    #books;
    #members;

    constructor(books = [], members = []) { 
        this.#books = [];
        this.#members = [];
    }

    addBook(book){
        this.#books.push(book);
    }

    addMember(member){
        this.#members.push(member);
    }

    findBookByTitle(title){
        return this.#books.find(book => book.getTitle() === title);
    }

    findMemberById(memberId){
        return this.#members.find(member => member.getMemberId() === memberId);
    }

    /*borrowBook(memberId, title){
        const foundBook = this.#books.find(book => book.getTitle() === title);
        const foundMember = this.#members.find(member => member.memberId === memberId);
        if(foundBook && foundMember){
        }
    }*/

    borrowBook(memberId, title) {
        const member = this.findMemberById(memberId);
        const book = this.findBookByTitle(title);
        if (member && book) {
        member.borrowBook(book);
        } else {
        console.log("Member or book not found.");
        }
        }

        returnBook(memberId, title) {
            const member = this.findMemberById(memberId);
            const book = this.findBookByTitle(title);
            if (member && book) {
            member.returnBook(book);
            } else {
            console.log("Member or book not found.");
            }
            }

            getAvailableBooks() {
                return this.#books.filter(book => book.isAvailable()).map(book => book.getTitle());
                }

}

const eBook = new EBook("JavaScript Essentials", "John Doe", "123456789", 5);
const printedBook = new PrintedBook("Learn Python", "Jane Smith", "987654321", 300);
console.log(eBook.getInfo());
console.log(printedBook.getInfo());
// Create a library and add books and members to it
const library = new Library();
library.addBook(eBook);
library.addBook(printedBook);
library.addMember(member);
console.log(library.findBookByTitle("JavaScript Essentials"))
//console.log(library);
;// Borrow a book
    library.borrowBook("M001", "JavaScript Essentials");
// Check borrowed books
console.log(member.getBorrowedBooks()); // ["JavaScript Essentials"]
// Return a book
library.returnBook("M001", "JavaScript Essentials");
// Check available books
console.log(library.getAvailableBooks()); // ["JavaScript Essentials", "Learn Python"]

/**/


