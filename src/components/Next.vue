<template>
    <div>
        <button type="submit" class=" btn btn-indigo d-block w-100 text-uppercase" :disabled="invalid">
            Próximo
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            invalid: Boolean
        }
    }
</script>