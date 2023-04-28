
/**
 * 
 * @param { String } carta 
 * @returns { HTMLImageElement } imagen html de retorno
 */
export const crearCartaHTML = ( carta ) =>{

    if(!carta) throw new Error('carta es necesaria');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}