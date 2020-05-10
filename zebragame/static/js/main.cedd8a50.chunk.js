(this["webpackJsonpzebragame-client"]=this["webpackJsonpzebragame-client"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n,s=a(0),o=a.n(s),r=a(35),i=a.n(r),l=(a(100),a(101),a(17)),c=a.n(l),d=a(29),h=a(10),p=a(11),u=a(5),m=a(13),y=a(12),b=a(142),g=a(67),f=a(140),k=a(129),v=a(3),S=Object(v.p)({defaultFontStyle:{fontFamily:"Georgia, Times New Roman, Times, serif;"},palette:{themePrimary:"#920a22",themeLighterAlt:"#060001",themeLighter:"#170206",themeLight:"#2c030a",themeTertiary:"#570615",themeSecondary:"#80091f",themeDarkAlt:"#9c1931",themeDark:"#ac3249",themeDarker:"#c25d6f",neutralLighterAlt:"#0f230d",neutralLighter:"#142c12",neutralLight:"#1c3b1a",neutralQuaternaryAlt:"#224420",neutralQuaternary:"#274b25",neutralTertiaryAlt:"#406a3d",neutralTertiary:"#4d4329",neutralSecondary:"#998651",neutralPrimaryAlt:"#e0c477",neutralPrimary:"#ffdf87",neutralDark:"#ffe7a4",black:"#ffedbc",white:"#0a1a09"}}),E=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.handleAddUser=void 0,n.buttonStyles={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n.handleRoomCodeChange=n.handleRoomCodeChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleAddUser=e.AddUserHandler,n.state={roomcode:"",name:"",senderid:e.senderid},n}return Object(p.a)(a,[{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleRoomCodeChange",value:function(e){this.setState({roomcode:e.target.value})}},{key:"handleSubmit",value:function(){console.log(JSON.stringify(this.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/AddPlayer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}),this.handleAddUser(this.state.roomcode)}},{key:"render",value:function(){return o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement("div",null,"Name:"),o.a.createElement(f.a,{onChange:this.handleNameChange})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement("div",null,"Room Code:"),o.a.createElement(f.a,{onChange:this.handleRoomCodeChange})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:this.buttonStyles,onClick:this.handleSubmit,text:"Join Game",disabled:""===this.state.senderid||""===this.state.roomcode})))}}]),a}(o.a.Component);!function(e){e[e.WaitingToStart=0]="WaitingToStart",e[e.NotJoined=1]="NotJoined",e[e.Started=2]="Started"}(n||(n={}));var C=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"newGuid",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}}]),e}(),O=a(33),T=a(84),x={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},j=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,interactables:n.props.interactables,player:{},goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){}},{key:"handleInvestiagte",value:function(e){}},{key:"render",value:function(){var e,t=this;return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},"Select an item to investigate:"),null===(e=this.state.interactables)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(g.a,{styles:t.stackItemStyles,key:a},o.a.createElement(T.a,{styles:x,text:e,onClick:function(){console.log("pushed "+e),console.log(JSON.stringify(t.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/Investigate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:t.state.roomcode,senderid:t.state.senderid,interactable:e})}),t.state.goHome()}}))}))))}}]),a}(o.a.Component),I={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},w=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,connections:n.props.connections,player:{},goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this;return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},"Select an adjacent room to travel to:"),null===(e=this.state.connections)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(g.a,{styles:t.stackItemStyles,key:a},o.a.createElement(T.a,{styles:I,text:e,onClick:function(){console.log("pushed "+e),console.log(JSON.stringify(t.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/MoveLocation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:t.state.roomcode,senderid:t.state.senderid,location:e})}),t.state.goHome()}}))}))))}}]),a}(o.a.Component),N=(S.palette.black,S.palette.black,function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,clues:n.props.clues,player:n.props.player,goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=this;return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},"Clues:"),null===(e=this.state.clues)||void 0===e?void 0:e.map((function(e,a){return o.a.createElement(g.a,{styles:t.stackItemStyles,key:a},0==(null===e||void 0===e?void 0:e.ClueType)?o.a.createElement("div",null,"`$",null===e||void 0===e?void 0:e.Source,", $",null===e||void 0===e?void 0:e.Target,": X` "):o.a.createElement("div",null,"`$",null===e||void 0===e?void 0:e.Source,", $",null===e||void 0===e?void 0:e.Target,": \u2713`"))}))))}}]),a}(o.a.Component)),G={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},P=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.clueTypes=[{type:"Negative",price:3},{type:"Positive",price:12},{type:"Specific Negative",price:6},{type:"Specific Positive",price:15}],n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,player:n.props.player,goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},"Select a type of clue to buy:"),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:G,text:"".concat(this.clueTypes[0].type),onClick:function(){console.log("pushed "+e.clueTypes[0].type),console.log(JSON.stringify(e.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/BuyClue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:e.state.roomcode,senderid:e.state.senderid,cluetype:e.clueTypes[0].type})}),e.state.goHome()},disabled:this.state.player.influence<this.clueTypes[0].price})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:G,text:"".concat(this.clueTypes[1].type),onClick:function(){console.log("pushed "+e.clueTypes[1].type),console.log(JSON.stringify(e.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/BuyClue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:e.state.roomcode,senderid:e.state.senderid,cluetype:e.clueTypes[1].type})}),e.state.goHome()},disabled:this.state.player.influence<this.clueTypes[1].price})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:G,text:"".concat(this.clueTypes[2].type),onClick:function(){return e.props.history.push("/specificnegative")},disabled:this.state.player.influence<this.clueTypes[2].price})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:G,text:"".concat(this.clueTypes[3].type),onClick:function(){return e.props.history.push("/specificpositive")},disabled:this.state.player.influence<this.clueTypes[3].price}))))}}]),a}(o.a.Component),z=Object(O.f)(P),J={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},H=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,player:n.props.player,clueType:n.props.clueType,goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return console.log(e.state.player)}),5e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},"Select a type of clue to buy:"),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:J,text:"Weapon",onClick:function(){console.log("pushed Weapon"),console.log(JSON.stringify(e.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/BuyClue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:e.state.roomcode,senderid:e.state.senderid,cluetype:e.state.clueType,source:"na",sourceType:"Weapon"})}),e.state.goHome()}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:J,text:"Person",onClick:function(){console.log("pushed Weapon"),console.log(JSON.stringify(e.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/BuyClue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:e.state.roomcode,senderid:e.state.senderid,cluetype:e.state.clueType,source:"na",sourceType:"Person"})}),e.state.goHome()}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:J,text:"Location",onClick:function(){console.log("pushed Location"),console.log(JSON.stringify(e.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/BuyClue",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:e.state.roomcode,senderid:e.state.senderid,cluetype:e.state.clueType,source:"na",sourceType:"Location"})}),e.state.goHome()}}))))}}]),a}(o.a.Component),W=a(137),L=(S.palette.black,S.palette.black,function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=void 0,n.interval=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.getWeaponDropdown=function(){return n.state.Weapons.map((function(e){return{key:e,text:e}}))},n.getLocationDropdown=function(){return n.state.Locations.map((function(e){return{key:e,text:e}}))},n.changeWeapon=function(e){n.setState({finalWeapon:e.target.value})},n.changeLocation=function(e){n.setState({finalLocation:e.target.value})},n.buttonStyles={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},n.stackTokens={childrenGap:20},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,player:n.props.player,Weapons:n.props.Weapons,Locations:n.props.Locations,finalLocation:"",finalWeapon:"",goHome:n.props.goHome},n}return Object(p.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){}},{key:"handleInvestiagte",value:function(e){}},{key:"finalSubmit",value:function(){console.log(JSON.stringify(this.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/FinalGuess",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({roomcode:this.state.roomcode,senderid:this.state.senderid,person:this.state.player.target,weapon:this.state.finalWeapon,location:this.state.finalLocation})}),this.state.goHome()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement("h2",null,"Select the weapon and location where ",this.state.player.target," was killed:")),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(W.a,{options:this.getWeaponDropdown(),placeholder:"Weapon",onChange:this.changeWeapon})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(W.a,{options:this.getLocationDropdown(),placeholder:"Location",onChange:this.changeLocation})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:this.buttonStyles,text:"Submit",onClick:this.finalSubmit}))))}}]),a}(o.a.Component)),D={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},F=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).endTurn=Object(d.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("turn ended"),e.next=3,fetch("https://zebra-game-serverless.azurewebsites.net/api/EndTurn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderid:n.state.senderid,roomcode:n.state.roomcode})});case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),n.getInteractables=Object(d.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetInteractables?roomcode=".concat(n.state.roomcode,"&senderid=").concat(n.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.text();case 6:a=e.sent,console.log(a),s=JSON.parse("".concat(a)),n.setState({interactables:s});case 10:case"end":return e.stop()}}),e)}))),n.getConnections=Object(d.a)(c.a.mark((function e(){var t,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetConnections?roomcode=".concat(n.state.roomcode,"&senderid=").concat(n.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.text();case 6:a=e.sent,console.log(a),s=JSON.parse("".concat(a)),n.setState({connections:s});case 10:case"end":return e.stop()}}),e)}))),n.getBigThree=Object(d.a)(c.a.mark((function e(){var t,a,s,o,r,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetWeapons?roomcode=".concat(n.state.roomcode,"&senderid=").concat(n.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:t=e.sent;case 3:if(!t.ok){e.next=0;break}case 4:return e.next=6,t.text();case 6:a=e.sent,console.log(a),s=JSON.parse("".concat(a)),n.setState({Weapons:s});case 10:return e.next=12,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetLocations?roomcode=".concat(n.state.roomcode,"&senderid=").concat(n.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 12:o=e.sent;case 13:if(!o.ok){e.next=10;break}case 14:return e.next=16,o.text();case 16:r=e.sent,console.log(r),s=JSON.parse("".concat(r)),n.setState({Locations:s});case 20:return e.next=22,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetPeople?roomcode=".concat(n.state.roomcode,"&senderid=").concat(n.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 22:i=e.sent;case 23:if(!i.ok){e.next=20;break}case 24:return e.next=26,i.text();case 26:l=e.sent,console.log(l),s=JSON.parse("".concat(l)),n.setState({People:s});case 30:case"end":return e.stop()}}),e)}))),n.flipSpin=void 0,n.goHome=function(){n.flipSpin(),n.props.history.push("/"),setTimeout(n.flipSpin,2e3)},n.intervalInteractable=void 0,n.intervalConnections=void 0,n.stackStyles={root:{background:S.palette.themeDark,fontFamily:"Georgia"}},n.stackItemStyles={root:{background:S.palette.white,color:S.palette.black,padding:5,fontFamily:"Georgia"}},n.stackItemStylesText={root:{background:S.palette.white,color:S.palette.black,fontFamily:"Georgia"}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.flipSpin=n.props.flipSpin,n.state={roomcode:n.props.roomcode,senderid:n.props.senderid,player:n.props.player,interactables:[],connections:[],Weapons:[],People:[],Locations:[]},n}return Object(p.a)(a,[{key:"handleSubmit",value:function(e){fetch("https://example.com/profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)})}},{key:"componentDidMount",value:function(){this.getInteractables(),this.getConnections(),this.getBigThree(),this.intervalInteractable=setInterval(this.getInteractables,5e3),this.intervalConnections=setInterval(this.getConnections,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalInteractable),this.intervalInteractable=null,clearInterval(this.intervalConnections),this.intervalConnections=null}},{key:"render",value:function(){var e,t,a,n,s=this;return o.a.createElement("div",null,o.a.createElement(b.a,null,o.a.createElement(g.a,null,"Name: ",null===(e=this.state.player)||void 0===e?void 0:e.Name),o.a.createElement(g.a,null,"Roomcode: ",this.state.roomcode),o.a.createElement(g.a,null,"Location: ",null===(t=this.state.player)||void 0===t?void 0:t.Location),o.a.createElement(g.a,null,"Influence: ",null===(a=this.state.player)||void 0===a?void 0:a.influence)),o.a.createElement(O.c,null,o.a.createElement(O.a,{path:"/clues"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(N,{roomcode:this.state.roomcode,senderid:this.state.senderid,clues:null===(n=this.state.player)||void 0===n?void 0:n.CluesGiven,player:this.state.player,goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/target"},o.a.createElement(g.a,{styles:this.stackItemStylesText},o.a.createElement("h2",null,"Your Target is:")),o.a.createElement(g.a,{styles:this.stackItemStylesText},o.a.createElement("h2",null,this.state.player.target)),o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/move"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(w,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,connections:this.state.connections,goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/investigate"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(j,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,interactables:this.state.interactables,goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/specificnegative"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(H,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,clueType:"SpecificNegative",goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/investigate")}})))),o.a.createElement(O.a,{path:"/specificpositive"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(H,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,clueType:"SpecificPositive",goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/investigate")}})))),o.a.createElement(O.a,{path:"/buy"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(z,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/final"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(L,{roomcode:this.state.roomcode,senderid:this.state.senderid,player:this.state.player,Weapons:this.state.Weapons,Locations:this.state.Locations,goHome:this.goHome})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"Go Back",onClick:function(){return s.props.history.push("/")}})))),o.a.createElement(O.a,{path:"/"},o.a.createElement(b.a,{styles:this.stackStyles},o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Check Clues",onClick:function(){return s.props.history.push("/clues")}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Check Target",onClick:function(){return s.props.history.push("/target")}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Move Rooms",onClick:function(){return s.props.history.push("/move")}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Investigate",onClick:function(){return s.props.history.push("/investigate")}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Buy a Clue",onClick:function(){return s.props.history.push("/buy")}})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(k.a,{styles:D,text:"End Turn",onClick:this.endTurn})),o.a.createElement(g.a,{styles:this.stackItemStyles},o.a.createElement(T.a,{styles:D,text:"Final Guess",onClick:function(){return s.props.history.push("/final")}}))))))}}]),a}(o.a.Component),A=Object(O.f)(F),B=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).interval=void 0,n.state=void 0,n.switchToStarted=void 0,n.buttonStyles={root:{width:200,borderColor:S.palette.black,color:S.palette.black}},n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.state={roomcode:e.roomcode,senderid:e.senderid,sent:!1},n.switchToStarted=e.switchToStarted,n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(Object(d.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://zebra-game-serverless.azurewebsites.net/api/IsGameStarted?roomcode=".concat(e.state.roomcode),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return a=t.sent,t.next=5,a.text();case 5:"MainTurn"==t.sent&&e.switchToStarted();case 7:case"end":return t.stop()}}),t)}))),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),this.interval=null}},{key:"handleSubmit",value:function(){console.log(JSON.stringify(this.state)),fetch("https://zebra-game-serverless.azurewebsites.net/api/StartGame",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderid:this.state.senderid,roomcode:this.state.roomcode})}),this.setState({sent:!0})}},{key:"render",value:function(){return o.a.createElement(k.a,{styles:this.buttonStyles,text:"Everyone ready to begin?",onClick:this.handleSubmit,disabled:this.state.sent})}}]),a}(o.a.Component),M=a(145),U=a(27),R=function(e){Object(m.a)(a,e);var t=Object(y.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={roomcode:"",name:"",senderid:C.newGuid().toString(),signInState:n.NotJoined,spinning:!1,player:{}},s.getPlayer=Object(d.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=s.state.roomcode.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://zebra-game-serverless.azurewebsites.net/api/GetPlayer?roomcode=".concat(s.state.roomcode,"&senderid=").concat(s.state.senderid),{method:"GET",headers:{"Content-Type":"application/json"}});case 4:if(!(t=e.sent).ok){e.next=14;break}return e.next=8,t.text();case 8:a=e.sent,console.log(a),console.log("gotplayerfromloop"),n=JSON.parse("".concat(a)),s.setState({player:n}),s.forceUpdate();case 14:case"end":return e.stop()}}),e)}))),s.intervalPlayer=void 0,s.flipSpin=function(){s.setState({spinning:!s.state.spinning}),s.getPlayer(),console.log("spin: "+s.state.spinning)},s.handleAddUser=s.handleAddUser.bind(Object(u.a)(s)),s.switchToStarted=s.switchToStarted.bind(Object(u.a)(s)),s}return Object(p.a)(a,[{key:"handleAddUser",value:function(e){this.setState({signInState:n.WaitingToStart,roomcode:e})}},{key:"switchToStarted",value:function(){this.setState({signInState:n.Started})}},{key:"componentDidMount",value:function(){this.getPlayer(),this.intervalPlayer=setInterval(this.getPlayer,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalPlayer),this.intervalPlayer=null}},{key:"render",value:function(){return o.a.createElement("div",{className:"LandingPage"},this.state.signInState===n.Started?this.state.spinning?o.a.createElement(M.a,{size:U.a.large,style:{position:"absolute",top:"50%",left:"45%"}}):o.a.createElement(A,{roomcode:this.state.roomcode,senderid:this.state.senderid,flipSpin:this.flipSpin,player:this.state.player}):this.state.signInState===n.WaitingToStart?o.a.createElement(B,{senderid:this.state.senderid,roomcode:this.state.roomcode,switchToStarted:this.switchToStarted}):o.a.createElement(E,{AddUserHandler:this.handleAddUser,senderid:this.state.senderid}))}}]),a}(o.a.Component),$=a(49),Q=a(83);S.palette.white,S.palette.themePrimary,S.palette.white;var X=function(){return Object(v.z)(S),Object(Q.a)(),o.a.createElement("div",{className:"App",style:{background:S.palette.white}},o.a.createElement("header",{className:"App-header",style:{color:S.palette.black}},o.a.createElement("h1",null,"The Murders at Withering Hill"),o.a.createElement($.a,null,o.a.createElement(R,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(107)}},[[95,1,2]]]);
//# sourceMappingURL=main.cedd8a50.chunk.js.map