'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image className={styles.img} src="/images/relatorio-de-saude.gif" alt="Logo" width={50} height={80} />
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            
          <li class={styles.li}><Link className={styles.link} href='/'>Home</Link>
            <ul class={styles.ulSubmenu}>
                        <li class="item-sub-menu"><a class="link-submenu" href="">Link Submenu 1</a></li>
                        <li  class="item-sub-menu"><a class="link-submenu" href="">Link Submenu 2</a></li>
                        <li  class="item-sub-menu"><a class="link-submenu" href="">Link Submenu 3</a></li>
                    </ul>
                </li>

            <li>
              <Link className={styles.link} href="/medicos">Médicos</Link>
            </li>

            <li>
              <Link className={styles.link} href="/pacientes">Pacientes</Link>
            </li>
            <li>
              <Link className={styles.link} href="/agendamento">Agendamento</Link>
            </li>
          </ul>
        </nav>
      }
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;





/*export default function Header(){
    return(
        <header>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li>
                        <Link className={styles.link} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}*/

  
