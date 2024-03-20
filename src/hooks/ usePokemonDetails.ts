import { useState, useEffect } from 'react';

interface PokemonDetails {
    types: { type: { name: string } }[];
    height: number;
    weight: number;
    stats: { base_stat: number }[];
}

export default function usePokemonDetails(pokemonName: string) {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
                if (!response.ok) {
                    setError('Failed to fetch data')
                    return
                }
                const data = await response.json();
                setPokemonDetails(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonDetails();

    }, [pokemonName]);

    return { pokemonDetails, isLoading, error };
}
