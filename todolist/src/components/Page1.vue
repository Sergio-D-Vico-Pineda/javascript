<script>
import Card from './Card.vue';
import Slide from './Slide.vue';

export default {
    components: { Card, Slide },
    data() {
        return {
            contador: 0,
            texto: ""
        }
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        decrementar() {
            this.contador--;
        }
    }
}
</script>

<template>
    <header class="header">
        <div class="header-content">
            <div class="text">
                <span class="h1">Hello Scarpy,</span>
                <span class="subh1">You have work today</span>
            </div>
            <div>
                <input type="text" v-model.lazy="texto" />
            </div>
            <div class="text1">
                <span>{{ texto }}</span>
            </div>
            <div class="icons">
                <span>🔔</span>
                <span>♻</span>
                <span>{{ contador }}</span>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="colores">
            <Card text="Today" color="#b4c4ff" number="6" icon="🕓" />
            <Card text="Scheduled" color="#fff57f" number="5" icon="⏱" />
            <Card text="All" color="#cff3e9" number="14" icon="🌀" />
            <Card text="Overdue" color="#ffc0f5" number="3" icon="⏲" />
        </div>
        <div>
            <p class="tslide">Today's Task</p>
            <div class="tslides">
                <Slide day="Today" time="4:50 PM" text="Project retrospective" />
                <Slide day="Today" time="4:50 PM" text="Evening team meeting" />
                <Slide day="Today" text="Create monthly deck" />
                <Slide day="Today" time="6:00 PM" text="Shop for groceries" task=true />
                <Slide day="Yesterday" time="10:30 PM" text="Read book" />
            </div>
        </div>
        <div @click="incrementar()" @contextmenu="decrementar()" class="fab">
            +
        </div>
    </main>
</template>

<style scoped>
.header {
    padding: 5px 10px;

    /* height: 25vh; */
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .text {
            display: flex;
            flex-direction: column;
            gap: 7px;
        }

        .icons {
            display: flex;
            gap: 12.5px;
            font-size: 1.5rem;

            &>:nth-child(2) {
                font-size: 1.75rem;
            }
        }
    }

    .h1 {
        font-weight: bold;
        font-size: 1.05rem;
    }

    .subh1 {
        opacity: 0.5;
    }

    .text1 {
        max-width: 200px;
        overflow: auto hidden;
        border: 1px solid black;
        width: fit-content;


        &::-webkit-scrollbar {
            display: none;
        }
    }
}

.main {
    /* height: 85vh; */
    display: flex;
    flex-direction: column;

    .colores {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        gap: 10px;
        padding: 10px;

        &>* {
            height: 80px;
            background-color: beige;
            /* border: 1px solid black; */
            border-radius: 10px;
        }
    }

    .tslide {
        padding-inline: 10px;
        font-weight: bold;
        margin: 25px 0px 10px;
    }

    .tslides {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .fab {
        cursor: pointer;
        position: fixed;
        bottom: 80px;
        right: 30px;
        width: 55px;
        aspect-ratio: 1/1;
        background-color: #2d80fd;
        border-radius: 100%;
        display: grid;
        place-content: center;
        font-size: 3rem;
        font-weight: bold;
        color: white;
        transition: all 0.2s ease-in-out;

        &:hover {
            scale: 1.1;
            background-color: #1a56b3;
        }
    }
}
</style>