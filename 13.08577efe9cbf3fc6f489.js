(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Cgxy:function(t,e,i){"use strict";i.r(e),i.d(e,"PageFormModule",(function(){return f}));var o=i("ofXK"),r=i("3Pt+"),l=i("tyNb"),n=i("vuNU"),b=i("fXoL");function a(t,e){1&t&&(b.Nb(0,"div"),b.pc(1," Name is required. "),b.Mb())}function m(t,e){if(1&t&&(b.Nb(0,"div",38),b.oc(1,a,2,0,"div",39),b.Mb()),2&t){const t=b.Yb();b.yb(1),b.bc("ngIf",t.name.errors.required)}}function c(t,e){if(1&t&&b.Lb(0,"img",40),2&t){const t=b.Yb();b.bc("src",t.imgURL,b.kc)}}const d=[{path:"",component:(()=>{class t extends n.a{constructor(t){super(t,"homepage")}initialize(){this.endpoint="adminPanel",this.titleForm="Admin Panel Page",this.icon="fas fa-home",super.initialize(),this.progress=1}onFileChanged(t,e){this.selectedFile=t.target.files[0],this.homePageService.uploadFile(this.selectedFile,this.form);let i=new FileReader;i.readAsDataURL(t.target.files[0]),i.onload=t=>{this.imgURL=i.result}}createForm(){this.form=this.fb.group({$key:null,id:null,name:[null,[r.k.required]],title:null,data:null,image:null}),super.createForm()}resetForm(){this.item.$key=null,this.item.id=null,this.item.name=null,this.item.title=null,this.item.data=null,this.item.image=null,super.resetForm()}setFormValue(t,e){t.subscribe(i=>{this.form.controls.$key.setValue(e),this.form.controls.id.setValue(i.id),this.form.controls.name.setValue(i.name),this.form.controls.title.setValue(i.title),this.form.controls.data.setValue(i.data),this.form.controls.image.setValue(i.image),super.setFormValue(t,e)})}get name(){return this.form.get("name")}}return t.\u0275fac=function(e){return new(e||t)(b.Kb(b.r))},t.\u0275cmp=b.Eb({type:t,selectors:[["app-page-form"]],features:[b.vb],decls:58,vars:11,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col"],[1,"d-flex","md-form","form-group","mt-0"],[1,"disabled","clearfix","d-none","d-md-block","pt-2","ml-4"],[1,"text-info","font-weight-bold","mr-4"],[1,"fas","fa-database","text-info","mr-2","ml-4","mr-2"],[1,"text-info","ml-2"],[1,"navbar-btn","waves-effect","waves-light","ml-auto","px-3","pt-2"],["type","button",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-backward","fa-lg"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"click"],[1,"fas","fa-save","fa-lg"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-copy","fa-lg"],[1,"fas","fa-trash-alt","fa-lg"],[1,"form-row"],[1,"form-group","col-md-1"],["for","id",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","id","placeholder","","id","id",1,"text-primary","form-control"],[1,"form-group","col-md-4"],["for","name",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","name","placeholder","","id","name",1,"text-primary","form-control"],["class","alert alert-primary mt-2",4,"ngIf"],[1,"form-group","col-md-8"],["for","title",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","title","placeholder","","id","title",1,"text-primary","form-control"],[1,"form-group","col-md-12"],["for","data",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","data","placeholder","","id","data",1,"text-primary","form-control"],[1,"form-group","col-md-10"],["for","images",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","image","placeholder","","id","image",1,"text-primary","form-control"],["type","file",3,"change"],["height","100","width","100","style","border:black",3,"src",4,"ngIf"],[1,"alert","alert-primary","mt-2"],[4,"ngIf"],["height","100","width","100",2,"border","black",3,"src"]],template:function(t,e){1&t&&(b.Nb(0,"div",0),b.Nb(1,"div",1),b.Nb(2,"div",2),b.Nb(3,"div",3),b.Nb(4,"form",4),b.Nb(5,"div",0),b.Nb(6,"div",5),b.Nb(7,"div",6),b.Nb(8,"div",7),b.Lb(9,"i"),b.Nb(10,"span",8),b.pc(11),b.Mb(),b.Lb(12,"i",9),b.Nb(13,"span",10),b.pc(14,"Datasource : "),b.Mb(),b.Nb(15,"span",10),b.pc(16),b.Mb(),b.Mb(),b.Nb(17,"a",11),b.Nb(18,"button",12),b.Ub("click",(function(){return e.onbackClick()})),b.Lb(19,"i",13),b.Mb(),b.Nb(20,"button",14),b.Ub("click",(function(){return e.onUpdate()})),b.Lb(21,"i",15),b.Mb(),b.Nb(22,"button",16),b.Ub("click",(function(){return e.onCopy()})),b.Lb(23,"i",17),b.Mb(),b.Nb(24,"button",16),b.Ub("click",(function(){return e.onDelete()})),b.Lb(25,"i",18),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Nb(26,"div",0),b.Nb(27,"div",5),b.Nb(28,"div",19),b.Nb(29,"div",20),b.Nb(30,"label",21),b.pc(31,"Id"),b.Mb(),b.Lb(32,"input",22),b.Mb(),b.Nb(33,"div",23),b.Nb(34,"label",24),b.pc(35,"Name"),b.Mb(),b.Lb(36,"input",25),b.oc(37,m,2,1,"div",26),b.Mb(),b.Mb(),b.Nb(38,"div",19),b.Nb(39,"div",27),b.Nb(40,"label",28),b.pc(41,"Title"),b.Mb(),b.Lb(42,"input",29),b.Mb(),b.Mb(),b.Nb(43,"div",19),b.Nb(44,"div",30),b.Nb(45,"label",31),b.pc(46,"Text"),b.Mb(),b.Lb(47,"input",32),b.Mb(),b.Mb(),b.Nb(48,"div",19),b.Nb(49,"div",33),b.Nb(50,"div",0),b.Nb(51,"label",34),b.pc(52,"Image:"),b.Mb(),b.Lb(53,"input",35),b.Nb(54,"div",0),b.Nb(55,"div"),b.Nb(56,"input",36),b.Ub("change",(function(t){return e.onFileChanged(t)})),b.Mb(),b.oc(57,c,1,1,"img",37),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&t&&(b.yb(4),b.bc("formGroup",e.form),b.yb(5),b.Bb("",e.icon," text-primary mr-2"),b.yb(2),b.qc(e.titleForm),b.yb(5),b.qc(e.datasource),b.yb(2),b.bc("disabled",e.api),b.yb(4),b.bc("disabled",e.form.invalid||!e.api||null==e.item.id||null==e.item.id),b.yb(2),b.bc("disabled",e.form.invalid||!e.api||null==e.item.id||null==e.item.id),b.yb(13),b.bc("ngIf",e.name.invalid),b.yb(20),b.bc("ngIf",e.imgURL))},directives:[r.l,r.h,r.e,r.a,r.g,r.d,o.k],styles:[""]}),t})()}];let s=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},imports:[[l.g.forChild(d)],l.g]}),t})(),f=(()=>{class t{}return t.\u0275mod=b.Ib({type:t}),t.\u0275inj=b.Hb({factory:function(e){return new(e||t)},imports:[[o.c,s,r.i,r.f]]}),t})()}}]);