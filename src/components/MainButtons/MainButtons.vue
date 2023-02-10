<template>
    <div class="main-buttons">

        <div class="main-buttons__item" @click="makeHistoryBack">
            <img src="../../assets/images/back.png" alt="">
        </div>

        <div class="main-buttons__item" @click="makeHistoryForward">
            <img src="../../assets/images/forw.png" alt="">
        </div>

        <div class="main-buttons__item" @click="makeHeading">
            <img src="../../assets/images/bigt.png" alt="">
        </div>

        <div class="main-buttons__item" @click="makeParagraph">
            <img src="../../assets/images/smallt.png" alt="">
            <img src="../../assets/images/smallt.png" alt="">
        </div>

        <div class="main-buttons__item" @click="openModal">
            <img src="../../assets/images/image.png" alt="">
        </div>

        <div class="main-buttons__item-text">
            <a>Скопировать HTML</a>
        </div>



    </div>
</template>

<script>
    export default {
        name:"MainButtons",
        methods:{
            makeHistoryBack(){
                document.execCommand("undo");
            },
            makeHistoryForward(){
                document.execCommand("redo");
            },
            makeHeading(){
                document.execCommand('insertHTML', false, '<h1>' + window.getSelection().toString() + '</h1>')
                console.log('makeHead')
            },
            makeParagraph(){
                document.execCommand('insertHTML', false, '<br>' + window.getSelection().toString() )
                console.log('makeParagraph')
            },

            openModal(){
                this.$store.commit('setIsOpenModal',true)

            },


        }
    }
</script>

<style scoped>
@import "MainButtons.css";
</style>