import React from 'react'
import './Header.css'
import arrow from './arrow.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom'
import { useDataValue } from '../CardsData/DataProvider';

export default function Header() {

    const {myReducer} =useDataValue();
    const  [state]=myReducer;
    return (
        <header className='header'>
            {/* headerlogo---------------------- */}
            <Link to='/'>
                <div className='header_logo'>
                    <span className='header_logo_name'>amazon</span>
                    <span ><img src={arrow} alt='amazon_logo' className='header_logo_img' /></span>
                </div>
            </Link>
            {/* header search----------- */}
            <div className='header_search'>
                <input className='header_search_input' />
                <SearchSharpIcon style={{ backgroundColor: '#ff9f00', fontSize: '35px', color: 'black', borderRadius: '1px' }} />

            </div>
            {/* header nav-------------- */}
            <div className='header_nav'>

                <Link to='/login'>
                <div className='header_nav_user'>
                    <span className='nav_line_1'>Hello Guest</span>
                    <span className='nav_line_2'>Signin</span>
                </div>
                </Link>

                <Link to='/checkout'>
                    <div className='header_nav_basket'>
                        <ShoppingCartIcon style={{ color: '#ff9f00' }} /><span>{state.cartList.length}</span> &nbsp;
                        <span> Cart</span>
                    </div>
                </Link>

                

            </div>

        </header>
    )
}
