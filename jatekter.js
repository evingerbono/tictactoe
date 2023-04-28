import Elem from "./elem.js";
import JatekPanel from "./jatekpanel.js";
class Jatekter {
    #lepes
    constructor() {
        this.#lepes=0;
        const szuloElem = $("article");
        for (let index = 1; index <= 9; index++) {
            const elem = new Elem(index, szuloElem);
        }
        $(window).on("elemKivalasztas",(event) => {
            console.log(event.detail);
            if (this.#lepes % 2 === 0) {
                event.detail.setElem("X")
            } else {
                event.detail.setElem("O");
            }
            this.#lepes++;
        });

        const JATEKPANEL = $("aside");
        const jPanel = new JatekPanel(JATEKPANEL);
    }
}
export default Jatekter;