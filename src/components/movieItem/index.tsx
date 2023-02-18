import { listProps } from '../../types/list'
import * as C from './styles'
import {useState} from 'react'

import { BiChevronLeft } from 'react-icons/bi'
import { BiChevronRight } from 'react-icons/bi'


type Props = {
    movie: listProps[] | any
    title: string
}

export const MovieItem = ({movie, title}: Props) => {

    const [scrollX, setScrollX] = useState(-370)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)

        if(x > 0){
            x = 0
        }

        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listWidth = movie.results.length * 200

        if((window.innerWidth - listWidth) > x){
            x = (window.innerWidth - listWidth) - 60
        }
        setScrollX(x)
    }


    return(
        <C.Container>
            <h2>{title}</h2>

            <div className="arrow-left" onClick={handleLeftArrow}>
                <BiChevronLeft />
            </div>

            <div className="arrow-right" onClick={handleRightArrow}>
                <BiChevronRight />
            </div>

            <C.ContentArea style={{marginLeft: scrollX}}>
                {movie.results.length > 0 && movie.results.map((item: any, key: number) => (
                        <img key={key} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
                    ))
                }
            </C.ContentArea>

            
        </C.Container>
    )
}