'use client';

import Link from 'next/link';
import classes from './mainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={classes.headers}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerLogo}>
            <Link href="/">Lux Chairs</Link>
          </div>
          <input className={classes.menuBtn} type="checkbox" id="menuBtn" />
          <label htmlFor="menuBtn" className={classes.menuIcon}>
            <span className={classes.navicon}></span>
          </label>
          <nav className={classes.navbar}>
            <ul className={classes.nav}>
              <li className={classes.navItem}>
                <Link href="/products" className={classes.navLink}>Products</Link>
              </li>
              <li className={classes.navItem}>
                <Link href="/productCart" className={classes.navLink}>Cart</Link>
              </li>
              <li className={classes.navItem}>
                <Link href="/" className={classes.navLink}>About Us</Link>
              </li>
              <li className={classes.navItem}>
                <Link href="/" className={classes.navLink}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
