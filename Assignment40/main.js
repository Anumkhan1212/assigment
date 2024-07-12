//Define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//Calling three functions and creating three variables with different values
var album1 = make_album("Anum", "Album title 1");
var album2 = make_album("Ana", "Album title 2");
var album3 = make_album("Mahnoor", "Album title 3");
var album4 = make_album("Sadia", "Album title 4", 10);
//Print values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
