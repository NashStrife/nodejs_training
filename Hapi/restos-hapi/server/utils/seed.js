'use strict';

var Resto = require('../api/restos/model');

var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

// we don't define the updatedAt Date cause it is automatically updated thx to Date.now in the model
var restos = [{
    name: 'jade de chine',
    address: {
        street: "Rue d'Havré",
        number: 23,
        zip: 7000,
        town: "Mons",
        country: "Belgium"
    },
    phone : "+32 40 25 78 96",
    cookType: ["asiatique", "Vientamienne"],
    comments: ["excellent", "superbe ambiance"],
    pictures: [{
        title: 'Nouvel an chinois',
        link: 'jade2016.jpg'
    }, {
        title: 'Nouvel an chinois',
        link: 'jade2015.jpg'
    }],
    rating : 7,
    url: 'http://www.jadechine.be',
    createdAt: Date.now()
},{
    name: 'La bergerie',
    address: {
        street: "Rue des canadiens",
        number: 239,
        zip: 7020,
        town: "Hyon",
        country: "Belgium"
    },
    phone : "+32 25 68 45 95",
    cookType: ["grecque", "française"],
    comments: ["pas bon", "moyen qualité"],
    pictures: [{
        title: 'Nouvel',
        link: 'bergerie2016.jpg'
    }, {
        title: 'Mes 40 ans',
        link: 'bergerie2015.jpg'
    }],
    rating : 6,
    url: 'http://www.jadechine.be',
    createdAt: Date.now()
},{
    name : "Delices Chinois",
    phone : "+32 65 56 78 89",
    pictures: [{
        title: 'Resto 01',
        link : "resto-01.jpg",
    }],
    url : "www.deliceschinois.com",
    rating : 7,
    cookType : ["chinoise"],
    address : {
        street : "Rue du vase",
        number : 77,
        town : "Mons",
        zip : 7000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "La bordure",
    phone : "+32 12 34 56 78",
    pictures: [{
        title: 'Resto 02',
        link : "resto-02.jpg",
    }],
    url : "www.labordure.com",
    rating : 7,
    cookType : ["traditionnelle", "française"],
    address : {
        street : "Rue de France",
        number : 2,
        town : "Namur",
        zip : 5000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "La pré vert",
    phone : "+32 71 51 53 57 59",
    pictures: [{
        title: 'Resto 03',
        link : "resto-03.jpg",
    }],
    url : "www.prevert.com",
    rating : 6,
    cookType : ["traditionnelle", "végétarienne"],
    address : {
        street : "De la montagne",
        number : 175,
        town : "Charleroi",
        zip : 6000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "L'îlot",
    phone : "+32 78 45 12 00",
    pictures: [{
        title: 'Resto 04',
        link : "resto-04.jpg",
    }],
    url : "www.ilot.com",
    rating : 7,
    cookType : ["américaine"],
    address : {
        street : "Avenue des 44 trous",
        number : 39,
        town : "Liège",
        zip : 4000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "Hérisson",
    phone : "+32 99 56 23 45",
    pictures: [{
        title: 'Resto 05',
        link : "resto-05.jpg",
    }],
    url : "www.herisson.com",
    rating : 8,
    cookType : ["végétarienne", "asiatique"],
    address : {
        street : "Boulevard Picots",
        number : 88,
        town : "Mons",
        zip : 7000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "Grandisimo",
    phone : "+32 12 45 54 21",
    pictures: [{
        title: 'Resto 06',
        link : "resto-06.jpg",
    }],
    url : "www.grandissimo.com",
    rating : 7,
    cookType : ["espagnole", "traditionnelle"],
    address : {
        street : "Rue Du Bouchon",
        number : 47,
        town : "Liège",
        zip : 4000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "Au kiwi ravi",
    phone : "+32 95 75 15 25",
    pictures: [{
        title: 'Resto 07',
        link : "resto-07.jpg",
    }],
    url : "www.kiwi.com",
    rating : 8,
    cookType : ["végétarienne", "française", "traditionnelle"],
    address : {
        street : "De l'oiseau",
        number : 32,
        town : "Charleroi",
        zip : 6000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "Abuelo",
    phone : "+32 22 55 88 11",
    pictures: [{
        title: 'Resto 08',
        link : "resto-08.jpg",
    }],
    url : "www.abuelo.com",
    rating : 6,
    cookType : ["espagnole", "traditionnelle"],
    address : {
        street : "Rue De l'espagnol",
        number : 87,
        town : "Mons",
        zip : 7000,
        country : "Belgium"
    },
    createdAt: Date.now()
},{
    name : "Méditerrannée bleue",
    phone : "+32 45 97 35 20",
    pictures: [{
        title: 'Resto 09',
        link : "resto-09.jpg",
    }],
    url : "www.bluemediterranean.com",
    rating : 6,
    cookType : ["espagnole", "italienne", "marocaine", "grèque"],
    address : {
        street : "Avenue De Rome",
        number : 12,
        town : "Amsterdam",
        zip : 1258,
        country : "Netherlands"
    },
    createdAt: Date.now()
},{
    name : "Kakarott",
    phone : "+32 97 64 31 55",
    pictures: [{
        title: 'Resto 10',
        link : "resto-10.jpg",
    }],
    url : "www.sangoku.com",
    rating : 5,
    cookType : ["asiatique", "chinoise", "américaine"],
    address : {
        street : "De l'avenue",
        number : 10,
        town : "Namur",
        zip : 5000,
        country : "Belgium"
    },
    createdAt: Date.now()
}];


// add elements to the db merging the model with data created before
var createDoc = function(model, doc) {
    // use the promise to manage what we do after
    return new Promise(function(resolve, reject) {
        // prepare data in function of the model and save it into the db
        new model(doc).save(function(err, saved) {
            // if errors send it and stop the process thanx to the reject from the promise
            // else save the doc
            return err ? reject(err) : resolve(saved);
        });
    });
};

// creation of a clean method to clean the db each time we launch the application to avoid having too many data inside the db
var cleanDB = function() {
    logger.log('... cleaning the DB');
    // clean thx to the model imported at the begining of the file
    var cleanPromises = [Resto]
        // list all resto corresponding to the model
        .map(function(model) {
            // and remove it
            return model.remove().exec();
        });
    // when all promises corresponding to "cleanPromises are done, the function is finished
    return Promise.all(cleanPromises);
};

// function to create new restos
var createRestos = function(data) {
    // new promise
    var promises = restos.map(function(resto) {
        // create thx to the function created before, merging the model [Resto] to the data [resto]
        return createDoc(Resto, resto);
    });

    // when all promises corresponding to "promises" are done
    return Promise.all(promises)
        // then do the next step
        .then(function(restos) {
            // return all data merged thx to lodash
            return _.merge({
                restos: restos
                // or if no data return a void object
            }, data || {});
        });
};

// each time we clean the db, then create new one with default data
cleanDB()
    .then(createRestos)
    .then(logger.log.bind(logger))
    .catch(logger.log.bind(logger));