(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{lIRb:function(r,t,e){"use strict";e.r(t),e.d(t,"LoginModule",(function(){return C}));var i=e("ofXK"),o=e("3Pt+"),s=e("fXoL"),n=e("5EfC"),b=e("vz+L"),c=e("tyNb");function a(r,t){1&r&&(s.Nb(0,"div"),s.pc(1,"First Name is required"),s.Mb())}function l(r,t){if(1&r&&(s.Nb(0,"div",20),s.oc(1,a,2,0,"div",21),s.Mb()),2&r){const r=s.Yb();s.yb(1),s.bc("ngIf",r.f.firstName.errors.required)}}function u(r,t){1&r&&(s.Nb(0,"div"),s.pc(1,"Last Name is required"),s.Mb())}function d(r,t){if(1&r&&(s.Nb(0,"div",20),s.oc(1,u,2,0,"div",21),s.Mb()),2&r){const r=s.Yb();s.yb(1),s.bc("ngIf",r.f.lastName.errors.required)}}function m(r,t){1&r&&(s.Nb(0,"div"),s.pc(1,"Email is required"),s.Mb())}function f(r,t){if(1&r&&(s.Nb(0,"div",20),s.oc(1,m,2,0,"div",21),s.Mb()),2&r){const r=s.Yb();s.yb(1),s.bc("ngIf",r.f.email.errors.required)}}function p(r,t){1&r&&(s.Nb(0,"div"),s.pc(1,"Password is required"),s.Mb())}function g(r,t){1&r&&(s.Nb(0,"div"),s.pc(1,"Password must be at least 6 characters"),s.Mb())}function h(r,t){if(1&r&&(s.Nb(0,"div",20),s.oc(1,p,2,0,"div",21),s.oc(2,g,2,0,"div",21),s.Mb()),2&r){const r=s.Yb();s.yb(1),s.bc("ngIf",r.f.password.errors.required),s.yb(1),s.bc("ngIf",r.f.password.errors.minlength)}}function v(r,t){1&r&&s.Lb(0,"span",22)}const N=function(r){return{"is-invalid":r}};let y=(()=>{class r{constructor(r,t,e,i,o){this.auth=r,this.authguard=t,this.router=e,this.formBuilder=i,this.route=o,this.state="",this.loading=!1,this.submitted=!1,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}ngOnInit(){this.form=this.formBuilder.group({firstName:["",o.k.required],lastName:["",o.k.required],email:["",[o.k.required,o.k.pattern(this.emailPattern)]],password:["",[o.k.required,o.k.minLength(6)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.form.valid&&(console.log(this.form.value),this.auth.doRegister({email:this.form.value.email,password:this.form.value.password}).then(r=>{console.log(r),alert("Registration successful"),this.router.navigate(["/"])}).catch(r=>{console.log(r),this.error=r,alert("Error occured. Please try again")}))}}return r.\u0275fac=function(t){return new(t||r)(s.Kb(n.a),s.Kb(b.a),s.Kb(c.c),s.Kb(o.b),s.Kb(c.a))},r.\u0275cmp=s.Eb({type:r,selectors:[["app-signup"]],decls:35,vars:19,consts:[[1,"row"],[1,"row","justify-content-sm-center"],[1,"col-sm-10","col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","email"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,t){1&r&&(s.Nb(0,"div",0),s.pc(1," &nbsp"),s.Mb(),s.Nb(2,"div",1),s.Nb(3,"div",2),s.Nb(4,"div",3),s.Nb(5,"h4",4),s.pc(6,"Signup"),s.Mb(),s.Nb(7,"div",5),s.Nb(8,"form",6),s.Ub("ngSubmit",(function(){return t.onSubmit()})),s.Nb(9,"div",7),s.Nb(10,"label",8),s.pc(11,"First Name"),s.Mb(),s.Lb(12,"input",9),s.oc(13,l,2,1,"div",10),s.Mb(),s.Nb(14,"div",7),s.Nb(15,"label",11),s.pc(16,"Last Name"),s.Mb(),s.Lb(17,"input",12),s.oc(18,d,2,1,"div",10),s.Mb(),s.Nb(19,"div",7),s.Nb(20,"label",13),s.pc(21,"Email"),s.Mb(),s.Lb(22,"input",14),s.oc(23,f,2,1,"div",10),s.Mb(),s.Nb(24,"div",7),s.Nb(25,"label",15),s.pc(26,"Password"),s.Mb(),s.Lb(27,"input",16),s.oc(28,h,3,2,"div",10),s.Mb(),s.Nb(29,"div",7),s.Nb(30,"button",17),s.oc(31,v,1,0,"span",18),s.pc(32," Register "),s.Mb(),s.Nb(33,"a",19),s.pc(34,"Cancel"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&r&&(s.yb(8),s.bc("formGroup",t.form),s.yb(4),s.bc("ngClass",s.fc(11,N,t.submitted&&t.f.firstName.errors)),s.yb(1),s.bc("ngIf",t.submitted&&t.f.firstName.errors),s.yb(4),s.bc("ngClass",s.fc(13,N,t.submitted&&t.f.lastName.errors)),s.yb(1),s.bc("ngIf",t.submitted&&t.f.lastName.errors),s.yb(4),s.bc("ngClass",s.fc(15,N,t.submitted&&t.f.email.errors)),s.yb(1),s.bc("ngIf",t.submitted&&t.f.email.errors),s.yb(4),s.bc("ngClass",s.fc(17,N,t.submitted&&t.f.password.errors)),s.yb(1),s.bc("ngIf",t.submitted&&t.f.password.errors),s.yb(2),s.bc("disabled",t.loading),s.yb(1),s.bc("ngIf",t.loading))},directives:[o.l,o.h,o.e,o.a,o.g,o.d,i.i,i.k,c.f],styles:[""]}),r})();function M(r,t){if(1&r&&(s.Nb(0,"h1"),s.pc(1),s.Zb(2,"async"),s.Mb()),2&r){const r=s.Yb();var e;s.yb(1),s.rc("Hello ",null==(e=s.ac(2,1,r.authService.user))?null:e.email,"")}}function w(r,t){if(1&r){const r=s.Ob();s.Nb(0,"div"),s.Nb(1,"div",0),s.Nb(2,"div",9),s.Lb(3,"img",10),s.Mb(),s.Nb(4,"div",11),s.Nb(5,"form",12),s.Lb(6,"input",13),s.Lb(7,"input",14),s.Nb(8,"button",15),s.Ub("click",(function(){return s.hc(r),s.Yb().signin()})),s.pc(9,"Login"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()}if(2&r){const r=s.Yb();s.yb(5),s.bc("formGroup",r.form)}}function I(r,t){if(1&r){const r=s.Ob();s.Nb(0,"button",16),s.Ub("click",(function(){return s.hc(r),s.Yb().signOut()})),s.pc(1,"Logout"),s.Mb()}}const k=[{path:"",component:(()=>{class r{constructor(r,t,e){this.authService=r,this.router=t,this.fb=e.get(o.b),this.createForm()}createForm(){this.form=this.fb.group({email:null,password:null})}resetForm(){this.form.controls.email.setValue(null),this.form.controls.password.setValue(null)}signin(){this.authService.login(this.form.controls.email.value,this.form.controls.password.value),console.log(localStorage.getItem("user")),this.authService&&this.authService.user.subscribe(r=>{r?localStorage.setItem("user",JSON.stringify(r)):localStorage.setItem("user",null)}),this.resetForm()}signUp(){this.router.navigate(["/login/signup"])}pwdRest(){this.authService.sendPasswordResetEmail()}signOut(){this.authService.logout(),this.resetForm()}}return r.\u0275fac=function(t){return new(t||r)(s.Kb(n.a),s.Kb(c.c),s.Kb(s.r))},r.\u0275cmp=s.Eb({type:r,selectors:[["app-login"]],decls:16,vars:9,consts:[[1,"row"],[1,"container","pt-3"],[1,"row","justify-content-sm-center"],[1,"col-sm-10","col-md-6"],[1,"card","border-info"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"col-md-4","text-center"],["src","https://placeimg.com/128/128/nature"],[1,"col-md-8"],[3,"formGroup"],["type","text","formControlName","email","placeholder","Email","id","name","required","","autofocus","",1,"text-primary","form-control","mb-2"],["type","password","formControlName","password","id","password","placeholder","Password",1,"text-primary","form-control","mb-2"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","mb-1",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(r,t){1&r&&(s.Nb(0,"div",0),s.pc(1," \xa0"),s.Mb(),s.Nb(2,"div",1),s.Nb(3,"div",2),s.Nb(4,"div",3),s.Nb(5,"div",4),s.Nb(6,"div",5),s.pc(7,"Login"),s.Mb(),s.Nb(8,"div",6),s.oc(9,M,3,3,"h1",7),s.Zb(10,"async"),s.oc(11,w,10,1,"div",7),s.Zb(12,"async"),s.Nb(13,"div"),s.oc(14,I,2,0,"button",8),s.Zb(15,"async"),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb(),s.Mb()),2&r&&(s.yb(9),s.bc("ngIf",s.ac(10,3,t.authService&&t.authService.user)),s.yb(2),s.bc("ngIf",!s.ac(12,5,t.authService.user)),s.yb(3),s.bc("ngIf",s.ac(15,7,t.authService.user)))},directives:[i.k,o.l,o.h,o.e,o.a,o.g,o.d,o.j],pipes:[i.b],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}"]}),r})()},{path:"signup",component:y}];let S=(()=>{class r{}return r.\u0275mod=s.Ib({type:r}),r.\u0275inj=s.Hb({factory:function(t){return new(t||r)},imports:[[c.g.forChild(k)],c.g]}),r})(),C=(()=>{class r{}return r.\u0275mod=s.Ib({type:r}),r.\u0275inj=s.Hb({factory:function(t){return new(t||r)},providers:[],imports:[[i.c,S,o.f,o.i]]}),r})()}}]);