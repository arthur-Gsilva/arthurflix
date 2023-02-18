import { useEffect, useState } from 'react'
import { getHomeList, GetMovieInfo } from './tmdb'
import { listProps } from './types/list'
import { MovieItem } from './components/movieItem'
// @ts-ignore
import LoadingGif from './assets/loading-gif.gif'

import * as C from './App.styles'
import { FeaturedMovie } from './components/FeaturedMovie'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const App = () => {

    const [movieList, setMovieList] = useState<listProps[]>([])
    const [featuredData, setFeaturedData] = useState<any>(null)

    useEffect(() => {
        const loadAll = async () => {
            let list = await getHomeList()
            setMovieList(list)

            const netflixOriginal = list[0]
            const randomOriginal = Math.floor(Math.random() * (netflixOriginal.items.results.length - 1))
            const bannerMovie = netflixOriginal.items.results[randomOriginal]
            const bannerMovieInfo = await GetMovieInfo(bannerMovie.id, 'tv')
            setFeaturedData(bannerMovieInfo)
        }
        

        loadAll()
    }, [])




    return(

        <C.Container>

            <Header />
            
            {featuredData &&
                <FeaturedMovie item={featuredData}/>
            }


            <section className="list">
                {movieList.map((movie, key) => (
                    <MovieItem key={key} movie={movie.items} title={movie.title}/>
                ))}
            </section>

            <Footer />

            {movieList.length >= 0 &&
                <div className="loading">
                    <img src={LoadingGif} alt="loading" />
                </div>
            }
            
        </C.Container>
    )
}

export default App;
