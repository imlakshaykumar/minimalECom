/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '/vite.svg'

// eslint-disable-next-line react/prop-types, no-unused-vars
export const NavBar = ({ category, setCategory }) => {
  const handleCategoryClick = () => {
    setCategory('all');
  };
  return (
    <div className='w-full flex justify-center shadow-md'>
      <div className='flex w-[1200px] justify-between items-center px-2 py-6'>
        <div className='logo-div object-cover cursor-pointer'>
          <Link to='/'>
            <img src={ logo } alt="logo" className='logo w-[60px] h-auto block' />
          </Link>
        </div>
        <div className="nav-items flex gap-7 justify-between items-center">
          <ul className="nav-items-list flex gap-7 w-full justify-evenly uppercase items-center">
            <li className="item cursor-pointer hover:underline font-medium" onClick={ handleCategoryClick }>
              <Link to={ `/categories/all` }>
                categories
              </Link>
            </li>
            <li className="item cursor-pointer hover:underline font-medium">
              <Link to='/product/1'>
                product page
              </Link>
            </li>
          </ul>
          <div className="cart-logo-div cursor-pointer object-cover">
            <i data-array-length="0" className="cart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-shopping-cart"><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg></i>
          </div>
        </div>
      </div>
    </div>
  );
};
