import './styles.css';
import IconHeartSolid from '../../assests/icon-heart-solid.svg';
import ScrollReveal from 'scrollreveal';
import { useState, useEffect } from 'react';
import data from '../../data';

function Content() {
    const [localData, setLocalData] = useState([...data]);

    function likedHeart(liked) {
        const selectHeart = localData.find((heart) => {
            return heart.id === liked
        });
        if (!selectHeart.like) {
            data[selectHeart.id - 1].like = true;
            setLocalData([...data]);
        } else if (selectHeart.like) {
            data[selectHeart.id - 1].like = false;
            setLocalData([...data]);
        }
    }

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '20px',
            duration: 1500,
            reset: true
        });

        sr.reveal('.box-content', { delay: 200 });
        sr.reveal('.date', { delay: 400 });
        sr.reveal('.title', { delay: 500 });
        sr.reveal('.description', { delay: 600 });
    }, []);

    return (
        <div className='container-content'>
            {localData.map((item) => (
                <div key={item.id} className='box-content'>
                    <span className='date'>{item.date}</span>
                    <img
                        onClick={() => likedHeart(item.id)}
                        id={!item.like ? 'heart' : 'heart-solid'}
                        src={!item.like ? item.image : IconHeartSolid}
                        alt='litle-heart'
                    />
                    <h3 className='title'>{item.title}</h3>
                    <p className='description'>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Content;