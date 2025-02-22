'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
    <Image className={styles.img} src="/images/relatorio-de-saude.gif" alt='icone do menu' width={30} height={30}/>
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image className={styles.img} src="/images/relatorio-de-saude.gif" alt="Logo"  width={50} height={80}/>
        <h1 className={styles.h1}>Clínica Serenity</h1>
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            <li className={styles.link}>
              <Link href="/" className={`${styles.Link}`}>Home</Link>
            </li>

            <li className={styles.link}>
              <Link href="/medicos">Médicos</Link>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/medicos">Listar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Adicionar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Editar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Excluir</a>
                </li>
              </ul>
            </li>

            <li className={styles.link}>
              <Link href="/listarPaciente">Pacientes</Link>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/listarPaciente">Listar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Adicionar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Editar</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Excluir</a>
                </li>
              </ul>
            </li>

            <li className={styles.link}>
              <Link href="/listarAgendamento">Agendamento</Link>
              <ul className={styles.ul_medico}>
                <li className={styles.link}>
                  <a href="/listarAgendamento">Listar Consultas</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Agendar Consultas</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Editar Agendamento</a>
                </li>
                <li className={styles.link}>
                  <a href="#">Cancelar</a>
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


