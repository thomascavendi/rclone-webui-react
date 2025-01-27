(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[15,21],{276:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},285:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),c=t.n(r),i=t(3),l=t.n(i),o=t(34),u=t.n(o),p=t(26),d=["className","cssModule","tag"],f={tag:p.q,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=Object(s.a)(e,d),l=Object(p.m)(u()(a,"input-group-text"),t);return c.a.createElement(r,Object(n.a)({},i,{className:l}))};b.propTypes=f,b.defaultProps={tag:"span"},a.a=b},288:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(276),c=t(13),i=t(0),l=t.n(i),o=t(3),u=t.n(o),p=t(34),d=t.n(p),f=t(26),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,g=e.innerRef,h=Object(s.a)(e,b),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),j=u||("select"===r||"textarea"===r?r:"input"),N="form-control";m?(N+="-plaintext",j=u||"input"):"file"===r?N+="-file":"range"===r?N+="-range":v&&(N=p?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=h.size,delete h.size);var O=Object(f.m)(d()(a,o&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,N),t);return("input"===j||u&&"function"===typeof u)&&(h.type=r),h.children&&!m&&"select"!==r&&"string"===typeof j&&"select"!==j&&(Object(f.t)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(j,Object(n.a)({},h,{ref:g,className:O,"aria-invalid":o}))},a}(l.a.Component);g.propTypes=m,g.defaultProps={type:"text"},a.a=g},296:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(276),c=t(13),i=t(0),l=t.n(i),o=t(3),u=t.n(o),p=t(34),d=t.n(p),f=t(26),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],r=e.block,c=e.className,i=e.close,o=e.cssModule,u=e.color,p=e.outline,m=e.size,g=e.tag,h=e.innerRef,v=Object(s.a)(e,b);i&&"undefined"===typeof v.children&&(v.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(p?"-outline":"")+"-"+u,j=Object(f.m)(d()(c,{close:i},i||"btn",i||y,!!m&&"btn-"+m,!!r&&"btn-block",{active:a,disabled:this.props.disabled}),o);v.href&&"button"===g&&(g="a");var N=i?"Close":null;return l.a.createElement(g,Object(n.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:j,ref:h,onClick:this.onClick,"aria-label":t||N}))},a}(l.a.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},a.a=g},320:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),c=t.n(r),i=t(3),l=t.n(i),o=t(34),u=t.n(o),p=t(26),d=["className","cssModule","tag","size"],f={tag:p.q,size:l.a.string,className:l.a.string,cssModule:l.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.size,l=Object(s.a)(e,d),o=Object(p.m)(u()(a,"input-group",i?"input-group-"+i:null),t);return c.a.createElement(r,Object(n.a)({},l,{className:o}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},321:function(e,a,t){"use strict";var n=t(5),s=t(6),r=t(0),c=t.n(r),i=t(3),l=t.n(i),o=t(34),u=t.n(o),p=t(26),d=t(285),f=["className","cssModule","tag","addonType","children"],b={tag:p.q,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.addonType,l=e.children,o=Object(s.a)(e,f),b=Object(p.m)(u()(a,"input-group-"+i),t);return"string"===typeof l?c.a.createElement(r,Object(n.a)({},o,{className:b}),c.a.createElement(d.a,{children:l})):c.a.createElement(r,Object(n.a)({},o,{className:b,children:l}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},645:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(272),c=t(62),i=t(43),l=t(320),o=t(321),u=t(285),p=t(288),d=t(296);class f extends n.Component{render(){return s.a.createElement("div",{className:"app flex-row align-items-center"},s.a.createElement(r.a,null,s.a.createElement(c.a,{className:"justify-content-center"},s.a.createElement(i.a,{md:"6"},s.a.createElement("span",{className:"clearfix"},s.a.createElement("h1",{className:"float-left display-3 mr-4"},"500"),s.a.createElement("h4",{className:"pt-3"},"Houston, we have a problem!"),s.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for is temporarily unavailable.")),s.a.createElement(l.a,{className:"input-prepend"},s.a.createElement(o.a,{addonType:"prepend"},s.a.createElement(u.a,null,s.a.createElement("i",{className:"fa fa-search"}))),s.a.createElement(p.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),s.a.createElement(o.a,{addonType:"append"},s.a.createElement(d.a,{color:"info"},"Search")))))))}}a.default=f}}]);
//# sourceMappingURL=15.bf698c27.chunk.js.map