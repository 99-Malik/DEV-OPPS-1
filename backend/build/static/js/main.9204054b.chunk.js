(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{37:function(e,t,a){e.exports=a(70)},42:function(e,t,a){},61:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(32),i=a.n(c),s=(a(42),a(14)),o=a(15),r=(a(43),a(44),a(5)),u=a(6),h=a(8),d=a(7),m=a(9),p=a(13),b=a.n(p),v=(a(61),a(2)),g=a(36),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(v.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(v.a)(a)),a.onChangeTime=a.onChangeTime.bind(Object(v.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(v.a)(a)),a.onSubmit=a.onSubmit.bind(Object(v.a)(a)),a.state={schedule_title:"",schedule_date:"",schedule_time:"",schedule_description:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onChangeTitle",value:function(e){this.setState({schedule_title:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({schedule_date:e.target.value})}},{key:"onChangeTime",value:function(e){this.setState({schedule_time:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({schedule_description:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;b.a.get("/scheduler/"+this.props.match.params.id).then((function(t){e.setState({_id:t.data._id,title:t.data.title,date:t.data.date,time:t.data.time,description:t.data.description})})).catch((function(e){console.log(e)}))}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Button clicked"),this.setState({schedule_title:"",schedule_date:"",schedule_time:"",schedule_description:""});var t={title:this.state.schedule_title,date:this.state.schedule_date,time:this.state.schedule_time,description:this.state.schedule_description};b.a.put("/scheduler/"+this.state._id,t).then((function(e){return console.log(e.data)}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{margin:20}},l.a.createElement("h3",null,"Edit ",this.state.title," Schedule"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.schedule_title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",required:!0,className:"form-control",value:this.state.schedule_date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Time:"),l.a.createElement("input",{type:"time",className:"form-control",required:!0,value:this.state.schedule_time,onChange:this.onChangeTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.schedule_description,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Schedule",className:"btn btn-dark"}))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).DeleteSchedule=e.DeleteSchedule.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"DeleteSchedule",value:function(e){console.log("Delete Clicked "+this.props.schedule._id),b.a.delete("/scheduler/"+this.props.schedule._id).then().catch()}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.schedule.title),l.a.createElement("td",null,this.props.schedule.date),l.a.createElement("td",null,this.props.schedule.time),l.a.createElement("td",null,this.props.schedule.description),l.a.createElement("td",null,l.a.createElement(g.a,{variant:"danger",onClick:this.DeleteSchedule,className:"btn btn-primary"},"Delete")),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/edit/"+this.props.schedule._id+"/"+this.props.schedule.title,className:"btn btn-primary"},"Edit")," "))}}]),t}(l.a.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return this.props.mySchedules.map((function(e){return console.log({schedule:e}),l.a.createElement(f,{key:e._id,schedule:e})}))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={scheduler:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/scheduler").then((function(t){e.setState({scheduler:t.data.scheduler})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",{style:{textAlign:"center"}},"Schedules"),l.a.createElement("table",{className:"table table-striped table-hover",style:{marginTop:20}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{fontStyle:"italic"}},"Title"),l.a.createElement("th",{style:{fontStyle:"italic"}},"Date"),l.a.createElement("th",{style:{fontStyle:"italic"}},"Time"),l.a.createElement("th",{style:{fontStyle:"italic"}},"Description"),l.a.createElement("th",{style:{fontStyle:"italic"}},"Delete"),l.a.createElement("th",{style:{fontStyle:"italic"}},"Edit"))),l.a.createElement("tbody",null,l.a.createElement(y,{mySchedules:this.state.scheduler}))))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Welcome Tasks"))}}]),t}(n.Component),S=(a(67),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).onChangeDate=a.onChangeDate.bind(Object(v.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(v.a)(a)),a.onChangeTime=a.onChangeTime.bind(Object(v.a)(a)),a.onChangeTitle=a.onChangeTitle.bind(Object(v.a)(a)),a.onSubmit=a.onSubmit.bind(Object(v.a)(a)),a.state={schedule_title:"",schedule_date:"",schedule_time:"",schedule_description:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"date",value:function(){Date().toString()}},{key:"onChangeTitle",value:function(e){this.setState({schedule_title:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({schedule_date:e.target.value})}},{key:"onChangeTime",value:function(e){this.setState({schedule_time:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({schedule_description:e.target.value})}},{key:"onSubmit",value:function(e){alert(this.state.schedule_title+"   "+this.state.schedule_date+"   "+this.state.schedule_time+"   "+this.state.schedule_description),e.preventDefault(),console.log("Form submitted:"),console.log("Title: ".concat(this.state.schedule_title)),console.log("Date:".concat(this.state.schedule_date)),console.log("Time: ".concat(this.state.schedule_time)),console.log("Description: ".concat(this.state.schedule_description));var t={title:this.state.schedule_title,date:this.state.schedule_date,time:this.state.schedule_time,description:this.state.schedule_description};b.a.post("/scheduler",t).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),this.setState({schedule_title:"",schedule_date:"",schedule_time:"",schedule_description:""})}},{key:"render",value:function(){return l.a.createElement("div",{style:{margin:20}},l.a.createElement("h3",{style:{textAlign:"center"}},"Add New Schedule"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.schedule_title,onChange:this.onChangeTitle})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Date:"),l.a.createElement("br",null),l.a.createElement("input",{type:"date",id:"todayDate",required:!0,className:"form-control",value:this.state.schedule_date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Time:"),l.a.createElement("input",{type:"time",className:"form-control",required:!0,value:this.state.schedule_time,onChange:this.onChangeTime})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description:"),l.a.createElement("input",{type:"text",className:"form-control",value:this.state.schedule_description,onChange:this.onChangeDescription})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Schedule",className:"btn btn-dark"}))))}}]),t}(n.Component));var j=function(){return l.a.createElement(s.a,null,l.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-danger "},l.a.createElement(s.b,{to:"/",className:"navbar-brand mx-auto",style:{color:"white",fontStyle:"italic",fontSize:"2em"}},"Scheduler"),l.a.createElement("div",{className:"collpase navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement(s.b,{to:"/",className:"nav-link",style:{color:"White"}},"Home")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(s.b,{to:"/schedule",className:"nav-link",style:{color:"White"}},"Schedule")),l.a.createElement("li",{className:"navbar-item"},l.a.createElement(s.b,{to:"/edit/:id",className:"nav-link",style:{color:"White"}},"Edit"))))),l.a.createElement("nav",null,l.a.createElement("nav",{className:"navbar fixed-bottom navbar-light bg-danger mx-auto order-0"},l.a.createElement("a",{className:"navbar-brand mx-auto ",href:"/",style:{color:"white",fontStyle:"italic",fontSize:"2em"}},"Scheduler"))),l.a.createElement(o.a,{path:"/",exact:!0,component:_}),l.a.createElement(o.a,{path:"/tasks/:id",component:C}),l.a.createElement(o.a,{path:"/schedule",component:S}),l.a.createElement(o.a,{path:"/edit/:id",component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.9204054b.chunk.js.map