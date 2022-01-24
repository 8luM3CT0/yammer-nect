export default {
    fetchTopUSNews: {
        title: 'Top US News',
        url: `top-headlines?country=us&apiKey=${process.env.news_key}`
    },
    fetchBBCNews: {
        title: 'BBC News',
        url: `top-headlines?sources=bbc-news&apiKey=${process.env.news_key}`
    },
    fetchBusinessNews: {
        title: 'Business',
        url: `top-headlines?country=us&category=business&apiKey=${process.env.news_key}`
    },
    fetchEntertainmentNews: {
        title: 'Entertainment',
        url: `top-headlines?country=us&category=entertainment&apiKey=${process.env.news_key}`
    },
    fetchHealthNews: {
        title: 'Health',
        url: `top-headlines?country=us&category=health&apiKey=${process.env.news_key}`
    },
    fetchScienceNews: {
        title: 'Science',
        url: `top-headlines?country=us&category=science&apiKey=${process.env.news_key}`
    },
    fetchSportsNews: {
        title: 'Sports',
        url: `top-headlines?country=us&category=sports&apiKey=${process.env.news_key}`
    },
    fetchTechNews: {
        title: 'Tech',
        url: `top-headlines?country=us&category=technology&apiKey=${process.env.news_key}`
    },

}