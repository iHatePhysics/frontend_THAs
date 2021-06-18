function sortObj(x){
    for (i=0;i<x.length;i++){
        let o = {}
        o.author = x[i].author
        o.libraryID = x[i].libraryID
        o.title = x[i].title
        x[i] = o
        delete o
    }
     return x.sort((a,b) => b.libraryID - a.libraryID);
    //console.log(x)
}

let library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log(sortObj(library))