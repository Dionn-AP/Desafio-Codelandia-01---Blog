import './styles.css';
import IconMagnifier from '../../assests/icon-magnifier.svg';

function Header() {

    return (
        <header>
            <div className='header-titles'>
                <h3>Codelândia</h3>
                <h3>blog</h3>
            </div>
            <div className='input-blog'>
                <img src={IconMagnifier} alt='search' />
                <input
                    type='text'
                    placeholder='Pesquisar no blog'
                />
            </div>

        </header>
    )
};

export default Header;