import * as C from './styles'
import {BiCaretRight} from 'react-icons/bi'



export const FeaturedMovie = ({item}: any) => {


    let date = new Date(item.first_air_date)

    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if(description.length > 200){
        description = description.substring(0, 200) + '...'
    }

    return(
        <C.Container style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            
            <C.FeaturedVertical>
                <C.FeaturedHorizontal>
                    <h3>{item.name}</h3>

                    <C.FeaturedInfo>
                        <div className="points">
                            {item.vote_average.toFixed(1)} pontos
                        </div>

                        <div className="year">
                            {date.getFullYear()}
                        </div>

                        <div className="seasons">
                            {item.number_of_seasons} {item.number_of_seasons === 1 ? 'temporada' : 'temporadas'}
                            
                        </div>
                    </C.FeaturedInfo>

                    <C.Description>
                        {description === '' ? 'Conteúdo sem título' : description}
                    </C.Description>

                    <C.Buttons>
                        <a className='watch' href={`/watch/${item.id}`}> <BiCaretRight /> Assistir</a>
                        <a className='list' href="#">+ Minha Lista</a>
                    </C.Buttons>

                    <C.Gender>
                        <strong>Gênero: </strong> {genres.join(', ')}
                    </C.Gender>
                </C.FeaturedHorizontal>
            </C.FeaturedVertical>
        </C.Container>
    )
}