<template>
    <transition>
        <div class="html-viewer" v-if="isHtmlViewer" @click="closeHtmlViewer">
            <div class="html-viewer__content" @click.stop>
                <div class="close-icon"><span @click="closeHtmlViewer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span></div>



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
                this.htmlContent=this.htmlContent.replace(/data-v-04b4c31e=""/g,'')
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


</style>