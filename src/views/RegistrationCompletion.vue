<template>
    <div>
        <div class="container-box">
            <div class="row align-items-center" style="min-height: 400px">
                <div class="row col-12 col-md-6">

                    <div class="mb-4 col-12 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor"
                            class="bi bi-check2-circle text-success" viewBox="0 0 16 16">
                            <path
                                d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path
                                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>

                        <h1 class="h2 mt-3 ">Obrigado, {{this.$store.state.dataRegistro.nome}}!</h1>
                        <p class="">
                            O seu cadastro foi realizado com sucesso.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Conclusão do cadastro'
        },

        beforeCreate() {
            if (!this.$store.state.dataRegistro.nome) {
                this.$router.push('/')
            }
        },
    }
</script>

<style scoped>
    .container-box {
        background-image: url('../assets/desktop-pagina-4.jpg');
    }
</style>