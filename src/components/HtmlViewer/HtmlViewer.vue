<template>
    <transition>
    <div class="html-viewer" v-if="isHtmlViewer" @click="closeHtmlViewer">
        <div class="html-viewer__content" @click.stop>

            <div class="html-viewer__content__buttons">
                <button @click="copyToClipboard">Скопировать в буфер обмена</button>
                <button @click="downloadHtml">Скачать файлом</button>

            </div>

            <pre ref="textToCopy">
                {{htmlContent}}
            </pre>


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

             format(html) {
        let tab = '\t';
        let result = '';
        let indent= '';

        html.split(/>\s*</).forEach(function(element) {
            if (element.match( /^\/\w/ )) {
                indent = indent.substring(tab.length);
            }

            result += indent + '<' + element + '>\r\n';

            if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) {
                indent += tab;
            }
        });

        return result.substring(1, result.length-3);
    },


            insertHtmlContent(){
                // let mainTextarea=document.getElementById('mainTextarea')
                // this.htmlContent=mainTextarea.innerHTML
                let mainTextarea=document.getElementById('mainTextarea')
                this.htmlContent=mainTextarea.innerHTML
                this.htmlContent=this.htmlContent.replace(/data-v-be6b764a=""/g,'')
                this.htmlContent=this.format(this.htmlContent)



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

        watch:{
            isHtmlViewer(){
                this.insertHtmlContent()
            }
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
    align-items: flex-end;
    justify-content: center;
}

.html-viewer__content{
    background: rgba(256,256,256,0.8);
    width: 100%;

    overflow-y: auto;
    border-radius: 4px;
    padding: 10px 20px;
    max-height: 55%;
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