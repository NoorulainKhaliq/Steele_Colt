var todos=["Buy new Turtle"];
var input=prompt("What would you like to do?");

while (input !=="quit"){

if (input === "list"){
	todoList();
} else if (input=== "new"){
	todoNew();
} else if (input==="delete"){
	deleteTodo();
}
//ask again what you would like to do
input=prompt("What would you like to do?");
}
console.log("Ok, you quit the app");

function todoList(){
		console.log("**********");
		todos.forEach(function (todo,i){
			console.log(i+": "+todo);
		});
		console.log("**********");
	}

function todoNew (){
	if (input=== "new"){
	var newTodo= prompt("What would you like to add?");
	todos.push(newTodo);
	console.log("Added Todo");
}
}

function deleteTodo(){
	if (input==="delete"){
		var index= prompt("What is the index number?");
		todos.splice(index, 1);
		console.log("Deleted Todo");
	}
}