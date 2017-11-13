var txt = [];
var library = [
    {
        author: "Bill gates",
        title: "A The road ahead",
        readingStatus: true
    },
    {
        author: "Steve jobs",
        title: "Apple",
        readingStatus: true
    },
    {
        author: "Mark Zukrburg",
        title: "Facebook",
        readingStatus: false
    }
];
for (var i = 0; i < library.length; i++) {
    console.log(library[i].author + "\n" + library[i].title + "\n" + library[i].readingStatus);

    alert(library[i].author + "\n" + library[i].title + "\n" + library[i].readingStatus);

}

