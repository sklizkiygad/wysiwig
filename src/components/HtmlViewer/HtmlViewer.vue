<template>
    <transition>
    <div class="html-viewer" v-if="isHtmlViewer" @click="closeHtmlViewer">
        <div class="html-viewer__content" @click.stop>

            <pre ref="textToCopy">
                {{htmlContent}}
            </pre>

            <div class="html-viewer__content__buttons">
                <button @click="copyToClipboard">Скопировать в буфер обмена</button>
                <button @click="downloadHtml">Скачать файлом</button>

            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import {mapState} from "vuex";

    export default {

        data(){
        return{
            htmlContent:''
        }
        },
        methods:{
            insertHtmlContent(){
                let mainTextarea=document.getElementById('mainTextarea')
                this.htmlContent=mainTextarea.innerHTML


            },
            closeHtmlViewer(){
                this.$store.commit('setIsHtmlViewer',false)
            },
            copyToClipboard(){
                navigator.clipboard.writeText(this.htmlContent)
                    .then(() => {
                        alert('Скопирован в буфер обмена')
                    })
                    .catch(err => {
                        alert("Не удалось скопировать:"+ err);
                    });
            },
            downloadHtml(){

                let linkDownload=document.createElement("a");
                const documentDownload = new Blob([this.htmlContent], {type: 'text'});
                linkDownload.href=URL.createObjectURL(documentDownload)
                linkDownload.download = "example.html";
                linkDownload.click();
            }



        },

        mounted() {
            this.insertHtmlContent()
        },

        computed: mapState({
            isHtmlViewer: state => state.isHtmlViewer,
        }),

    }
</script>

<style scoped>
@import "./HtmlViewer.css";

.html-viewer{
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

.html-viewer__content{
    background: rgba(256,256,256,0.8);
    width: 80%;
    margin: 10px 0;
    overflow-y: auto;
    border-radius: 4px;
    padding: 10px 20px;
    max-height: 100%;
}

.html-viewer__content pre{
    max-width: 100%;
    white-space: pre-wrap;
}

.html-viewer__content__buttons {
    display: flex;
    gap: 10px;
}
    .html-viewer__content__buttons button{
        background: #282828;
        border-radius: 4px;
        cursor: pointer;
        color: rgba(256,256,256,0.8);
        padding: 5px;
    }
</style>