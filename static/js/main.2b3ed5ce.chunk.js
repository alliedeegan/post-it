(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/nitish-meena-37746-unsplash.9c496175.jpg"},17:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),l=a.n(s),i=(a(23),a(1)),o=a(2),c=a(4),p=a(3),h=a(5),u=(a(24),a(25),a(16)),m=a.n(u),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"landingPage"},r.a.createElement("div",{className:"landingPage__PostCard"},r.a.createElement("div",{className:"landingPage__PostCard--Front"},r.a.createElement("h1",null,"Post it"),r.a.createElement("p",null,"Greetings from the internet!"),r.a.createElement("img",{src:m.a,alt:"A river with majestic mountains in the distance at dusk"})),r.a.createElement("div",{className:"landingPage__PostCard--Back"},r.a.createElement("div",{className:"landingPage__PostCard--BackText"},r.a.createElement("p",{className:"greeting"},"Hey Kind Stranger,"),r.a.createElement("p",null,"Remember Postcards? ",r.a.createElement("br",null)," Those things you always promise to send your mom on vacation, but never do. ",r.a.createElement("br",null)," With Post It, you can make a free digital postcard from the comfort of the internet instead!")))),r.a.createElement("button",{className:"start",onClick:function(){return e.props.handleNewPage("getPhotosPage")}},"Make custom postcard"))}}]),t}(n.Component),g=a(8),v=a.n(g),f=(a(45),"Client-ID 35b099672297de16a0daab970e196de3980e769efd3fffd4f2b18b262ce57705"),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).getPhotoOptions=function(t){t.preventDefault(),v()({url:"https://api.unsplash.com/search/photos",method:"GET",responseType:"json",headers:{"Accept-Version":"v1",Authorization:f},params:{format:"json",orientation:"landscape",per_page:"8",query:e.state.query}}).then(function(t){console.log(t);var a=t.data.results;e.setState({resultData:t.data.results}),e.props.handleResultData(a)})},e.handleChange=function(t){e.setState({query:t.target.value})},e.state={resultData:[],chosenPhoto:"",query:""},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v()({url:"https://api.unsplash.com/search/photos",method:"GET",responseType:"json",headers:{"Accept-Version":"v1",Authorization:f},params:{format:"json",orientation:"landscape",per_page:"8",query:"mountains"}}).then(function(t){console.log(t);var a=t.data.results;e.setState({resultData:t.data.results}),console.log(a),e.props.handleResultData(a)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"getPhotosPage"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"getPhotosPage__Header"},r.a.createElement("h2",null,"Pick a Pic!"),r.a.createElement("h3",null,"Select a photo below or search for an image of your choice."),r.a.createElement("form",{action:"submit",onSubmit:this.getPhotoOptions},r.a.createElement("input",{type:"text",onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Search"}))),r.a.createElement("div",{className:"getPhotosPage__Photos"},this.state.resultData.map(function(t){return r.a.createElement("div",{key:t.id,className:"photoOption"},r.a.createElement("div",{className:"photoOption__Image",onClick:function(){e.props.handleSelectPhoto(t),e.props.handleNewPage("getTextPage")}},r.a.createElement("img",{src:t.urls.regular,alt:t.description}),r.a.createElement("div",{className:"photoOverlay"},r.a.createElement("p",null,"This one!"))),r.a.createElement("a",{href:t.user.links.html,target:"_blank"},r.a.createElement("i",{class:"fas fa-camera-retro"})," by ",t.user.name))}))))}}]),t}(n.Component),y=(a(46),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"getTextPage"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"getTextPage__Header"},r.a.createElement("h2",null,"The write stuff!"),r.a.createElement("h3",null,"Finding the right words is hard. Fill out this form and we'll take care of the rest!")),r.a.createElement("div",{className:"getTextPage__Form"},r.a.createElement("form",{action:"submit",onSubmit:function(){return e.props.handleNewPage("displayPostCardPage")}},r.a.createElement("div",{className:"getTextPage__Form--Radio"},r.a.createElement("p",null,"Who is the recipient?"),r.a.createElement("input",{type:"radio",id:"family",name:"recipient",value:"family",onChange:function(){return e.props.handleRecipient("family")},required:!0}),r.a.createElement("label",{htmlFor:"family"},"Family"),r.a.createElement("input",{type:"radio",id:"lover",name:"recipient",value:"lover",onChange:function(){return e.props.handleRecipient("lover")}}),r.a.createElement("label",{htmlFor:"lover"},"Lover"),r.a.createElement("input",{type:"radio",id:"enemy",name:"recipient",value:"enemy",onChange:function(){return e.props.handleRecipient("enemy")}}),r.a.createElement("label",{htmlFor:"enemy"},"Enemy")),r.a.createElement("label",{htmlFor:"recipientName"},"enter the ",r.a.createElement("span",null,"recipient's name")),r.a.createElement("input",{type:"text",id:"recipientName",placeholder:"Grandma, Natalie, Balthazar The Terrible, etc... ",onChange:this.props.handleRecipientName,value:this.props.recipientName,maxLength:"20",required:!0}),r.a.createElement("label",{htmlFor:"noun"},"enter a ",r.a.createElement("span",null,"plural noun")),r.a.createElement("input",{type:"text",id:"noun",placeholder:"rubber duckies, questions, bees, etc...",onChange:this.props.handleNoun,value:this.props.noun,maxLength:"15",required:!0}),r.a.createElement("label",{htmlFor:"adjective"},"enter an ",r.a.createElement("span",null,"adjective")),r.a.createElement("input",{type:"text",id:"adjective",placeholder:"beautiful, illuminating, boyant, etc...  ",onChange:this.props.handleAdjective,value:this.props.adjective,maxLength:"15",required:!0}),r.a.createElement("label",{htmlFor:"verb"},"enter a ",r.a.createElement("span",null,"verb")),r.a.createElement("input",{type:"text",id:"verb",placeholder:"run, worry, festoon, etc...",onChange:this.props.handleVerb,value:this.props.verb,maxLength:"15",required:!0}),r.a.createElement("label",{htmlFor:"petName"},"enter a ",r.a.createElement("span",null,"pet's name")),r.a.createElement("input",{type:"text",id:"petName",placeholder:"Mittens, Mr. Fluffington, Brown Dog... etc",onChange:this.props.handlePetName,value:this.props.petName,maxLength:"20",required:!0}),r.a.createElement("label",{htmlFor:"title"},"enter a ",r.a.createElement("span",null,"place name")),r.a.createElement("input",{type:"text",id:"title",placeholder:"Jamaica, Applebees, the Moon, etc...",onChange:this.props.handleTitle,value:this.props.title,maxLength:"20",required:!0}),r.a.createElement("label",{htmlFor:"usersName"},"enter ",r.a.createElement("span",null,"your name")),r.a.createElement("input",{type:"text",id:"usersName",placeholder:"I hope you know your own name!",onChange:this.props.handleUsersName,value:this.props.usersName,maxLength:"15",required:!0}),r.a.createElement("input",{type:"submit",value:"Generate Postcard!"})))))}}]),t}(n.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"templateText"},r.a.createElement("p",{className:"greeting"},"Hey Fam!"),r.a.createElement("p",{className:"message"},"I know you were worried about me traveling alone, but so far, I'm having a ",this.props.passedState.adjective," time! I bought you a handful of ",this.props.passedState.noun," as a souvenir yesterday. Tomorrow our tour is going to check out the ",this.props.passedState.petName," ruins. They're said to be cursed, but whatevs! The locals here call me ",this.props.passedState.title,", which is pretty rad. They say I ",this.props.passedState.verb," better than anyone else they've ever met. I miss all of you except ",this.props.passedState.recipientName,"."),r.a.createElement("p",{className:"signature"},"Best wishes, ",this.props.passedState.usersName))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"templateText"},r.a.createElement("p",{className:"greeting"},"My Sweet ",this.props.passedState.recipientName,","),r.a.createElement("p",{className:"message"},"For many moons now we have been apart. Oh how I ache for your ",this.props.passedState.adjective," embrace. Yesterday I saw some ",this.props.passedState.noun," and was reminded of your smile. I have been telling all of ",this.props.passedState.title," how beguiling you are. Soon we will be reunited and I will hear you call me ",this.props.passedState.petName," as we ",this.props.passedState.verb," together in the moonlight."),r.a.createElement("p",{className:"signature"},"Your beloved, ",this.props.passedState.usersName))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"templateText"},r.a.createElement("p",null,this.props.passedState.recipientName,","),r.a.createElement("p",{className:"message"},"No doubt you're surprised to hear from me, since leaving me for dead in that pit of ",this.props.passedState.adjective," ",this.props.passedState.noun,". Since that day, I have been in hiding. But I will hide no more. I'm coming for you, and I will find you, even if I have to search all of ",this.props.passedState.title,". You'll pay for what you and ",this.props.passedState.petName," did to my family. Looking forward to the day I ",this.props.passedState.verb," upon your grave."),r.a.createElement("p",{className:"signature"},this.props.passedState.usersName))}}]),t}(n.Component),j=(a(47),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"displayPostCardPage"},r.a.createElement("div",{className:"displayPage__Header"},r.a.createElement("h2",null,"Your Postcard!")),r.a.createElement("div",{className:"displayPage__PostCard"},r.a.createElement("div",{className:"displayPage__PostCard--Front"},r.a.createElement("img",{src:this.props.passedState.chosenPhoto.urls.regular,alt:this.props.passedState.chosenPhoto.description})),r.a.createElement("div",{className:"displayPage__PostCard--Back"},"family"===this.props.passedState.recipient?r.a.createElement(E,{passedState:this.props.passedState}):null,"lover"===this.props.passedState.recipient?r.a.createElement(N,{passedState:this.props.passedState}):null,"enemy"===this.props.passedState.recipient?r.a.createElement(P,{passedState:this.props.passedState}):null)))}}]),t}(n.Component)),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleNewPage=function(e){a.setState({currentPage:e})},a.handleResultData=function(e){a.setState({resultData:e})},a.handleSelectPhoto=function(e){console.log(e),a.setState({chosenPhoto:e})},a.handleRecipient=function(e){a.setState({recipient:e})},a.handleRecipientName=function(e){a.setState({recipientName:e.target.value})},a.handleNoun=function(e){a.setState({noun:e.target.value})},a.handleAdjective=function(e){a.setState({adjective:e.target.value})},a.handleVerb=function(e){a.setState({verb:e.target.value})},a.handlePetName=function(e){a.setState({petName:e.target.value})},a.handleTitle=function(e){a.setState({title:e.target.value})},a.handleUsersName=function(e){a.setState({usersName:e.target.value})},a.state={resultData:[],query:"",chosenPhoto:"",currentPage:"landingPage",recipient:"",recipientName:"",usersName:"",noun:"",adjective:"",verb:"",petName:"",title:""},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"landingPage"===this.state.currentPage?r.a.createElement(d,{handleNewPage:this.handleNewPage}):null,"getPhotosPage"===this.state.currentPage?r.a.createElement(b,{handleNewPage:this.handleNewPage,handleResultData:this.handleResultData,handleSelectPhoto:this.handleSelectPhoto}):null,"getTextPage"===this.state.currentPage?r.a.createElement(y,{handleNewPage:this.handleNewPage,handleNoun:this.handleNoun,handleRecipient:this.handleRecipient,handleRecipientName:this.handleRecipientName,handleAdjective:this.handleAdjective,handleVerb:this.handleVerb,handlePetName:this.handlePetName,handleTitle:this.handleTitle,handleUsersName:this.handleUsersName}):null,"displayPostCardPage"===this.state.currentPage?r.a.createElement(j,{handleNewPage:this.handleNewPage,passedState:this.state}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2b3ed5ce.chunk.js.map