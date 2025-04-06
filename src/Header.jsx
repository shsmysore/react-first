function Header() {
    return (
        <header className='header'>
            <img src='/src/assets/react-png.png' alt='React logo' className='nav-img'/>
            <nav>
                <ul className='nav-list'>
                    <li className='nav-list-item'> Pricing </li>
                    <li className='nav-list-item'> About </li>
                    <li className='nav-list-item'> Contact </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header