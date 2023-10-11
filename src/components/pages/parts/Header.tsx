import React, {useState, ChangeEvent} from "react";
import {useNavigate} from 'react-router-dom'
import './Header.css'

interface HeaderProps {
    onCheckboxChange: (isChecked: boolean) => void;
}
function Header(props: HeaderProps){

    const navigate = useNavigate()

    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.checked
        setIsChecked(newValue);
        props.onCheckboxChange(newValue)
    }

    const goToAbout = () => {navigate('/about')}

    const gotoStore = () => {navigate('/store')}

    const goToAdmin = () => {navigate('/admin')}

    return (
        <nav className="top-nav">
            <input id="menu-toggle" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><span onClick={goToAbout}>About</span></li>
                <li><span onClick={gotoStore}>Store</span></li>
                <li><span onClick={goToAdmin}>Admin</span></li>
            </ul>
        </nav>
    )
}

export default Header