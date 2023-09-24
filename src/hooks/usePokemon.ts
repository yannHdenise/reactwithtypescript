import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api/getBase";

export interface Pokemon {
  name: string;
  url: string;
}

interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
  previous: string;
  next: string;
}

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPokemonResponse>("pokemon/", { signal: controller.signal })
      .then((res) => {
        setPokemons(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { pokemons, error, isLoading };
};
export default usePokemon;
