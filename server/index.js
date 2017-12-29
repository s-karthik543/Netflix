import express from 'express'
const app = express()

import request from 'request'
import async, { retry } from 'async'
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
                console.log("error 1 ", error);

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
    Shows.find({ 'details.genres': { $in: [req.params.id] } }, function (err, shows) {
        console.log("error ", err)
        res.json(shows)
    })
})

app.listen('8010', () => {
    console.log('Listening on port 8010');
})