import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log(err);
                setError(true);
                alert(
                    'Erreur de chargement des données. Nous vous invitons à vérifier votre connexion internet et à vous reconnecter ultérieurement'
                );
            }
        }
        fetchData();
    }, [url]);
    return { data, error };
}
