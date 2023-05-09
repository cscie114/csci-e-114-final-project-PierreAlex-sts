require('dotenv').config();
const eleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

    let raceURL = "https://v1.formula-1.api-sports.io/races";
    let userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0";
    
    let racesParams = {
        season: "2023"
    }
    let races = {data:[]}; 
    
    try {

        let params = new URLSearchParams(racesParams);
        let queryString = params.toString();
        let url = raceURL + "?" + queryString;
        let raceData = await eleventyFetch(url, {
            duration: "1d",
            fetchOptions: {
                headers: {
                    "User-Agent": userAgent,
                    "x-apisports-key": process.env.FORMULA_API_KEY
                },
            },
            type: "json"
        });
        raceData.response.forEach( (item) => {
            if ( item.status === "Completed" && item.type === "Race") {
                getRaceResult(item.id)
                .then((result) => {
                    item._ranking = result;
                })
            }
        });
        races.data.push(...raceData.response);
    } catch (err) {
        console.log("Error with Races API");
        console.log(err);
    }
    return races;
}

async function getRaceResult(raceID) {

    let raceResultUrl = `https://v1.formula-1.api-sports.io/rankings/races?race=${raceID}`;
    let userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0";
    try {
        let responseData = await eleventyFetch(raceResultUrl, {
            duration: "1d",
            fetchOptions: {
                headers: {
                    "User-agent": userAgent,
                    "x-apisports-key": process.env.FORMULA_API_KEY
                },
            },
            type: "json"

        });
        return(responseData.response) ;
    } catch ( err) {
        console.log("error with rankings");
        console.log(err);
    }

}