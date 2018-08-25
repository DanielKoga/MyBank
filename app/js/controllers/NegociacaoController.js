System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DaysOfWeek;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new index_2.MensagemView('#mensagemView', true);
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputData.val().replace(/-/g, '/'));
                    if (!this.isWorkDay(date)) {
                        this._mensagemView.update("Negociações só podem ser realizadas nos dias úteis!");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.add(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso!");
                }
                isWorkDay(date) {
                    return date.getDay() != DaysOfWeek.Sunday && date.getDay() != DaysOfWeek.Saturday;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DaysOfWeek) {
                DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
                DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
                DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
                DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
                DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
                DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
                DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
            })(DaysOfWeek || (DaysOfWeek = {}));
        }
    };
});
