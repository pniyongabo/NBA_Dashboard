(this["webpackJsonpnba-dashboard"]=this["webpackJsonpnba-dashboard"]||[]).push([[0],{223:function(e,t,a){},225:function(e,t,a){},404:function(e,t,a){},405:function(e,t,a){},406:function(e,t,a){},407:function(e,t,a){},414:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){},451:function(e,t,a){},454:function(e,t,a){"use strict";a.r(t);var s=a(3),n=a(2),r=a.n(n),c=a(34),i=a.n(c),l=(a(223),a(87)),o=a(10),d=a.n(o),j=a(21),h=a(13),p=a(14),b=a(16),u=a(15),m=(a(225),a(462)),x=a(461),f=a(42),O=a(11),g=function(e){var t=e.active,a=e.payload,n=e.label,r=e.glossary,c=e.all_data,i=e.all_needed_stats,l=e.type,o=c.find((function(e){return e.fullName===n}));return t?Object(s.jsxs)("div",{className:"custom-tooltip",style:{backgroundColor:"#f5f5f5ee",padding:"10px",borderRadius:"5px"},children:[Object(s.jsxs)("h5",{className:"label",children:["".concat(n),Object(s.jsx)("img",{className:"img-fluid",src:o.logo,alt:"teamlogo",style:{width:70,height:"auto",marginLeft:"1rem"}})]}),"doublebar"===l?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"".concat(r[i[0]],": ").concat(a[0].value," ")}),Object(s.jsx)("p",{children:"".concat(r[i[1]],": ").concat(a[1].value," ")}),Object(s.jsx)("p",{children:"".concat(r[i[2]],": ").concat((100*o[i[2]]).toFixed(1),"% ")})]}):"bar"===l?Object(s.jsx)("div",{children:Object(s.jsx)("p",{children:"".concat(r[i],": ").concat(a[0].value," ")})}):"singlebar"===l?Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Win Percentage: ".concat((100*a[0].value).toFixed(1),"% ")}),Object(s.jsx)("p",{children:"Rank in Conference: ".concat(o.conference.rank," ")})]}):void 0]}):null};var v=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return function(e,t,a,n,r){if("doublebar"===n){var c=r.split(" ");return Object(s.jsx)(O.f,{width:"97%",height:600,children:Object(s.jsxs)(O.b,{data:t.team_stats,children:[Object(s.jsx)(O.h,{type:"category",interval:0,dataKey:"fullName",xAxisId:0,tickLine:!1,hide:!0}),Object(s.jsx)(O.h,{type:"category",dataKey:"fullName",xAxisId:1,tickLine:!1,hide:!0}),Object(s.jsx)(O.i,{interval:"preserveStartEnd"}),Object(s.jsx)(O.g,{content:Object(s.jsx)(g,{glossary:t.glossary,all_data:t.team_stats,all_needed_stats:c,type:n}),animationEasing:"ease-in-out"}),Object(s.jsx)(O.c,{}),Object(s.jsxs)(O.a,{dataKey:c[0],animationDuration:2e3,barSize:20,barGap:0,xAxisId:0,children:[t.team_stats.map((function(e,t){return Object(s.jsx)(O.d,{fill:Object(f.getMainColor)(e.shortName).hex,stroke:"black"},t)})),Object(s.jsx)(O.e,{dataKey:"shortName",position:"top"})]}),Object(s.jsx)(O.a,{dataKey:c[1],animationDuration:2e3,barSize:20,barGap:0,xAxisId:1,children:t.team_stats.map((function(e,t){return Object(s.jsx)(O.d,{fill:Object(f.getSecondaryColor)(e.shortName).hex,stroke:"black"},t)}))})]})})}return"bar"===n?Object(s.jsx)(O.f,{width:"97%",height:600,children:Object(s.jsxs)(O.b,{data:t.team_stats,children:[Object(s.jsx)(O.h,{type:"category",dataKey:"fullName",tickLine:!1,hide:!0}),Object(s.jsx)(O.i,{interval:"preserveStartEnd"}),Object(s.jsx)(O.c,{}),Object(s.jsx)(O.g,{content:Object(s.jsx)(g,{glossary:t.glossary,all_data:t.team_stats,all_needed_stats:r,type:n}),animationEasing:"ease-in-out"}),Object(s.jsxs)(O.a,{dataKey:r,animationDuration:2e3,children:[t.team_stats.map((function(e,t){return Object(s.jsx)(O.d,{fill:Object(f.getMainColor)(e.shortName).hex,stroke:Object(f.getSecondaryColor)(e.shortName).hex},t)})),Object(s.jsx)(O.e,{dataKey:"shortName"})]})]})}):"singlebar"===n?Object(s.jsx)(O.f,{width:"80%",height:500,children:Object(s.jsxs)(O.b,{data:t,children:[Object(s.jsx)(O.h,{type:"category",dataKey:"fullName",tickLine:!1,hide:!0}),Object(s.jsx)(O.i,{interval:"preserveStartEnd"}),Object(s.jsx)(O.c,{}),Object(s.jsx)(O.g,{content:Object(s.jsx)(g,{all_data:t,all_needed_stats:r,type:n}),animationEasing:"ease-in-out"}),Object(s.jsxs)(O.a,{dataKey:r,animationDuration:2e3,children:[t.map((function(e,t){return Object(s.jsx)(O.d,{fill:Object(f.getMainColor)(e.shortName).hex,stroke:Object(f.getSecondaryColor)(e.shortName).hex},t)})),Object(s.jsx)(O.e,{dataKey:"shortName"})]})]})}):void 0}(this.props.all_data,this.props.all_team_data,this.props.team_mappings,this.props.type_of_graph,this.props.stat_to_graph)}}]),a}(n.Component),y=(a(404),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).getLiveGames=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games/live",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.getTeamsMappings=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams/mappings",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.colorScore=function(e,t){return"win"===t?Object(s.jsx)("h3",{className:"text-success",style:{fontSize:"1.4vw",backgroundColor:"black",border:"2px solid gray"},children:e}):"lose"===t?Object(s.jsx)("h3",{className:"text-danger",style:{fontSize:"1.4vw",backgroundColor:"black",border:"2px solid gray"},children:e}):"tie"===t?Object(s.jsx)("h3",{className:"text-warning",style:{fontSize:"1.4vw",backgroundColor:"black",border:"2px solid gray"},children:e}):void 0},n.calcScores=function(e,t){var a=[];return e>t?(a.push(n.colorScore(e,"win")),a.push(n.colorScore(t,"lose"))):e<t?(a.push(n.colorScore(e,"lose")),a.push(n.colorScore(t,"win"))):(a.push(n.colorScore(e,"tie")),a.push(n.colorScore(t,"tie"))),a},n.load_data=function(){return Object(s.jsxs)("div",{className:"container live_games",id:"liveGames",children:[Object(s.jsxs)("div",{className:"row header",children:[Object(s.jsx)("div",{className:"col-6 ",children:Object(s.jsx)("h4",{style:{fontSize:"1.5vw"},children:"HOME"})}),Object(s.jsx)("div",{className:"col-6 ",children:Object(s.jsx)("h4",{style:{fontSize:"1.5vw"},children:"AWAY"})})]}),n.state.liveGames.api.games.map((function(e,t){var a=e.hTeam.teamId,r=e.vTeam.teamId,c=e.hTeam.score.points,i=e.vTeam.score.points,l=n.state.teamsMappings[a],o=n.state.teamsMappings[r],d=n.props.all_data.team_stats.find((function(e){return e.fullName===l})),j=n.props.all_data.team_stats.find((function(e){return e.fullName===o})),h=n.calcScores(c,i);return Object(s.jsxs)("div",{className:"single_game",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("img",{className:"img-fluid",src:d.logo,alt:l+" logo",width:"80px",height:"auto"})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("img",{className:"img-fluid",src:j.logo,alt:o+" logo",width:"80px",height:"auto"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("h4",{style:{fontSize:"1.1vw"},children:l})}),Object(s.jsx)("div",{className:"col-6",children:Object(s.jsx)("h4",{style:{fontSize:"1.1vw"},children:o})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-6",children:h[0]}),Object(s.jsx)("div",{className:"col-6",children:h[1]})]})]},t)}))]})},n.state={liveGamesLoaded:!1,teamsMappingsLoaded:!1,liveGames:{},teamsMappings:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getLiveGames().then((function(t){return e.setState({liveGames:t,liveGamesLoaded:!0})})).then(this.getTeamsMappings().then((function(t){return e.setState({teamsMappings:t,teamsMappingsLoaded:!0})}))).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.liveGamesLoaded&&this.state.teamsMappingsLoaded?Object(s.jsxs)("div",{className:"align-center live_box",children:[Object(s.jsxs)("h1",{style:{fontSize:"2vw"},children:["Live Games",Object(s.jsx)("nobr",{className:"reddot",children:"\ud83d\udd34"})]}),Object(s.jsx)("br",{}),this.load_data(this.state.data),Object(s.jsx)("p",{children:"*There are no live games in progress. This is a proof-of-concept of how it would look."})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading Live Games Data ..."})})}}]),a}(n.Component)),_=(a(405),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"sidebar ",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-2 menu_icon",children:"\u2630"})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/",children:"Home"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/teams",children:"Teams"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/players",children:"Players"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/standings",children:"Standings"})})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/schedules",children:"Schedules"})})]})]})}}]),a}(n.Component)),N=(a(406),a.p+"static/media/basketball_logo_t.0697bb24.png"),k=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"title",children:Object(s.jsxs)("div",{className:"jumbotron",children:[Object(s.jsx)("img",{className:"d-inline-block img-fluid logo",src:N,alt:"logo",height:"auto",width:"13%"}),Object(s.jsx)("h1",{className:"d-inline-block display-2 title_text",children:"NBA DASHBOARD"})]})})}}]),a}(n.Component);a(407);a(408).config();var w=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-sm-6 ",children:Object(s.jsx)(y,{all_data:this.props.all_data})}),Object(s.jsx)("div",{className:"col-xl-9 col-lg-9 col-md-11 col-sm-11",children:Object(s.jsxs)(m.a,{className:"tabs",defaultActiveKey:"ppg",id:"uncontrolled-tab-example",children:[Object(s.jsx)(x.a,{className:"tab",eventKey:"ppg",title:"Points Per Game",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"PPG"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"fg",title:"Field Goals",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"doublebar",stat_to_graph:"FGA FGM FG%"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"3p",title:"Three Pointers",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"doublebar",stat_to_graph:"3PA 3PM 3P%"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"ft",title:"Free Throws",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"doublebar",stat_to_graph:"FTA FTM FT%"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"apg",title:"Assists Per Game",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"APG"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"bpg",title:"Blocks Per Game",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"BPG"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"orb",title:"Offensive Rebounds",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"ORB"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"drb",title:"Defensive Rebounds",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"DRB"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"pf",title:"Personal Fouls",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"PF"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"gp",title:"Games Played",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"GP"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"rpg",title:"Rebounds Per Game",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"RPG"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"spg",title:"Steals Per Game",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"SPG"})}),Object(s.jsx)(x.a,{className:"tab",eventKey:"tov",title:"Turnovers",children:Object(s.jsx)(v,{all_team_data:this.props.all_data,type_of_graph:"bar",stat_to_graph:"TOV"})})]})}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)(_,{})})]})]})}}]),a}(n.Component),L=a(35),G=(a(414),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).load_data=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:n.state.data.api.teams.map((function(e,t){return"1"===e.nbaFranchise&&"Home"!==e.city&&"Away"!==e.city?Object(s.jsx)("div",{children:Object(s.jsx)(L.b,{to:{pathname:"/teams/teamId/"+e.teamId,state:{data:e}},className:"team_link",children:Object(s.jsxs)("div",{className:"team_choice ",children:[Object(s.jsx)("img",{className:"img-fluid team_logo",src:e.logo,alt:e.fullName+" logo",width:130,height:"auto"}),Object(s.jsx)("div",{className:"team_text",children:e.fullName})]})})},t):null}))})})},n.state={isLoaded:!1,data:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api-nba-v1.p.rapidapi.com/teams/league/standard",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}}).then((function(e){return e.json()})).then((function(t){e.setState({data:t,isLoaded:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){return this.state.isLoaded?Object(s.jsxs)("div",{className:"align-center",children:[Object(s.jsx)(k,{}),Object(s.jsx)("h1",{children:"NBA Teams"}),this.load_data(this.state.data),Object(s.jsx)(_,{})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading teams data ..."})})}}]),a}(n.Component)),M=a(190),P=(a(442),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getAllPlayers=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-nba-v1.p.rapidapi.com/players/league/standard",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}throw Error(a.message);case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),s.getTeamsMappings=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams/mappings",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),s.goToPlayerPage=function(e){window.location.assign("/players/playerId/"+e)},s.load_data=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.api.players.length),a=t.api.players.map((function(e,t){var a={},n=e.firstName+" "+e.lastName;return a.id=e.playerId,a.name=n,a.team=s.state.teamsMappings[e.teamId],a.college=e.collegeName,a.joined=e.startNba,a.birthdate=e.dateOfBirth,a.weight=e.weightInKilograms,a.height=e.heightInMeters,a.clickEvent=function(){return s.goToPlayerPage(e.playerId)},a})),n={columns:[{label:"Id",field:"id",sort:"asc"},{label:"Player Name",field:"name",sort:"asc"},{label:"Current Team",field:"team",sort:"asc"},{label:"College Team",field:"college",sort:"asc"},{label:"Joined NBA",field:"joined",sort:"asc"},{label:"Date of Birth",field:"birthdate",sort:"asc"},{label:"Weight (kg)",field:"weight",sort:"asc"},{label:"Height (m)",field:"height",sort:"asc"}],rows:a},e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.state={isLoaded:!1,teamsMappingsLoaded:!1,data:{},teamsMappings:{}},s}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getAllPlayers().then((function(t){return e.load_data(t).then((function(t){return e.setState({data:t,isLoaded:!0})}))})).then(this.getTeamsMappings().then((function(t){return e.setState({teamsMappings:t,teamsMappingsLoaded:!0})}))).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.isLoaded&&this.state.teamsMappingsLoaded?Object(s.jsxs)("div",{className:"align-center",children:[Object(s.jsx)(k,{}),Object(s.jsx)("h1",{children:"NBA Players"}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:Object(s.jsx)(M.c,{striped:!0,bordered:!0,responsive:!0,data:this.state.data})})}),Object(s.jsx)(_,{})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading players data ..."})})}}]),a}(n.Component)),T=(a(443),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).getPlayerDetails=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-nba-v1.p.rapidapi.com/players/playerId/"+t,{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(s=e.sent,200===a.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getTeamsMappings=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams/mappings",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.load_data=function(){var e="https://nba-players.herokuapp.com/players/"+n.state.playerDetails.lastName+"/"+n.state.playerDetails.firstName,t="Headshot image of Nba Player "+n.state.playerDetails.firstName+" "+n.state.playerDetails.lastName;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:e,alt:t})}),Object(s.jsxs)("div",{className:"player-info",children:[Object(s.jsxs)("h1",{children:[n.state.playerDetails.firstName," ",n.state.playerDetails.lastName]}),Object(s.jsxs)("h5",{children:[n.state.teamsMappings[n.state.playerDetails.teamId]," | No. ",n.state.playerDetails.leagues.standard.jersey]}),Object(s.jsxs)("h6",{children:["Weight (kg): ",n.state.playerDetails.weightInKilograms]}),Object(s.jsxs)("h6",{children:["Height (m): ",n.state.playerDetails.heightInMeters]}),Object(s.jsxs)("h6",{children:["Birthdate: ",n.state.playerDetails.dateOfBirth]}),Object(s.jsxs)("h6",{children:["College Team: ",n.state.playerDetails.collegeName]}),Object(s.jsxs)("h6",{children:["Affiliation: ",n.state.playerDetails.affiliation]}),Object(s.jsxs)("h6",{children:["Position: ",n.state.playerDetails.leagues.standard.position]})]})]})},n.state={playerDetailsLoaded:!1,teamsMappingsLoaded:!1,playerDetails:{},teamsMappings:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getPlayerDetails(this.props.match.params.id).then((function(t){return e.setState({playerDetails:t.api.players[0],playerDetailsLoaded:!0})})).then(this.getTeamsMappings().then((function(t){return e.setState({teamsMappings:t,teamsMappingsLoaded:!0})}))).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.playerDetailsLoaded&&this.state.teamsMappingsLoaded?Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{}),Object(s.jsxs)("div",{className:"align-center",children:[this.load_data(this.state.data),Object(s.jsx)(_,{})]})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading player details data ..."})})}}]),a}(n.Component)),S=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).getStandings=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api-nba-v1.p.rapidapi.com/standings/standard/2019",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.getTeamsMappings=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/teams/mappings",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,200===t.status){e.next=8;break}return e.abrupt("return",{});case 8:return e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),n.load_data=function(e){var t=e.sort((function(e,t){return parseInt(e.conference.rank)>parseInt(t.conference.rank)?1:-1}));return t.forEach((function(e){var t=n.props.all_data.team_stats.find((function(t){return t.teamId===e.teamId}));if(void 0!==t)for(var a in t)e[a]=t[a]})),Object(s.jsx)(v,{all_team_data:t,type_of_graph:"singlebar",stat_to_graph:"winPercentage"})},n.state={teamsMappingsLoaded:!1,standingsLoaded:!1,standingsWest:{},standingsEast:{},teamsMappings:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getStandings().then((function(t){return e.setState({standingsEast:t.api.standings.filter((function(e){return"east"===e.conference.name})),standingsWest:t.api.standings.filter((function(e){return"west"===e.conference.name})),standingsLoaded:!0})})).then(this.getTeamsMappings().then((function(t){return e.setState({teamsMappings:t,teamsMappingsLoaded:!0})}))).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.teamsMappingsLoaded&&this.state.standingsLoaded?Object(s.jsxs)("div",{className:"align-center",children:[Object(s.jsx)(k,{}),Object(s.jsx)("h1",{children:"Standings"}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",children:[Object(s.jsx)("h3",{children:"East Conference Standings"}),this.load_data(this.state.standingsEast)]}),Object(s.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6",children:[Object(s.jsx)("h3",{children:"West Conference Standings"}),this.load_data(this.state.standingsWest)]})]}),Object(s.jsx)(_,{})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading Live Games Data ..."})})}}]),a}(n.Component),D=(a(444),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).load_data=function(){return Object(s.jsxs)("table",{className:"large-tables table table-responsive",id:"schedules",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Game"}),Object(s.jsx)("th",{children:"Status"}),Object(s.jsx)("th",{children:"Date"}),Object(s.jsx)("th",{children:"Arena"}),Object(s.jsx)("th",{children:"City"})]})}),Object(s.jsx)("tbody",{children:n.state.data.api.games.map((function(e,t){var a=e.hTeam.shortName,n=e.vTeam.shortName,r=e.hTeam.score.points,c=e.vTeam.score.points,i=new Intl.DateTimeFormat([],{timeZone:"America/Los_Angeles",year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}).format(new Date(e.startTimeUTC));return"Scheduled"===e.statusGame?Object(s.jsxs)("tr",{className:"scheduled",children:[Object(s.jsxs)("td",{children:[n," ",c," - ",r," ",a]}),Object(s.jsx)("td",{children:e.statusGame}),Object(s.jsx)("td",{children:i}),Object(s.jsx)("td",{children:e.arena}),Object(s.jsx)("td",{children:e.city})]},t):Object(s.jsxs)("tr",{className:"finished",children:[Object(s.jsxs)("td",{children:[n," ",c," - ",r," ",a]}),Object(s.jsx)("td",{children:e.statusGame}),Object(s.jsx)("td",{children:i}),Object(s.jsx)("td",{children:e.arena}),Object(s.jsx)("td",{children:e.city})]},t)}))})]})},n.state={isLoaded:!1,data:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api-nba-v1.p.rapidapi.com/games/league/standard/2019",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({data:t,isLoaded:!0})})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){return this.state.isLoaded?Object(s.jsxs)("div",{className:"align-center",children:[Object(s.jsx)(k,{}),Object(s.jsx)("h1",{children:"Schedules and Results"}),Object(s.jsx)("div",{class:"row justify-content-center",children:Object(s.jsx)("div",{class:"col-auto",style:{maxWidth:"90%"},children:this.load_data(this.state.data)})}),Object(s.jsx)(_,{})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading schedules and results ..."})})}}]),a}(n.Component)),C=a(189),A=(a(451),function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).getTeamData=function(e){var t=n.props.all_data;console.log(t);var a={},s=[0,0,0,0,0,0,0,0];return t.team_stats.forEach((function(n){if(s[0]+=parseFloat(n.GP),s[1]+=parseFloat(n.MPG),s[2]+=parseFloat(n.FGM),s[3]+=parseFloat(n["3PM"]),s[4]+=parseFloat(n.PF),s[5]+=parseFloat(n.RPG),s[6]+=parseFloat(n.APG),s[7]+=parseFloat(n.PPG),n.city===e){var r=[n.GP,n.MPG,n.FGM,n["3PM"],n.PF,n.RPG,n.APG,n.PPG],c=[t.glossary.GP,t.glossary.MPG,t.glossary.FGM,t.glossary["3PM"],t.glossary.PF,t.glossary.RPG,t.glossary.APG,t.glossary.PPG];a.teamMetrics=r,a.labels=c}})),console.log(s),a.averageMetrics=s.map((function(e){return(e/t.team_stats.length).toFixed(2)})),console.log(a),a},n.load_graph=function(){var e=n.getTeamData(n.state.team.city),t={datasets:[{data:e.averageMetrics,backgroundColor:"rgba(220,220,220,0.2)",pointBackgroundColor:"rgba(220,220,220,1)",borderColor:"rgba(1220,220,220,0.5)",pointHighlightStroke:"rgba(220,220,220,1)",label:"Avg NBA Team"},{data:e.teamMetrics,backgroundColor:"rgba(9,112,84,0.2)",pointBackgroundColor:"rgba(9,112,84,1)",borderColor:"rgba(9,112,84,0.5)",pointHighlightStroke:"rgba(9,112,84,1)",label:n.state.team.fullName}],labels:e.labels};return Object(s.jsx)(C.Radar,{data:t,options:{legend:{position:"top"},title:{display:!0,text:"Team Stats"},scale:{reverse:!1,gridLines:{color:["black","red","orange","yellow","green","blue","indigo","violet"]},ticks:{beginAtZero:!0}}}})},n.load_data=function(){var e="Logo image of "+n.state.team.fullName;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{className:"team-logo",src:n.state.team.logo,alt:e})}),Object(s.jsxs)("div",{className:"team-info",children:[Object(s.jsx)("h1",{children:n.state.team.fullName}),Object(s.jsxs)("h5",{children:["Abbreviation: ",n.state.team.shortName]}),Object(s.jsxs)("h5",{children:["Nickname: ",n.state.team.nickname]}),Object(s.jsxs)("h5",{children:["Conference: ",n.state.team.leagues.standard.confName]}),Object(s.jsxs)("h5",{children:["Divison: ",n.state.team.leagues.standard.divName]})]})]})},n.state={isLoaded:!1,team:{}},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.setState({team:this.props.location.state.data,isLoaded:!0})}},{key:"render",value:function(){return this.state.isLoaded?Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{}),Object(s.jsx)("div",{className:"align-center",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-4",children:this.load_data(this.state.data)}),Object(s.jsx)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-8",children:this.load_graph(this.props.allData)})]})}),Object(s.jsx)(_,{})]}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading player data ..."})})}}]),a}(n.Component)),F=(a(452),a(19)),E=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).state={isLoaded:!1,data:{}},s}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(j.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/team_stats").then((function(e){return e.json()})).then((function(t){t.team_stats.sort((function(e,t){var a=0;return e.Team>t.Team?a=1:e.Team<t.Team&&(a=-1),a})),e.setState({isLoaded:!1,data:t})})).catch((function(e){return console.log("Request failed",e)}));case 2:return t.next=4,fetch("https://api-nba-v1.p.rapidapi.com/teams/league/standard",{method:"GET",headers:{"x-rapidapi-host":"api-nba-v1.p.rapidapi.com","x-rapidapi-key":"8b2149cc68msh08d9b47aaf62b17p1ffe9djsne14d6f09430a"}}).then((function(e){return e.json()})).then((function(t){var a=e.state.data;t.api.teams.forEach((function(e){var t=a.team_stats.find((function(t){return t.Team===e.city||("L.A. Clippers"===t.Team&&"LA"===e.city||"L.A. Lakers"===t.Team&&"Los Angeles"===e.city)}));if(void 0!==t)for(var s in e)t[s]=e[s]})),e.setState({isLoaded:!0,data:a})}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this;return this.state.isLoaded?Object(s.jsx)(L.a,{children:Object(s.jsxs)(F.d,{children:[Object(s.jsx)(F.b,{path:"/",exact:!0,render:function(t){return Object(s.jsx)(w,{all_data:e.state.data})}}),Object(s.jsx)(F.b,{path:"/teams",exact:!0,render:function(e){return Object(s.jsx)(G,{})}}),Object(s.jsx)(F.b,{path:"/teams/teamId/:id",exact:!0,render:function(t){return Object(s.jsx)(A,Object(l.a)(Object(l.a)({},t),{},{all_data:e.state.data}))}}),Object(s.jsx)(F.b,{path:"/players",exact:!0,render:function(e){return Object(s.jsx)(P,{})}}),Object(s.jsx)(F.b,{path:"/players/playerId/:id",exact:!0,render:function(e){return Object(s.jsx)(T,Object(l.a)({},e))}}),Object(s.jsx)(F.b,{path:"/live",exact:!0,render:function(e){return Object(s.jsx)(y,{})}}),Object(s.jsx)(F.b,{path:"/standings",exact:!0,render:function(t){return Object(s.jsx)(S,{all_data:e.state.data})}}),Object(s.jsx)(F.b,{path:"/schedules",exact:!0,render:function(e){return Object(s.jsx)(D,{})}}),Object(s.jsx)(F.b,{render:function(){return Object(s.jsx)(F.a,{to:"/"})}})]})}):Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"Loading..."})})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,463)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),I()}},[[454,1,2]]]);
//# sourceMappingURL=main.6cc48dd3.chunk.js.map