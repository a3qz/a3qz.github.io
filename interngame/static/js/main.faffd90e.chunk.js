(this.webpackJsonprushin=this.webpackJsonprushin||[]).push([[0],{79:function(t,e,n){},81:function(t,e,n){},99:function(t,e,n){"use strict";n.r(e);var s,c=n(4),i=n(1),a=n.n(i),r=n(31),o=n.n(r),u=(n(79),n(63)),l=n(41),d=n.n(l),h=n(49),b=n(14),j=n(15),p=n(25),O=n(17),g=n(16),m=(n(81),["Angostura Bitters","Coke","Egg White","Gin","Ice Cube","Lemon Juice","Lime Wedge ","Mint","Orange Juice","Shake Drink","Simple Syrup","Stir Drink","Tequila","Triple Sec","Vermouth","Whiskey"]),f=n(136),k=n(44),v=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s;return Object(b.a)(this,n),(s=e.call(this,t)).styles={root:{padding:5}},s}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsxs)(f.a,{children:["Glass Contents:",this.props.contents.map((function(e,n){return Object(c.jsx)(k.a,{styles:t.styles,children:e},n)}))]})}}]),n}(a.a.Component),x=n(135),C=n(62),y=n(132),L=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s;return Object(b.a)(this,n),(s=e.call(this,t)).styles={root:{padding:5}},s}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{horizontal:!0,children:this.props.list.map((function(e,n){return t.props.disabledList.includes(n)?"":Object(c.jsx)(k.a,{styles:t.styles,children:Object(c.jsx)(y.a,{onClick:function(){t.props.updateParent(n),console.log(t.props.disabledList,n)},hidden:t.props.disabledList.includes(n),disabled:t.props.selected==n,children:n})},n)}))})})}}]),n}(a.a.Component),S=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s;return Object(b.a)(this,n),(s=e.call(this,t)).styles={root:{padding:5}},s}return Object(j.a)(n,[{key:"render",value:function(){var t=this;return Object(c.jsx)("div",{children:Object(c.jsx)(f.a,{children:this.props.list.map((function(e,n){return Object(c.jsx)(k.a,{styles:t.styles,children:Object(c.jsx)(y.a,{onClick:function(){t.props.submitAction(e)},children:m[e]})},n)}))})})}}]),n}(a.a.Component),N=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var s;return Object(b.a)(this,n),(s=e.call(this,t)).state={selectedTarget:0},s.change=s.change.bind(Object(p.a)(s)),s}return Object(j.a)(n,[{key:"change",value:function(t){this.setState({selectedTarget:t})}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Target Cups:"}),Object(c.jsx)(L,{list:this.props.targetsList,disabledList:this.props.targetsDisabledList,updateParent:function(e){return t.change(e)},selected:this.state.selectedTarget}),Object(c.jsx)("label",{children:"Actions:"}),Object(c.jsx)(S,{list:this.props.actionsList,submitAction:function(e){return t.props.actionFunction(e,t.props.targetsDisabledList.includes(t.state.selectedTarget)?-1:t.state.selectedTarget)}})]})}}]),n}(a.a.Component),w=n(43),A=n(61);!function(t){t[t.Unassigned=0]="Unassigned",t[t.Assigned=1]="Assigned",t[t.Started=2]="Started",t[t.Resulted=3]="Resulted"}(s||(s={}));var T=function(t){Object(O.a)(n,t);var e=Object(g.a)(n);function n(t){var c;Object(b.a)(this,n),c=e.call(this,t);A.parse(window.location.search).room;var i=(new w.a).withUrl("https://schittalkin.azurewebsites.net/whiterushin/").configureLogging(w.b.Information).build();return c.state={hubConnection:i,glassContents:[],playerCount:0,actions:[],roundNumber:-1,cupNumber:-1,phase:s.Unassigned,results:[],teamName:"",cupLocks:[],resultsList:[],blockJoin:!1},c.componentDidMount.bind(Object(p.a)(c)),c.renderGame.bind(Object(p.a)(c)),console.log(i),c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.state.hubConnection.start();case 2:this.setupHub(this.state.hubConnection);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"reset",value:function(){this.setState({glassContents:[],results:[],cupLocks:[]})}},{key:"setupHub",value:function(t){var e=this;t.on("Assign",(function(t,n,s,c){console.log("cup: ".concat(t," actions: ").concat(n," playercount: ").concat(s," round number: ").concat(c)),e.setState({playerCount:s,roundNumber:c,cupNumber:t,actions:n})})),t.on("Start",(function(){console.log("started"),e.setState({phase:s.Started}),e.reset()})),t.on("UpdateCupState",(function(t){console.log("CupState: ".concat(t)),e.setState({glassContents:t})})),t.on("Result",(function(t){for(var n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*(n+1)),i=[t[c],t[n]];t[n]=i[0],t[c]=i[1]}e.setState({phase:s.Resulted,results:t})})),t.on("LockCup",(function(t){console.log("Locked ".concat(t)),e.setState({cupLocks:e.state.cupLocks.concat([t])}),console.log(e.state.cupLocks)}))}},{key:"renderGame",value:function(){var t=this;switch(this.state.phase){case s.Unassigned:return Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{placeholder:"Team Name",onChange:function(e,n){t.setState({teamName:null!==n&&void 0!==n?n:""})}}),Object(c.jsx)(C.a,{onClick:function(){console.log(t.state.teamName),t.state.hubConnection.invoke("Register",t.state.teamName),t.setState({blockJoin:!0})},text:"Join Game",disabled:this.state.blockJoin}),this.state.blockJoin?"Waiting for other bartenders":""]});case s.Assigned:return Object(c.jsx)("div",{children:"Please wait for the other bartenders to arrive"});case s.Started:return Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{children:["You are cup # ",this.state.cupNumber]}),Object(c.jsx)(N,{targetsList:Object(u.a)(Array(this.state.playerCount).keys()),targetsDisabledList:this.state.cupLocks,actionsList:this.state.actions,actionFunction:function(e,n){return t.state.hubConnection.invoke("SendAction",e,n)}}),Object(c.jsx)(v,{contents:this.state.glassContents.map((function(t){return m[t]}))}),Object(c.jsx)(y.a,{text:"Empty glass",disabled:this.state.cupLocks.includes(this.state.cupNumber),onClick:function(){return t.state.hubConnection.invoke("EmptyCup")}}),Object(c.jsx)(C.a,{text:"Serve Drink",disabled:this.state.cupLocks.includes(this.state.cupNumber),onClick:function(){t.state.hubConnection.invoke("SubmitCup")}})]});case s.Resulted:return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Customer comments"}),this.state.results.map((function(t){t})),Object(c.jsxs)("h2",{children:["Number of correctly made drinks that no one wanted [X]: ",this.state.results[2]]}),Object(c.jsxs)("h2",{children:["Number of correctly made drinks in the wrong cup [*]: ",this.state.results[1]]}),Object(c.jsxs)("h2",{children:["Number of correctly made drinks in the right cup [!]: ",this.state.results[0]]}),Object(c.jsxs)("h2",{children:["Number of things that didn't resemble a drink [?]: ",this.state.results[3]]}),Object(c.jsx)("br",{}),Object(c.jsx)(y.a,{text:"Reset",onClick:function(){console.log(t.state.hubConnection),t.state.hubConnection.invoke("Reset")}})]})}}},{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("title",{children:"White Rushin"}),this.renderGame()]})})}}]),n}(a.a.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,140)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),s(t),c(t),i(t),a(t)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(T,{})}),document.getElementById("root")),D()}},[[99,1,2]]]);
//# sourceMappingURL=main.faffd90e.chunk.js.map