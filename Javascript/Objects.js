/* create an array of movie objects. each movie should have a title, rating and
hasWAtched property. */

var movie= [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Frozen",
		rating: 4.5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury",
		rating: 5,
		hasWatched: true
	},
	{
		title: "Les Miserables",
		rating: 3.5,
		hasWatched: false
	}
]

function movieDB (arr){
	for (var i=0;i<movie.length;i++){
	if (movie[i].hasWatched===true){
		console.log("You have seen "+ movie[i].title +" - "+movie[i].rating+
			 " stars");
	}else {
		console.log("You have not seen "+ movie[i].title +" - "+movie[i].rating+" stars");
	}
}
}

movieDB(movie);
