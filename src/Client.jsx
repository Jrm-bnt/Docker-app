import React, {useEffect, useState} from 'react';

function Client() {
const [client, setClient] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3050`)
            .then(res => res.json())
            .then(
                (result) => {
                    setClient(result)
                })
    }, [])

    return (
        <div>
            <h1>Liste des Clients</h1>
            <ul>
                {client.map((c) => (
                    <li key={c.id}>
                        <strong>Nom :</strong> {c.nom} <br />
                        <strong>Email :</strong> {c.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Client;
