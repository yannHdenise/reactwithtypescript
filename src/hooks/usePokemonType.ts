import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api/getBase";

export interface PokemonType {
  slot: number;
  type: { name: string };
}

// export interface PokemonTypes {
//   types: {types:PokemonType};
// }

interface FetchPokemonTypeResponse {
  types: PokemonType[];
}

const usePokemonType = (endpoint: string) => {
  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([]);
  const [errorOfType, setError] = useState("");
  const [isLoadingOfType, setLoading] = useState(false);

  const parts = endpoint.split("/"); // Split the URL by '/'
  const endpointX = parts[parts.length - 3];
  const number = parts[parts.length - 2]; // Get the second-to-last part of the URL

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPokemonTypeResponse>(endpointX + "/" + number, {
        signal: controller.signal,
      })
      .then((res) => {
        setPokemonTypes(res.data.types);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { pokemonTypes, errorOfType, isLoadingOfType };
};
export default usePokemonType;
