import { ReactComponent as StarFull }  from '../../assets/img/star-Full.svg';
import { ReactComponent as StarHalf }  from '../../assets/img/star-Half.svg';
import { ReactComponent as StarEmpty }  from '../../assets/img/star-Empty.svg';
import './styles.css';


 
function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;