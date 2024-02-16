import Book from "./Book.js";
import EBook from "./EBook.js";

/*** Create books ***/
const firstBook = new Book("First", "Din", 2018)
const secondBook = new Book("Second", "Bob", 2015)
const thirdBook = new Book("Third", "Tom", 2022)
/*** Create Ebooks ***/
const eBook1 = new EBook("EbookFirst", "Jane", 1955, 'PDF')
const eBook2 = new EBook("EbookSecond", "Jane", 1856, 'JPG')
const eBook3 = new EBook("EbookThird", "Jane", 1934, 'TIFF')
/*** test setters ***/
firstBook.title = "FirstChange"
secondBook.title = 5
thirdBook.author = 5
thirdBook.year = "-5"
eBook1.fileFormat = "PDF"
eBook1.fileFormat = "INVALID"
eBook2.title = 1
/*** test getters ***/
const titleBook = firstBook.title
const authorBook = secondBook.author
const yearBook = thirdBook.year
console.log(`title = ${titleBook} author = ${authorBook} year = ${yearBook}`)
/*** print Books ***/
firstBook.printInfo()
secondBook.printInfo()
thirdBook.printInfo()
/*** print Ebooks ***/
eBook1.printInfo()
eBook2.printInfo()
eBook3.printInfo()
/*** create Ebooks from Book ***/
const eBook4 = EBook.getEbook(firstBook, "PDF")
eBook4.printInfo()
/*** find the oldest book from array ***/
const oldestBook = Book.getOldestBook([firstBook, secondBook, thirdBook, eBook1, eBook2, eBook3])
oldestBook.printInfo()