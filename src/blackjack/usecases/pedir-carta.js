
/**
 * Esta funcion devuelve una carta mientras haya en el deck ( Baraja )
 * @param { Array<String> } deck 
 * @returns const<String>  Carta
 */
export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}