<template>
    <div class="main-page" >

        <main-buttons/>

<!--        <textarea name="" id="" cols="30" rows="10"  ref="mainTextarea"></textarea>-->

        <div class="main-page__show-result" ref="mainTextarea" @keyup.enter="changeText" contenteditable="true" >

<!--            <p>Пишите здесь...</p>-->
            <div>
                Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий.

            </div>

        </div>

    </div>
</template>

<script>
    import MainButtons from "@/components/MainButtons/MainButtons";
    import {mapState} from "vuex";
    export default {
        components:{MainButtons},
        name:"MainPage",

        data(){
            return{
                contentText:'',
            }

        },

        computed: mapState({
            inputImageUrl: state => state.inputImageUrl,
        }),
        watch:{
            inputImageUrl(newVal){
                if(newVal){
                    alert('ok')
                }
            }
        }


    }
</script>

<style scoped>
.main-page{
    padding: 77px 100px;
}
    .main-page__show-result{
        margin-top: 30px;
        width: 100%;
        color: #EAEAEA;
        outline: none;
    }
</style>