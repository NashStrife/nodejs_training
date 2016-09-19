"use strict";

let services = angular.module('restoServices', []);

services.factory('Rest', ['$resource', function($resource){

    // get infos from db thx to the api created in node.js
    let resource = $resource('/api/restos');

    let list = {
        getList : function(callback){
            resource.query(callback);
        },
        addResto : function(newResto, types, pics, callback){
            let resto = new resource();
            resto.name = newResto.name;
            resto.address = {
                "street" : newResto.address.street,
                "number" : parseInt(newResto.address.number),
                "zip" : parseInt(newResto.address.zip),
                "town" : newResto.address.town,
                "country" : newResto.address.country
            };
            resto.phone = newResto.phone;
            resto.url = newResto.url;
            resto.cookType = types;
            if(newResto.rating)
                resto.rating = parseInt(newResto.rating);
            resto.pictures = pics;
            resto.createdAt = Date.now();
            // console.log(resto);
            resto.$save(callback);
        },
        removeResto : function(id, callback){
            let resource = $resource("/api/restos/"+id);
            // callback is not required but it's better to get the different messages [error, validation,...] 
            resource.remove(callback);
        }
    }

    return list;

}]);