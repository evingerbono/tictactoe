class JatekPanel{
    constructor(szuloElem){
        szuloElem.append(`<p></p>`);
        this.lepes = $('p:last-child');
        szuloElem.append(`<p></p>`);
        this.kovetJ = $('p:last-child');
        szuloElem.append(`<p></p>`);
        this.vege = $('p:last-child');
        console.log(this.lepes);
        console.log(this.kovetJ);
        console.log(this.vege);

    }

    setLepes(ertek){
        this.lepes.html(ertek);
    }

    setKovJ(ertek){
        this.kovetJ.html(ertek);
    }

    setVege(ertek){
        this.vege.html(ertek);
    }
}
export default JatekPanel;