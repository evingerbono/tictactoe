import Elem from "./elem.js";
import JatekPanel from "./jatekpanel.js";
class Jatekter {
    #lepes
    constructor() {
        this.#lepes=0;
        const szuloElem = $("article");
        const JATEKPANEL = $("aside");
        const jPanel = new JatekPanel(JATEKPANEL);
        for (let index = 1; index <= 9; index++) {
            const elem = new Elem(index, szuloElem);
        }
        $(window).on("elemKivalasztas",(event) => {
            console.log(event.detail);
            if (this.#lepes % 2 === 0) {
                event.detail.setElem("X");
                jPanel.setKovJ("Következő Játékos: O");
            } else {
                event.detail.setElem("O");
                jPanel.setKovJ("Következő Játékos: X");
            }
            this.#lepes++;
            jPanel.setLepes(this.#lepes);
            if (this.#lepes===9) {
                jPanel.setVege("Vége");
            }else{
                jPanel.setVege("Még nincs vége");
            }
        });
    }
}
export default Jatekter;