(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cNca:function(e,t,n){"use strict";n.r(t),n.d(t,"MessageListModule",(function(){return x}));var a=n("ofXK"),i=n("3Pt+"),s=n("tyNb"),o=n("wg2j"),c=n("fXoL"),l=n("8sLt"),r=n("JlhK"),d=n("BsvK");function m(e,t){if(1&e&&(c.Nb(0,"div",1),c.Nb(1,"div",2),c.Lb(2,"app-search-result",3),c.Mb(),c.Mb()),2&e){const e=c.Xb();c.yb(2),c.ac("searchField",e.searchField)("found",e.found)("creation",e.creation)("link",e.link)}}function p(e,t){if(1&e){const e=c.Ob();c.Nb(0,"div",1),c.Nb(1,"div",4),c.Nb(2,"app-pagination",5),c.Ub("changePage",(function(t){return c.gc(e),c.Xb().onChangePage(t)})),c.Mb(),c.Lb(3,"app-grid",6),c.Nb(4,"app-pagination",5),c.Ub("changePage",(function(t){return c.gc(e),c.Xb().onChangePage(t)})),c.Mb(),c.Mb(),c.Mb()}if(2&e){const e=c.Xb();c.yb(2),c.ac("count",e.itemsCount)("page",e.itemsPage)("perPage",e.itemsPerPage),c.yb(1),c.ac("items",e.items)("columns",e.columns)("link",e.link),c.yb(1),c.ac("count",e.itemsCount)("page",e.itemsPage)("perPage",e.itemsPerPage)}}const u=[{path:"",component:(()=>{class e extends o.a{constructor(e){super(e,"messages")}initialize(){this.endpoint="adminPanelHome",this.link="adminPanelHome",this.placeholder="title...",this.results="adminPanelHome",this.found="title",this.creation="adminPanelHome",this.loaded=!1,this.icon="fas fa-envelope",this.itemsCount=0,this.itemsPerPage=20,this.linkRoute="admin-home",this.columns=[{title:{caption:"Date",class:"text-info font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"},data:{field:"date",class:"text-primary text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell"}},{title:{caption:"Name",class:"text-center text-info"},data:{field:"name",class:"text-center text-primary"}},{title:{caption:"Email",class:"text-info font-weight-bold text-center"},data:{field:"email",class:"text-primary  text-left"}},{title:{caption:"Comments",class:"text-info font-weight-bold text-center"},data:{field:"message",class:"text-primary text-left"}}],super.initialize()}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.r))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-message-list"]],features:[c.vb],decls:2,vars:2,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col"],[3,"searchField","found","creation","link"],[1,"col","mt-4"],[3,"count","page","perPage","changePage"],[3,"items","columns","link"]],template:function(e,t){1&e&&(c.nc(0,m,3,4,"div",0),c.nc(1,p,5,9,"div",0)),2&e&&(c.ac("ngIf",t.loaded&&0==t.itemsCount),c.yb(1),c.ac("ngIf",t.loaded&&0!=t.itemsCount))},directives:[a.k,l.a,r.a,d.a],styles:["td[_ngcontent-%COMP%]{cursor:pointer}"]}),e})()}];let b=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[s.d.forChild(u)],s.d]}),e})();var f=n("FYA3"),g=n("IScF"),h=n("O83C"),P=n("fipD");let x=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},providers:[],imports:[[a.c,i.f,b,f.a,g.a,h.a,P.a]]}),e})()}}]);