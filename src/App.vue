<template>
  <div id="app">
    <Modal/>
    <html-viewer/>
    <router-view/>
  </div>
</template>

<script>
  import Modal from "@/components/Modal/Modal";

  import HtmlViewer from "@/components/HtmlViewer/HtmlViewer";
  export default {
    name:"App",
    components:{Modal,HtmlViewer}
  }
</script>

<style>

@import "./assets/css/style.css";
</style>
