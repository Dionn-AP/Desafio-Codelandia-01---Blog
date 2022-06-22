import './styles.css';
import data from '../../data';

function Content() {

    return (
        <div className='container-content'>
            {data.map((item) => (
                <div key={item.id} className='box-content'>
                    <span>{item.date}</span>
                    <img src={item.image} alt='litle-heart' />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Content;