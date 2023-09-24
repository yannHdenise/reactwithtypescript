import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api/getBase";

export interface PokemonDetail {
  description: string;
  language: { name: string };
}

// export interface PokemonTypes {
//   types: {types:PokemonType};
// }

interface FetchPokemonCharacteristicResponse {
  descriptions: PokemonDetail[];
}

const usePokemonCharacteristics = (endpoint: string) => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail[]>([]);
  const [errorOfDetail, setError] = useState("");
  const [isLoadingOfDetail, setLoading] = useState(false);

  const parts = endpoint.split("/"); // Split the URL by '/'
  const number = parts[parts.length - 2]; // Get the second-to-last part of the URL

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchPokemonCharacteristicResponse>("characteristic/" + number, {
        signal: controller.signal,
      })
      .then((res) => {
        setPokemonDetail(res.data.descriptions);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { pokemonDetail, errorOfDetail, isLoadingOfDetail };
};
export default usePokemonCharacteristics;
