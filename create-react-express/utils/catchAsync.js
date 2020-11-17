module.exports = fx => (req, res) => fx(req, res).catch((err) => {
	res.status(400).json({
		status: 'fail',
		message: 'Something went wrong',
		error: err
	});

	console.log(err);
})