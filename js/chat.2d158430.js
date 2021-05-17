(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chat"],{"0f3f":function(e,n,t){},"14c3":function(e,n,t){"use strict";t("c8f0")},"293a":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"main"},[t("modal-register",{attrs:{msg:e.message}}),e.isLogged?t("div",{staticClass:"logged"},[t("div",{attrs:{id:"chats"}},[t("h2",[e._v("Chats")]),t("table",{attrs:{id:"chatList"}},e._l(e.orderBy(e.rooms,"timestamp"),(function(n){return t("tr",{key:n.id,class:[n.owner.id===e.me.id?"owner":""]},[t("td",[e._v(e._s(n.name))]),t("td",[e.selected!==n.id?t("button",{attrs:{id:"enterChat"},on:{click:function(t){return e.enter(n)}}},[e._v(" Enter ")]):e._e()])])})),0)]),t("hr"),e.isSelected?t("ChatComponent",{attrs:{room:e.current,me:e.me},on:{exit:e.exit}}):e._e(),t("hr"),t("div",{attrs:{id:"create"}},[t("h2",[e._v("Create")]),t("ul",{attrs:{type:"none"}},[t("li",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.chatName,expression:"chatName"}],attrs:{placeholder:"Your chat name"},domProps:{value:e.chatName},on:{input:function(n){n.target.composing||(e.chatName=n.target.value)}}})]),t("li",[t("button",{on:{click:e.create}},[e._v("Create")])])])])],1):t("div",{attrs:{id:"alter"}},[t("h1",[e._v("Seems empty? 😕")]),t("h2",[e._v("Login first or create an account to start chatting.")])])],1)},a=[],o=t("1da1"),i=(t("96cf"),t("d3b7"),t("3ca3"),t("ddb0"),t("a434"),t("c9d1")),s=t("4868"),c=t("a7c6"),u=t.n(c),d={name:"Chats",beforeRouteLeave:function(e,n,t){console.log(e,n),""!==this.current&&this.exit(),t()},components:{ChatComponent:function(){return t.e("chunk-a119560a").then(t.bind(null,"a4a2"))},ModalRegister:i["a"]},props:["is-logged"],data:function(){return{rooms:[],username:"",me:"",message:"",selected:0,current:"",chatName:"",chatsOpened:!1}},mixins:[u.a.mixin],computed:{isSelected:function(){return 0!==this.selected}},apollo:{rooms:{query:s["e"]},me:{query:s["h"]},$subscribe:{roomCreated:{query:s["m"],result:function(e){var n=e.data,t=n.roomCreated;this.rooms.push(t)}},roomUpdated:{query:s["o"],result:function(e){var n=e.data,t=n.roomUpdated;for(var r in this.rooms)parseInt(r.id)===parseInt(t.id)&&(r=t)}},roomDeleted:{query:s["n"],result:function(e){var n=e.data,t=n.roomDeleted;for(var r in this.rooms)if(parseInt(r.id)===parseInt(t.id)){var a=this.rooms.indexOf(r.id);this.rooms.splice(a,1)}}}}},methods:{create:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$apollo.mutate({mutation:s["a"],variables:{name:e.chatName}});case 2:t=n.sent,console.log(t),e.chatName="";case 5:case"end":return n.stop()}}),n)})))()},enter:function(e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.$apollo.mutate({mutation:s["f"],variables:{id:e.id}});case 3:r=t.sent,n.current=r.data.joinRoom,n.selected=e.id,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),n.message=t.t0,n.$modal.show("notif");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},exit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$apollo.mutate({mutation:s["d"]});case 3:t=n.sent,console.log(t),console.log(e.$children),e.current="",e.selected=0,n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),e.message=n.t0,e.$modal.show("notif");case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}},m=d,f=(t("14c3"),t("2877")),l=Object(f["a"])(m,r,a,!1,null,null,null);n["default"]=l.exports},4868:function(e,n,t){"use strict";t.d(n,"l",(function(){return $})),t.d(n,"g",(function(){return y})),t.d(n,"r",(function(){return R})),t.d(n,"a",(function(){return C})),t.d(n,"q",(function(){return _})),t.d(n,"c",(function(){return k})),t.d(n,"e",(function(){return D})),t.d(n,"h",(function(){return E})),t.d(n,"m",(function(){return S})),t.d(n,"o",(function(){return I})),t.d(n,"n",(function(){return M})),t.d(n,"k",(function(){return q})),t.d(n,"b",(function(){return N})),t.d(n,"i",(function(){return L})),t.d(n,"j",(function(){return U})),t.d(n,"f",(function(){return z})),t.d(n,"d",(function(){return A})),t.d(n,"p",(function(){return J}));t("fb6a"),t("dca8");function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var a,o,i,s,c,u,d,m,f,l,p,b,h,g,v,w,j,x,O=t("5184"),$=Object(O["a"])(a||(a=r(["query Register($username: String!, $password: String!) {\n    register(username: $username, password: $password) {\n        id,\n        username\n    }\n}"]))),y=Object(O["a"])(o||(o=r(["query Login($username: String!, $password: String!) {\n    login(username: $username, password: $password)      \n}"]))),R=Object(O["a"])(i||(i=r(["query Exist($username: String!){\n    usernameExists(username: $username)      \n}"]))),C=Object(O["a"])(s||(s=r(["mutation Create($name: String!){\n    createRoom(name: $name){\n        name\n        owner{\n            id\n        }\n    }      \n}"]))),_=Object(O["a"])(c||(c=r(["mutation Update($id: ID!, $name: String!){\n    updateRoom(id: $id, name: $name){\n        name\n    }      \n}"]))),k=Object(O["a"])(u||(u=r(["mutation Delete($id: ID!){\n    deleteRoom(id: $id){\n        id\n        name\n    }      \n}"]))),D=Object(O["a"])(d||(d=r(["query Rooms{\n    rooms {\n        id\n        name\n        owner{\n            id\n        }\n    }   \n}"]))),E=Object(O["a"])(m||(m=r(["query Me{\n    me{\n        id\n    }\n}"]))),S=Object(O["a"])(f||(f=r(["subscription RoomCreated{\n    roomCreated {\n        id\n        name\n        owner{\n            id\n        }\n    }   \n}"]))),I=Object(O["a"])(l||(l=r(["subscription RoomUpdated{\n    roomUpdated {\n        id\n        name\n        owner{\n            id\n        }\n    }   \n}"]))),M=Object(O["a"])(p||(p=r(["subscription RoomDeleted{\n    roomDeleted {\n        id\n        name\n        owner{\n            id\n        }\n    }   \n}"]))),q=Object(O["a"])(b||(b=r(["subscription MessageCreated{\n    messageCreated {\n        id\n        text\n        timestamp\n        room{\n            id\n        }\n        author{\n            id\n            username\n        }\n    }   \n}"]))),N=Object(O["a"])(h||(h=r(["subscription CurrentRoomChanhed{\n    currentRoomChanged {\n        id\n        username\n    }   \n}"]))),L=Object(O["a"])(g||(g=r(["subscription MemberJoined{\n    memberJoined {\n        id\n        username\n    }   \n}"]))),U=Object(O["a"])(v||(v=r(["subscription MemberLeft{\n    memberLeft {\n        id\n    }   \n}"]))),z=Object(O["a"])(w||(w=r(["mutation Join($id: ID!){\n    joinRoom(roomId: $id) {\n        id\n        name\n        owner{\n            id\n        }\n        members{\n            username\n            id\n        }\n        lastMessages{\n            text\n            timestamp\n            author{\n              username\n              id\n            }\n        }\n        \n    }   \n}"]))),A=Object(O["a"])(j||(j=r(["mutation Exit{\n    leaveCurrentRoom{\n      name\n    }\n  }"]))),J=Object(O["a"])(x||(x=r(["mutation Send($message: String!){\n    createMessage(text: $message){\n        id\n        text\n    }\n}"])))},a434:function(e,n,t){"use strict";var r=t("23e7"),a=t("23cb"),o=t("a691"),i=t("50c4"),s=t("7b0b"),c=t("65f0"),u=t("8418"),d=t("1dde"),m=d("splice"),f=Math.max,l=Math.min,p=9007199254740991,b="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m},{splice:function(e,n){var t,r,d,m,h,g,v=s(this),w=i(v.length),j=a(e,w),x=arguments.length;if(0===x?t=r=0:1===x?(t=0,r=w-j):(t=x-2,r=l(f(o(n),0),w-j)),w+t-r>p)throw TypeError(b);for(d=c(v,r),m=0;m<r;m++)h=j+m,h in v&&u(d,m,v[h]);if(d.length=r,t<r){for(m=j;m<w-r;m++)h=m+r,g=m+t,h in v?v[g]=v[h]:delete v[g];for(m=w;m>w-r+t;m--)delete v[m-1]}else if(t>r)for(m=w-r;m>j;m--)h=m+r-1,g=m+t-1,h in v?v[g]=v[h]:delete v[g];for(m=0;m<t;m++)v[m+j]=arguments[m+2];return v.length=w-r+t,d}})},bb2f:function(e,n,t){var r=t("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c8f0:function(e,n,t){},c9d1:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("modal",{attrs:{id:"modal",name:"notif"}},[t("p",[e._v(e._s(e.msg))])])},a=[],o={name:"ModalRegister",props:["msg"]},i=o,s=(t("d2d3"),t("2877")),c=Object(s["a"])(i,r,a,!1,null,"949227f2",null);n["a"]=c.exports},d2d3:function(e,n,t){"use strict";t("0f3f")},dca8:function(e,n,t){var r=t("23e7"),a=t("bb2f"),o=t("d039"),i=t("861d"),s=t("f183").onFreeze,c=Object.freeze,u=o((function(){c(1)}));r({target:"Object",stat:!0,forced:u,sham:!a},{freeze:function(e){return c&&i(e)?c(s(e)):e}})},f183:function(e,n,t){var r=t("d012"),a=t("861d"),o=t("5135"),i=t("9bf2").f,s=t("90e3"),c=t("bb2f"),u=s("meta"),d=0,m=Object.isExtensible||function(){return!0},f=function(e){i(e,u,{value:{objectID:"O"+ ++d,weakData:{}}})},l=function(e,n){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,u)){if(!m(e))return"F";if(!n)return"E";f(e)}return e[u].objectID},p=function(e,n){if(!o(e,u)){if(!m(e))return!0;if(!n)return!1;f(e)}return e[u].weakData},b=function(e){return c&&h.REQUIRED&&m(e)&&!o(e,u)&&f(e),e},h=e.exports={REQUIRED:!1,fastKey:l,getWeakData:p,onFreeze:b};r[u]=!0},fb6a:function(e,n,t){"use strict";var r=t("23e7"),a=t("861d"),o=t("e8b5"),i=t("23cb"),s=t("50c4"),c=t("fc6a"),u=t("8418"),d=t("b622"),m=t("1dde"),f=m("slice"),l=d("species"),p=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!f},{slice:function(e,n){var t,r,d,m=c(this),f=s(m.length),h=i(e,f),g=i(void 0===n?f:n,f);if(o(m)&&(t=m.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)?a(t)&&(t=t[l],null===t&&(t=void 0)):t=void 0,t===Array||void 0===t))return p.call(m,h,g);for(r=new(void 0===t?Array:t)(b(g-h,0)),d=0;h<g;h++,d++)h in m&&u(r,d,m[h]);return r.length=d,r}})}}]);
//# sourceMappingURL=chat.2d158430.js.map