class LibraryItem {
    constructor(title, id) {
        this.title = title;
        this.id = id;
        this.isAvailable = 1;
    }

    checkOut() {
        this.isAvailable = 0;
    }

    checkIn() {
        this.isAvailable = 1;
    }
}

class Book extends LibraryItem {
    constructor(title, id, author, genre) {
        super(title, id);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends LibraryItem {
    constructor(title, id, director, duration) {
        super(title, id);
        this.director = director;
        this.duration = duration;
    }
}

class Magazine extends LibraryItem {
    constructor(title, id, issueNumber, publisher) {
        super(title, id);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}

let peterPan = new Book("Peter Pan", 1, "JM Barrie", "Fantasy");
console.log(peterPan);
peterPan.checkOut();
console.log(peterPan);
peterPan.checkIn();
console.log(peterPan);

let sinners = new DVD("Sinners", 2, "Ryan Coogler", 137);
console.log(sinners);

let afghanGirl = new Magazine("Afghan Girl", 3, "June 1985", "National Geographic");
console.log(afghanGirl);