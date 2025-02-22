
/* <main className={styles.main}>
            <div>
                <h1>Pacientes</h1>
                <div className={styles.divao}>
                    <h2>Buscar Paciente</h2>
                    <input onChange={(e) => setNome(e.target.value)} ></input>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Nome</th>
                                <th className={styles.th}>Telefone</th>
                                <th className={styles.th}>Email</th>
                                <th className={styles.th}>CPF</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {pacientes.map((paciente, id) => (
                                <tr key={id} className={styles.tr}>
                                    <td className={styles.td}>{paciente.id}</td>
                                    <td className={styles.td}>{paciente.nome}</td>
                                    <td className={styles.td}>{paciente.telefone}</td>
                                    <td className={styles.td}>{paciente.email}</td>
                                    <td className={styles.td}>{paciente.cpf}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
/*.lista {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: #fff;
    font-family: "Josefin Sans", sans-serif;
    /*font-family: "Teko", sans-serif;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Jockey+One&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Teko:wght@300..700&display=swap');
  
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Josefin Sans", sans-serif;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Jockey+One&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgb(154, 186, 235);
    box-shadow: 0 5px 10px rgb(124, 150, 181);
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .img {
    height: 40px;
    /* Ajuste o tamanho  
    margin-right: 10px;
  }
  
  .h1 {
    color: rgba(104, 210, 210, 0.649);
    font-size: 1.5rem;
  
  }
  
  .nav {
    display: flex;
    gap: 20px;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  
  .nav a {
    color: var(--text-color);
    text-decoration: none;
  }
  
  .menuButton {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }
  
  @media (max-width: 600px) {
    .nav {
      /* display: none; 
      max-height: 0;
      overflow: hidden;
      transition: 1s;
    }
  
    .nav.open {
      /* display: block; 
      position: absolute;
      top: 60px;
      right: 0;
      background-color: rgb(73, 123, 125);
      padding: 10px;
      max-height: 100vh;
      overflow: visible;
      transition: 1s;
    }
  
    .nav ul {
      flex-direction: column;
      gap: 10px;
    }
  }


.logoContainer {
  display: flex;
  align-items: center;
}

.logo {
  max-width: 120px;
}

/* Botão de menu para dispositivos móveis 
.menuToggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.burger, .burgerOpen {
  width: 100%;
  height: 4px;
  background-color: var(--text-color);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

/* Estilos para quando o menu está aberto 
.burgerOpen {
  transform: rotate(45deg);
}

/* Navbar para desktop 
.navbar {
  display: flex;
  align-items: center;
}

.navList {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.navList li a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.navList li a:hover {
  color: var(--main-color);
}

/* Estilo do dropdown 
.dropdown {
  display: none;
  position: absolute;
  background-color: var(--background-color);
  padding: 0.5rem 0;
  list-style: none;
}

.navList li:hover .dropdown {
  display: block;
}

.dropdown li a {
  padding: 0.5rem 1rem;
  display: block;
  color: var(--text-color);
}

.dropdown li a:hover {
  background-color: var(--main-color);
}

/* Responsividade para telas menores 
@media (max-width: 768px) {
  .menuToggle {
    display: flex;
  }

  .navbar {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--background-color);
  }

  .navList {
    flex-direction: column;
    gap: 1rem;
    display: none;
  }

  .navOpen .navList {
    display: flex;
  }

  .dropdown {
    position: relative;
  }
}



.ul {
  list-style-type: none;
}

.ulSubmenu {
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.lisubmenu {
  position: relative;
}

.ulSubmenu {
  position: absolute;
  left: 0px;
  width: max-content;
  max-height: 0;
  background-color: #456ab6;
  overflow: hidden;
  border-radius: 5px;
  transition: 1s;
}

.ulSubmenu a {
  display: block;
  color: #6592b7;
  text-decoration: none;
}

.ulSubmenu a:hover {
  color:#e8b3b3
}



.linkSmenu {
  font-size: 20px;
  color: #3e549b;
  text-decoration: none;
}

.linkSmenu:hover {
  color: #9a9090;
}

.linkSmenu {
  font-size: 16px;
  margin: 10px;
}
*/