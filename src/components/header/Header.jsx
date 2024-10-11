import './header.less';

function Header({ title, child }) {
    return (
        <header>
            <h2>{title}</h2>
        </header>
    )
}

export default Header;