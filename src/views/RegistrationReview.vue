<template>
    <div>
        <Prev />
        <div class="container-box">
            <h1 class="mb-3">Revisão do cadastro</h1>
            <div class="row">
                <div class="row col-12 col-md-6">

                    <div class="mb-4 col-12">
                        <h3 class="mt-3 mb-1 h6">Nome completo</h3>
                        <span class="opacity-75">{{getDataRegistro.nome}}</span>
                        <h3 class="mt-3 mb-1 h6">CPF</h3>
                        <span class="opacity-75">{{getDataRegistro.cpf}}</span>
                        <h3 class="mt-3 mb-1 h6">Número de celular ou telefone</h3>
                        <span class="opacity-75">{{getDataRegistro.celular}}</span>
                        <h3 class="mt-3 mb-1 h6">Estado/Cidade</h3>
                        <span class="opacity-75">{{getEstados[getDataRegistro.estado].estado}} -
                            {{getEstados[getDataRegistro.estado].cidades[getDataRegistro.cidade]}}</span>
                        <h3 class="mt-3 mb-1 h6">Especialidade principal</h3>
                        <span class="opacity-75">{{getEspecialidades[getDataRegistro.especialidade]}}</span>
                        <h3 class="mt-3 mb-1 h6">Preço da consulta</h3>
                        <span class="opacity-75">R$ {{getDataRegistro.precoConsulta}}</span>
                        <h3 class="mt-3 mb-1 h6">Formas de pagamento da consulta</h3>
                        <span class="opacity-75">{{getDataRegistro.formaDePagamento}}
                            {{getDataRegistro.parcelamento}}</span>
                    </div>

                    <div class="col-12">
                        <router-link to="/conclusao-do-cadastro" tag="button"
                            class=" btn btn-warning d-block w-100 text-uppercase rounded-15 my-3">
                            Cadastrar profissional
                        </router-link>
                        <router-link to="/" tag="button"
                            class="btn btn-link d-block w-100 text-indigo text-decoration-none mt-2 font-comfortaa fw-bolder">
                            Editar cadastro
                        </router-link>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {
        required
    } from 'vuelidate/lib/validators'
    import {
        mapGetters
    } from 'vuex'
    import Prev from '../components/Prev'

    export default {
        data() {
            return {
                precoConsulta: '',
                especialidade: '',
            }
        },
        components: {
            Prev
        },
        computed: mapGetters([
            'getDataRegistro',
            'getEstados',
            'getEspecialidades',
        ]),
        validations: {
            precoConsulta: {
                required: required,
            },
            especialidade: {
                required: required,
            },
        },
        metaInfo: {
            title: 'Revisão do cadastro'
        },
    }
</script>

<style scoped>
    .container-box {
        background-image: url('../assets/desktop-pagina-3.png');
    }
</style>