'use strict';
const express = require('express');
const router = express.Router();


let pets = {
  dogs:[{
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
        'A smiling golden-brown golden retreiver listening to music.',
    name: 'Chance',
    sex: 'Male',
    age: 3,
    breed: 'Ridgeback',
    story: 'Owner Ran away'
  }
  ],
  cats: [{
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL:
        'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
        'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Spikey',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }] 
};

/* ================ GET ================ */

router.get('/pets/:pets', (req, res, next) => {
  let petType = req.params.pets;
  res.send(pets[petType][0]);
});

router.delete('/pets/:pets', (req, res, next) => {
  let petType = req.params.pets;
  pets[petType].shift();
  res.sendStatus(204);
} );

module.exports = router;
