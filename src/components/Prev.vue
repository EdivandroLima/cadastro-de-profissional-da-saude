<template>
    <div>
        <a href="#" @click.prevent="$router.back()" class="text-dark d-inline-block mt-4 ms-3 ms-md-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <span class="visually-hidden">Anterior</span>
        </a>
    </div>
</template>
