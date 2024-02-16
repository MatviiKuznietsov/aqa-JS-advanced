import Book from "./Book.js";

export default class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year)
        this._fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value != 'string' || value.length > 4) {
            console.error("this fileFormat prohibited")
            return
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log('Ebook')
        super.printInfo()
        console.log(`format ${this.fileFormat}`)
    }

    static getEbook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat)
    }

}