(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){"use strict";var n=a(11),l=a(12),o=a(15),r=a(13),c=a(16),i=a(2),u=a.n(i),s=a(63),m=a(64),d=a(65),h=a(66),b=a(67),w=a(69),f=a(68),E=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"_getAlbumInfo",value:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(s.a,null,u.a.createElement(m.a,null,u.a.createElement("h4",null,"Album ID #",e.id)),u.a.createElement("img",{src:e.thumbnailUrl}),u.a.createElement(d.a,null,u.a.createElement(h.a,{className:"h4"},e.title),u.a.createElement("hr",null),u.a.createElement(b.a,{className:"blockquote"}," ","Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class"),u.a.createElement(w.a,{color:"dark",onClick:this.props.onHideClick},"hide")),u.a.createElement(f.a,null,e.url)))}},{key:"render",value:function(){var e=this.props.rowInfo;return u.a.createElement(u.a.Fragment,null,this._getAlbumInfo(e))}}]),t}(i.Component);t.a=E},34:function(e,t,a){e.exports=a(62)},39:function(e,t,a){},40:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),o=a(28),r=a.n(o),c=(a(39),a(11)),i=a(12),u=a(15),s=a(13),m=a(7),d=a(16),h=a(70),b=a(71),w=a(72),f=a(73),E=(a(40),a(29)),p=a.n(E),g=a(31),k=a(0),v=a(27),y=Object(n.lazy)(function(){return Promise.all([a.e(3),a.e(4)]).then(a.bind(null,104))}),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={showAlbumInfo:!0,rowInfo:{id:0,title:"Some Title",thumbnailUrl:"https://via.placeholder.com/150/66b7d2",url:"www.foysalahmed.net"}},a._showAlbumInfo=a._showAlbumInfo.bind(Object(m.a)(a)),a._onHideClick=a._onHideClick.bind(Object(m.a)(a)),a._rowClickHandler=a._rowClickHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"_showAlbumInfo",value:function(){return this.state.showAlbumInfo&&l.a.createElement(v.a,Object.assign({},this.state,{onHideClick:this._onHideClick}))}},{key:"_onHideClick",value:function(){return this.setState({showAlbumInfo:!1})}},{key:"_rowClickHandler",value:function(e){console.log("from APP, Rowinfo",e),this.setState({rowInfo:e.original,showAlbumInfo:!0})}},{key:"_getLoader",value:function(){return l.a.createElement("div",null,l.a.createElement(h.a,{type:"grow",color:"primary"}),l.a.createElement(h.a,{type:"grow",color:"secondary"}),l.a.createElement(h.a,{type:"grow",color:"success"}),l.a.createElement(h.a,{type:"grow",color:"danger"}),l.a.createElement(h.a,{type:"grow",color:"warning"}),l.a.createElement(h.a,{type:"grow",color:"info"}),l.a.createElement(h.a,{type:"grow",color:"light"}),l.a.createElement(h.a,{type:"grow",color:"dark"}))}},{key:"_getBackToTopButton",value:function(){return l.a.createElement(p.a,{showAt:100,speed:1500,easing:"easeInOutQuint"},l.a.createElement(k.b.Provider,{value:{color:"#444444"}},l.a.createElement(g.a,null)))}},{key:"_getFooter",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("hr",null),"Powered by Foysal Ahemd Emon")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(b.a,{className:"container-class"},l.a.createElement(w.a,null,l.a.createElement(f.a,{sm:12},l.a.createElement("h1",{className:"heading"},"Latest Albums")),l.a.createElement(f.a,{sm:8},l.a.createElement(n.Suspense,{fallback:this._getLoader()},l.a.createElement(y,Object.assign({},this.state,{_rowClickHandler:function(t){return e._rowClickHandler(t)}})))),l.a.createElement(f.a,{sm:4},this._showAlbumInfo())),this._getBackToTopButton(),this._getFooter()))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61);r.a.render(l.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.cc53c333.chunk.js.map