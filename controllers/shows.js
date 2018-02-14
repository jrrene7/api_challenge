const router      = require('express').Router(),
			Show        = require('../models/shows');


router.get('/', Show.findAll, (req, res) => {
	const data = res.locals.shows;
	res.json({message: "Your list of shows",
						shows: data
	});
});

router.get('/:id', Show.findById, (req, res) => {
	res.json({message: "check it out",
						show: res.locals.show
	})
})

router.post('/', Show.create, (req, res) => {
	const data = res.locals.show;
	res.json({show: data});
});

router.put('/:id', Show.update, (req, res) => {
	const {show} = res.locals;
	res.json({show});
})

router.delete('/:id', Show.delete, (req, res) => {
	res.send('Deleted from DB.');
});

module.exports = router;