let schema = mongoose.Schema({
    id ,
    name : String,
    address : {
        street: String,
        number: Number,
        zip: Number,
        town: String,
        country: String
    },
    cookType : [],
    quote : Number,
    comments : [],
    pictures : [{
        title : String,
        link : String
    }],
    url : String,
    createdAt : Date,
    updatedAt : Date
});

db.resto.insert({
    "name" : "le sambre et meuse",
    "address" : {
        "street": "rue edmond schmidt",
        "number": 2,
        "zip": 6280,
        "town": "gerpinnes",
        "country": "belgique"
    },
    "cookType" : ["traditionnelle","pizzeria","française"],
    "quote" : 4,
    "comments" : ["super","très bon","belles assiètes"],
    "pictures" : [{
        "title" : "le sambre et meuse",
        "link" : "le_sambre_et_meuse.jpg"
    }],
    "url" : "http://www.lesambreetmeuse.be/",
    "createdAt" : "2015-06-07",
    "updatedAt" : "2015-06-07"
})