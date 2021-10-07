import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "Edi",
        dataRegistro: {

        },
        estados: {
            0: {
                cidades: []
            },
            1: {
                estado: 'Paraná',
                cidades: ['Londrina', 'Maringá']
            },
            2: {
                estado: 'Rio Grande do Sul',
                cidades: ['Pelotas', 'Porto Alegre']
            },
            3: {
                estado: 'Santa Catarina',
                cidades: ['Florianópolis ', 'Joinville']
            },
        },
        especialidades: [
            'Cardiologia',
            'Dermatologia',
            'Neurologia',
            'Oftalmologia',
            'Psiquiatria',
            'Urologia',
        ]
    },
    getters: {
        getDataRegistro(state) {
            return state.dataRegistro
        },
        getEstados(state) {
            return state.estados
        },
        getEspecialidades(state) {
            return state.especialidades
        },
    }
})