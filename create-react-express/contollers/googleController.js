const catchAsync = require('../utils/catchAsync');
const axios = require('axios');

// module.exports = {
// 	findAll: function (req, res) {
// 		const { query: params } = req;
// 		axios
// 			.get("https://www.googleapis.com/books/v1/volumes", {
// 				params
// 			})
// 			.then(results =>
// 				results.data.items.filter(
// 					result =>
// 						result.volumeInfo.title &&
// 						result.volumeInfo.infoLink &&
// 						result.volumeInfo.authors &&
// 						result.volumeInfo.imageLinks &&
// 						result.volumeInfo.imageLinks.thumbnail
// 				))
// 	}
// }


module.exports = catchAsync(async (req, res) => {

	if (!req.query.q) return res.status(400).json({
		status: 'fail',
		message: 'Please include a search ("q") parameter'
	})

	const query = req.query.q.split(' ').join('+');

	const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_API_KEY}`

	const results = await axios(url);

	res.status(200).json({
		status: 'success',
		data: results.data
	})


})