'use client'
import { useEffect, useState } from "react";
import styles from "./listarpaciente.module.css";
import Image from "next/image";
export default function Afis() {
    let [nome, setNome] = useState(undefined)
    let [paciente, setPaciente] = useState([
    ])
    const [mostrar, setMostrar] = useState(false);

    const [busca, setBusca] = useState('');
    const nomesBusca = paciente.filter((pacientes) => (pacientes.nome.toLowerCase().includes(busca.toLowerCase())));
    // const nb = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())));
    const getPaciente = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
        let data = await response.json();
        console.log(data)

        if (typeof nome == 'undefined') {
            setPaciente(data);
        } else {
            data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
            setPaciente(data);
        }

        if (!response.ok) {
            throw new Error('Não foi possível buscar' + response.statusText);
        }
    }

    useEffect(() => {
        getPaciente(nome);
    }, [nome]);
    return (


        <main className={styles.main}>
            <div className={styles.paciente_conteinar}>
                <h2 className={styles.h2}> Lista de Pacientes</h2>
                <button className={styles.buttonPaci}
                    onClick={() => setMostrar(!mostrar)}
                >Buscar Pacientes</button>
                {mostrar &&
                    <div className={styles.botao} onClick={() => setMostrar(!mostrar)}>
                        <div className={styles.selecione} onClick={(e) => e.stopPropagation()}>
                            <h3>Selecione um paciente</h3>
                            <input
                                placeholder="Digite o nome do paciente"
                                type="text"
                                onChange={(e) => setBusca(e.target.value)}
                                value={busca}
                                onClick={() => setMostrar(mostrar)}
                            >
                            </input>
                            <ul>
                                {nomesBusca.map((md, i) => (
                                    <li key={i}>{md.nome}</li>
                                ))}
                            </ul>
                        </div>

                    </div>
                }




                <div className={styles.tabelaContainer}>
                    <table className={styles.tabela_paciente}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>NOME</th>
                                <th className={styles.th}>TELEFONE</th>
                                <th className={styles.th}>EMAIL</th>
                                <th className={styles.th}>ESPECIALIDADE</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {paciente.map((pacientes) => (
                                <tr className={styles.tro} key={pacientes.id}>
                                    <td className={styles.td}>{pacientes.id}</td>
                                    <td className={styles.td}>{pacientes.nome}</td>
                                    <td className={styles.td}>{pacientes.telefone}</td>
                                    <td className={styles.td}>{pacientes.email}</td>
                                    <td className={styles.td}>{pacientes.especialidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>

    );

}