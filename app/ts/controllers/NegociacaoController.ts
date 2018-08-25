import { Negociacoes, Negociacao } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView', true);

    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    add(event: Event) {
        event.preventDefault();

        let date = new Date(this._inputData.val().replace(/-/g, '/'));

        if(!this.isWorkDay(date)) {
            this._mensagemView.update("Negociações só podem ser realizadas nos dias úteis!");
            return;
        }
        const negociacao = new Negociacao(
            date,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoes.add(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso!");
    }

    private isWorkDay(date: Date) : boolean {
        return date.getDay() != DaysOfWeek.Sunday && date.getDay() != DaysOfWeek.Saturday;
    }
}

enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}