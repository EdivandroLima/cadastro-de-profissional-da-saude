<template>
    <div id="app">
        <div class="p-0 p-md-3 container-fluid">
            <transition name="fade" mode="out-in">
                <!-- content -->
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    /* fonts */
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;700&family=Open+Sans:wght@300;400;500;600;700&display=swap');
    /* font-family: 'Comfortaa', cursive; */
    /* font-family: 'Open Sans', sans-serif; */

    html,
    body,
    #app {
        background-color: #ffe766;
        font-family: 'Open Sans', sans-serif;
    }

    h1,
    .btn {
        font-family: 'Comfortaa', cursive;
    }

    .font-comfortaa {
        font-family: 'Comfortaa', cursive;
    }

    h1 {
        color: #483698;
        font-weight: 600 !important;
    }

    h2 {
        font-weight: 600 !important;
    }

    .container-fluid {
        max-width: 1000px;
    }

    .container-box {
        background-color: #FFFFFF;
        padding: 40px 70px;
        border-radius: 30px;
        box-shadow: 0px 0px 1rem rgba(0, 0, 0, .2);
        margin: 30px 0;
        margin-bottom: 70px;
        background-repeat: no-repeat;
        background-size: 50% auto;
        background-position: center right
    }

    @media (max-width: 576px) {
        .container-box {
            padding: 40px 20px;
            margin: 30px 0px;
            margin-bottom: 0;
            background-size: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .col-md-6 {
            padding-right: 0px !important
        }
    }

    input.form-control,
    select.form-select {
        border-color: #483698
    }

    .bg-indigo {
        background-color: #483698 !important;
    }

    .border-indigo {
        border-color: #483698 !important;
    }

    .text-indigo {
        color: #483698 !important;
    }

    .btn-indigo {
        border-radius: 15px !important;
        color: #ffffff !important;
        background-color: #483698 !important;
        border-color: #483698 !important;
    }

    .btn-indigo:hover {
        color: #ffffff !important;
        background-color: #483698 !important;
        border-color: #483698 !important;
    }

    .btn-indigo:focus {
        color: #ffffff !important;
        background-color: #483698 !important;
        border-color: #483698 !important;
        box-shadow: 0 0 0 0.2rem rgba(72, 54, 152, .5) !important;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .2s;
    }

    .form-check.form-check-style {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        padding: 10px 0px;
        padding-left: 50px !important;
        margin: 10px 0 !important;
    }

    .form-check-label-style {
        margin-left: 20px;
    }

    .rounded-15 {
        border-radius: 15px !important;
    }
</style>