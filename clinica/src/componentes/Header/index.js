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

            <li>
              <Link className={styles.link} href='/'>Home</Link>
            </li>

            <li class={styles.li}><Link className={styles.link} href="/medicos">Médicos</Link>
              <ul class={styles.ulSubmenu}>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/medicos/listar">Listar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/medicos/adicionar">Adicionar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/medicos/editar">Editar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/medicos/excluir">Excluir</Link>
                </li>
              </ul>
            </li>


            <li class={styles.li}><Link className={styles.link} href="/pacientes">Pacientes</Link>
              <ul class={styles.ulSubmenu}>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/pacientes/listar">Listar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/pacientes/adicionar">Adicionar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/pacientes/editar">Editar</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/pacientes/excluir">Excluir</Link>
                </li>
              </ul>
            </li>


            <li class={styles.li}><Link className={styles.link} href="/agendamento">Agendamento</Link>
              <ul class={styles.ulSubmenu}>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/agendamento/listar consultas">Listar consultas</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/agendamento/adicionar consulta">Adicionar consulta</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/agendamento/editar agendamento">Editar agendamento</Link>
                </li>
                <li class={styles.lisubmenu}>
                  <Link class={styles.linkSmenu} href="/agendamento/cancelar">Cancelar</Link>
                </li>
              </ul>
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


