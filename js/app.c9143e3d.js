(function(){"use strict";var t={4928:function(t,e,n){var i=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Modal"),e("html-viewer"),e("router-view")],1)},r=[],a=function(){var t=this,e=t._self._c;return e("transition",[t.isOpenModal?e("div",{staticClass:"modal",on:{click:t.closeModal}},[e("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"modal__content__input",style:{color:t.isError?"red":"black"}},[e("p",[t._v("Введите URL адрес изображения для вставки")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.imageUrl,expression:"imageUrl"}],style:{color:t.isError?"red":"black",borderColor:t.isError?"red":"black"},attrs:{type:"text",placeholder:"URL"},domProps:{value:t.imageUrl},on:{input:[function(e){e.target.composing||(t.imageUrl=e.target.value)},t.inputImage],click:function(e){t.isError=!1}}})]),e("div",{staticClass:"modal__content__buttons"},[e("button",{on:{click:t.inputImageDone}},[t._v("Вставить")]),e("button",{on:{click:t.closeModal}},[t._v("Отменить")])]),e("p",[t._v(t._s(t.isError?"Невалидная ссылка*":""))])])]):t._e()])},s=[],l=n(3822),A={name:"Modal",data(){return{imageUrl:"",isError:!1}},computed:(0,l.rn)({isOpenModal:t=>t.isOpenModal}),methods:{closeModal(){this.imageUrl="",this.isError=!1;let t=document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage-1)+'"]');t.remove(),this.$store.commit("setCurrentIdImage","remove"),this.$store.commit("setIsOpenModal",!1)},inputImage(){if(this.isValidHttpUrl(this.imageUrl)){let t=document.querySelector('.main-page__show-result__insert-image[data-id="'+(this.$store.state.currentIdImage-1)+'"]');t.src=this.imageUrl}else this.isError=!0},inputImageDone(){this.imageUrl="",this.isError=!1,this.$store.commit("setIsOpenModal",!1)},isValidHttpUrl(){let t;try{t=new URL(this.imageUrl)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol}}},c=A,m=n(1001),u=(0,m.Z)(c,a,s,!1,null,"0a52d714",null),g=u.exports,d=function(){var t=this,e=t._self._c;return e("transition",[t.isHtmlViewer?e("div",{staticClass:"html-viewer",on:{click:t.closeHtmlViewer}},[e("div",{staticClass:"html-viewer__content",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"html-viewer__content__buttons"},[e("button",{on:{click:t.copyToClipboard}},[t._v("Скопировать в буфер обмена")]),e("button",{on:{click:t.downloadHtml}},[t._v("Скачать файлом")])]),e("pre",{ref:"textToCopy"},[t._v("            "+t._s(t.htmlContent)+"\n        ")])])]):t._e()])},p=[],h={data(){return{htmlContent:""}},methods:{format(t){let e="\t",n="",i="";return t.split(/>\s*</).forEach((function(t){t.match(/^\/\w/)&&(i=i.substring(e.length)),n+=i+"<"+t+">\r\n",t.match(/^<?\w[^>]*[^\/]$/)&&!t.startsWith("input")&&(i+=e)})),n.substring(1,n.length-3)},insertHtmlContent(){let t=document.getElementById("mainTextarea");this.htmlContent=t.innerHTML,this.htmlContent=this.htmlContent.replace(/data-v-be6b764a=""/g,""),this.htmlContent=this.format(this.htmlContent)},closeHtmlViewer(){this.$store.commit("setIsHtmlViewer",!1)},copyToClipboard(){navigator.clipboard.writeText(this.htmlContent).then((()=>{alert("Скопирован в буфер обмена")})).catch((t=>{alert("Не удалось скопировать:"+t)}))},downloadHtml(){let t=document.createElement("a");const e=new Blob([this.htmlContent],{type:"text"});t.href=URL.createObjectURL(e),t.download="example.html",t.click()}},watch:{isHtmlViewer(){this.insertHtmlContent()}},computed:(0,l.rn)({isHtmlViewer:t=>t.isHtmlViewer})},w=h,f=(0,m.Z)(w,d,p,!1,null,"ac27d3ba",null),I=f.exports,C={name:"App",components:{Modal:g,HtmlViewer:I}},v=C,E=(0,m.Z)(v,o,r,!1,null,null,null),b=E.exports,_=n(2631),U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page"},[e("main-buttons"),e("div",{staticClass:"main-page__show-result",attrs:{id:"mainTextarea",contenteditable:"true"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeText.apply(null,arguments)}}},[e("div",[t._v(" Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий. ")]),t._m(0),t._m(1),e("div",[t._v(" Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой инйцу шо шщйоц ущойц ущошцщйуо йцщуо йщцоу щйоу шщйцош ущйтересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий. ")]),e("div",[t._v(" Товарищи! новая модель организационной деятельности требуют от нас анализа направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. ")])])],1)},k=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Смотрите какие обезьянки")])])},function(){var t=this,e=t._self._c;return e("div",[e("img",{staticClass:"main-page__show-result__insert-image",attrs:{src:n(9906),alt:""}})])}],y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-buttons"},[e("button",{staticClass:"main-buttons__item",on:{click:t.makeHistoryBack}},[e("img",{attrs:{src:n(4986),alt:""}})]),e("button",{staticClass:"main-buttons__item",on:{click:t.makeHistoryForward}},[e("img",{attrs:{src:n(6283),alt:""}})]),e("button",{staticClass:"main-buttons__item",on:{click:t.makeHeading}},[e("img",{attrs:{src:n(8291),alt:""}})]),e("button",{staticClass:"main-buttons__item",on:{click:t.makeParagraph}},[e("img",{attrs:{src:n(8853),alt:""}}),e("img",{attrs:{src:n(8853),alt:""}})]),e("button",{staticClass:"main-buttons__item",on:{click:t.openModal}},[e("img",{attrs:{src:n(1169),alt:""}})]),e("div",{staticClass:"main-buttons__item-text",on:{click:t.openHtmlViewer}},[e("a",[t._v("Скопировать HTML")])])])},H=[],M={name:"MainButtons",methods:{makeHistoryBack(){document.execCommand("undo")},makeHistoryForward(){document.execCommand("redo")},makeHeading(){document.execCommand("insertHTML",!1,"<h1>"+window.getSelection().toString()+"</h1>"),console.log("makeHead")},makeParagraph(){document.execCommand("insertHTML",!1,"</br>"+window.getSelection().toString()),console.log("makeParagraph")},openModal(){document.execCommand("insertHTML",!1,`<img class="main-page__show-result__insert-image" data-id="${this.$store.state.currentIdImage}" src="${n(6919)}"/>`+window.getSelection().toString());let t=document.querySelector('.main-page__show-result__insert-image[data-id="'+this.$store.state.currentIdImage+'"]');console.log(t),t&&(this.$store.commit("setCurrentIdImage","add"),this.$store.commit("setIsOpenModal",!0))},openHtmlViewer(){this.$store.commit("setIsHtmlViewer",!0)}}},x=M,B=(0,m.Z)(x,y,H,!1,null,"1e2cab4e",null),O=B.exports,S={components:{MainButtons:O},name:"MainPage",data(){return{contentText:""}},computed:(0,l.rn)({inputImageUrl:t=>t.inputImageUrl}),watch:{inputImageUrl(t){}}},V=S,Q=(0,m.Z)(V,U,k,!1,null,"04b4c31e",null),R=Q.exports;i.ZP.use(_.ZP);const T=[{path:"/",name:"MainPage",component:R}],G=new _.ZP({mode:"history",base:"/wysiwig/",routes:T});var P=G;i.ZP.use(l.ZP);var W=new l.ZP.Store({state:{isOpenModal:!1,inputImageUrl:"",selectionForImage:null,currentIdImage:0,isHtmlViewer:!1},getters:{},mutations:{setIsOpenModal(t,e){t.isOpenModal=e},setInputImageUrl(t,e){t.inputImageUrl=e},setSelectionForImage(t,e){t.selectionForImage=e},setCurrentIdImage(t,e){"add"===e?t.currentIdImage=t.currentIdImage+1:t.currentIdImage>0&&"remove"===e&&(t.currentIdImage=t.currentIdImage-1)},setIsHtmlViewer(t,e){t.isHtmlViewer=e}},actions:{},modules:{}});i.ZP.config.productionTip=!1,new i.ZP({router:P,store:W,render:t=>t(b)}).$mount("#app")},4986:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGWSURBVHgBrVXdUcJAEP42gfE1JaQE7SB0gBXIn874BFSgViC+OSOQ0AFUAFQgHZgOzMgTg+TcDTk8mKAPuW9m5/Z+9tu9vewGrVA9t8dKtUaqB4uokEJGSIQuDwO90QuVtwZuoFDn6SWLl28lLCuWqLrB8vWe4kLi0wUh/AK6671Dr8BG1gKR7QVivnE0btLT6SGSNOR6XCXUtgpz1n3zkNpHmWQGJ3sH2w1qZvQmsTb2DcaIUkyGt7QwWTpvKlAuGpBUnSE3ic0I4/Qb19EdrfAHxEHqIjRusRi1qHaOOOGVfuog1gtR8zhiE41Q+a7CO/L3ENtxmwZOwVmPv5CQD8+1sPObc8TsNEaKpp6z7YOMQpygJEYdmvKw0IFJiio7wpWTZg9RCHLwuQNm+AecghlHG4i+c1EnWEKe64/MCQdijVhg1oQDS+CIzSq1R1zdHlekNWJ+sEDrnJClNeK8O2bg4ppaIeYOJ0Xhiy7tgItmVUFJtIeqzmyPes5Nqy9j+Yid3xQwXvIqLE8sFZerE+5sh9/bDyCEpQx3AomlAAAAAElFTkSuQmCC"},8291:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC3SURBVHgB7ZTBDcIwDEW/SwfpCGUC1FFoL2zRMEhbNmAFRoANMgLXAqlxEIcoCj2UnKr8Sxx/5yVWJFM9cEsMhQhigqKmZ0ZEZYis3N10NZFfUHesJNvaWHo59g0pv8btMpNIf4q/6xK5jGwiVPbmaUSFhXIZ+WlPWnIKf8hlRP+UBEzABFwHkELJw8DFg3EWs/xxThvCVqbM3TeCL3walDMwqyJn7EJGEGg2uMxNcPGurxG3kPcGrLVAywofeU8AAAAASUVORK5CYII="},6283:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGHSURBVHgBtVTdUcJAEP72QH2NHWAHloAVKBXIj8zoE1ABUoHy5iiQlIAVCBWIFZgOzPgWMFk3lxyE/3GI38zN3e7tfbN3+90SMkTV5gdiNJnRym8LatpsfQMNCSyKeS7DivwMuOKbgDA88jF+uiPXnIlI9Uxybgth2wTtgcsEZ1ChTmTUBpJr4l8ivrW5MGO8ybKQ9ku0h3hIost7yf7k2EdpdoLPNeKE9N1cOUGXAgx7dRqliW5euMg5lGV5nc4+lVBMvJpp9I6hjwsn9X6bUO1zWa7Q3nALVxdPSO//Qlq2WRczlNhcfNZZjaEkW/M2CHyc7SI1ksJuuGoa4mpuMpx916dwvXibiPOiuUtjBQrdfSckpqVCfOyKCadwSLT3hVgJXr9Kp8gICgt5ecgQCv8ExbGwIxRERhYygtINJUH+RzebbIgl47Ex5Ju2kRFUqPSvMYUr1np8hQygnAp50uw6Cw/s+jMf/CRaFYMaPco0SnxWmEMDB2Iut4BQihSiey/jFQfiF2wboYBR6ilqAAAAAElFTkSuQmCC"},1169:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEZSURBVHgB1ZTfbcIwEId/RyO1jx0hHaEbtBt0A9KkD2UKwhTwQEjYgA1YgQ2SEXhEQuK4E3LkYPM/eeCTLJ8i58udzw7FOQ/BiNAmhIKSGTM6oIeOCKy4ymL6wAPEMy4JCDXuLOO7xVHOX9KffqtiPUkvjKWERZJx3opYpcRI6weEyCcPcAOOtCkHXxLL/oVvG2AyoOqUVOKRzkwYGjlZDmcrtCGyf+X2FaVpjk86TSjVYT7gFGHdvEqGvlw0VjAWks3PsdRe8pdxWmfuyfjdkR5KPCtVfJkfiw1zKWPV8J+Q2nI+VO2Ia6lc7WhH+DbyS1IfgU+qQfFLa5k+/8cc2qfjWuyM10Zqc49UecL/sTZGGtVHi/QY8z1p+X/P+9hcNwAAAABJRU5ErkJggg=="},9906:function(t,e,n){t.exports=n.p+"img/monkey.2baaae65.png"},6919:function(t,e,n){t.exports=n.p+"img/placeholder-img.d7ff236d.jpg"},8853:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADDSURBVHgB1ZLbDcIwDEWvQwfoCIzABrQbwAS0lAHKBIgJgG8ebSehI7AB7MAfEjGOkCoHofL465WiJNY9sZOYsh2P2GBFQB8fxMDJEuKADBb4AnCSgwfGIpGBEL8pNEJfVGAjo/JKYqSurCYb4WzuhFTWNTGW+ynlYqo1dMiolHuMlacKypRcphgtevUY/KEuQXnBoTxppGNJwVErdGWsZZroWI9xnG190IPkE4d4I2v87IHekMWcn73YtJbrGHtDqX0PgTY5AFlW8B0AAAAASUVORK5CYII="}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(c--,1);var A=o();void 0!==A&&(e=A)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/wysiwig/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],s=i[1],l=i[2],A=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(e&&e(i);A<a.length;A++)r=a[A],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkwysiwig"]=self["webpackChunkwysiwig"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(4928)}));i=n.O(i)})();
//# sourceMappingURL=app.c9143e3d.js.map