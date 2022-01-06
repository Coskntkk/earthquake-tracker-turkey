const request = require("request");
const cheerio = require("cheerio");
const Earthquake = require("../models/Earthquake");

exports.index = function (req, res) {
    let quakes = [];
    request("http://www.koeri.boun.edu.tr/scripts/lst0.asp", (error, response, html) => {
        if (!error && response.statusCode == 200) {

            const $ = cheerio.load(html);

            const response = $("pre").text();

            let result = response.split("\n");
            result = result.splice(6, result.length + 1);
            result = result.splice(0,result.length - 2);

            /* Her Bir Satiri Dolasma Islemi */
            result.forEach(element => {
                let quakeString = element.split(" ");
                let quakeInfo = [];
                for (let i = 0; i < quakeString.length; i++) {
                    if (quakeString[i].length > 0) {
                        quakeInfo.push(quakeString[i]);
                    }
                }

                let date = quakeInfo[0];
                let time = quakeInfo[1];
                let latitude = quakeInfo[2];
                let longitude = quakeInfo[3];
                let depth = quakeInfo[4];
                let magnitude = quakeInfo[6];
                let place = quakeInfo[8];
                let city = quakeInfo[9];
                if(city != null){
                    if(quakeInfo[9].includes("(")){
                        city = quakeInfo[9];
                    }else{
                        city = "";
                    }
                }else{
                    city = "";
                }

                let quake = new Earthquake(date, time, latitude, longitude, depth, magnitude, place, city);
                quakes.push(quake);
            });

            if (req.query.min != null) {
                quakes = quakes.filter(x => parseFloat(x.magnitude) >= parseFloat(req.query.min));
            }
            if (req.query.max != null) {
                quakes = quakes.filter(x => parseFloat(x.magnitude) <= parseFloat(req.query.max));
            }

            res.json(quakes);
        }
    });
}