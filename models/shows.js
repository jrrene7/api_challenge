const db = require('../db/index');

const Show = {}

  Show.findAll = (req, res, next) => {
    db.manyOrNone('SELECT * FROM shows')
      .then(shows => {
        res.locals.shows = shows;
        next();
      })
      .catch(err => console.log(err))
  }

  Show.findById = (req, res, next) => {
    db.one(`SELECT * FROM shows WHERE id = $1`, [req.params.id])
      .then(show => {
        res.locals.show = show;
        next();
      })
      .catch(err => console.log(err))
  }

  Show.create = (req, res, next) => {
  	const {id} = req.params
    const {title, description, duration, originalAirDate, rating, keywords} = req.body;
    console.log(req.body);
    db.one(
  		`INSERT INTO shows (title, description, duration, originalAirDate, rating, keywords) VALUES ($1, $2, $3, $4, $5, $6) returning *`,
      [title, description, duration, originalAirDate, rating, keywords]
  	)
      .then(show => {
        res.locals.show = show;
        next()
      })
      .catch(err=>console.log(err));
  }

  Show.update = (req, res, next) => {
    const {title, description, duration, originalAirDate, rating, keywords} = req.body;
    const {id} = req.params;
    db.one(`UPDATE shows SET title = $1, description = $2, duration = $3, originalAirDate = $4, rating = $5, keywords = $6 
      WHERE id = $7 returning *`, [title, description, duration, originalAirDate, rating, keywords, id]
    ).then(show => {
        res.locals.show = show;
        next();
    }); 
};

  Show.delete = (req, res, next) => {
    const {id} = req.params;
    db.none('DELETE FROM shows WHERE id = $1', [id])
      .then(next())
      .catch(err=>console.log(err))
  }



module.exports = Show;