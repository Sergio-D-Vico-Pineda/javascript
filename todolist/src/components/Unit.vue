<script setup>
defineProps({
    nombre: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="unit">
        <span class="name">{{ nombre }}</span>
        <div class="compl"><span>{{ Math.floor(Math.random() * 15) }} Completed</span></div>
        <span class="notes">{{ Math.floor(Math.random() * 12 + 1) }} Notes</span>
        <span class="arrow">↗</span>
    </div>
</template>

<style scoped>
.unit {
    padding: 10px 30px;
    height: 175px;
    background-color: v-bind("color");
    border-radius: 35px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;

    >* {
        display: grid;
        align-items: center;
    }

    .name {
        width: fit-content;
        font-size: 1.3rem;
        font-weight: 600;
        white-space: nowrap;
    }

    .compl {
        flex: 1;
        display: flex;
        justify-content: end;
        width: 100%;

        >span {
            /* white-space: nowrap; */
            width: fit-content;
            padding: 5px 10px;
            font-size: 0.9rem;
            /* background-color: rgba(0, 0, 0, 0.1); */
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            font-weight: 600;
        }

    }

    .notes {
        opacity: 0.85;
        align-self: self-start;
        font-size: 1.05rem;
    }

    .arrow {
        margin-top: 5px;
        align-self: self-start;
        font-size: 3rem;
        line-height: 0;
        text-align: end;
    }
}
</style>