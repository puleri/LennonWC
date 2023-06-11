import React, {useEffect, useState} from 'react'
import BlueContactBtn from '../BlueContactBtn/BlueContactBtn';
import DropdownMenu from './Dropdown/Dropdown';
import css from './NavBar.module.css'
import logo from './navLogo.png'

const Navbar = () => {
    const [isShrunk, setShrunk] = useState(false);

   useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const triggerElement = <p href="/services" className={css.navItem}>Menu</p>;
  const menuContent = (
    <>
      <a className={css.dropdownElement} href="/">Home</a>
      <br/>
      <a className={css.dropdownElement} href="/services">Services</a>
      <br/>
      <a className={css.dropdownElement} href="/about">About us</a>
      <br/>
      <a className={css.dropdownElement} href="/reviews">Reviews</a>
      <br/>
      <a className={css.dropdownElement} href="/contact">Contact us</a>
      <br/>
    </>
  );
  <DropdownMenu trigger={triggerElement} menu={menuContent} />


    return (
      <>
      <div className={css.containerCenter}>
          <div className={css.dropdownMobile}><DropdownMenu trigger={triggerElement} menu={menuContent} /></div>
          <div className={css.navBlock}>
            <p></p>
            <a href="/services" className={css.navItem}>Services</a>
            <a href="/about" className={css.navItem}>About us</a>
            <a href="/" className={css.navItemLogo}><img src={logo} className={css.logo}/></a>
            <a href="/reviews" className={css.navItem}>Reviews</a>
            <a href="/contact" className={css.navItem}>Contact us</a>
            <p></p>
          </div>
      </div>
      </>
    )
}

export default Navbar