import profile from '../../config.json'
import styled from "styled-components";
import dh from "../assets/dh.jpg"
import alura from "../assets/alura.jpg"
import recode from "../assets/recode.jpg"

const StyledFavorites = styled.div`
    div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0rem;
        gap: 1.3rem;

        width: 13rem;
        height: 7.75rem;
        margin-left: 1rem;
    }
    h3{
        width: 10.25rem;
        height: 1.125rem;

        font-weight: 700;
        font-size: 1rem;
        line-height: 1.125rem;
        margin: 0 1rem 1rem 1rem;
        color: #000000;
    }
    img{
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 3.125rem;
    }
    p{
        height: 1rem;
        text-align: center;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1rem;
        color: #000000;
        margin: 0.5rem 0 0.9rem 0
    }
`



export default function Favorites(props){
    const favorites = Object.keys(props.favorites);
    const imgs = [alura, recode, dh]
    return(
        <StyledFavorites>
            <h3>Favoritos</h3>
            <div>
            {favorites.map((favorite)=>{
                const canal = props.favorites[favorite]
                return(
                        <section key={canal.url}>
                            <a href={canal.url} target="_blank"><img src={imgs[favorite].src} alt='Foto canal'/></a>
                            <p>{canal.name}</p>
                        </section>
                )
            })}
            </div>
        </ StyledFavorites>
    )
}