<template>
    <div class="main-page" >

        <main-buttons/>

<!--        <textarea name="" id="" cols="30" rows="10"  ref="mainTextarea"></textarea>-->

        <div class="main-page__show-result" id="mainTextarea" @keyup.enter="changeText" contenteditable="true" >

<!--            <p>Пишите здесь...</p>-->
            <div>
                Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий.
            </div>
            <div>
                <h1>Смотрите какие обезьянки</h1>
            </div>
            <div>
                <img class="main-page__show-result__insert-image" src="../../assets/images/monkey.png" alt="">
            </div>

            <div>
                Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой инйцу шо шщйоц ущойц ущошцщйуо йцщуо йщцоу щйоу шщйцош ущйтересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий.
            </div>
            <div>
                Товарищи! новая модель организационной деятельности требуют от нас анализа направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.
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

                }
            }
        }


    }
</script>

<style scoped>
@import "./MainPage.css";
</style>