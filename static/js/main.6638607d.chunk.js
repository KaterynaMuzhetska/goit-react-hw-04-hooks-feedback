(this["webpackJsonpgoit-react-hw-04-books-feedback"]=this["webpackJsonpgoit-react-hw-04-books-feedback"]||[]).push([[0],[,,function(t,e,s){t.exports={title:"Statistics_title__1Mg1i",list:"Statistics_list__2QF_d",statistics:"Statistics_statistics__8_27G"}},,,function(t,e,s){t.exports={section:"SectionTitle_section__2EOtT",title:"SectionTitle_title__CFSLq"}},function(t,e,s){t.exports={list:"FeedbackOptions_list__2KYoo",button:"FeedbackOptions_button__1y779"}},,function(t,e,s){t.exports={notification:"Notification_notification__2ry7f"}},,,,,,function(t,e,s){"use strict";s.r(e);var c=s(1),a=s.n(c),i=s(7),n=s.n(i),o=s(3),r=s(5),l=s.n(r),b=s(0),u=function(t){var e=t.children;return Object(b.jsxs)("div",{className:l.a.section,children:[Object(b.jsx)("h2",{className:l.a.title,children:"Please leave feedback"}),e]})},j=s(6),d=s.n(j),O=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(b.jsx)("ul",{className:d.a.list,children:Object.keys(e).map((function(t){return Object(b.jsx)("button",{className:d.a.button,onClick:s,children:t},t)}))})},f=s(8),_=s.n(f),h=function(t){var e=t.message;return Object(b.jsx)("p",{className:_.a.notification,children:e})},x=s(2),p=s.n(x),m=function(t){var e=t.good,s=t.neutral,c=t.bad,a=t.total,i=t.positivePercentage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:p.a.title,children:"Statistics"}),a?Object(b.jsxs)("ul",{className:p.a.list,children:[Object(b.jsxs)("p",{className:p.a.statistics,children:["Good: ",e]}),Object(b.jsxs)("p",{className:p.a.statistics,children:["Neutral: ",s]}),Object(b.jsxs)("p",{className:p.a.statistics,children:["Bad: ",c]}),Object(b.jsxs)("p",{className:p.a.statistics,children:["Total: ",a]}),Object(b.jsxs)("p",{className:p.a.statistics,children:["Positive feedback:"," ",Number.isNaN(i)?0:i,"%"]})]}):Object(b.jsx)(h,{message:"No feedback given"})]})};var k=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),s=e[0],a=e[1],i=Object(c.useState)(0),n=Object(o.a)(i,2),r=n[0],l=n[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),f=d[0],_=d[1],h=function(){return[s,r,f].reduce((function(t,e){return t+e}),0)};return Object(b.jsxs)(u,{children:[Object(b.jsx)(O,{options:{good:s,neutral:r,bad:f},onLeaveFeedback:function(t){switch(t.target.textContent){case"good":a((function(t){return t+1}));break;case"neutral":l((function(t){return t+1}));break;case"bad":_((function(t){return t+1}));break;default:return}}}),Object(b.jsx)(m,{good:s,neutral:r,bad:f,total:h(),positivePercentage:Math.round(100*s/h())})]})};n.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.6638607d.chunk.js.map