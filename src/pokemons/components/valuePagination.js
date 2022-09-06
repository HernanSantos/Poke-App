import { getDateApiList } from "../helpers/getDateApiList";
import { getPokemonList } from "../helpers/getPokemonList";

export const valuePagination = async(valorLista) => {

    const valores = await getPokemonList(valorLista);
    const {next,previous} = valores;

    const algo = {next:next,prev:previous}
    return algo;
}
