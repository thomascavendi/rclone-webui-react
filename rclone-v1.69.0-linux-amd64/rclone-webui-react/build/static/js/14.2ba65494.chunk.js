(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[14,21],{276:function(e,a,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(a,"a",(function(){return n}))},285:function(e,a,t){"use strict";var n=t(5),s=t(6),c=t(0),r=t.n(c),o=t(3),i=t.n(o),l=t(34),u=t.n(l),p=t(26),d=["className","cssModule","tag"],f={tag:p.q,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=Object(s.a)(e,d),i=Object(p.m)(u()(a,"input-group-text"),t);return r.a.createElement(c,Object(n.a)({},o,{className:i}))};b.propTypes=f,b.defaultProps={tag:"span"},a.a=b},288:function(e,a,t){"use strict";var n=t(5),s=t(6),c=t(276),r=t(13),o=t(0),i=t.n(o),l=t(3),u=t.n(l),p=t(34),d=t.n(p),f=t(26),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,r=e.bsSize,o=e.valid,l=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,g=e.innerRef,h=Object(s.a)(e,b),v=["radio","checkbox"].indexOf(c)>-1,y=new RegExp("\\D","g"),j=u||("select"===c||"textarea"===c?c:"input"),N="form-control";m?(N+="-plaintext",j=u||"input"):"file"===c?N+="-file":"range"===c?N+="-range":v&&(N=p?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var O=Object(f.m)(d()(a,l&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===j||u&&"function"===typeof u)&&(h.type=c),h.children&&!m&&"select"!==c&&"string"===typeof j&&"select"!==j&&(Object(f.t)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(j,Object(n.a)({},h,{ref:g,className:O,"aria-invalid":l}))},a}(i.a.Component);g.propTypes=m,g.defaultProps={type:"text"},a.a=g},296:function(e,a,t){"use strict";var n=t(5),s=t(6),c=t(276),r=t(13),o=t(0),i=t.n(o),l=t(3),u=t.n(l),p=t(34),d=t.n(p),f=t(26),b=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],c=e.block,r=e.className,o=e.close,l=e.cssModule,u=e.color,p=e.outline,m=e.size,g=e.tag,h=e.innerRef,v=Object(s.a)(e,b);o&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var y="btn"+(p?"-outline":"")+"-"+u,j=Object(f.m)(d()(r,{close:o},o||"btn",o||y,!!m&&"btn-"+m,!!c&&"btn-block",{active:a,disabled:this.props.disabled}),l);v.href&&"button"===g&&(g="a");var N=o?"Close":null;return i.a.createElement(g,Object(n.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:j,ref:h,onClick:this.onClick,"aria-label":t||N}))},a}(i.a.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},a.a=g},320:function(e,a,t){"use strict";var n=t(5),s=t(6),c=t(0),r=t.n(c),o=t(3),i=t.n(o),l=t(34),u=t.n(l),p=t(26),d=["className","cssModule","tag","size"],f={tag:p.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},b=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.size,i=Object(s.a)(e,d),l=Object(p.m)(u()(a,"input-group",o?"input-group-"+o:null),t);return r.a.createElement(c,Object(n.a)({},i,{className:l}))};b.propTypes=f,b.defaultProps={tag:"div"},a.a=b},321:function(e,a,t){"use strict";var n=t(5),s=t(6),c=t(0),r=t.n(c),o=t(3),i=t.n(o),l=t(34),u=t.n(l),p=t(26),d=t(285),f=["className","cssModule","tag","addonType","children"],b={tag:p.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,o=e.addonType,i=e.children,l=Object(s.a)(e,f),b=Object(p.m)(u()(a,"input-group-"+o),t);return"string"===typeof i?r.a.createElement(c,Object(n.a)({},l,{className:b}),r.a.createElement(d.a,{children:i})):r.a.createElement(c,Object(n.a)({},l,{className:b,children:i}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},644:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(272),r=t(62),o=t(43),i=t(320),l=t(321),u=t(285),p=t(288),d=t(296);class f extends n.Component{render(){return s.a.createElement("div",{className:"app flex-row align-items-center"},s.a.createElement(c.a,null,s.a.createElement(r.a,{className:"justify-content-center"},s.a.createElement(o.a,{md:"6"},s.a.createElement("div",{className:"clearfix"},s.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),s.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),s.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),s.a.createElement(i.a,{className:"input-prepend"},s.a.createElement(l.a,{addonType:"prepend"},s.a.createElement(u.a,null,s.a.createElement("i",{className:"fa fa-search"}))),s.a.createElement(p.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),s.a.createElement(l.a,{addonType:"append"},s.a.createElement(d.a,{color:"info"},"Search")))))))}}a.default=f}}]);
//# sourceMappingURL=14.2ba65494.chunk.js.map