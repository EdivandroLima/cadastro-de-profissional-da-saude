<template>
    <div>
        <Prev />
        <div class="container-box">
            <h1 class="mb-5">Sobre o atendimento</h1>
            <h2 class="fs-4 mb-4">Detalhes do atendimento</h2>
            <form action="post" @submit.prevent="setDataRegister()">
                <!-- row -->
                <div class="row">
                    <div class="row col-12 col-md-6">

                        <div class="mb-4 col-12">
                            <label for="estado" class="form-label">Especialidade principal*</label>
                            <select class="form-select" id="estado" v-model="$v.especialidade.$model"
                                :class="{ 'is-invalid': $v.especialidade.$error}">
                                <option value="">Selecione a especialidade</option>
                                <option v-for="(item, index) in this.$store.state.especialidades" :key="index"
                                    :value="index">{{item}}
                                </option>
                            </select>
                            <div class="invalid-feedback" v-if="!$v.especialidade.required">
                                Especialidade é obrigatório.
                            </div>
                        </div>

                        <div class="mb-4 col-8">
                            <label for="preco-consulta" class="form-label">Informe o preço da consulta*</label>
                            <div class="input-group mb-3">
                                <span class="input-group-text bg-indigo text-white border-indigo"
                                    id="basic-addon1">R$</span>
                                <input type="text" class="form-control" id="preco-consulta" name="preco_consulta"
                                    v-mask="[ '##', /,|[0-9]/, /,|[0-9]/, '##']" v-model="$v.precoConsulta.$model"
                                    :class="{ 'is-invalid': $v.precoConsulta.$error}" placeholder="Valor">
                                <div class="invalid-feedback" v-if="!$v.precoConsulta.required">
                                    Preço da consulta é obrigatório.
                                </div>
                            </div>

                        </div>

                        <div class="mb-4 col-12">
                            <label class="form-label">Formas de pagamento da consulta*</label>
                            <div class="form-check form-check-style">
                                <input class="form-check-input" value="Em dinheiro" type="radio" name="metodo_pagamento"
                                    id="dinheiro" v-model="formaDePagamento" checked>
                                <label class="form-check-label form-check-label-style" for="dinheiro">
                                    Em dinheiro
                                </label>
                            </div>
                            <div class="form-check form-check-style">
                                <input class="form-check-input" type="radio" value="Pix" name="metodo_pagamento"
                                    id="pix" v-model="formaDePagamento">
                                <label class="form-check-label form-check-label-style" for="pix">
                                    Pix
                                </label>
                            </div>
                            <div class="form-check form-check-style">
                                <input class="form-check-input" type="radio" name="metodo_pagamento" id="cartao-credito"
                                    value="Cartão de crédito" v-model="formaDePagamento">
                                <label class="form-check-label form-check-label-style" for="cartao-credito">
                                    Cartão de crédito
                                </label>

                                <div v-if="formaDePagamento == 'Cartão de crédito'" key="parcelamento"
                                    class="parcelamento"
                                    :class="{'parcelamento-active' : formaDePagamento == 'Cartão de crédito'}">
                                    <div class="form-check-label-style mt-3">
                                        Parcelamento em
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="radio" name="parcelamento"
                                            v-model="parcelamento" id="p1x" value=" - Parcelamento em 1x sem juros"
                                            checked>
                                        <label class="form-check-label" for="p1x">
                                            1x, sem juros
                                        </label>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="radio" name="parcelamento"
                                            v-model="parcelamento" id="p2x" value=" - Parcelamento em 2x sem juros">
                                        <label class="form-check-label" for="p2x">
                                            2x, sem juros
                                        </label>
                                    </div>
                                    <div class="form-check mt-3">
                                        <input class="form-check-input" type="radio" name="parcelamento"
                                            v-model="parcelamento" id="p3x" value=" - Parcelamento em 3x sem juros">
                                        <label class="form-check-label" for="p3x">
                                            3x, sem juros
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="mb-3 pt-3 col-12 d-flex align-items-center">
                            <div class="progress bg-white col-9" style="height: 20px">
                                <div class="progress-bar bg-indigo w-100" role="progressbar">
                                </div>
                            </div>
                            <div class="text-indigo fw-bold col-3 text-end" style="font-size: 18px">2 de 2</div>
                        </div>

                        <div class="mb-4 col-12">
                            <Next :invalid="$v.$invalid" />
                        </div>

                    </div>
                </div>
                <!--/ row -->
            </form>
        </div>
    </div>
</template>

<script>

    import { required } from 'vuelidate/lib/validators'
    import Prev from '../components/Prev'
    import Next from '../components/Next'

    export default {
        data() {
            return {
                precoConsulta: '',
                especialidade: '',
                formaDePagamento: 'Em dinheiro',
                parcelamento: '',
            }
        },
        components: {
            Prev,
            Next
        },
        methods: {
            setDataRegister() {
                this.$v.$touch()
                if (this.formaDePagamento != 'Cartão de crédito') {
                    this.parcelamento = ''
                }
                let dataRegister = {
                    precoConsulta: this.precoConsulta,
                    especialidade: this.especialidade,
                    formaDePagamento: this.formaDePagamento,
                    parcelamento: this.parcelamento,
                };
                dataRegister = {
                    ...this.$store.state.dataRegistro,
                    ...dataRegister,
                }
                this.$store.state.dataRegistro = dataRegister
                this.$router.push('/revisao-do-cadastro')
            }
        },
        validations: {
            precoConsulta: {
                required: required,
            },
            especialidade: {
                required: required,
            },
        },
        metaInfo: {
            title: 'Sobre o profissional'
        }
    }
</script>

<style scoped>
    .container-box {
        background-image: url('../assets/desktop-pagina-2.png');
    }

    .parcelamento {
        height: 0;
        overflow: hidden;
    }

    .parcelamento-active {
        height: auto;
    }
</style>