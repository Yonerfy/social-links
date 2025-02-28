
import Button from './Button';
import '../App.css'
import avatarJessica from '../assets/avatar-jessica.jpeg'

const Card = () => {
    return (
        <div className="card">
            <img src={avatarJessica} alt="avatar for Jessica" />
            <h1 className='card-title'>Jessica Randall</h1>
            <h3 className='card-sub-title'>London, United Kingdom</h3>
            <p>"Front-end developer and avid reader."</p>
            <div className="btn-container">
                <Button buttonName="Git hub" hrefLink='#'/>
                <Button buttonName="Frontend Mentor" hrefLink='#'/>
                <Button buttonName="LinkedIn" hrefLink='#'/>
                <Button buttonName="Twitter" hrefLink='#'/>
                <Button buttonName="Instagram" hrefLink='#'/>
            </div>
        </div>
    );
}

export default Card;