(this["webpackJsonpfinance-journal"]=this["webpackJsonpfinance-journal"]||[]).push([[0],{100:function(e,t,a){e.exports={SidebarNavigation:"SidebarNavigation_SidebarNavigation__2xF2H"}},101:function(e,t,a){e.exports={LinksInsideSidebar:"LinksInsideSidebar_LinksInsideSidebar__-9zmT"}},104:function(e,t,a){e.exports=a(184)},109:function(e,t,a){},110:function(e,t,a){},15:function(e,t,a){e.exports={Deposit:"Deposit_Deposit__1NAPd",infoTitle:"Deposit_infoTitle__3jPvq",depoAndStatistic:"Deposit_depoAndStatistic__BLdFw",addInputWrapper:"Deposit_addInputWrapper__2ApE4",inputsBox:"Deposit_inputsBox__2lUKt",datePicker:"Deposit_datePicker__9Amuz",select:"Deposit_select__2HWqy",DepoYear:"Deposit_DepoYear__1vYYJ",noDeposit:"Deposit_noDeposit___7nqY",modalButtons:"Deposit_modalButtons__AzZit",delModalTitle:"Deposit_delModalTitle__kuX5m"}},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),c=a.n(o),i=(a(109),a(19)),u=a(20),s=a(22),l=a(21),p=a(23),d=(a(110),a(93)),m=a.n(d),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},this.props.children)}}]),t}(r.a.Component),h=a(34),v=a.n(h),_=a(77),E=a.n(_),y=function(e){return r.a.createElement("div",{className:E.a.Title},r.a.createElement("h4",{className:E.a.titleH},e.title))},O=a(78),b=a.n(O),g=function(e){var t=[b.a.Button];return e.classses.forEach((function(e){return t.push(b.a[e])})),r.a.createElement("button",{disabled:!e.disabled,onClick:e.onClick,className:t.join(" ")},e.name)},D=a(52),C=a.n(D),N=function(e){var t=[C.a.Modal];return e.classes&&e.classes.forEach((function(e){return t.push(C.a[e])})),r.a.createElement("div",{className:t.join(" ")},e.children)},j=a(35),k=a.n(j),M=function(e){return r.a.createElement("div",{className:k.a.CompaniesList},r.a.createElement("div",{className:k.a.header},r.a.createElement("span",null,"\u0418\u043c\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),r.a.createElement("span",null,"\u0410\u043a\u0446\u0438\u0438 "),r.a.createElement("span",null,"\u0414\u0438\u0432\u0438\u0434\u0435\u043d\u0434"),r.a.createElement("span",null,"\u041f\u0440\u0438\u0431\u044b\u043b\u044c (\u0433\u043e\u0434)")),Object.keys(e.companies).map((function(t,a){var n=e.companies[t];if(null!==n)return e.currency===n.currency?r.a.createElement("div",{className:k.a.row,key:a},r.a.createElement("span",{datatype:"name",className:k.a.CompanyName,onClick:e.showModalHandlerDelete},t),r.a.createElement("span",{datatype:"count"},1*n.count),r.a.createElement("span",{datatype:"dividendPerShare"},+n.dividendPerShare),r.a.createElement("span",null,Math.ceil(n.count*n.dividendPerShare*100/100).toLocaleString("ru"))):void 0})),function(t){var a=[],n=0,o=0;for(var c in t){var i=t[c];if(null!==i&&e.currency===i.currency){var u=i.count*i.dividendPerShare;n+=u,o+=u-.13*u}}var s=r.a.createElement("div",{key:o,className:k.a.footer},r.a.createElement("div",{className:k.a.Total},r.a.createElement("span",null,"\u041f\u0440\u0438\u0431\u044b\u043b\u044c \u0434\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432"),r.a.createElement("span",null,(Math.ceil(100*n)/100).toLocaleString("ru"))),r.a.createElement("div",{className:k.a.Total},r.a.createElement("span",null,"\u041f\u0440\u0438\u0431\u044b\u043b\u044c \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u0447\u0435\u0442\u0430 \u043d\u0430\u043b\u043e\u0433\u043e\u0432"),r.a.createElement("span",{className:k.a.afterTax},(Math.ceil(100*o)/100).toLocaleString("ru"))));return a.push(s),a}(e.companies))},A=a(46),S=a.n(A),R=function(e){var t=[S.a.Input];return e.classes&&e.classes.forEach((function(e){return t.push(S.a[e])})),e.valid||t.push(S.a.Error),r.a.createElement("div",{className:S.a.InputWrapper},e.label?r.a.createElement("label",{htmlFor:e.htmlFor},e.label):null,r.a.createElement("input",{className:t.join(" "),type:e.type||"text",id:e.htmlFor,onChange:e.onChange,placeholder:e.placeholder,autoComplete:e.autocomplete,value:e.value}),r.a.createElement("span",{className:S.a.redText},!e.valid&&e.touched?e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435":null))},w=function(e){return r.a.createElement("div",{onClick:e.onClick,className:C.a.FadeBg})},T=a(94),x=a.n(T),I=function(e){return r.a.createElement("div",{className:x.a.Preloader},r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null)))},L=a(12),P=a(24),H=a(6),U=a(8),F=a.n(U),B=a(103),W="RENDER",V=a(80),J=a.n(V);function G(e,t){if(!t)return!0;var a=!0;return t.required&&(a=""!==e.trim()&&a),"number"===t.type&&(a=J.a.number(+e)&&a),"email"===t.type&&(a=J.a.email(e)&&a),t.minLength&&(a=t.minLength<=e.length&&a),t.minMax&&(a=e<=t.minMax.max&&a,a=e>=t.minMax.min&&a),a}var q=a(27),Y=a.n(q);a(86);function z(){return function(e,t){var a,n;return F.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=t().mainReducer,n=Y.a.database(),r.next=4,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies").update({}));case 4:return r.next=6,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies").once("value").then((function(t){var n=t.val();if(null!==n&&void 0!==n){var r=Object(B.a)(a.currency);e({type:W,companies:n,showPreloader:!1}),Object.keys(n).forEach((function(e){var t=n[e].currency;r.includes(t)||r.push(t)})),e({type:"CURRENCY",currency:r})}else e({type:W,showPreloader:!1,companies:{}})})).catch((function(e){return console.error(e)})));case 6:case"end":return r.stop()}}))}}function X(e,t){return function(a,n){var r=n().mainReducer,o=Object(H.a)({},r.modals);(o[t]=!0,"isOpenModalUpdateCompany"!==t)?a(function(e){return{type:"OPEN_MODAL_UPDATE",modals:e}}(o)):a(function(e,t){return{type:"OPEN_MODAL_UPDATE",modals:e,nameForDelete:t}}(o,e.target.parentNode.querySelector("span").textContent))}}function K(e,t){return function(e,a){var n=a().mainReducer,r=Object(H.a)({},n.modals),o=Object(H.a)({},n.formAddInputs);r[t]=!1;Object.keys(o).forEach((function(e){var t=Object(H.a)({},o[e]);t.valid=!1,t.touched=!1,t.value="",o[e]=t})),e({type:"CLOSE_MODAL",modals:r,formAddInputs:o,isFormValid:!1})}}function Z(e){return function(t){var a=e.val(),n=[];Object.keys(a).map((function(e){n.includes(a[e].currency)||n.push(a[e].currency)})),t({type:W,currency:n,companies:a,showPreloader:!1}),t(K(0,"isOpenModalUpdateCompany"))}}var Q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderInputs",value:function(e){var t=this;return Object.keys(this.props[e]).map((function(a,n){var o=t.props[e][a];return r.a.createElement(R,{key:a+n,type:o.type,value:o.value,classes:o.className,htmlFor:a+n,valid:o.valid,touched:o.touched,label:o.label,errorMessage:o.errorMessage,autocomplete:o.autocomplete,onChange:function(n){return t.props.getCompanyData(n,a,e)}})}))}},{key:"componentDidMount",value:function(){this.props.renderCompanies()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:v.a.Main},r.a.createElement(y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439"}),r.a.createElement("h2",{className:v.a.infoTitle},"\u0414\u0438\u0432\u0438\u0434\u0435\u043d\u0434\u044b \u0432 \u043f\u043e\u0440\u0442\u0444\u0435\u043b\u0435"),this.props.showPreloader?r.a.createElement(I,null):0===Object.keys(this.props.companies).length?r.a.createElement("div",{className:v.a.noCompany},"\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"):this.props.currency.map((function(t,a){return r.a.createElement("div",{className:v.a.tableWrapper,key:a},r.a.createElement("h3",null,t),r.a.createElement(M,{currency:t,companies:e.props.companies,showModalHandlerDelete:function(t){return e.props.clickOnCompany(t)}}))})),r.a.createElement("div",{className:v.a.addSection},r.a.createElement(g,{classses:["green"],name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e",onClick:function(t){return e.props.openModal(t,"isOpenModalAddCompany")},disabled:!0})),this.props.modals.isOpenModalAddCompany?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement("h3",{className:v.a.MainModalTitle},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"),r.a.createElement("form",{onSubmit:this.props.createCompany},this.renderInputs("formAddInputs"),r.a.createElement("select",{onChange:this.props.selectHandler},r.a.createElement("option",{value:"USD"},"USD"),r.a.createElement("option",{value:"RUB"},"RUB")),r.a.createElement(g,{disabled:this.props.isFormValid,classses:["blue"],name:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e"}))),r.a.createElement(w,{onClick:function(t){return e.props.closeModal(t,"isOpenModalAddCompany")}})):null,this.props.modals.isOpenModalUpdateCompany?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement("h3",{className:v.a.deleteModal},'\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "',this.props.nameForDelete,'"'),this.renderInputs("formUpdInputs"),r.a.createElement("div",{className:v.a.modalDeleteBtnBox},r.a.createElement(g,{name:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",classses:["red"],onClick:function(t){return e.props.deleteCompany(e.props.nameForDelete)},disabled:this.props.isFormValid}),r.a.createElement(g,{name:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",classses:["green"],onClick:this.props.updateCompany,disabled:this.props.isFormValid}))),r.a.createElement(w,{onClick:function(t){return e.props.closeModal(t,"isOpenModalUpdateCompany")}})):null)}}]),t}(r.a.Component);var $=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.mainReducer))}),(function(e){return{renderCompanies:function(){return e(z())},createCompany:function(t){return e(function(e){return e.preventDefault(),function(e,t){var a,n,r,o,c,i,u,s,l;return F.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return l=function(e,t,a,n){return Object(P.a)({},e,{count:t,dividendPerShare:a,currency:n})},a=t().mainReducer,n=Y.a.database(),r=a.company,o=r.name,c=r.count,i=r.dividendPerShare,u=r.currency,s=l(o,c,i,u),p.next=7,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies").update(s));case 7:return p.next=9,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies").once("value").then((function(t){var n=Object(H.a)({},a.modals),r=Object(H.a)({},a.formAddInputs);n.isOpenModalAddCompany=!1;var o=t.val();Object.keys(r).forEach((function(e){var t=Object(H.a)({},r[e]);t.value="",r[e]=t})),e({type:"CREATE_COMPANY",company:s,companies:o,modals:n,formAddInputs:r}),e(z())})).catch((function(e){return console.error(e)})));case 9:case"end":return p.stop()}}))}}(t))},updateCompany:function(){return e((function(e,t){var a,n,r,o,c,i;return F.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a=t().mainReducer,n=Y.a.database(),r=a.company,o=r.name,c=r.count,i=r.dividendPerShare,u.next=5,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies/"+o+"/dividendPerShare").set(i));case 5:return u.next=7,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies/"+o+"/count").set(c));case 7:return e({type:"SHOW_PRELOADER"}),u.next=10,F.a.awrap(n.ref("/users/"+t().authReducer.token+"/portfolio/companies").once("value").then((function(t){e(Z(t))})).catch((function(e){return console.error(e)})));case 10:case"end":return u.stop()}}))}))},deleteCompany:function(t){return e(function(e){return function(t,a){var n;return F.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Y.a.database(),r.next=3,F.a.awrap(n.ref("/users/"+a().authReducer.token+"/portfolio/companies/"+e).remove());case 3:return r.next=5,F.a.awrap(n.ref("/users/"+a().authReducer.token+"/portfolio/companies").once("value").then((function(e){if(t({type:"SHOW_PRELOADER"}),null===e.val()){n.ref("/users/"+a().authReducer.token+"/portfolio/companies").update({});return t({type:W,currency:[],companies:{},showPreloader:!1}),void t(K(null,"isOpenModalUpdateCompany"))}return e})).then((function(e){t(Z(e))})).catch((function(e){console.error(e)})));case 5:case"end":return r.stop()}}))}}(t))},clickOnCompany:function(t){return e(function(e){return function(t,a){var n=a().mainReducer,r=Object.assign({},n.company),o=Object(H.a)({},n.formUpdInputs),c=Object(H.a)({},o.count),i=Object(H.a)({},o.dividendPerShare),u=e.target.parentNode;r.name=e.target.textContent,r.count=c.value=u.querySelector("span[datatype='count']").textContent,r.dividendPerShare=i.value=u.querySelector("span[datatype='dividendPerShare']").textContent,o.count=c,o.dividendPerShare=i,t({type:"GET_COMPANY_DATA",company:r,formUpdInputs:o,isFormValid:!0}),t(X(e,"isOpenModalUpdateCompany"))}}(t))},getCompanyData:function(t,a,n){return e(function(e,t,a){return function(n,r){var o,c=r().mainReducer,i=Object(H.a)({},c.company),u=Object(H.a)({},c[a]),s=Object(H.a)({},u[t]);s.touched=!0,s.value=e.target.value,s.valid=G(s.value,s.validation),u[t]=s,i[t]=e.target.value,i.currency="USD";var l=!0;Object.keys(u).forEach((function(e){l=u[e].valid&&l})),n((o={type:"GET_COMPANY_DATA",company:i},Object(P.a)(o,a,u),Object(P.a)(o,"isFormValid",l),o))}}(t,a,n))},openModal:function(t,a){return e(X(t,a))},closeModal:function(t,a){return e(K(0,a))},selectHandler:function(t){return e(function(e){return function(t,a){var n=a().mainReducer,r=Object(H.a)({},n.company);r.currency=e.target.value,t({type:"CHANGE_SELECT",company:r})}}(t))}}}))(Q),ee=a(15),te=a.n(ee),ae=a(54),ne=a.n(ae),re=a(96),oe=a.n(re),ce=function(e){var t=e.depo.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));return r.a.createElement(r.a.Fragment,null,t.map((function(t,a){return r.a.createElement("li",{onClick:e.onClick,"data-currency":e.currency,"data-year":new Date(t.date).getFullYear(),"data-id":t.id,className:oe.a.li,key:a},r.a.createElement("span",null,function(e){var t=new Date(e).getDate(),a=new Date(e).toLocaleDateString("ru",{month:"long"});return"\u043c\u0430\u0440\u0442"===a?a+="a":a=a.slice(0,a.length-1)+"\u044f",[t,a].join(" ")}(t.date)),r.a.createElement("span",null,t.amount.toLocaleString("ru")," ","rub"===e.currency?"\u0440\u0443\u0431":"usd"===e.currency?"$":null))})))},ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.showMoreHandler=function(){return a.setState({isOpen:!a.state.isOpen})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("p",{onClick:this.showMoreHandler,className:ne.a.year},this.props.year," \u0433\u043e\u0434"),r.a.createElement("div",{className:ne.a.currency},this.state.isOpen?Object.keys(this.props.currency).map((function(t,a){var n=e.props.currency[t];return r.a.createElement("div",{key:a,className:ne.a.DepoCurrency},r.a.createElement("h4",{className:ne.a.name},"rub"===t?"\u0420\u0443\u0431\u043b\u0438":"usd"===t?"\u0414\u043e\u043b\u043b\u0430\u0440\u044b":null),r.a.createElement("ul",null,r.a.createElement(ce,{onClick:e.props.onClick,currency:t,depo:n})))})):null))}}]),t}(r.a.Component),ue=a(97),se=a.n(ue);a(116);function le(){return function(e,t){var a;return F.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=Y.a.database(),n.next=3,F.a.awrap(a.ref("/users/"+t().authReducer.token+"/portfolio/deposit").once("value").then((function(n){var r=n.val();if(null!==r)e({type:W,deposit:r,showPreloader:!1});else{a.ref("/users/"+t().authReducer.token+"/portfolio").update({});e({type:W,deposit:{},showPreloader:!1})}})).catch((function(e){return console.error(e)})));case 3:case"end":return n.stop()}}))}}var pe=a(41),de=a.n(pe);var me=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.depositReducer))}))((function(e){var t=e.deposit,a=0,n=0;return r.a.createElement("div",null,r.a.createElement("h3",{className:de.a.mainTitle},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f"),r.a.createElement("div",{className:de.a.totalContainer},void Object.keys(t).map((function(e){var r=t[e];Object.keys(r).map((function(e){r[e].forEach((function(t){"rub"===e?a+=t.amount:n+=t.amount}))}))})),r.a.createElement("p",{className:de.a.currencyBox},r.a.createElement("span",{className:de.a.rub},"RUB:")," ",a.toLocaleString("ru")," \u0440\u0443\u0431."),r.a.createElement("p",{className:de.a.currencyBox},r.a.createElement("span",{className:de.a.usd},"USD:")," ",n.toLocaleString("ru")," $")))})),fe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderInpus",value:function(e){var t=this;return Object.keys(this.props[e]).map((function(a,n){var o=t.props[e][a];return r.a.createElement(R,{key:a+n,type:o.type,value:o.value,classes:o.className,valid:o.valid,touched:o.touched,placeholder:o.placeholder,errorMessage:o.errorMessage,autocomplete:o.autocomplete,onChange:function(n){return t.props.onChangeHandler(n,a,e)}})}))}},{key:"componentDidMount",value:function(){this.props.renderDeposit()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439"}),r.a.createElement("div",{className:te.a.Deposit},r.a.createElement(me,null)),r.a.createElement("div",{className:te.a.Deposit},r.a.createElement("h3",{className:te.a.infoTitle},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435"),r.a.createElement("form",{onSubmit:this.props.createDeposit},r.a.createElement("div",{className:te.a.inputsBox},this.renderInpus("formAddDepoInputs"),r.a.createElement(se.a,{selected:this.props.depositData.date,onChange:this.props.handleChangeDate,className:te.a.datePicker,maxDate:new Date}),r.a.createElement("select",{className:te.a.select,onChange:this.props.selectHandler},r.a.createElement("option",{value:"usd"},"USD"),r.a.createElement("option",{value:"rub"},"RUB"))),r.a.createElement(g,{classses:["green","addDepo"],name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435",disabled:this.props.isFormValid}))),r.a.createElement("div",{className:[te.a.depoAndStatistic,te.a.Deposit].join(" ")},r.a.createElement("h3",{className:te.a.infoTitle},"\u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e \u0433\u043e\u0434\u0430\u043c"),this.props.showPreloader?r.a.createElement(I,null):0===Object.keys(this.props.deposit).length?r.a.createElement("div",{className:te.a.noDeposit}," \u0423 \u0432\u0430\u0441 \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439 "):r.a.createElement("div",{className:te.a.DepoYear},Object.keys(this.props.deposit).map((function(t,a){var n=e.props.deposit[t];return r.a.createElement(ie,{onClick:e.props.openModal,currency:n,year:t,index:a,key:a})})))),this.props.showModal?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null,r.a.createElement("h2",{className:te.a.delModalTitle},"\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435?"),r.a.createElement("div",{className:te.a.modalButtons},r.a.createElement(g,{classses:["red"],name:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",disabled:!0,onClick:this.props.deleteDeposit}),r.a.createElement(g,{classses:["green"],name:"\u041e\u0442\u043c\u0435\u043d\u0430",disabled:!0,onClick:this.props.closeModal}))),r.a.createElement(w,{onClick:this.props.closeModal})):null)}}]),t}(r.a.Component);var he=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.depositReducer))}),(function(e){return{renderDeposit:function(){return e(le())},createDeposit:function(t){return e(function(e){return e.preventDefault(),function(e,t){var a,n,r,o,c,i,u,s,l,p;return F.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return a=Y.a.database(),n=t().depositReducer,r=n.depositData,o=r.date,c=r.amount,i=r.currency,u=new Date(o).getFullYear(),!0,s=Object(H.a)({},n.formAddDepoInputs),l=Object(H.a)({},s.amount),p="/users/"+t().authReducer.token+"/portfolio/deposit/"+u+"/"+i,l.value="",s.amount=l,d.next=12,F.a.awrap(a.ref(p).once("value").then((function(t){if(null===t.val()){var r=[];r.push({amount:+c,date:o,id:r.length+Math.random()}),a.ref(p).set(r);return e({type:W,showPreloader:!0,isFormValid:!1,formAddDepoInputs:s}),void e(le())}var i=t.val();i.push({amount:+c,date:o,id:t.val().length+Math.random()}),console.log(n),console.log(i),a.ref(p).set(i);e({type:W,showPreloader:!0,isFormValid:!1,formAddDepoInputs:s}),e(le())})).catch((function(e){return console.error(e)})));case 12:case"end":return d.stop()}}))}}(t))},deleteDeposit:function(t){return e((function(e,t){var a,n,r,o;return F.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return a=t().depositReducer,n=Y.a.database(),r=Object(H.a)({},a.data),o="/users/"+t().authReducer.token+"/portfolio/deposit/"+r.year+"/"+r.currency,c.next=8,F.a.awrap(n.ref(o).once("value").then((function(a){if(1===a.val().length)n.ref(o).remove(),n.ref("/users/"+t().authReducer.token+"/portfolio/deposit").update({}),n.ref("/users/"+t().authReducer.token+"/portfolio/deposit").once("value").then((function(t){var a=t.val();null===a&&(a={}),e({type:W,deposit:a,showPreloader:!1,showModal:!1})})).catch((function(e){return console.error(e)}));else{var c=a.val().filter((function(e){return e.id!==+r.id}));n.ref(o).set(c),n.ref("/users/"+t().authReducer.token+"/portfolio/deposit").once("value").then((function(t){var a=t.val();e({type:W,deposit:a,showPreloader:!1,showModal:!1})})).catch((function(e){return console.error(e)}))}})).catch((function(e){return console.log(e)})));case 8:case"end":return c.stop()}}))}))},openModal:function(t){return e(function(e){return function(t){t({type:"OPEN_MODAL",showModal:!0,data:e.currentTarget.dataset})}}(t))},closeModal:function(t){return e((function(e){e({type:"DEPOSIT_CLOSE_MODAL",showModal:!1})}))},onChangeHandler:function(t,a,n){return e(function(e,t,a){return function(n,r){var o,c=r().depositReducer,i=Object(H.a)({},c.depositData),u=Object(H.a)({},c[a]),s=Object(H.a)({},u[t]);s.touched=!0,s.value=e.target.value,s.valid=G(s.value,s.validation),i[t]=e.target.value,u[t]=s;var l=!0;Object.keys(u).forEach((function(e){l=u[e].valid&&l})),n((o={type:"ON_CHANGE",depositData:i},Object(P.a)(o,a,u),Object(P.a)(o,"isFormValid",l),o))}}(t,a,n))},handleChangeDate:function(t){return e(function(e){return function(t,a){var n=a().depositReducer,r=Object(H.a)({},n.depositData);r.date=Date.parse(e),t({type:"CHANGE_SELECT",depositData:r})}}(t))},selectHandler:function(t){return e(function(e){return function(t,a){var n=a().depositReducer,r=Object(H.a)({},n.depositData);r.currency=e.target.value,t({type:"CHANGE_SELECT",depositData:r})}}(t))}}}))(fe),ve=a(100),_e=a.n(ve),Ee=a(101),ye=a.n(Ee),Oe=a(45),be=function(e){return r.a.createElement("nav",{className:ye.a.LinksInsideSidebar},r.a.createElement("li",null,r.a.createElement(Oe.b,{to:"/"}," \u0413\u043b\u0430\u0432\u043d\u0430\u044f ")),r.a.createElement("li",null,r.a.createElement(Oe.b,{to:"/depo"}," \u041f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ")))};var ge=function(){return r.a.createElement("div",{className:_e.a.SidebarNavigation},r.a.createElement(be,null))},De=a(84),Ce=a.n(De),Ne=a(47),je=a.n(Ne);function ke(e){return function(t){t({type:"AUTH_SHOW_ERROR",error:e.message}),setTimeout((function(){t({type:"AUTH_CLOSE_ERROR"})}),8500)}}var Me=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.authReducer))}),(function(e){return{logout:function(t){return e(function(e){return e.preventDefault(),function(e){je.a.auth().signOut().then((function(){localStorage.removeItem("login"),e({type:"AUTH_LOGOUT"}),e({type:"MAIN_RENDER",currency:[]}),e({type:"DEPOSIT_RENDER",deposit:{}})})).catch((function(t){e({type:"AUTH_SHOW_ERROR",error:t.message}),setTimeout((function(){e({type:"AUTH_CLOSE_ERROR"})}),8500)}))}}(t))}}}))((function(e){return r.a.createElement("div",{className:Ce.a.Header},r.a.createElement("div",null,"Finance Journal"),null!==e.token?r.a.createElement("div",null,r.a.createElement("span",{onClick:e.logout,className:Ce.a.logoutLink},"\u0412\u044b\u0439\u0442\u0438")):null)})),Ae=a(37),Se=a(48),Re=a.n(Se),we=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderInput",value:function(e){var t=this;return Object.keys(this.props[e]).map((function(a,n){var o=t.props[e][a];return r.a.createElement(R,{key:n,type:o.type,label:o.label,errorMessage:o.errorMessage,className:o.className,placeholder:o.placeholder,valid:o.valid,touched:o.touched,value:o.value,validation:o.validation,onChange:function(n){return t.props.authChangeHandler(n,e,a)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:Re.a.Auth},r.a.createElement(y,{title:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"}),r.a.createElement("p",{className:Re.a.greetings},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\u043b\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"),null===this.props.error?null:r.a.createElement("p",{className:Re.a.error},this.props.error),r.a.createElement("div",{className:Re.a.authForm},r.a.createElement("form",{onSubmit:this.props.authForm},this.renderInput("authInputs"),r.a.createElement("div",{className:Re.a.btnContainer},r.a.createElement(g,{classses:["green","authEntry"],name:"\u0412\u043e\u0439\u0442\u0438",disabled:this.props.isFormValid,onClick:this.props.loginHandler.bind(this,!0)}),r.a.createElement(g,{classses:["yellow","authReg"],name:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",disabled:this.props.isFormValid,onClick:this.props.loginHandler.bind(this,!1)})))))}}]),t}(r.a.Component);var Te=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.authReducer))}),(function(e){return{authChangeHandler:function(t,a,n){return e(function(e,t,a){return function(n,r){var o,c=r().authReducer,i=Object(H.a)({},c[t]),u=Object(H.a)({},i[a]);u.touched=!0,u.value=e.target.value,u.valid=G(u.value,u.validation),i[a]=u;var s=!0;Object.keys(i).forEach((function(e){s=i[e].valid&&s})),n((o={type:"AUTH_INPUT"},Object(P.a)(o,t,i),Object(P.a)(o,"isFormValid",s),o))}}(t,a,n))},authForm:function(t){return e(function(e){return e.preventDefault(),function(e){}}(t))},loginHandler:function(t){return e(function(e){return function(t,a){var n,r,o,c,i,u;return F.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(n=a().authReducer,r=Object(H.a)({},n.authInputs),o=Object(H.a)({},n.authInputs.inputEmail),c=Object(H.a)({},n.authInputs.inputPassword),i=o.value,u=c.value,s.prev=6,!e){s.next=12;break}return s.next=10,F.a.awrap(je.a.auth().signInWithEmailAndPassword(i,u));case 10:s.next=14;break;case 12:return s.next=14,F.a.awrap(je.a.auth().createUserWithEmailAndPassword(i,u));case 14:return s.next=16,F.a.awrap(je.a.auth().onAuthStateChanged((function(e){var a=je.a.auth().currentUser;if(a.emailVerified){var n={uid:e.uid,entryTime:+e.metadata.b};o.value=c.value="",r.inputEmail=o,r.inputPassword=c,t({type:"AUTH_LOGIN",authInputs:r,token:n.uid}),t(z()),localStorage.setItem("login",JSON.stringify(n))}else a.sendEmailVerification().then((function(){t({type:"AUTH_SHOW_ERROR",error:"\u0412\u0430\u043c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443 \u0431\u044b\u043b\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e \u0441 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435\u043c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443"}),setTimeout((function(){t({type:"AUTH_CLOSE_ERROR"})}),8500)})).catch((function(e){t({type:"AUTH_SHOW_ERROR",error:e.message}),setTimeout((function(){t({type:"AUTH_CLOSE_ERROR"})}),8500)}))})));case 16:s.next=21;break;case 18:s.prev=18,s.t0=s.catch(6),t(ke(s.t0));case 21:case"end":return s.stop()}}),null,null,[[6,18]])}}(t))}}}))(we),xe=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.autoLogin()}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(Me,null),this.props.token?r.a.createElement("div",{className:"main-page-wrapper"},r.a.createElement(ge,null),r.a.createElement("div",{className:"main-page-content"},r.a.createElement(Ae.d,null,r.a.createElement(Ae.b,{exact:!0,path:"/",component:$}),r.a.createElement(Ae.b,{path:"/depo",component:he}),r.a.createElement(Ae.a,{to:"/",component:$})))):r.a.createElement("div",{className:"main-page-wrapper"},r.a.createElement(Ae.b,null,r.a.createElement(Ae.b,{exact:!0,path:"/auth",component:Te}),r.a.createElement(Ae.a,{to:"/auth",component:Te}))))}}]),t}(n.Component);var Ie=Object(L.b)((function(e){return JSON.parse(JSON.stringify(e.authReducer))}),(function(e){return{autoLogin:function(){return e((function(e){var t=JSON.parse(localStorage.getItem("login"));e(null===t?{type:"AUTH_AUTO_LOGIN",token:null}:{type:"AUTH_AUTO_LOGIN",token:t.uid})}))}}}))(xe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=a(36);function Pe(e,t,a){return n={label:e,type:"text",errorMessage:t,className:[""],autocomplete:"off"},r=a,Object(H.a)({},n,{validation:r,valid:!r,touched:!1,value:""});var n,r}function He(e,t,a){return n={label:e,type:"text",errorMessage:t,className:[""],autocomplete:"off"},r=a,Object(H.a)({},n,{validation:r,valid:!0,touched:!0,value:""});var n,r}var Ue={user:null,nameForDelete:"",showPreloader:!0,isFormValid:!1,modals:{isOpenModalAddCompany:!1,isOpenModalUpdateCompany:!1},formAddInputs:{name:Pe("\u0418\u043c\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438","\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",{required:!0}),count:Pe("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043a\u0446\u0438\u0439","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",{required:!0,type:"number",minMax:{min:0,max:1e7}}),dividendPerShare:Pe("\u0420\u0430\u0437\u043c\u0435\u0440 \u0434\u0438\u0432\u0438\u0434\u0435\u043d\u0434\u043e\u0432 (\u0432 \u0433\u043e\u0434)","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",{required:!0,type:"number",minMax:{min:0,max:500}})},formUpdInputs:{count:He("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u043a\u0446\u0438\u0439","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",{required:!0,type:"number",minMax:{min:0,max:1e7}}),dividendPerShare:He("\u0420\u0430\u0437\u043c\u0435\u0440 \u0434\u0438\u0432\u0438\u0434\u0435\u043d\u0434\u043e\u0432 (\u0432 \u0433\u043e\u0434)","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e",{required:!0,type:"number",minMax:{min:0,max:500}})},company:{name:"",count:"",dividendPerShare:"",currency:"USD"},companies:{},currency:[]};var Fe={user:null,isFormValid:!1,showModal:!1,showPreloader:!0,deposit:{},formAddDepoInputs:{amount:{type:"text",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",className:["depositInput"],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",autocomplete:"off",valid:!1,touched:!1,value:"",validation:{required:!0,type:"number"}}},depositData:{currency:"usd",amount:"",date:Date.parse(new Date)},data:{},isOpen:!1};var Be={token:null,error:null,isFormValid:!1,authInputs:{inputEmail:{type:"email",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",className:["authLogin"],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 e-mail",autocomplete:"off",valid:!1,touched:!1,value:"",validation:{required:!0,type:"email"}},inputPassword:{type:"password",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",className:["authLogin"],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",autocomplete:"off",valid:!1,touched:!1,value:"",validation:{required:!0,minLength:6}}}};var We=Object(Le.c)({mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case"MAIN_RENDER":return Object(H.a)({},e,{},t);case"CURRENCY":return Object(H.a)({},e,{currency:t.currency});case"CREATE_COMPANY":return Object(H.a)({},e,{},t);case"SHOW_PRELOADER":return Object(H.a)({},e,{showPreloader:!0});case"CLOSE_PRELOADER":return Object(H.a)({},e,{showPreloader:!1});case"GET_COMPANY_DATA":return Object(H.a)({},e,{},t);case"OPEN_MODAL_UPDATE":return Object(H.a)({},e,{modals:t.modals,nameForDelete:t.nameForDelete});case"CLOSE_MODAL":return Object(H.a)({},e,{modals:t.modals,formAddInputs:t.formAddInputs,isFormValid:t.isFormValid});case"CHANGE_SELECT":return Object(H.a)({},e,{company:t.company});default:return e}},depositReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case"DEPOSIT_RENDER":case"OPEN_MODAL":return Object(H.a)({},e,{},t);case"DEPOSIT_CLOSE_MODAL":return Object(H.a)({},e,{showModal:!1});case"ON_CHANGE":case"CHANGE_SELECT":return Object(H.a)({},e,{},t);default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_INPUT":return Object(H.a)({},e,{},t);case"AUTH_LOGIN":return Object(H.a)({},e,{token:t.token,authInputs:t.authInputs});case"AUTH_SHOW_ERROR":return Object(H.a)({},e,{error:t.error});case"AUTH_CLOSE_ERROR":return Object(H.a)({},e,{error:null});case"AUTH_AUTO_LOGIN":return Object(H.a)({},e,{token:t.token});case"AUTH_LOGOUT":return Object(H.a)({},e,{token:null});default:return e}}}),Ve=a(102);Y.a.initializeApp({apiKey:"AIzaSyB73IC7XvE6QjjTcMWXZNePBcn_uiLgqWA",authDomain:"my-finance-journal.firebaseapp.com",databaseURL:"https://my-finance-journal.firebaseio.com",projectId:"my-finance-journal",storageBucket:"my-finance-journal.appspot.com",messagingSenderId:"152785363240",appId:"1:152785363240:web:e998b6a6a0fcacfb02701d"});var Je="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Le.d,Ge=Object(Le.e)(We,Je(Object(Le.a)(Ve.a))),qe=r.a.createElement(L.a,{store:Ge},r.a.createElement(Oe.a,null,r.a.createElement(Ie,null)));c.a.render(qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},34:function(e,t,a){e.exports={Main:"Main_Main__tLe8l",MainModalTitle:"Main_MainModalTitle__1f-1K",MaindeleteModal:"Main_MaindeleteModal__2x1yU",addSection:"Main_addSection__2794a",modalDeleteBtnBox:"Main_modalDeleteBtnBox__30gau",deleteModal:"Main_deleteModal__1xsa4",tableWrapper:"Main_tableWrapper__fLrzA",infoTitle:"Main_infoTitle__2V_3C",noCompany:"Main_noCompany__1KDCH"}},35:function(e,t,a){e.exports={row:"CompaniesList_row__2QtfP",header:"CompaniesList_header__3KocP",CompanyName:"CompaniesList_CompanyName__1OSVh",Total:"CompaniesList_Total__kAguz",afterTax:"CompaniesList_afterTax__11Xqy",Actions:"CompaniesList_Actions__1udJw",LinksInsideSidebar:"CompaniesList_LinksInsideSidebar__D0GUF"}},41:function(e,t,a){e.exports={mainTitle:"DepoStats_mainTitle__2jc7J",totalContainer:"DepoStats_totalContainer__38kzc",currencyBox:"DepoStats_currencyBox__DLKiz",rub:"DepoStats_rub__1Hgz_",usd:"DepoStats_usd__3MxHq"}},46:function(e,t,a){e.exports={Input:"Input_Input__2m_YL",InputWrapper:"Input_InputWrapper__1W6c2",Error:"Input_Error__3vb89",redText:"Input_redText__3KdDg",depositInput:"Input_depositInput__byGQf"}},48:function(e,t,a){e.exports={Auth:"Auth_Auth__1oHPk",mainTitle:"Auth_mainTitle__yuabT",greetings:"Auth_greetings__3bEfb",authForm:"Auth_authForm__35Tfa",btnContainer:"Auth_btnContainer__2KRRk",error:"Auth_error__h1G3E",showError:"Auth_showError__aDDyB"}},52:function(e,t,a){e.exports={Modal:"Modal_Modal__1BCvN",FadeBg:"Modal_FadeBg__1qjO-"}},54:function(e,t,a){e.exports={year:"DepoInnerWrapper_year__2ZZLO",currency:"DepoInnerWrapper_currency__2vO-B",DepoCurrency:"DepoInnerWrapper_DepoCurrency__2rlkl",name:"DepoInnerWrapper_name__2-Jfz"}},77:function(e,t,a){e.exports={Title:"Title_Title__2m1Di",titleH:"Title_titleH__Muww5"}},78:function(e,t,a){e.exports={Button:"Button_Button__3IBz_",green:"Button_green__3BDkj",blue:"Button_blue__1uYHC",yellow:"Button_yellow__2A2Zk",red:"Button_red__2OblT",addDepo:"Button_addDepo__3fbc2"}},84:function(e,t,a){e.exports={Header:"Header_Header__3vpgJ",logoutLink:"Header_logoutLink__1u8XR"}},93:function(e,t,a){e.exports={Layout:"Layout_Layout__1Ayt0"}},94:function(e,t,a){e.exports={Preloader:"Preloader_Preloader__3iwuW"}},96:function(e,t,a){e.exports={li:"DepoDateAndAmount_li__29tUI"}}},[[104,1,2]]]);
//# sourceMappingURL=main.9df8c0b8.chunk.js.map