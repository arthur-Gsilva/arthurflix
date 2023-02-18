const APIKey = '61305d71dce7b6f6dbb88e02b48828f3'
const API = 'https://api.themoviedb.org/3'


const getData = async (endpoint: string) => {
    let response = await fetch(`${API}${endpoint}`)
    let data = await response.json()
    return data
}

export const getHomeList = async () => {
    return[
        {
            slug: 'originals',
            title: 'Originais da Netflix',
            items: await getData(`/discover/tv?with_network=213&language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await getData(`/trending/all/week?language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'toprated',
            title: 'Em alta',
            items: await getData(`/movie/top_rated?language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'action',
            title: 'Ação',
            items: await getData(`/discover/movie?with_genres=28&language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'comedy',
            title: 'Comédia',
            items: await getData(`/discover/movie?with_genres=35&language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'animation',
            title: 'Animação',
            items: await getData(`/discover/movie?with_genres=16&language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'horror',
            title: 'Terror',
            items: await getData(`/discover/movie?with_genres=27&language=pt-BR&api_key=${APIKey}`)
        },

        {
            slug: 'documentary',
            title: 'Documentários',
            items: await getData(`/discover/movie?with_genres=99&language=pt-BR&api_key=${APIKey}`)
        }
    ]
}

export const GetMovieInfo = async (id: number, type: string) => {
    let info = {}
    
    if(id){
        switch(type){
            case 'movie':
                info = await getData(`/movie/${id}?language=pt-BR&api_key=${APIKey}`)
            break;

            case 'tv':
                info = await getData(`/tv/${id}?language=pt-BR&api_key=${APIKey}`)
            break;
        }
    }

    return info
}