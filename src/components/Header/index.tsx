import * as C from './styles'
// @ts-ignore
import logo from '../../assets/logo.png'

import {useState, useEffect} from 'react'

export const Header = () => {

    const [black, setBlack] = useState(false)

    useEffect(() => {
        const changeBackgroundHeader = () => {
            if(window.scrollY > 30){
                setBlack(true)
            } else{
                setBlack(false)
            }
        }

        window.addEventListener('scroll', changeBackgroundHeader)
    }, [])

    return(
        <C.Container style={black ? {backgroundColor: '#121212'} : {background: 'transparent'}}>
            <div className="logo-area">
                <a href="/">
                    <img src={logo} alt="logo arthurflix" />
                </a>
            </div>

            <div className="user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="usuário" />
                </a>
            </div>
        </C.Container>
    )
}