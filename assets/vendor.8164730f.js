function j(){}function A(t){return t()}function S(){return Object.create(null)}function l(t){t.forEach(A)}function L(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function Q(t,e){return d||(d=document.createElement("a")),d.href=e,t===d.href}function T(t){return Object.keys(t).length===0}function R(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function W(){return q(" ")}function X(){return q("")}function Y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Z(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t){return Array.from(t.childNodes)}function tt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let $;function f(t){$=t}const i=[],C=[],_=[],N=[],P=Promise.resolve();let y=!1;function z(){y||(y=!0,P.then(O))}function x(t){_.push(t)}const b=new Set;let h=0;function O(){const t=$;do{for(;h<i.length;){const e=i[h];h++,f(e),D(e.$$)}for(f(null),i.length=0,h=0;C.length;)C.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(i.length);for(;N.length;)N.pop()();y=!1,b.clear(),f(t)}function D(t){if(t.fragment!==null){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const m=new Set;let F;function G(t,e){t&&t.i&&(m.delete(t),t.i(e))}function et(t,e,n,s){if(t&&t.o){if(m.has(t))return;m.add(t),F.c.push(()=>{m.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function nt(t){t&&t.c()}function H(t,e,n,s){const{fragment:o,on_mount:p,on_destroy:a,after_update:g}=t.$$;o&&o.m(e,n),s||x(()=>{const c=p.map(A).filter(L);a?a.push(...c):l(c),t.$$.on_mount=[]}),g.forEach(x)}function I(t,e){const n=t.$$;n.fragment!==null&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(i.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(t,e,n,s,o,p,a,g=[-1]){const c=$;f(t);const r=t.$$={fragment:null,ctx:null,props:p,update:j,not_equal:o,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:S(),dirty:g,skip_bound:!1,root:e.target||c.$$.root};a&&a(r.root);let w=!1;if(r.ctx=n?n(t,e.props||{},(u,E,...v)=>{const k=v.length?v[0]:E;return r.ctx&&o(r.ctx[u],r.ctx[u]=k)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](k),w&&J(t,u)),E}):[],r.update(),w=!0,l(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const u=M(e.target);r.fragment&&r.fragment.l(u),u.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),O()}f(c)}class st{$destroy(){I(this,1),this.$destroy=j}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!T(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{st as S,Z as a,U as b,R as c,B as d,V as e,tt as f,W as g,X as h,rt as i,Q as j,C as k,Y as l,nt as m,j as n,H as o,G as p,et as q,I as r,K as s,q as t};
