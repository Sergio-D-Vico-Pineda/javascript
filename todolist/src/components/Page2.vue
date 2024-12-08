<script setup>
import Unit from './Unit.vue';
</script>

<template>
    <header class="header">
        <h1 class="h1">
            <svg class="arrow" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </g>
            </svg>
            <span>
                All Task List
            </span>
        </h1>
    </header>
    <main class="main">
        <Unit nombre="Grocery" color="#f9defd" />
        <Unit nombre="Educational" color="#b4c4ff" />
        <Unit nombre="Home Related" color="#fff57f" />
        <Unit nombre="Work Related" color="#339363" />
        <Unit nombre="Mandatory Work" color="#ffc0f5" />
        <Unit nombre="Personal Notes" color="#cff3e9" />
    </main>
</template>

<style scoped>
.header {
    padding: 10px 12.5px;

    .h1 {
        font-size: 1.1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        font-weight: bold;

        .arrow {
            width: 24px;
            aspect-ratio: 1/1;
        }
    }

}

.main {
    padding-inline: 20px;
    margin-top: 12px;

    &>*:not(:first-child) {
        margin-top: -50px;
    }

    &>*:last-child {
        height: 135px;
    }
}
</style>