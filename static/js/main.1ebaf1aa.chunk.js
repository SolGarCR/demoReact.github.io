(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(51)},27:function(e,a,t){},31:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=(t(27),t(5)),m=t(6),o=t(8),i=t(7),u=t(9),d=t(13),E=t(17),p=t.n(E),h=(t(31),t(18)),b=t(4),f=t.n(b),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,a=this.props.data.github,t=this.props.data.name,n=this.props.data.description;return l.a.createElement("header",{id:"home"},l.a.createElement(h.a,{type:"circle",bg:!0}),l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement(f.a,{bottom:!0},l.a.createElement("h1",{className:"responsive-headline"},t)),l.a.createElement(f.a,{bottom:!0,duration:1200},l.a.createElement("h3",null,n,".")),l.a.createElement("hr",null),l.a.createElement(f.a,{bottom:!0,duration:2e3},l.a.createElement("ul",{className:"social"},l.a.createElement("a",{href:e,className:"button btn project-btn"},l.a.createElement("i",{className:"fa fa-book"}),"Project"),l.a.createElement("a",{href:a,className:"button btn github-btn"},l.a.createElement("i",{className:"fa fa-github"}),"Github"))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement(f.a,{bottom:!0},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2021 Nordic Giant"),l.a.createElement("li",null,"Design by"," ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout"))))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.street,r=this.props.data.address.city,c=this.props.data.phone,s=this.props.data.email,m=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement(f.a,{duration:1e3},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Nosotr@s"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Nosotr@s"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Detalles"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,s))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:m,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Descargame"))))))))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getRandomColor",value:function(){for(var e="#",a=0;a<6;a++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var a=this.props.data.skillmessage,t=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),n=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}),r=this.props.data.skills.map(function(a){var t=e.getRandomColor(),n="bar-expand "+a.name.toLowerCase(),r=a.level;return l.a.createElement("li",{key:a.name},l.a.createElement("span",{style:{width:r,backgroundColor:t},className:n}),l.a.createElement("em",null,a.name))});return l.a.createElement("section",{id:"resume"},l.a.createElement(f.a,{left:!0,duration:1300},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},t))))),l.a.createElement(f.a,{left:!0,duration:1300},l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},n))),l.a.createElement(f.a,{left:!0,duration:1300},l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,a),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},r))))))}}]),a}(n.Component),j=t(21),y=t(20),O=function(){var e=Object(n.useState)({nameHook:"Name"}),a=Object(y.a)(e,2),t=a[0],r=a[1];return l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactName"},t.nameHook,l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{onChange:function(e){var a,n=e.target.value;a={nameHook:n},r(Object(j.a)({},t,a))},value:t.nameHook}))},k=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,a=this.props.data.address.street,t=this.props.data.address.city,n=this.props.data.phone,r=this.props.data.contactmessage;return l.a.createElement("section",{id:"contact"},l.a.createElement(b.Fade,{bottom:!0,duration:1e3},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},r)))),l.a.createElement("div",{className:"row"},l.a.createElement(b.Slide,{left:!0,duration:1e3},l.a.createElement("div",{className:"eight columns"},l.a.createElement("form",{action:"",method:"post",id:"contactForm",name:"contactForm"},l.a.createElement("fieldset",null,l.a.createElement("div",null,l.a.createElement(O,null)),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactEmail"},"Email ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactSubject"},"Subject"),l.a.createElement("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"contactMessage"},"Message ",l.a.createElement("span",{className:"required"},"*")),l.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})),l.a.createElement("div",null,l.a.createElement("button",{className:"submit"},"Submit"),l.a.createElement("span",{id:"image-loader"},l.a.createElement("img",{alt:"",src:"images/loader.gif"}))))),l.a.createElement("div",{id:"message-warning"}," Error boy"),l.a.createElement("div",{id:"message-success"},l.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",l.a.createElement("br",null)))),l.a.createElement(b.Slide,{right:!0,duration:1e3},l.a.createElement("aside",{className:"four columns footer-widgets"},l.a.createElement("div",{className:"widget widget_contact"},l.a.createElement("h4",null,"Address and Phone"),l.a.createElement("p",{className:"address"},e,l.a.createElement("br",null),a," ",l.a.createElement("br",null),t,l.a.createElement("br",null),l.a.createElement("span",null,n))),l.a.createElement("div",{className:"widget widget_tweets"},l.a.createElement("h4",{className:"widget-title"},"Latest Tweets"),l.a.createElement("ul",{id:"twitter"},l.a.createElement("li",null,l.a.createElement("span",null,"This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",l.a.createElement("a",{href:"./"},"http://t.co/CGIrdxIlI3")),l.a.createElement("b",null,l.a.createElement("a",{href:"./"},"2 Days Ago"))),l.a.createElement("li",null,l.a.createElement("span",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",l.a.createElement("a",{href:"./"},"http://t.co/CGIrdxIlI3")),l.a.createElement("b",null,l.a.createElement("a",{href:"./"},"3 Days Ago")))))))))}}]),a}(n.Component),C=t(19),D=t.n(C),S=0,F=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.books.map(function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:S++,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement(D.a,{alt:e.title,src:a}),l.a.createElement("div",{style:{textAlign:"center"}},e.title)))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement(f.a,{left:!0,duration:1e3,distance:"40px"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Libros de trabajo"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e)))))}}]),a}(n.Component),q=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"getResumeData",value:function(){p.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(g,{data:this.state.resumeData.main}),l.a.createElement(w,{data:this.state.resumeData.resume}),l.a.createElement(F,{data:this.state.resumeData.portfolio}),l.a.createElement(k,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.main}))}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,52)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(q,null),document.getElementById("root")),x()}},[[22,3,2]]]);
//# sourceMappingURL=main.1ebaf1aa.chunk.js.map