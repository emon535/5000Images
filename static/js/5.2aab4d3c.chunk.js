(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{73:function(e,t,n){},74:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(13),o=n(16),r=n(15),s=n(14),c=n(17),l=n(1),u=n.n(l),d=n(95),m=(n(72),n(96)),p=(n(73),n(97)),h=n(100),f=(n(74),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={hideme:!1},n._getAlbumInfo=n._getAlbumInfo.bind(Object(s.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"_getAlbumInfo",value:function(e){return u.a.createElement(m.a,{className:"album-info-wrapper"},u.a.createElement(p.a,{className:"album-jum"},u.a.createElement("p",{className:"hide-button"},u.a.createElement(h.a,{color:"dark",onClick:this.props.onHideClick},"hide")),u.a.createElement("h1",{className:"display-1"},"#",e.id),u.a.createElement("img",{src:e.thumbnailUrl}),u.a.createElement("h3",{className:"display-4"},e.title),u.a.createElement("p",{className:"lead"},"Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien."),u.a.createElement("hr",{className:"my-2"}),e.url))}},{key:"render",value:function(){var e=this.props.rowInfo;return console.log(this.props),u.a.createElement(u.a.Fragment,null,this._getAlbumInfo(e))}}]),t}(l.Component)),b=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={showAlbumInfo:!1,selected:null,rowInfo:null,rowEdit:null,selectionChanged:!1,columns:[{id:"id",Header:function(e){return u.a.createElement("span",null,"ID")},accessor:function(e){return e.id},width:80},{id:"image",Header:function(e){return u.a.createElement("span",null,"Photo")},accessor:function(e){return u.a.createElement("div",null,u.a.createElement("img",{className:"images",height:30,src:e.thumbnailUrl}))},width:120},{id:"name",Header:"Name",accessor:function(e){return e.title.toUpperCase()},width:400},{id:"code",Header:"Code",accessor:function(e){return" Color Code = #"+e.url.toUpperCase().slice(32,100)},width:180},{id:"description",Header:"URL",accessor:function(e){return e.url},width:250}],pageSizeOptions:[100,250,500,1e3,5e3],defaultResized:[100,100,10,1]},n._onRowClick=n._onRowClick.bind(Object(s.a)(n)),n.onHideClick=n.onHideClick.bind(Object(s.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"_showAlbumInfo",value:function(){var e=this;return this.state.showAlbumInfo&&u.a.createElement(f,{rowInfo:this.state.rowInfo,onHideClick:function(){return e.onHideClick()}})}},{key:"onHideClick",value:function(){return this.setState({showAlbumInfo:!1})}},{key:"_onRowClick",value:function(e,t,n){this.setState({selected:n.index,showAlbumInfo:!0,rowInfo:n.original}),console.log(n,e,t,n.original.url,n.original.id)}},{key:"render",value:function(){var e=this;return console.log(this.props),console.log("from view ",this.props.data),u.a.createElement(u.a.Fragment,null,this._showAlbumInfo(),u.a.createElement(m.a,{className:"container-class"},u.a.createElement(d.a,{className:"-striped -highlight",resizable:!0,defaultResized:this.state.defaultResized,showPageJump:!0,defaultPageSize:50,data:this.props.data,columns:this.state.columns,pageSizeOptions:this.state.pageSizeOptions,getTrProps:function(t,n){return n&&n.row?{onClick:function(t,a){console.log("inside"),e._onRowClick(t,a,n),n.index!=e.state.rowEdit?e.setState({rowEdit:n.index,selectedRowIndex:n.original,selectionChanged:!e.state.selectionChanged}):e.setState({rowEdit:null}),console.log(n.index),console.log(e.state.rowEdit)},style:{background:n.index===e.state.rowEdit?"silver":"#9e9e9e",color:(n.index,e.state.rowEdit,"white")}}:{}}})))}}]),t}(l.Component),g=n(63),w=n.n(g),v={base_url:"",api_base_url:"https://jsonplaceholder.typicode.com/photos"},E=function e(){Object(a.a)(this,e)};E.initInterceptor=function(){w.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),w.a.interceptors.response.use(function(e){return e},function(e){if(!e.response||401!==e.response.status)return Promise.reject(e);window.location.href=v.unauthorizedUrl})},E.get=function(e,t){return t?w.a.get(e,t):w.a.get(e)},E.post=function(e,t,n){if(!t)throw new Error("Error: Post data not provided for "+e);return n?w.a.post(e,t,n):w.a.post(e,t)},E.initInterceptor();var j=E,k=function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"getRequiredData",value:function(){return j.get("https://jsonplaceholder.typicode.com/photos").then(function(e){return e.data})}}]),e}(),O=function(e){function t(e){var n;return Object(a.a)(this,t),n=Object(o.a)(this,Object(r.a)(t).call(this,e)),console.log("From DataTable",n.props.data),n.state={data:[]},n.DataService=new k,n.getData=n.getData.bind(Object(s.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;this.DataService.getRequiredData().then(function(t){console.log("Getting Data"),e.setState({data:t}),console.log("Updated Data",e.state.data)})}},{key:"render",value:function(){return u.a.createElement(b,this.state)}}]),t}(l.Component);t.default=O}}]);
//# sourceMappingURL=5.2aab4d3c.chunk.js.map