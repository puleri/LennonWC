import React, {useEffect, useState} from 'react'
import BlueContactBtn from '../BlueContactBtn/BlueContactBtn';
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

    return (
      <>
      <div className={css.containerCenter}>
          <div className={css.navBlock}>
            <a href="/services" className={css.navItem}>Services</a>
            <a href="/about" className={css.navItem}>About us</a>
            <p></p>
            <p></p>
            <p></p>
            <a href="/" className={css.navItem}><img src={logo} className={css.logo}/></a>
            <p></p>
            <p></p>
            <p></p>
            <a href="/reviews" className={css.navItem}>Reviews</a>
            <a href="/contact" className={css.navItem}>Contact us</a>

          </div>
      </div>
      </>
    )
}

export default Navbar