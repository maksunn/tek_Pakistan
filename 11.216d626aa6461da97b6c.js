(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{lIRb:function(r,t,e){"use strict";e.r(t),e.d(t,"LoginModule",(function(){return S}));var i=e("ofXK"),s=e("3Pt+"),o=e("fXoL"),n=e("5EfC"),b=e("vz+L"),a=e("tyNb");function c(r,t){1&r&&(o.Nb(0,"div"),o.jc(1,"First Name is required"),o.Mb())}function l(r,t){if(1&r&&(o.Nb(0,"div",20),o.ic(1,c,2,0,"div",21),o.Mb()),2&r){const r=o.Wb();o.yb(1),o.Zb("ngIf",r.f.firstName.errors.required)}}function u(r,t){1&r&&(o.Nb(0,"div"),o.jc(1,"Last Name is required"),o.Mb())}function d(r,t){if(1&r&&(o.Nb(0,"div",20),o.ic(1,u,2,0,"div",21),o.Mb()),2&r){const r=o.Wb();o.yb(1),o.Zb("ngIf",r.f.lastName.errors.required)}}function m(r,t){1&r&&(o.Nb(0,"div"),o.jc(1,"Email is required"),o.Mb())}function f(r,t){if(1&r&&(o.Nb(0,"div",20),o.ic(1,m,2,0,"div",21),o.Mb()),2&r){const r=o.Wb();o.yb(1),o.Zb("ngIf",r.f.email.errors.required)}}function p(r,t){1&r&&(o.Nb(0,"div"),o.jc(1,"Password is required"),o.Mb())}function g(r,t){1&r&&(o.Nb(0,"div"),o.jc(1,"Password must be at least 6 characters"),o.Mb())}function h(r,t){if(1&r&&(o.Nb(0,"div",20),o.ic(1,p,2,0,"div",21),o.ic(2,g,2,0,"div",21),o.Mb()),2&r){const r=o.Wb();o.yb(1),o.Zb("ngIf",r.f.password.errors.required),o.yb(1),o.Zb("ngIf",r.f.password.errors.minlength)}}function v(r,t){1&r&&o.Lb(0,"span",22)}const N=function(r){return{"is-invalid":r}};let y=(()=>{class r{constructor(r,t,e,i,s){this.auth=r,this.authguard=t,this.router=e,this.formBuilder=i,this.route=s,this.state="",this.loading=!1,this.submitted=!1,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"}ngOnInit(){this.form=this.formBuilder.group({firstName:["",s.k.required],lastName:["",s.k.required],email:["",[s.k.required,s.k.pattern(this.emailPattern)]],password:["",[s.k.required,s.k.minLength(6)]]})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.form.valid&&(console.log(this.form.value),this.auth.doRegister({email:this.form.value.email,password:this.form.value.password}).then(r=>{console.log(r),alert("Registration successful"),this.router.navigate(["/"])}).catch(r=>{console.log(r),this.error=r,alert("Error occured. Please try again")}))}}return r.\u0275fac=function(t){return new(t||r)(o.Kb(n.a),o.Kb(b.a),o.Kb(a.b),o.Kb(s.b),o.Kb(a.a))},r.\u0275cmp=o.Eb({type:r,selectors:[["app-signup"]],decls:35,vars:19,consts:[[1,"row"],[1,"row","justify-content-sm-center"],[1,"col-sm-10","col-md-6"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","email"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","../../login",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(r,t){1&r&&(o.Nb(0,"div",0),o.jc(1," &nbsp"),o.Mb(),o.Nb(2,"div",1),o.Nb(3,"div",2),o.Nb(4,"div",3),o.Nb(5,"h4",4),o.jc(6,"Signup"),o.Mb(),o.Nb(7,"div",5),o.Nb(8,"form",6),o.Ub("ngSubmit",(function(){return t.onSubmit()})),o.Nb(9,"div",7),o.Nb(10,"label",8),o.jc(11,"First Name"),o.Mb(),o.Lb(12,"input",9),o.ic(13,l,2,1,"div",10),o.Mb(),o.Nb(14,"div",7),o.Nb(15,"label",11),o.jc(16,"Last Name"),o.Mb(),o.Lb(17,"input",12),o.ic(18,d,2,1,"div",10),o.Mb(),o.Nb(19,"div",7),o.Nb(20,"label",13),o.jc(21,"Email"),o.Mb(),o.Lb(22,"input",14),o.ic(23,f,2,1,"div",10),o.Mb(),o.Nb(24,"div",7),o.Nb(25,"label",15),o.jc(26,"Password"),o.Mb(),o.Lb(27,"input",16),o.ic(28,h,3,2,"div",10),o.Mb(),o.Nb(29,"div",7),o.Nb(30,"button",17),o.ic(31,v,1,0,"span",18),o.jc(32," Register "),o.Mb(),o.Nb(33,"a",19),o.jc(34,"Cancel"),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb()),2&r&&(o.yb(8),o.Zb("formGroup",t.form),o.yb(4),o.Zb("ngClass",o.cc(11,N,t.submitted&&t.f.firstName.errors)),o.yb(1),o.Zb("ngIf",t.submitted&&t.f.firstName.errors),o.yb(4),o.Zb("ngClass",o.cc(13,N,t.submitted&&t.f.lastName.errors)),o.yb(1),o.Zb("ngIf",t.submitted&&t.f.lastName.errors),o.yb(4),o.Zb("ngClass",o.cc(15,N,t.submitted&&t.f.email.errors)),o.yb(1),o.Zb("ngIf",t.submitted&&t.f.email.errors),o.yb(4),o.Zb("ngClass",o.cc(17,N,t.submitted&&t.f.password.errors)),o.yb(1),o.Zb("ngIf",t.submitted&&t.f.password.errors),o.yb(2),o.Zb("disabled",t.loading),o.yb(1),o.Zb("ngIf",t.loading))},directives:[s.l,s.h,s.e,s.a,s.g,s.d,i.i,i.k,a.c],styles:[""]}),r})();function M(r,t){if(1&r&&(o.Nb(0,"h1"),o.jc(1),o.Xb(2,"async"),o.Mb()),2&r){const r=o.Wb();var e;o.yb(1),o.lc("Hello ",null==(e=o.Yb(2,1,r.authService.user))?null:e.email,"")}}function w(r,t){if(1&r){const r=o.Ob();o.Nb(0,"div"),o.Nb(1,"div",0),o.Nb(2,"div",9),o.Lb(3,"img",10),o.Mb(),o.Nb(4,"div",11),o.Nb(5,"form",12),o.Lb(6,"input",13),o.Lb(7,"input",14),o.Nb(8,"button",15),o.Ub("click",(function(){return o.ec(r),o.Wb().signin()})),o.jc(9,"Login"),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb()}if(2&r){const r=o.Wb();o.yb(5),o.Zb("formGroup",r.form)}}function I(r,t){if(1&r){const r=o.Ob();o.Nb(0,"button",16),o.Ub("click",(function(){return o.ec(r),o.Wb().signOut()})),o.jc(1,"Logout"),o.Mb()}}const j=[{path:"",component:(()=>{class r{constructor(r,t,e){this.authService=r,this.router=t,this.fb=e.get(s.b),this.createForm()}createForm(){this.form=this.fb.group({email:null,password:null})}resetForm(){this.form.controls.email.setValue(null),this.form.controls.password.setValue(null)}signin(){this.authService.login(this.form.controls.email.value,this.form.controls.password.value),console.log(localStorage.getItem("user")),this.authService&&this.authService.user.subscribe(r=>{r?localStorage.setItem("user",JSON.stringify(r)):localStorage.setItem("user",null)}),this.resetForm()}signUp(){this.router.navigate(["/login/signup"])}pwdRest(){this.authService.sendPasswordResetEmail()}signOut(){this.authService.logout(),this.resetForm()}}return r.\u0275fac=function(t){return new(t||r)(o.Kb(n.a),o.Kb(a.b),o.Kb(o.r))},r.\u0275cmp=o.Eb({type:r,selectors:[["app-login"]],decls:16,vars:9,consts:[[1,"row"],[1,"container","pt-3"],[1,"row","justify-content-sm-center"],[1,"col-sm-10","col-md-6"],[1,"card","border-info"],[1,"card-header"],[1,"card-body"],[4,"ngIf"],["class","btn btn-primary",3,"click",4,"ngIf"],[1,"col-md-4","text-center"],["src","https://placeimg.com/128/128/nature"],[1,"col-md-8"],[3,"formGroup"],["type","text","formControlName","email","placeholder","Email","id","name","required","","autofocus","",1,"text-primary","form-control","mb-2"],["type","password","formControlName","password","id","password","placeholder","Password",1,"text-primary","form-control","mb-2"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","mb-1",3,"click"],[1,"btn","btn-primary",3,"click"]],template:function(r,t){1&r&&(o.Nb(0,"div",0),o.jc(1," \xa0"),o.Mb(),o.Nb(2,"div",1),o.Nb(3,"div",2),o.Nb(4,"div",3),o.Nb(5,"div",4),o.Nb(6,"div",5),o.jc(7,"Login"),o.Mb(),o.Nb(8,"div",6),o.ic(9,M,3,3,"h1",7),o.Xb(10,"async"),o.ic(11,w,10,1,"div",7),o.Xb(12,"async"),o.Nb(13,"div"),o.ic(14,I,2,0,"button",8),o.Xb(15,"async"),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb(),o.Mb()),2&r&&(o.yb(9),o.Zb("ngIf",o.Yb(10,3,t.authService&&t.authService.user)),o.yb(2),o.Zb("ngIf",!o.Yb(12,5,t.authService.user)),o.yb(3),o.Zb("ngIf",o.Yb(15,7,t.authService.user)))},directives:[i.k,s.l,s.h,s.e,s.a,s.g,s.d,s.j],pipes:[i.b],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 10px 20px rgba(0,0,0,.19),0 6px 6px rgba(0,0,0,.23)}"]}),r})()},{path:"signup",component:y}];let k=(()=>{class r{}return r.\u0275mod=o.Ib({type:r}),r.\u0275inj=o.Hb({factory:function(t){return new(t||r)},imports:[[a.d.forChild(j)],a.d]}),r})(),S=(()=>{class r{}return r.\u0275mod=o.Ib({type:r}),r.\u0275inj=o.Hb({factory:function(t){return new(t||r)},providers:[],imports:[[i.c,k,s.f,s.i]]}),r})()}}]);