'use strict';

module.exports = {

  up(db, next) {
    // var projects=db.collection('projects');
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
    next();
  }

};