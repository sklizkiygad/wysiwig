<template>
    <transition>
    <div class="modal" v-if="isOpenModal" @click="closeModal">
        <div class="modal__content" @click.stop>

            <div class="modal__content__input"  :style="{color: isError ? 'red':'black'}">
            <p>URL:</p>
            <input @input="inputImage" @click="isError=false" :style="{color: isError ? 'red':'black', borderColor:isError ? 'red':'black'}" type="text" v-model="imageUrl" placeholder="Введите URL адрес изображения"/>
            </div>

            <div class="modal__content__buttons">
                <button @click="inputImageDone">Вставить</button>
                <button @click="closeModal">Отменить</button>
            </div>

            <p >{{isError? 'Невалидная ссылка*':''}}</p>

        </div>

    </div>
    </transition>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name:"Modal",
        data(){
          return{
              imageUrl:'',
              isError:false
          }
        },
        computed: mapState({
            isOpenModal: state => state.isOpenModal,
        }),
        methods:{
            closeModal(){
                this.imageUrl=''
                this.isError=false
                let currentImage= document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage-1)+'"]');
                currentImage.remove()
                this.$store.commit('setCurrentIdImage',"remove")
                this.$store.commit('setIsOpenModal',false)
            },
            inputImage(){

                if(this.isValidHttpUrl(this.imageUrl)){
                    console.log(this.$store.state.currentIdImage)
                   let currentImage= document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage-1)+'"]');
                    currentImage.src=this.imageUrl;
                    console.log(currentImage)
                }
                else{
                    this.isError=true
                }

            },

            inputImageDone(){
                this.imageUrl=''
                this.isError=false
                this.$store.commit('setIsOpenModal',false)
            },


            isValidHttpUrl() {
                    let url;
                    try {
                        url = new URL(this.imageUrl);
                    } catch (_) {
                        return false;
                    }
                    return url.protocol === "http:" || url.protocol === "https:";

            }

        }


    }
</script>

<style scoped>
    .modal{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal__content{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgba(256,256,256,0.8);
        gap: 10px;
        height: 175px;
        width: 300px;
        border-radius: 4px;
        padding: 10px 20px;
    }

    .modal__content__input{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .modal__content__input input{
       outline: none;
        border: none;
    }

    .modal__content__buttons{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .modal__content__buttons button{

        background: #282828;
        border-radius: 4px;
        cursor: pointer;
        color: rgba(256,256,256,0.8);
        padding: 5px;
    }

</style>