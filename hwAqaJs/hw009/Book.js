export default class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value != 'string') {
            console.error("this title prohibited")
            return
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value != 'string') {
            console.error("this author prohibited")
            return
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value != 'number' || value <= 0) {
            console.error("this year prohibited")
            return
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Book name ${this.title}`)
        console.log(`Book author ${this.author}`)
        console.log(`Book year ${this.year}`)
    }

    static getOldestBook(books) {
        books.sort((a, b) => a.year - b.year);
        return books[0]

    }

}








