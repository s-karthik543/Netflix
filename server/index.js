var express =require('express')
const app = express()

var request = require('request')
var async =require('async')
import mongoose from 'mongoose'
import { error } from 'util';
import Shows from './models/shows'
import { setTimeout } from 'timers';

const numTvShows = 100

mongoose.connect('mongodb://localhost:27017/shows')

//all
app.get('/all', (req, res, next) => {
    async.timesLimit(numTvShows, 2, (i, callback) => {

        setTimeout(function () {
            var options = {
                url: 'http://api.tvmaze.com/shows/' + (i + 1) + "?embed[]=episodes&embed[]=cast",
            }
            request(options, (error, response, body) => {
                var result = JSON.parse(body)
                var data = {
                    id: result.id,
                    name: result.name,
                    image: result.image ? result.image.original : null,
                    details: {
                        genres: result.genres,
                        year: result.premiered,
                        description: result.summary,
                        cast: result._embedded ? result._embedded.cast : null,
                        episodes: result._embedded ? result._embedded.episodes : null
                    }
                };

                console.log(i);

                callback(null, data)
            });
        }, 1000)
    }, (err, results) => {
        console.log("Error ", err)
        results.map((items) => {
            console.log("items ", items)
            var show = new Shows(items)
            show.save()
        })
    })
    return next()
})

//shows/:id
//get all shows that id is equal to genre 
app.get('/shows/:id', (req, res, next) => {
    Shows.find({ 'details.genres': { $in: [req.params.id] } }, (err, shows) => {
        res.json(shows)
    }).limit(5).skip(1).sort({ "name": 1 })
})

/**
 * Get my list and top pics
 */
app.get("/home", (req, res, next) => {
    Shows.find((err, shows) => {
           
            const myList = shows.slice(0)
            const val = Math.floor(myList.length / 2)
            const topPics = myList.splice(0, 7)
            const data = {
                "myList": myList,
                "topPics": topPics
            }
           
            res.json(data)
           
    }).limit(14)
})


/**
 * get all shows
 */
app.get('/shows', (req, res, next) => {
    Shows.find((err, shows) => {
        res.json(shows)
    })
})

app.get('/search/:id', (req, res, next) => {
    Shows.find({ 'name': { $in: [req.params.id] } }, (err, shows) => {
        res.json(shows)
    })
})

/**
 * Delete all shows
 */
app.get('/delete', (req, res, next) => {
    Shows.remove((err, shows) => {
        res.json(shows)
    })
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})