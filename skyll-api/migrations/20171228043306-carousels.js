'use strict';

module.exports = {

  up(db, next) {
    // TODO write your migration here
      var carousels=db.collection('carousels');
      carousels.insertMany([{image:"/images/future-2.jpg"},
      
      {image:"/images/sports-1.jpg"},
      {image:"/images/productone.jpg"},
      {image:"/images/productfour.jpg"},
      {image:"/images/future-2.jpg"},
      {image:"/images/producttwo.jpg"},
      {image:"/images/products.jpg"},
      {image:"/images/future-4.jpg"}],next);
    next();
  },

  down(db, next) {
    // TODO write the statements to rollback your migration (if possible)
    next();
  }

};