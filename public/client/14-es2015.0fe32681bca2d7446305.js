(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{cPR9:function(t,n,e){"use strict";e.r(n),e.d(n,"NotificationsModule",(function(){return J}));var i=e("ofXK"),o=e("tyNb"),a=e("2Vo4"),s=e("pLZG"),r=e("nYR2"),c=e("3Pt+"),l=e("fXoL"),b=e("LRXf");let d=(()=>{class t{constructor(t){this.http=t}getAll(t){return this.http.get(`notifications/${t}/subscriptions`)}updateUserSubscriptions(t,n){return this.http.put(`notifications/${t}/subscriptions`,{selections:n})}}return t.\u0275fac=function(n){return new(n||t)(l.Zb(b.a))},t.\u0275prov=l.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("twBr"),g=e("i2dy"),p=e("kmQS"),h=e("N2vX"),m=e("bTqV"),f=e("Rd8u"),v=e("bSwM");function P(t,n){if(1&t){const t=l.Wb();l.Vb(0,"div",12),l.Vb(1,"div",13),l.Kc(2),l.Ub(),l.Vb(3,"mat-checkbox",14),l.cc("change",(function(e){l.xc(t);const i=n.$implicit,o=l.gc(3);return e?o.toggleAllRowsFor(i):null})),l.Ub(),l.Ub()}if(2&t){const t=n.$implicit,e=l.gc(3);l.Db(2),l.Lc(t),l.Db(1),l.mc("checked",e.allRowsSelectedFor(t))("indeterminate",e.someRowsSelectedFor(t)&&!e.allRowsSelectedFor(t))("disabled","browser"===t&&!e.supportsBrowserNotifications)}}function w(t,n){if(1&t&&(l.Tb(0),l.Ic(1,P,4,4,"div",11),l.Sb()),2&t){const t=l.gc(2);l.Db(1),l.mc("ngForOf",t.availableChannels)}}function O(t,n){if(1&t&&(l.Vb(0,"div",12),l.Qb(1,"mat-checkbox",17),l.Ub()),2&t){const t=n.$implicit;l.Db(1),l.mc("formControlName",t)}}function y(t,n){if(1&t&&(l.Vb(0,"div",15),l.Vb(1,"div",16),l.Kc(2),l.Ub(),l.Ic(3,O,2,1,"div",11),l.Ub()),2&t){const t=n.$implicit,e=n.last,i=l.gc(2);l.Hb("no-border",e),l.mc("formGroupName",t.notif_id),l.Db(2),l.Lc(t.name),l.Db(1),l.mc("ngForOf",i.availableChannels)}}function C(t,n){if(1&t&&(l.Vb(0,"div",5),l.Vb(1,"div",6),l.Vb(2,"div",7),l.Kc(3),l.Ub(),l.Ic(4,w,2,1,"ng-container",8),l.Ub(),l.Vb(5,"div",9),l.Ic(6,y,4,5,"div",10),l.Ub(),l.Ub()),2&t){const t=n.$implicit,e=n.first,i=l.gc();l.Db(3),l.Lc(t.group_name),l.Db(1),l.mc("ngIf",e),l.Db(1),l.mc("formGroup",i.form),l.Db(1),l.mc("ngForOf",t.notifications)}}let k=(()=>{class t{constructor(t,n,e,i,o,s){this.route=t,this.api=n,this.currentUser=e,this.toast=i,this.cd=o,this.settings=s,this.availableChannels=[],this.loading$=new a.a(!1),this.supportsBrowserNotifications="Notification"in window,this.form=new c.l({})}ngOnInit(){this.route.data.subscribe(t=>{this.groupedNotifications=t.api.grouped_notifications,this.availableChannels=t.api.available_channels,this.initialUserSelections=t.api.user_selections,this.groupedNotifications.forEach(t=>{t.notifications.forEach(t=>this.addNotifFormField(t.notif_id))})})}addNotifFormField(t){const n=new c.l({});this.availableChannels.forEach(e=>{var i;const o=null===(i=this.initialUserSelections.find(n=>n.notif_id===t))||void 0===i?void 0:i.channels[e],a=new c.i({value:null!=o&&o,disabled:"browser"===e&&!this.supportsBrowserNotifications});"browser"===e&&"granted"!==Notification.permission&&a.valueChanges.pipe(Object(s.a)(t=>t)).subscribe(t=>{"denied"===Notification.permission?(this.toast.open("Notifications blocked. Please enable them for this site from browser settings."),a.setValue(!1,{emitEvent:!1}),this.cd.markForCheck()):Notification.requestPermission().then(t=>{"granted"!==t&&(a.setValue(!1,{emitEvent:!1}),this.cd.markForCheck())})}),n.addControl(e,a)}),this.form.addControl(t,n)}toggleAllRowsFor(t){const n=!this.allRowsSelectedFor(t);Object.values(this.form.controls).forEach(e=>{e.controls[t].setValue(n),e.controls[t].markAsDirty()})}allRowsSelectedFor(t){return Object.values(this.form.controls).every(n=>!0===n.controls[t].value)}someRowsSelectedFor(t){return Object.values(this.form.controls).some(n=>!0===n.controls[t].value)}saveSettings(){this.loading$.next(!0);const t=this.getPayload();this.api.updateUserSubscriptions(this.currentUser.get("id"),t).pipe(Object(r.a)(()=>this.loading$.next(!1))).subscribe(()=>{this.form.markAsPristine(),this.toast.open("Notification settings updated.")})}getPayload(){return Object.entries(this.form.controls).filter(([t,n])=>n.dirty).map(([t,n])=>({notif_id:t,channels:n.value}))}}return t.\u0275fac=function(n){return new(n||t)(l.Pb(o.a),l.Pb(d),l.Pb(u.a),l.Pb(g.b),l.Pb(l.i),l.Pb(p.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["notification-subscriptions"]],decls:7,vars:5,consts:[[1,"box-shadow",3,"menuPosition"],[1,"be-container"],[1,"table","material-panel",3,"ngSubmit"],["class","setting-group",4,"ngFor","ngForOf"],["mat-raised-button","","color","accent","trans","",1,"submit-button",3,"disabled"],[1,"setting-group"],[1,"row"],["trans","",1,"name-column","strong"],[4,"ngIf"],[3,"formGroup"],["class","row indent",3,"no-border","formGroupName",4,"ngFor","ngForOf"],["class","channel-column",4,"ngFor","ngForOf"],[1,"channel-column"],["trans","",1,"channel-name"],[3,"checked","indeterminate","disabled","change"],[1,"row","indent",3,"formGroupName"],["trans","",1,"name-column"],[3,"formControlName"]],template:function(t,n){1&t&&(l.Qb(0,"material-navbar",0),l.Vb(1,"div",1),l.Vb(2,"form",2),l.cc("ngSubmit",(function(){return n.saveSettings()})),l.Ic(3,C,7,4,"div",3),l.Vb(4,"button",4),l.hc(5,"async"),l.Kc(6,"Save Settings"),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.mc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),l.Db(3),l.mc("ngForOf",n.groupedNotifications),l.Db(1),l.mc("disabled",l.ic(5,3,n.loading$)))},directives:[h.a,c.K,c.v,c.w,i.s,m.b,f.a,i.t,c.m,v.a,c.n,c.u,c.k],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block;background-color:var(--be-background-alternative);min-height:100vh}.be-container[_ngcontent-%COMP%]{padding-top:35px;padding-bottom:35px}.table[_ngcontent-%COMP%]{border-radius:4px}.setting-group[_ngcontent-%COMP%]{margin-bottom:10px}.row[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid var(--be-divider-default);padding:10px}.row.no-border[_ngcontent-%COMP%]{border-bottom:none}.row.indent[_ngcontent-%COMP%]{padding-left:20px}.name-column[_ngcontent-%COMP%]{flex:1 1 auto}.strong[_ngcontent-%COMP%]{font-weight:500;font-size:1.5rem;align-self:flex-end}.channel-name[_ngcontent-%COMP%]{margin-bottom:10px}.channel-column[_ngcontent-%COMP%]{width:75px;text-align:center;text-transform:capitalize}.submit-button[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0}),t})();var x=e("JIr8"),_=e("5+tZ"),U=e("EY2u"),V=e("LRne");let M=(()=>{class t{constructor(t,n,e){this.router=t,this.subscriptions=n,this.currentUser=e}resolve(t,n){return this.subscriptions.getAll(+this.currentUser.get("id")).pipe(Object(x.a)(()=>(this.router.navigate(["/account/settings"]),U.a)),Object(_.a)(t=>t?Object(V.a)(t):(this.router.navigate(["/account/settings"]),U.a)))}}return t.\u0275fac=function(n){return new(n||t)(l.Zb(o.g),l.Zb(d),l.Zb(u.a))},t.\u0275prov=l.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var F=e("f+iI"),N=e("OnlV"),D=e("WWJw");function $(t,n){if(1&t){const t=l.Wb();l.Vb(0,"li"),l.Vb(1,"button",4),l.cc("click",(function(){l.xc(t);const e=n.$implicit;return l.gc().selectPage(e)})),l.Kc(2),l.Ub(),l.Ub()}if(2&t){const t=n.$implicit,e=l.gc();l.Db(1),l.Hb("active",e.currentPage===t),l.mc("disabled",e.disabled),l.Db(1),l.Lc(t)}}let S=(()=>{class t{constructor(t){this.router=t,this.pageChanged=new l.o,this.disabled=!0}get shouldHide(){return this.numberOfPages<2}set pagination(t){t&&(this.numberOfPages=t.last_page>10?10:t.last_page,this.numberOfPages>1&&(this.iterator=Array.from(Array(this.numberOfPages).keys()).map(t=>t+1),this.currentPage=t.current_page))}selectPage(t){this.currentPage!==t&&(this.currentPage=t,this.pageChanged.next(t),this.router.navigate([],{queryParams:{page:t},replaceUrl:!0}))}nextPage(){const t=this.currentPage+1;this.selectPage(t<=this.numberOfPages?t:this.currentPage)}prevPage(){const t=this.currentPage-1;this.selectPage(t>=1?t:this.currentPage)}}return t.\u0275fac=function(n){return new(n||t)(l.Pb(o.g))},t.\u0275cmp=l.Jb({type:t,selectors:[["pagination-widget"]],hostVars:2,hostBindings:function(t,n){2&t&&l.Hb("hidden",n.shouldHide)},inputs:{disabled:"disabled",pagination:"pagination"},outputs:{pageChanged:"pageChanged"},decls:8,vars:3,consts:[[1,"page-numbers","unstyled-list"],["type","button","mat-button","","trans","",1,"prev",3,"disabled","click"],[4,"ngFor","ngForOf"],["type","button","mat-button","","trans","",1,"next",3,"disabled","click"],["type","button","mat-flat-button","","color","gray",1,"page-number-button",3,"disabled","click"]],template:function(t,n){1&t&&(l.Vb(0,"ul",0),l.Vb(1,"li"),l.Vb(2,"button",1),l.cc("click",(function(){return n.prevPage()})),l.Kc(3,"Previous"),l.Ub(),l.Ub(),l.Ic(4,$,3,4,"li",2),l.Vb(5,"li"),l.Vb(6,"button",3),l.cc("click",(function(){return n.nextPage()})),l.Kc(7,"Next"),l.Ub(),l.Ub(),l.Ub()),2&t&&(l.Db(2),l.mc("disabled",n.disabled),l.Db(2),l.mc("ngForOf",n.iterator),l.Db(2),l.mc("disabled",n.disabled))},directives:[m.b,f.a,i.s],styles:["[_nghost-%COMP%]{display:block}ul[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;width:100%}li[_ngcontent-%COMP%]{margin:0 3px 6px}.page-number-button[_ngcontent-%COMP%]{width:40px;height:40px;min-width:40px;line-height:40px;padding:0}.active[_ngcontent-%COMP%]{background-color:var(--be-accent-default);color:var(--be-accent-contrast)}.next[_ngcontent-%COMP%], .prev[_ngcontent-%COMP%]{color:var(--be-accent-default)}"],changeDetection:0}),t})();const R=[{path:"",component:(()=>{class t{constructor(t,n,e,i){this.settings=t,this.notifications=n,this.breakpoints=e,this.route=i,this.pagination$=new a.a(null)}ngOnInit(){this.loadPage(this.route.snapshot.queryParams.page||1)}loadPage(t){this.notifications.load({page:t,perPage:25}).subscribe(t=>{this.pagination$.next(t.pagination)})}markAsRead(t){this.pagination$.value.data.find(n=>n.id===t.id).read_at=t.read_at}}return t.\u0275fac=function(n){return new(n||t)(l.Pb(p.a),l.Pb(F.a),l.Pb(N.a),l.Pb(o.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["notification-page"]],decls:8,vars:13,consts:[[3,"menuPosition"],[1,"be-container"],[3,"notifications","compact","markedAsRead"],[3,"pagination","disabled","pageChanged"]],template:function(t,n){var e;1&t&&(l.Qb(0,"material-navbar",0),l.Vb(1,"div",1),l.Vb(2,"notification-list",2),l.cc("markedAsRead",(function(t){return n.markAsRead(t)})),l.hc(3,"async"),l.hc(4,"async"),l.Ub(),l.Vb(5,"pagination-widget",3),l.cc("pageChanged",(function(t){return n.loadPage(t)})),l.hc(6,"async"),l.hc(7,"async"),l.Ub(),l.Ub()),2&t&&(l.mc("menuPosition",n.settings.get("vebto.navbar.defaultPosition")),l.Db(2),l.mc("notifications",null==(e=l.ic(3,5,n.pagination$))?null:e.data)("compact",l.ic(4,7,n.breakpoints.isMobile$)),l.Db(3),l.mc("pagination",l.ic(6,9,n.pagination$))("disabled",l.ic(7,11,n.notifications.loading$)))},directives:[h.a,D.a,S],pipes:[i.b],styles:["[_nghost-%COMP%]{display:block;min-height:100vh;background-color:var(--be-background-alternative)}.be-container[_ngcontent-%COMP%]{padding-top:25px;padding-bottom:25px}pagination-widget[_ngcontent-%COMP%]{margin-top:35px}"],changeDetection:0}),t})()},{path:"settings",component:k,resolve:{api:M},data:{permissions:["notification.subscribe"]}}];let I=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(n){return new(n||t)},imports:[[o.k.forChild(R)],o.k]}),t})();var j=e("MKyN"),A=e("CXWK"),K=e("gFpt"),L=e("6rvT");let E=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(n){return new(n||t)},imports:[[i.c,m.c,L.a]]}),t})(),J=(()=>{class t{}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(n){return new(n||t)},imports:[[i.c,c.o,c.E,I,K.a,j.a,A.a,E,L.a,v.b,m.c]]}),t})()}}]);
//# sourceMappingURL=14-es2015.0fe32681bca2d7446305.js.map