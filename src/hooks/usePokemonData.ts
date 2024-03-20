import { useState, useEffect } from 'react';

interface Pokemon {
    name: string;
    url: string;
}

export default function usePokemonData(initialUrl: string) {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(initialUrl);
                if (!response.ok) {
                    setError('Failed to fetch data');
                    return
                }
                const data = await response.json();
                setPokemonData(data.results);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonData();

    }, [initialUrl]);

    return { pokemonData, isLoading, error };
}
