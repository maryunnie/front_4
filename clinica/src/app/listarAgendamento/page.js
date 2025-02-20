'use client'
import { useEffect, useState } from "react";
import styles from './listarAgendamento.module.css'


export default function efeitos() {
        let [medicoN, setMedicoN] = useState(undefined)
        let [pacienteN, setPacienteN] = useState(undefined)
        let [consultas, setConsultas] = useState([])

        const getConsultas = async (medico, paciente) => {


            if (typeof medicoN == 'undefined' && typeof pacienteN == 'undefined') {
                let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
                let data = await response.json();
                setConsultas(data);

            } else if (typeof medicoN == 'undefined') {
                let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
                let data = await response.json();
                data = data.filter(n => n.paciente.toLowerCase().includes(pacienteN.toLowerCase()));
                setConsultas(data);


            } else {
                let response = await fetch('https://api-clinica-2a.onrender.com/consultas');
                let data = await response.json();
                data = data.filter(n => n.medico.toLowerCase().includes(medicoN.toLowerCase()));
                setConsultas(data);



            }
        }

        function buscarPaciente(event) {
            setPacienteN(undefined)
            setMedicoN(event.target.value)
            
        }

        function buscarMedico(event) {
            setMedicoN(undefined)
            setPacienteN(event.target.value)
            
        }

        useEffect(() => {
            getConsultas(medicoN, pacienteN);
        }, [medicoN, pacienteN]);

        return (
          <>
            <div>
                <h1>Consultas</h1>
                <div className={styles.divao}>
                    <h2>Buscar Paciente <input onChange={(e) => buscarMedico(e)} ></input></h2>
                    <h2>Buscar Médico <input onChange={(e) => buscarPaciente(e)} ></input></h2>
                    <table className={styles.table}>
                        <thead className={styles.thead}>
                            <tr className={styles.tr}>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Especialidade</th>
                                <th className={styles.th}>Médico</th>
                                <th className={styles.th}>Paciente</th>
                                <th className={styles.th}>Tipo</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {consultas.map((consulta, id) => (
                                <tr key={id} className={styles.tr}>
                                    <td className={styles.td}>{consulta.id}</td>
                                    <td className={styles.td}>{consulta.especialidade}</td>
                                    <td className={styles.td}>{consulta.medico}</td>
                                    <td className={styles.td}>{consulta.paciente}</td>
                                    <td className={styles.td}>{consulta.tipo}</td>
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
        </>
        );
    }
