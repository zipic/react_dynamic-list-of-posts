(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{16:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var c=s(7),n=s.n(c),a=s(8),i=s(9),l=s(2),r=s(1),o=(s(14),s(15),s(16),s(3)),d=s.n(o),j=s(0),m=function(e){var t=e.posts,s=e.selectPost,c=e.setSelectPost;return Object(j.jsxs)("div",{"data-cy":"PostsList",children:[Object(j.jsx)("p",{className:"title",children:"Posts:"}),Object(j.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"has-background-link-light",children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"Post",children:[Object(j.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(j.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{type:"button","data-cy":"PostButton",className:d()("button is-link",{"is-light":s!==e}),onClick:function(){return function(e){c(s===e?null:e)}(e)},children:s===e?"Close":"Open"})})]},e.id)}))})]})]})},u=(s(18),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.addComments,s=e.selectPost,c=Object(r.useState)(""),n=Object(l.a)(c,2),a=n[0],i=n[1],o=Object(r.useState)(""),m=Object(l.a)(o,2),u=m[0],b=m[1],h=Object(r.useState)(""),O=Object(l.a)(h,2),x=O[0],f=O[1],v=Object(r.useState)(!1),N=Object(l.a)(v,2),p=N[0],y=N[1],g=Object(r.useState)(!1),C=Object(l.a)(g,2),S=C[0],w=C[1];return Object(j.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(j.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:"input is-danger",value:a,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-user"})}),Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(j.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(j.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:"input is-danger",value:u,onChange:function(e){return b(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-small is-left",children:Object(j.jsx)("i",{className:"fas fa-envelope"})}),Object(j.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(j.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(j.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(j.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:"textarea is-danger",value:x,onChange:function(e){return f(e.target.value)}})}),S&&Object(j.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(j.jsxs)("div",{className:"field is-grouped",children:[Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"submit",className:d()("button is-link",{"is-loaded":p}),onClick:function(){if(a.trim()||u.trim()||x.trim())w(!0);else{var e={postId:(null===s||void 0===s?void 0:s.id)||0,name:a,email:u,body:x};t(e),y(!1),w(!1),f("")}},children:"Add"})}),Object(j.jsx)("div",{className:"control",children:Object(j.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},h=function(e){var t=e.comments,s=e.selectPost,c=e.error,n=e.deleteComment,a=e.addComments,i=Object(r.useState)(!1),o=Object(l.a)(i,2),d=o[0],m=o[1];return Object(j.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(j.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(j.jsxs)("div",{className:"block",children:[Object(j.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===s||void 0===s?void 0:s.id,": ").concat(null===s||void 0===s?void 0:s.title," ")}),Object(j.jsx)("p",{"data-cy":"PostBody",children:null===s||void 0===s?void 0:s.body})]}),Object(j.jsxs)("div",{className:"block",children:[c?Object(j.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}):Object(j.jsx)(u,{}),0===t.length?Object(j.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}):Object(j.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){return Object(j.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(j.jsxs)("div",{className:"message-header",children:[Object(j.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(j.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return n(e.id)},children:"delete button"})]}),Object(j.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)})),!d&&Object(j.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){m(!0)},children:"Write a comment"})]}),d&&Object(j.jsx)(b,{addComments:a,selectPost:s})]})})},O=function(e){var t=e.users,s=e.selectUser,c=e.setSelectUser,n=Object(r.useState)(!1),a=Object(l.a)(n,2),i=a[0],o=a[1];Object(r.useEffect)((function(){var e=function(){o(!1)};return i?window.addEventListener("click",e):window.removeEventListener("click",e),function(){window.removeEventListener("click",e)}}));return Object(j.jsxs)("div",{"data-cy":"UserSelector",className:d()("dropdown",{"is-active":i}),children:[Object(j.jsx)("div",{className:"dropdown-trigger",children:Object(j.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){o(!0)},children:[Object(j.jsx)("span",{children:s?s.name:"Choose a user"}),Object(j.jsx)("span",{className:"icon is-small",children:Object(j.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:t.map((function(e){return Object(j.jsx)("div",{className:"dropdown-content",children:Object(j.jsx)("a",{href:"#user-".concat(e.id),className:d()("dropdown-item",{"is-active":s===e}),onClick:function(){return function(e){c(e)}(e)},children:e.name})},e.id)}))})]})},x="https://mate.academy/students-api";function f(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),f(300).then((function(){return fetch(x+e,c)})).then((function(e){return e.json()}))}var N=function(e){return v(e)},p=function(e,t){return v(e,"POST",t)},y=function(e){return v(e,"DELETE")},g="Something went wrong!",C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),s=t[0],c=t[1],n=Object(r.useState)([]),o=Object(l.a)(n,2),b=o[0],x=o[1],f=Object(r.useState)([]),v=Object(l.a)(f,2),C=v[0],S=v[1],w=Object(r.useState)(null),E=Object(l.a)(w,2),k=E[0],P=E[1],T=Object(r.useState)(null),I=Object(l.a)(T,2),L=I[0],F=I[1],U=Object(r.useState)(""),B=Object(l.a)(U,2),M=B[0],A=B[1],D=Object(r.useState)(!1),_=Object(l.a)(D,2),J=_[0],q=_[1];Object(r.useEffect)((function(){q(!0),N("/users").then(c).catch((function(){return A(g)})).finally((function(){return q(!1)}))}),[]),Object(r.useEffect)((function(){var e;q(!0),null!==k&&(e=k.id,N("/posts?userId=".concat(e))).then(x).catch((function(){return A(g)})).finally((function(){return q(!1)}))}),[null===k||void 0===k?void 0:k.id]),Object(r.useEffect)((function(){var e;null!==L&&(e=L.id,N("/comments?postId=".concat(e))).then(S).catch((function(){return A(g)}))}),[null===L||void 0===L?void 0:L.id]);return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"tile is-ancestor",children:[Object(j.jsx)("div",{className:"tile is-parent",children:Object(j.jsxs)("div",{className:"tile is-child box is-success",children:[Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(O,{users:s,selectUser:k,setSelectUser:P})}),Object(j.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!k&&Object(j.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),!J&&Object(j.jsx)(u,{}),M&&Object(j.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:M}),0===b.length?Object(j.jsx)("div",{className:d()("notification is-warning",{"is-hidden":!k}),"data-cy":"NoPostsYet",children:"No posts yet"}):Object(j.jsx)(m,{posts:b,selectPost:L,setSelectPost:F})]})]})}),Object(j.jsx)("div",{"data-cy":"Sidebar",className:d()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":L&&b.length>0}),children:L&&Object(j.jsx)("div",{className:"tile is-child box is-success ",children:Object(j.jsx)(h,{comments:C,selectPost:L,error:M,deleteComment:function(e){var t;(t=e,y("/comments/".concat(t))).then((function(){S(C.filter((function(t){return t.id!==e})))})).catch((function(){return A(g)}))},addComments:function(e){var t=Math.random(),s=Object(i.a)({id:t},e);(function(e){var t=e.postId,s=e.name,c=e.email,n=e.body;return p("/comments",{postId:t,name:s,email:c,body:n})})(s).then((function(){S((function(e){return[].concat(Object(a.a)(e),[s])}))})).catch((function(){return A(g)}))}})})})]})})})};n.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.af2f9acf.chunk.js.map