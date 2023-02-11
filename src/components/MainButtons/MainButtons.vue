<template>
    <div class="main-buttons">

        <button class="main-buttons__item" @click="makeHistoryBack">
            <img src="../../assets/images/back.png" alt="">
        </button>

        <button class="main-buttons__item" @click="makeHistoryForward">
            <img src="../../assets/images/forw.png" alt="">
        </button>

        <button class="main-buttons__item" @click="makeHeading">
            <img src="../../assets/images/bigt.png" alt="">
        </button>

        <button class="main-buttons__item" @click="makeParagraph">
            <img src="../../assets/images/smallt.png" alt="">
            <img src="../../assets/images/smallt.png" alt="">
        </button>

        <button class="main-buttons__item" @click="openModal">
            <img src="../../assets/images/image.png" alt="">
        </button>

        <div class="main-buttons__item-text" @click="openHtmlViewer">
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
                document.execCommand('insertHTML', false, '</br>' + window.getSelection().toString() )
                console.log('makeParagraph')
            },

            openModal(){
                document.execCommand('insertHTML', false, `<img class="main-page__show-result__insert-image" data-id="${this.$store.state.currentIdImage}" src="${require('../../assets/images/placeholder-img.jpg')}"/>` + window.getSelection().toString())
                let currentImage= document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage)+'"]');
                console.log(currentImage)
                if(currentImage){
                    this.$store.commit('setCurrentIdImage','add')
                    this.$store.commit('setIsOpenModal',true)
                }

            },

            openHtmlViewer(){
                this.$store.commit('setIsHtmlViewer',true)
            },


        }
    }
</script>

<style scoped>
@import "MainButtons.css";
</style>