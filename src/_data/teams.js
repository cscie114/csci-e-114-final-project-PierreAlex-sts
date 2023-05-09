require('dotenv').config();
const eleventyFetch = require("@11ty/eleventy-fetch");


module.exports = async function() {

    let teamsURL = "https://v1.formula-1.api-sports.io/rankings/teams";
    let userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0";
    
    let racesParams = {
        season: "2023"
    }
    let teams = {data:[]}; 
    
    try {

        let params = new URLSearchParams(racesParams);
        let queryString = params.toString();
        let url = teamsURL + "?" + queryString;
        let teamsData = await eleventyFetch(url, {
            duration: "1d",
            fetchOptions: {
                headers: {
                    "User-Agent": userAgent,
                    "x-apisports-key": process.env.FORMULA_API_KEY
                },
            },
            type: "json"
        });
        teams.data.push(...teamsData.response);
    } catch (err) {
        console.log("Error with Races");
    }
    return teams;
}