(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{WBq0:function(t,e,i){"use strict";i.r(e),i.d(e,"CitiesFormModule",(function(){return h}));var o=i("ofXK"),r=i("3Pt+"),a=i("tyNb"),n=i("EjlV"),l=i("++Ph"),s=i("fXoL");let m=(()=>{class t{constructor(t){this.item={},this.titleForm={},this.route=t.get(a.a),this.router=t.get(a.b),this.configService=t.get(n.a),this.fb=t.get(r.b),this.homePageService=t.get(l.a),this.initialize(),this.createForm()}ngOnInit(){this.route.params.subscribe(t=>{void 0!==t.id&&(this.item=this.homePageService.getitem(t.id),this.item?this.setFormValue(this.item,t.id):this.resetForm())})}getItemById(){this.route.params.subscribe(t=>{void 0!==t.id&&(this.item=this.homePageService.getitem(t.id),console.log(this.item.data),this.item?this.setFormValue(this.item,t.id):this.resetForm())})}OnInit(){this.resetForm()}initialize(){this.api=this.configService.config.api,this.url=this.configService.config.url+this.endpoint,this.api?(this.datasourceColor="text-primary",this.datasource="Data API"):(this.datasource="Update / Manage data",this.datasourceColor="text-primary")}createForm(){}onsubmit(t){this.homePageService.insertContents(t.value),this.resetForm(t)}resetForm(t){null!=t&&t.reset(),this.homePageService.selectedpage={$key:"",id:"",name:"",title:"",data:"",image:""}}setFormValue(t,e){}onCreate(){this.resetForm()}onUpdate(){null!=this.form.controls.$key.value?this.updateItem(this.form):(this.myform=this.fb.group({id:this.form.controls.id,name:this.form.controls.name,title:this.form.controls.title,data:this.form.controls.data,image:this.form.controls.image}),this.createItem(this.myform)),this.resetForm()}saveimage(){}onbackClick(){this.router.navigate(["/admin/adminPanelHome"])}onDelete(){void 0!==this.item.id&&null!=this.item.id&&this.deleteItem(this.url,this.item.id)}onCopy(){this.item.id=null,this.form.get("id").setValue(null)}createItem(t){this.homePageService.insertContents(t.value),this.resetForm(t)}updateItem(t){this.homePageService.selectedpage=t.value,this.homePageService.updateContents(t.value)}deleteItem(t,e){}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(s.r))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-page-form"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Nb(0,"p"),s.gc(1,"page-form works!"),s.Mb())},styles:[""]}),t})();function b(t,e){1&t&&(s.Nb(0,"div"),s.gc(1," Name is required. "),s.Mb())}function d(t,e){if(1&t&&(s.Nb(0,"div",38),s.fc(1,b,2,0,"div",39),s.Mb()),2&t){const t=s.Wb();s.yb(1),s.Xb("ngIf",t.name.errors.required)}}function c(t,e){if(1&t&&s.Lb(0,"img",40),2&t){const t=s.Wb();s.Xb("src",t.imgURL,s.dc)}}const f=[{path:"",component:(()=>{class t extends m{constructor(t){super(t)}initialize(){this.endpoint="adminPanelHome",this.titleForm="Admin Panel Home Page",this.icon="fas fa-home",super.initialize(),this.progress=1}onFileChanged(t,e){this.selectedFile=t.target.files[0],this.homePageService.uploadFile(this.selectedFile,this.form);let i=new FileReader;i.readAsDataURL(t.target.files[0]),i.onload=t=>{this.imgURL=i.result}}createForm(){this.form=this.fb.group({$key:null,id:null,name:[null,[r.i.required]],title:null,data:null,image:null}),super.createForm()}resetForm(){this.item.$key=null,this.item.id=null,this.item.name=null,this.item.title=null,this.item.data=null,this.item.image=null,super.resetForm()}setFormValue(t,e){t.subscribe(i=>{console.log(i.data),this.form.controls.$key.setValue(e),this.form.controls.id.setValue(i.id),this.form.controls.name.setValue(i.name),this.form.controls.title.setValue(i.title),this.form.controls.data.setValue(i.data),this.form.controls.image.setValue(i.image),super.setFormValue(t,e)})}get name(){return this.form.get("name")}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(s.r))},t.\u0275cmp=s.Eb({type:t,selectors:[["app-cities-form"]],features:[s.vb],decls:58,vars:11,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"col"],[1,"d-flex","md-form","form-group","mt-0"],[1,"disabled","clearfix","d-none","d-md-block","pt-2","ml-4"],[1,"text-info","font-weight-bold","mr-4"],[1,"fas","fa-database","text-info","mr-2","ml-4","mr-2"],[1,"text-info","ml-2"],[1,"navbar-btn","waves-effect","waves-light","ml-auto","px-3","pt-2"],["type","button",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-backward","fa-lg"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"click"],[1,"fas","fa-save","fa-lg"],["type","submit",1,"btn","btn-outline-primary","btn-sm","mb-2","ml-3",3,"disabled","click"],[1,"fas","fa-copy","fa-lg"],[1,"fas","fa-trash-alt","fa-lg"],[1,"form-row"],[1,"form-group","col-md-1"],["for","id",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","id","placeholder","","id","id",1,"text-primary","form-control"],[1,"form-group","col-md-4"],["for","name",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","name","placeholder","","id","name",1,"text-primary","form-control"],["class","alert alert-primary mt-2",4,"ngIf"],[1,"form-group","col-md-8"],["for","title",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","title","placeholder","","id","title",1,"text-primary","form-control"],[1,"form-group","col-md-12"],["for","data",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","data","placeholder","","id","data",1,"text-primary","form-control"],[1,"form-group","col-md-10"],["for","images",1,"text-info","font-weight-bold",2,"text-align","left"],["type","text","formControlName","image","placeholder","","id","image",1,"text-primary","form-control"],["type","file",3,"change"],["height","100","width","100","style","border:black",3,"src",4,"ngIf"],[1,"alert","alert-primary","mt-2"],[4,"ngIf"],["height","100","width","100",2,"border","black",3,"src"]],template:function(t,e){1&t&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Nb(2,"div",2),s.Nb(3,"div",3),s.Nb(4,"form",4),s.Nb(5,"div",0),s.Nb(6,"div",5),s.Nb(7,"div",6),s.Nb(8,"div",7),s.Lb(9,"i"),s.Nb(10,"span",8),s.gc(11),s.Mb(),s.Lb(12,"i",9),s.Nb(13,"span",10),s.gc(14,"Datasource : "),s.Mb(),s.Nb(15,"span",10),s.gc(16),s.Mb(),s.Mb(),s.Nb(17,"a",11),s.Nb(18,"button",12),s.Ub("click",(function(){return e.onbackClick()})),s.Lb(19,"i",13),s.Mb(),s.Nb(20,"button",14),s.Ub("click",(function(){return e.onUpdate()})),s.Lb(21,"i",15),s.Mb(),s.Nb(22,"button",16),s.Ub("click",(function(){return e.onCopy()})),s.Lb(23,"i",17),s.Mb(),s.Nb(24,"button",16),s.Ub("click",(function(){return e.onDelete()})),s.Lb(25,"i",18),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Nb(26,"div",0),s.Nb(27,"div",5),s.Nb(28,"div",19),s.Nb(29,"div",20),s.Nb(30,"label",21),s.gc(31,"Id"),s.Mb(),s.Lb(32,"input",22),s.Mb(),s.Nb(33,"div",23),s.Nb(34,"label",24),s.gc(35,"Name"),s.Mb(),s.Lb(36,"input",25),s.fc(37,d,2,1,"div",26),s.Mb(),s.Mb(),s.Nb(38,"div",19),s.Nb(39,"div",27),s.Nb(40,"label",28),s.gc(41,"Title"),s.Mb(),s.Lb(42,"input",29),s.Mb(),s.Mb(),s.Nb(43,"div",19),s.Nb(44,"div",30),s.Nb(45,"label",31),s.gc(46,"Text"),s.Mb(),s.Lb(47,"input",32),s.Mb(),s.Mb(),s.Nb(48,"div",19),s.Nb(49,"div",33),s.Nb(50,"div",0),s.Nb(51,"label",34),s.gc(52,"Image:"),s.Mb(),s.Lb(53,"input",35),s.Nb(54,"div",0),s.Nb(55,"div"),s.Nb(56,"input",36),s.Ub("change",(function(t){return e.onFileChanged(t)})),s.Mb(),s.fc(57,c,1,1,"img",37),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&t&&(s.yb(4),s.Xb("formGroup",e.form),s.yb(5),s.Bb("",e.icon," text-primary mr-2"),s.yb(2),s.hc(e.titleForm),s.yb(5),s.hc(e.datasource),s.yb(2),s.Xb("disabled",e.api),s.yb(4),s.Xb("disabled",e.form.invalid||!e.api||null==e.item.id||null==e.item.id),s.yb(2),s.Xb("disabled",e.form.invalid||!e.api||null==e.item.id||null==e.item.id),s.yb(13),s.Xb("ngIf",e.name.invalid),s.yb(20),s.Xb("ngIf",e.imgURL))},directives:[r.j,r.g,r.d,r.a,r.f,r.c,o.j],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[a.d.forChild(f)],a.d]}),t})(),h=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)},imports:[[o.b,u,r.h,r.e]]}),t})()}}]);