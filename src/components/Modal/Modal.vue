<template>
    <transition>
    <div class="modal" v-if="isOpenModal" @click="closeModal">
        <div class="modal__content" @click.stop>


            <div class="modal__content__input"  :style="{color: isError ? 'red':'black'}">
                <p>Введите URL адрес изображения для вставки</p>
            <input @input="inputImage" @click="isError=false" :style="{color: isError ? 'red':'black', borderColor:isError ? 'red':'black'}" type="text" v-model="imageUrl" placeholder="URL"/>
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

                   let currentImage= document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage-1)+'"]');
                    currentImage.src=this.imageUrl;

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
    @import "./Modal.css";

</style>