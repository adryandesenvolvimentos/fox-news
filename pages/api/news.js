// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function get_news(req, response) {
    const api_secret = process.env.API_SECRET_KEY

    const news_response = await fetch(`http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${api_secret}`);
    const news_response_json = await news_response.json();
    const news = news_response_json.articles;
    const date = new Date()

    response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
    response.setHeader('Access-Control-Allow-Origin', '*')

    response.statusCode = 200;
    response.json({
        last_update: date,
        articles: news
    });
}

export default get_news;