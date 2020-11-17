const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
)
	.then(() => console.log('database connection successful 👍🏽'))
	.catch(err => console.log(err));

const booksSeed = [
	{

		
		"authors": ["Suzanne Collins"],
		"description": "Set in a dark vision of the near future, a terrifying reality TV show is taking place.",
		"imageLink": "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		"link": "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
		"title": "The Hunger Games"
	},
	{
		
		"authors": ["Stephen King"],
		"description": "With an excerpt from the sequel, Doctor Sleep. Terrible events occur at an isolated hotel in the off season, when a small boy with psychic powers struggles to hold his own against the forces of evil that are driving his father insane.",
		"imageLink": "http://books.google.com/books/content?id=8VnJLu3AvvQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		"link": "http://books.google.com/books?id=8VnJLu3AvvQC&printsec=frontcover&dq=The+Shining&hl=&cd=1&source=gbs_api",
		"title": "The Shining"
	},
	{
		
		"authors": ["L. Frank Baum"],
		"description": "Travel to the land of Oz with Dorothy and find out what inspired the forthcoming film blockbuster Oz: The Great and Powerful",
		"imageLink": "http://books.google.com/books/content?id=lzQjcaFVpfcC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		"link": "http://books.google.com/books?id=lzQjcaFVpfcC&dq=The+Wonderful+Wizard+of+Oz&hl=&source=gbs_api",
		"title": "The Wonderful Wizard of Oz"

	}
]
db.Book
	.remove({})
	.then(() => db.Book.collection.insertMany(booksSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});