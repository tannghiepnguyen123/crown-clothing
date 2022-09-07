import React, { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.scss'
import { UserContext } from '../../context/user'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/CartIcon/CartIcon'
import CardDropdown from '../../components/CardDropdown/CardDropdown'
import { CartContext } from '../../context/cart'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)
    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <div><CrwnLogo /></div>
                </Link>
                <div className='nav-link-container'>
                    <Link className='nav-link' to={'/shop'}>SHOP</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className='nav-link' to={'/auth'}>SIGN IN</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CardDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation