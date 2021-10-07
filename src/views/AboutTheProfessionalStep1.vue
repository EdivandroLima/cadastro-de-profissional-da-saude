<template>
    <div>
        <div class="container-box">
            <h1 class="mb-5">Sobre o profissional</h1>
            <h2 class="fs-4 mb-4">Dados do profissional</h2>
            <form action="post" @submit.prevent="setDataRegister()">
                <!-- row -->
                <div class="row">
                    <div class="row col-12 col-md-6">

                        <div class="mb-4 col-12">
                            <label for="nome-completo" class="form-label">Nome completo*</label>
                            <input id="nome-completo" class="form-control" type="text" name="nome_completo"
                                placeholder="Digite o nome completo" v-model.trim="$v.nome.$model" :class="{
                                'is-invalid': $v.nome.$error}">
                            <div class="invalid-feedback" v-if="!$v.nome.required">
                                Nome completo é obrigatório.
                            </div>
                            <div class="invalid-feedback" v-if="!$v.nome.minLength">
                                Nome completo deve ter pelo menos 4 caracteres.
                            </div>
                        </div>

                        <div class="mb-4 col-8">
                            <label for="cpf" class="form-label">CPF*</label>
                            <input id="cpf" class="form-control" type="text" name="cpf" placeholder="Digite um CPF"
                                v-mask="'###.###.###-##'" v-model="$v.cpf.$model" :class="{
                                'is-invalid': $v.cpf.$error}">
                            <div class="invalid-feedback" v-if="!$v.cpf.required">
                                CPF é obrigatório.
                            </div>
                            <div class="invalid-feedback" v-if="!$v.cpf.minLength">
                                CPF deve ter 11 algarismos
                            </div>
                        </div>

                        <div class="mb-4 col-8">
                            <label for="celular" class="form-label">Número de celular*</label>
                            <input id="celular" class="form-control" type="text" name="celular"
                                placeholder="(00) 0 0000-0000" v-mask="'(##) # ####-####'" v-model="$v.celular.$model"
                                :class="{ 'is-invalid': $v.celular.$error}">
                            <div class="invalid-feedback" v-if="!$v.celular.required">
                                Celular é obrigatório.
                            </div>
                            <div class="invalid-feedback" v-if="!$v.celular.minLength">
                                Celular deve ter o DDD e 9 números.
                            </div>
                        </div>

                        <div class="mb-4 col-6">
                            <label for="estado" class="form-label">Estado*</label>
                            <select class="form-select" id="estado" v-model="$v.estado.$model"
                                :class="{ 'is-invalid': $v.estado.$error}" name="estado">
                                <option value="" selected>Selecione</option>
                                <option value="1">Paraná</option>
                                <option value="2">Rio Grande do Sul</option>
                                <option value="3">Santa Catarina</option>
                            </select>
                            <div class="invalid-feedback" v-if="!$v.estado.required">
                                Estado é obrigatório.
                            </div>
                        </div>

                        <div class="mb-4 col-6">
                            <label for="cidade" class="form-label">Cidade*</label>
                            <select name="cidade" class="form-select" id="cidade" v-model="$v.cidade.$model"
                                :class="{ 'is-invalid': $v.cidade.$error}" :disabled="$v.estado.$invalid">
                                <option value="" selected>Selecione</option>
                                <option v-for="(item, index) in this.$store.state.estados[estado ? estado : 1].cidades"
                                    :key="index" :value="index">
                                    {{item}}
                                </option>
                            </select>
                            <div class="invalid-feedback" v-if="!$v.cidade.required">
                                Selecione uma cidade.
                            </div>
                        </div>

                        <div class="mb-3 pt-3 col-12 d-flex align-items-center">
                            <div class="progress bg-white col-9" style="height: 20px">
                                <div class="progress-bar bg-indigo w-50" role="progressbar">
                                </div>
                            </div>
                            <div class="text-indigo fw-bold col-3 text-end" style="font-size: 18px">1 de 2</div>
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
    import {
        required,
        minLength
    } from 'vuelidate/lib/validators'
    import Next from '../components/Next'

    export default {
        data() {
            return {
                nome: '',
                cpf: '',
                celular: '',
                estado: '',
                cidade: '',
            }
        },
        methods: {
            setDataRegister() {
                let dataRegister = {
                    nome: this.nome,
                    cpf: this.cpf,
                    celular: this.celular,
                    estado: this.estado,
                    cidade: this.cidade,
                };
                this.$store.state.dataRegistro = dataRegister
                this.$router.push('/sobre-o-atendimento')
            }
        },
        components: {
            Next
        },
        validations: {
            nome: {
                required: required,
                minLength: minLength(4)
            },
            cpf: {
                required: required,
                minLength: minLength(14)
            },
            celular: {
                required: required,
                minLength: minLength(16)
            },
            estado: {
                required: required,
            },
            cidade: {
                required: required,
            },
        },
        metaInfo: {
            title: 'Sobre o profissional'
        }
    }

    // API de localidades
    // https://servicodados.ibge.gov.br/api/docs/localidades
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados/23/municipios
</script>

<style scoped>
    .container-box {
        background-image: url('../assets/desktop-pagina-1.png');
    }
</style>