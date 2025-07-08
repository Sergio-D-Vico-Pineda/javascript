<script setup>
defineProps({
    day: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div class="cont">
        <div class="bgicon">
            <i class="icon"><span></span></i>
        </div>
        <div class="text">
            <div>
                <span class="subh1">🗓 {{ day }} {{ time ? `⏰ ${time}` : "" }}</span>
                <span class="h1">{{ text }}</span>
            </div>
            <ul v-if="task" class="tasklist">
                <li>
                    <label class="cbcont">Pick up bag
                        <input type="checkbox">
                        <span class="cm"></span>
                    </label>
                </li>
                <li>
                    <label class="cbcont">Rice
                        <input type="checkbox">
                        <span class="cm"></span>
                    </label>
                </li>
                <li>
                    <label class="cbcont">Meat
                        <input type="checkbox">
                        <span class="cm"></span>
                    </label>
                </li>
                <li>
                    <button class="addtask">+ Add Sub-Task</button>
                </li>
            </ul>
        </div>
        <div class="dots"><span>•••</span></div>
    </div>
</template>

<style scoped>
.cont {
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 75px;
    max-height: 250px;
    background-color: #eef2fb;
    border-radius: 40px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

    .bgicon {
        align-self: self-start;
        width: 50px;
        aspect-ratio: 1/1;
        background-color: white;
        border-radius: 100%;
        display: grid;
        place-content: center;

        .icon {
            width: 25px;
            aspect-ratio: 1/1;
            background-color: #2d80fd;
            border-radius: 100%;
            display: grid;
            place-content: center;

            span {
                display: block;
                width: 20px;
                aspect-ratio: 1/1;
                background-color: white;
                border-radius: 100%;
            }
        }
    }

    .text {
        flex: 1;
        padding-inline: 12px;

        >div {
            display: flex;
            gap: 12.5px;
            flex-direction: column;
        }

        .h1 {
            font-weight: bold;
            font-size: 1.05rem;
        }

        .subh1 {
            font-size: 0.85rem;
            opacity: 0.5;
        }

        .tasklist {
            margin-top: 8.75px;
            display: flex;
            flex-direction: column;
            gap: 5px;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 5px;

                .cbcont {
                    display: block;
                    position: relative;
                    padding-left: 18.5px;
                    font-size: 0.85rem;
                    cursor: pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;

                    &:hover input[type="checkbox"]~.cm {
                        background-color: #ccc;
                    }

                    .cm:after {
                        left: 2.5px;
                        top: 1px;
                        width: 2.5px;
                        height: 5px;
                        border: solid white;
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                    }

                    input[type="checkbox"] {
                        position: absolute;
                        cursor: pointer;
                        opacity: 0;
                        height: 0;
                        width: 0;

                        &:checked~.cm {
                            background-color: #2d80fd;

                            &:after {
                                display: block;
                            }
                        }
                    }

                    .cm {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 12px;
                        width: 12px;
                        background-color: white;
                        border: 1px solid #2d80fd;
                        border-radius: 3px;

                        &:after {
                            content: "";
                            position: absolute;
                            display: none;
                        }
                    }
                }

                .addtask {
                    background-color: white;
                    border: none;
                    border-radius: 50px;
                    color: #3f8bff;
                    margin-top: 7px;
                    padding: 5px 10px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    /* font-size: 16px; */
                }
            }

        }
    }

    .dots {
        /* margin: auto 0; */
        margin-top: v-bind("task ? '8px' : '0px'");
        align-self: v-bind("task ? 'self-start' : 'auto'");
        display: grid;
        place-content: center;
        width: 30px;
        border-radius: 100%;
        aspect-ratio: 1/1;
        background-color: white;

        span {
            line-height: 0;
            font-weight: bold;
            font-size: 0.9rem;
            color: #b7b8c8;
        }
    }
}
</style>