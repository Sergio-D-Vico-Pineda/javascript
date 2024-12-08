<script setup>
defineProps({
    text: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: false
    },
    icon: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="card" :style="{ backgroundColor: color }">
        <span class="icon">
            <span class="circle">
                {{ icon }}
            </span>
        </span>
        <span class="text">{{ text }}</span>
        <span class="counter">{{ number ? number : Math.floor(Math.random() * 10) }}</span>
    </div>
</template>

<style scoped>
.card {
    min-height: 90px;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 1.2rem;
    font-weight: bold;

    .icon {
        grid-column: 1 / 3;
        display: grid;
        padding-top: 8px;
        padding-left: 10px;

        .circle {
            display: grid;
            place-content: center;
            background-color: white;
            width: 40px;
            border-radius: 100%;
            aspect-ratio: 1/1;
            color: v-bind("color");
        }
    }

    .text {
        display: flex;
        align-items: end;
        text-align: start;
        padding: 0px 12.5px 7.5px;
    }

    .counter {
        display: grid;
        place-content: end;
        padding: 7.5px 12.5px;
        font-size: 1.35rem;
    }

}
</style>