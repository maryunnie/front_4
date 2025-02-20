'use client'
import { useEffect, useState } from "react";
import styles from './listarpaciente.module.css'


export default function efeitos() {
    const [nome, setNome] = useState(undefined)
    const [pacientes, setPacientes] = useState([])

    const getPacientes = async (nome) => {
        let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
        let data = await response.json();
        console.log(data, nome)
        if (typeof nome == 'undefined') {
            setPacientes(data);
        } else {
            data = data.filter(n => n.nome.toLowerCase().includes(nome.toLowerCase()));
            setPacientes(data);
        }

        if (!response.ok) {
            throw new Error('Erro ao buscar dados' + response.statusText);
        }

    }

    useEffect(() => {
        getPacientes(nome);
    }, [nome]);

    return (
       
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
                        {/* <select onChange={(ev) => setMedicos(ev.target.value)}>
            //                 {medicos.map((cidade) => (
            //                     <option value={cidade.id} key={cidade.id}>{cidade.nome} </option>
            //                 ))}
            //             </select>
            //             {cidade ? <p>{cidade}</p> : <p>Escolha a cidade</p>} */}
            </div>
        </div>

    );
}
