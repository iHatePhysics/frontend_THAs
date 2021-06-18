function displaystat(x){
    for(i=0;i < x.length;i++){
        console.log(`\nBook Name:${x[i].title}`)
        console.log(`Author:${x[i].author}`)
        console.log(`Reading Status:${x[i].readingStatus}`)
    }
}
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

displaystat(library)