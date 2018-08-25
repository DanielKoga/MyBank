import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    add(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    toArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}