const db = require('../data/dbConfig.js')



function insert(instructor) {
    return db('instructors')
      .insert(instructor, 'id')
      .then(ids => {
        return db('instructors')
          .where({ id: ids[0] })
          .first();
      });
  }