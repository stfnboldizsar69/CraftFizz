import React from 'react';

const Header = () => {
  const logoLink = '#';
  const aboutUsLink = '#';
  const shopLink = '#';
  const socialsLink = '#';
  const cartLink = '#';

  return (
    <header className="header">
      <nav className='nav_logo'>
        <a href={logoLink} className="navLink_logo">Logo</a>
      </nav>
      <nav className="nav">
        <a href={aboutUsLink} className="navLink">About Us</a>
        <a href={shopLink} className="navLink">Shop</a>
        <a href={socialsLink} className="navLink">Socials</a>
      </nav>
      <nav className="nav2">
        <a href={cartLink} className="navLink2"><img className="cart" src="../public/cart-shopping-solid.png" alt="shoppingcart" /></a>
      </nav>
    </header>
  );
}

export default Header;