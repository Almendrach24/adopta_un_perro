import RazaTags from "./Tags"
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
function Card({srcImg,nomPerrito,desPerrito,bg,text}){
    return(
        <>
            <div className="cardPerrito">
             <img src={srcImg} alt="Perrito" />
                <h3>{nomPerrito}</h3>
                <p>{desPerrito}</p>
                <RazaTags bg={bg} text={text} />
            </div>
            
        </>
    )

}

export default Card