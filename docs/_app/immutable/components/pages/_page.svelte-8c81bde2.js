import{S as Y,i as X,s as Z,k as y,q as L,l as A,m as x,r as R,h as b,n as g,J as G,b as F,D as m,K as gt,L as dt,u as U,B as tt,a as C,w as z,c as D,x as M,C as Q,y as N,f as j,g as ft,t as H,d as mt,z as O,M as _t,N as bt,O as pt,e as ot,P as yt,Q as At,R as kt,F as vt}from"../../chunks/index-07d5e24f.js";import{D as wt,g as rt}from"../../chunks/DestinationCard-fc39de0a.js";import{c as et}from"../../chunks/shared-23917130.js";import{S as lt}from"../../chunks/SizedContent-d65c9333.js";import{d as Tt}from"../../chunks/stores-446aa07a.js";function Et(s){let t,n,e,l;return{c(){t=y("button"),n=L(s[0]),this.h()},l(o){t=A(o,"BUTTON",{class:!0});var r=x(t);n=R(r,s[0]),r.forEach(b),this.h()},h(){g(t,"class",s[2]),G(t,"btn",!0),G(t,"btn-primary",s[3]),G(t,"btn-secondary",!s[3])},m(o,r){F(o,t,r),m(t,n),e||(l=gt(t,"click",function(){dt(s[1])&&s[1].apply(this,arguments)}),e=!0)},p(o,[r]){s=o,r&1&&U(n,s[0]),r&4&&g(t,"class",s[2]),r&4&&G(t,"btn",!0),r&12&&G(t,"btn-primary",s[3]),r&12&&G(t,"btn-secondary",!s[3])},i:tt,o:tt,d(o){o&&b(t),e=!1,l()}}}function xt(s,t,n){let{buttonText:e}=t,{buttonAction:l}=t,{extraClassInfo:o=""}=t,{primary:r=!1}=t;return s.$$set=a=>{"buttonText"in a&&n(0,e=a.buttonText),"buttonAction"in a&&n(1,l=a.buttonAction),"extraClassInfo"in a&&n(2,o=a.extraClassInfo),"primary"in a&&n(3,r=a.primary)},[e,l,o,r]}class ht extends Y{constructor(t){super(),X(this,t,xt,Et,Z,{buttonText:0,buttonAction:1,extraClassInfo:2,primary:3})}}function it(s){let t,n;return t=new ht({props:{buttonText:s[7],buttonAction:s[8]}}),{c(){z(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),n=!0},p(e,l){const o={};l&128&&(o.buttonText=e[7]),l&256&&(o.buttonAction=e[8]),t.$set(o)},i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function Bt(s){let t,n,e,l,o,r,a,i,h,w,k,u,V,f,c,v,T,B,S,$,q,P,J,I;B=new ht({props:{primary:!0,extraClassInfo:"transform hover:-translate-y-0.5 focus:-translate-y-0.5 shadow-lg",buttonText:s[5],buttonAction:s[6]}});let _=s[7]&&s[8]&&it(s);return{c(){t=y("section"),n=y("div"),e=y("img"),o=C(),r=y("h1"),a=L(s[2]),i=C(),h=y("br"),w=C(),k=y("span"),u=L(s[3]),V=C(),f=y("p"),c=L(s[4]),v=C(),T=y("div"),z(B.$$.fragment),S=C(),_&&_.c(),$=C(),q=y("div"),P=y("img"),this.h()},l(d){t=A(d,"SECTION",{class:!0});var p=x(t);n=A(p,"DIV",{class:!0});var E=x(n);e=A(E,"IMG",{class:!0,src:!0,alt:!0}),o=D(E),r=A(E,"H1",{class:!0});var W=x(r);a=R(W,s[2]),i=D(W),h=A(W,"BR",{}),w=D(W),k=A(W,"SPAN",{class:!0});var nt=x(k);u=R(nt,s[3]),nt.forEach(b),W.forEach(b),V=D(E),f=A(E,"P",{class:!0});var at=x(f);c=R(at,s[4]),at.forEach(b),v=D(E),T=A(E,"DIV",{class:!0});var K=x(T);M(B.$$.fragment,K),S=D(K),_&&_.l(K),K.forEach(b),E.forEach(b),$=D(p),q=A(p,"DIV",{class:!0});var st=x(q);P=A(st,"IMG",{class:!0,src:!0,alt:!0}),st.forEach(b),p.forEach(b),this.h()},h(){g(e,"class","rounded-lg shadow-lg sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"),Q(e.src,l=s[0])||g(e,"src",l),g(e,"alt",s[1]),g(k,"class","text-brand-500"),g(r,"class","mt-2 text-2xl font-headline tracking-tight font-semibold text-gray-900 sm:text-3xl sm:mt-6 lg:mt-0 lg:text-3xl"),g(f,"class","text-gray-500 sm:text-xl sm:mt-2"),g(T,"class","space-x-2"),g(n,"class","flex flex-col gap-2 lg:py-12 2xl:max-w-xl 2xl:col-span-2 2xl:justify-self-center"),g(P,"class","absolute inset-0 w-full h-full object-cover object-center"),Q(P.src,J=s[0])||g(P,"src",J),g(P,"alt",s[1]),g(q,"class","hidden relative lg:block 2xl:col-span-3"),g(t,"class","grid lg:grid-cols-2 2xl:grid-cols-5")},m(d,p){F(d,t,p),m(t,n),m(n,e),m(n,o),m(n,r),m(r,a),m(r,i),m(r,h),m(r,w),m(r,k),m(k,u),m(n,V),m(n,f),m(f,c),m(n,v),m(n,T),N(B,T,null),m(T,S),_&&_.m(T,null),m(t,$),m(t,q),m(q,P),I=!0},p(d,[p]){(!I||p&1&&!Q(e.src,l=d[0]))&&g(e,"src",l),(!I||p&2)&&g(e,"alt",d[1]),(!I||p&4)&&U(a,d[2]),(!I||p&8)&&U(u,d[3]),(!I||p&16)&&U(c,d[4]);const E={};p&32&&(E.buttonText=d[5]),p&64&&(E.buttonAction=d[6]),B.$set(E),d[7]&&d[8]?_?(_.p(d,p),p&384&&j(_,1)):(_=it(d),_.c(),j(_,1),_.m(T,null)):_&&(ft(),H(_,1,1,()=>{_=null}),mt()),(!I||p&1&&!Q(P.src,J=d[0]))&&g(P,"src",J),(!I||p&2)&&g(P,"alt",d[1])},i(d){I||(j(B.$$.fragment,d),j(_),I=!0)},o(d){H(B.$$.fragment,d),H(_),I=!1},d(d){d&&b(t),O(B),_&&_.d()}}}function It(s,t,n){let{img:e}=t,{imgAlt:l}=t,{header:o}=t,{headerHighlight:r}=t,{paragraph:a}=t,{buttonText:i}=t,{buttonAction:h}=t,{secondaryButtonText:w}=t,{secondaryButtonAction:k}=t;return s.$$set=u=>{"img"in u&&n(0,e=u.img),"imgAlt"in u&&n(1,l=u.imgAlt),"header"in u&&n(2,o=u.header),"headerHighlight"in u&&n(3,r=u.headerHighlight),"paragraph"in u&&n(4,a=u.paragraph),"buttonText"in u&&n(5,i=u.buttonText),"buttonAction"in u&&n(6,h=u.buttonAction),"secondaryButtonText"in u&&n(7,w=u.secondaryButtonText),"secondaryButtonAction"in u&&n(8,k=u.secondaryButtonAction)},[e,l,o,r,a,i,h,w,k]}class Ct extends Y{constructor(t){super(),X(this,t,It,Bt,Z,{img:0,imgAlt:1,header:2,headerHighlight:3,paragraph:4,buttonText:5,buttonAction:6,secondaryButtonText:7,secondaryButtonAction:8})}}function ct(s,t,n){const e=s.slice();return e[1]=t[n],e}function ut(s,t){let n,e,l;const o=[t[1]];let r={};for(let a=0;a<o.length;a+=1)r=pt(r,o[a]);return e=new wt({props:r}),{key:s,first:null,c(){n=ot(),z(e.$$.fragment),this.h()},l(a){n=ot(),M(e.$$.fragment,a),this.h()},h(){this.first=n},m(a,i){F(a,n,i),N(e,a,i),l=!0},p(a,i){t=a;const h=i&1?yt(o,[At(t[1])]):{};e.$set(h)},i(a){l||(j(e.$$.fragment,a),l=!0)},o(a){H(e.$$.fragment,a),l=!1},d(a){a&&b(n),O(e,a)}}}function Dt(s){let t,n,e,l,o,r,a,i,h=[],w=new Map,k,u=s[0];const V=f=>f[1].id;for(let f=0;f<u.length;f+=1){let c=ct(s,u,f),v=V(c);w.set(v,h[f]=ut(v,c))}return{c(){t=y("section"),n=y("h2"),e=L("Popular Destinations"),l=C(),o=y("p"),r=L("A selection of great work-friendly cities with lots to see and explore."),a=C(),i=y("div");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){t=A(f,"SECTION",{class:!0});var c=x(t);n=A(c,"H2",{});var v=x(n);e=R(v,"Popular Destinations"),v.forEach(b),l=D(c),o=A(c,"P",{class:!0});var T=x(o);r=R(T,"A selection of great work-friendly cities with lots to see and explore."),T.forEach(b),a=D(c),i=A(c,"DIV",{class:!0});var B=x(i);for(let S=0;S<h.length;S+=1)h[S].l(B);B.forEach(b),c.forEach(b),this.h()},h(){g(o,"class","text-gray-500"),g(i,"class","grid lg:grid-cols-2 xl:grid-cols-3 gap-4"),g(t,"class","space-y-4")},m(f,c){F(f,t,c),m(t,n),m(n,e),m(t,l),m(t,o),m(o,r),m(t,a),m(t,i);for(let v=0;v<h.length;v+=1)h[v].m(i,null);k=!0},p(f,[c]){c&1&&(u=f[0],ft(),h=_t(h,c,V,1,f,u,w,i,kt,ut,null,ct),mt())},i(f){if(!k){for(let c=0;c<u.length;c+=1)j(h[c]);k=!0}},o(f){for(let c=0;c<h.length;c+=1)H(h[c]);k=!1},d(f){f&&b(t);for(let c=0;c<h.length;c+=1)h[c].d()}}}function jt(s,t,n){let e;return bt(s,Tt,l=>n(0,e=l)),[e]}class Pt extends Y{constructor(t){super(),X(this,t,jt,Dt,Z,{})}}function Ht(s){let t,n;return t=new Ct({props:{img:et+"/img/beach-work.jpg",imgAlt:"woman sitting on beach",header:"You can work from anywhere.",headerHighlight:"Take advantage of it.",paragraph:`Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
nice weather even when you're not on vation.`,buttonText:"Book your escape",buttonAction:s[0],secondaryButtonText:"Learn more",secondaryButtonAction:s[1]}}),{c(){z(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),n=!0},p:tt,i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function St(s){let t,n;return t=new Pt({}),{c(){z(t.$$.fragment)},l(e){M(t.$$.fragment,e)},m(e,l){N(t,e,l),n=!0},i(e){n||(j(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){O(t,e)}}}function zt(s){let t,n,e,l,o,r;return e=new lt({props:{$$slots:{default:[Ht]},$$scope:{ctx:s}}}),o=new lt({props:{$$slots:{default:[St]},$$scope:{ctx:s}}}),{c(){t=y("meta"),n=C(),z(e.$$.fragment),l=C(),z(o.$$.fragment),this.h()},l(a){const i=vt("svelte-gx7ku9",document.head);t=A(i,"META",{name:!0,content:!0}),i.forEach(b),n=D(a),M(e.$$.fragment,a),l=D(a),M(o.$$.fragment,a),this.h()},h(){document.title="Workcation",g(t,"name","description"),g(t,"content","Work and vacation")},m(a,i){m(document.head,t),F(a,n,i),N(e,a,i),F(a,l,i),N(o,a,i),r=!0},p(a,[i]){const h={};i&4&&(h.$$scope={dirty:i,ctx:a}),e.$set(h);const w={};i&4&&(w.$$scope={dirty:i,ctx:a}),o.$set(w)},i(a){r||(j(e.$$.fragment,a),j(o.$$.fragment,a),r=!0)},o(a){H(e.$$.fragment,a),H(o.$$.fragment,a),r=!1},d(a){b(t),a&&b(n),O(e,a),a&&b(l),O(o,a)}}}function Mt(s){return[()=>{rt(et+"/book")},()=>{rt(et+"/learn")}]}class Gt extends Y{constructor(t){super(),X(this,t,Mt,zt,Z,{})}}export{Gt as default};
