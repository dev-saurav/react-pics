(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),s=a.n(i),c=a(6),u=a.n(c),o=a(17),m=a(2),l=a(3),p=a(5),h=a(4),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{className:"ui form",onSubmit:this.onFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"ImageSearch"},"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component),v=(a(25),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.img,t=e.urls,a=e.description;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,src:t.regular,alt:a}))}}]),a}(r.a.Component));function g(e){var t=e.images.map((function(e){return r.a.createElement(v,{key:e.id,img:e})}));return r.a.createElement("div",{className:"image-list"},t)}var b=a(18),d=a.n(b).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 3pm33vS_CbL1702sCNe1_kUD5jS2xTXI0q2g_IJL1RM"}}),S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"10px"},className:"ui container"},r.a.createElement(f,{onSubmit:this.onSearchSubmit}),r.a.createElement("div",null,"Found: ",this.state.images.length," images."),r.a.createElement(g,{images:this.state.images}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.dcbbf078.chunk.js.map