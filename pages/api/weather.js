// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function get_weather(req, response) {
    const api_secret = process.env.WEATHER_API_KEY

    const weather_response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${api_secret}`);
    const wheather = await weather_response.json();

    response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.statusCode = 200;
    response.json({
        wheather
    });
}

export default get_weather;