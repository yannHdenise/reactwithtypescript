import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api/getBase";

export interface Pokemon {
  name: string;
  url: string;
}
export interface paginationLinks {
  next: string;
  previous: string;
}
export interface FetchPokemonResponse {
  count: number;
  results: Pokemon[];
  previous: string;
  next: string;
}

const usePokemon = (endoint = "") => {
  console.log("usePokemon called: ", endoint);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [paginationLinks, setPaginationLinks] = useState<paginationLinks>({
    next: "",
    previous: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [url, setUrl] = useState(endoint);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    if (url) {
      apiClient
        .get<FetchPokemonResponse>(url, { signal: controller.signal })
        .then((res) => {
          setPokemons(res.data.results);
          setPaginationLinks({
            next: res.data.next,
            previous: res.data.previous,
          });
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    } else {
      apiClient
        .get<FetchPokemonResponse>("pokemon/", { signal: controller.signal })
        .then((res) => {
          setPokemons(res.data.results);
          setPaginationLinks({
            next: res.data.next,
            previous: res.data.previous,
          });
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    }

    return () => controller.abort();
  }, [url]);
  return {
    pokemons,
    setPokemons,
    paginationLinks,
    setPaginationLinks,
    error,
    setError,
    isLoading,
    setLoading,
    setUrl,
  };
};
export default usePokemon;
