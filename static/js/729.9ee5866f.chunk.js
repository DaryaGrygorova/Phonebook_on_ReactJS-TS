"use strict";(self.webpackChunkphonebook_on_reactjs_ts=self.webpackChunkphonebook_on_reactjs_ts||[]).push([[729],{9729:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r,o,a,i,s,u,c,l,h,d=t(6015),m=t(4565),f=t(1888),p=t(7689),x=t(2791),g=t(1413),y=t(2506),b=t(7103),v=t(9434),Z=t(1494),w=t(5501),j=t(3537),k=t(2593),C=t(168),P=t(277),I=t(7205),A=(0,P.ZP)(y.l0)(r||(r=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  width: 245px;\n  padding: "," ",";\n  margin: 0 auto;\n  border-radius: ",";\n  background-color: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.palette.background.default})),F=(0,P.ZP)(I.Z)(o||(o=(0,C.Z)(["\n  width: 100%;\n  border-color: ",";\n  background-color: ",";\n  color: ",";\n  margin-top: ",";\n\n  :hover,\n  :focus {\n    font-weight: 600;\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.palette.text.primary}),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.palette.secondary.main}),(function(e){return e.theme.palette.common.white})),S=t(3329),T=function(){var e=(0,Z.T)(),n=(0,v.v9)(j.Af),t=b.Ry().shape({name:b.Z_().required('"Name" is a required field').matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:b.Z_().required('"Number" is a required field').matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")});return(0,S.jsx)(y.J9,{initialValues:{name:"",number:""},validationSchema:t,onSubmit:function(t,r){var o=r.resetForm,a=t.name.toLowerCase();null!==n&&void 0!==n&&n.find((function(e){return e.name.toLowerCase().includes(a)}))?alert("".concat(t.name," is already in contacts.")):e((0,w.uK)((0,g.Z)({},t))),o()},children:(0,S.jsxs)(A,{children:[(0,S.jsx)(k.Z,{name:"name",type:"text",autoComplete:!1}),(0,S.jsx)(k.Z,{name:"number",type:"tel",autoComplete:!1}),(0,S.jsx)(F,{type:"submit",children:"Add contact"})]})})},N=t(9643),L=t(9963),_=(0,P.ZP)(d.Z)(a||(a=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  max-width: 600px;\n"])),(function(e){return e.theme.spacing(3)})),z=(0,P.ZP)(L.Z)(i||(i=(0,C.Z)(["\n  outline: true;\n  font-size: 16px;\n  /* padding: ","; */\n  border-radius: ",";\n  width: 200px;\n  background-color: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.palette.background.default})),B=function(){var e=(0,v.I0)(),n=(0,v.v9)(j.YI),t=(0,v.v9)(j.Cc);return(0,x.useEffect)((function(){t&&e((0,N.T)(""))}),[e,t]),(0,S.jsxs)(_,{as:"form",onSubmit:function(e){return e.preventDefault()},children:[(0,S.jsx)("label",{htmlFor:"contactsFilter",children:"Find contacts by name "}),(0,S.jsx)(z,{id:"contactsFilter",type:"text",name:"filter",value:n,onChange:function(n){e((0,N.T)(n.currentTarget.value))},autoComplete:"off",color:"secondary",size:"small"})]})},E=t(885),M=t(286),J=(0,P.ZP)(M.Z)(s||(s=(0,C.Z)(["\n  background-color: ",";\n  padding: ",";\n  text-indent: ",";\n  font-style: italic ;\n  border-radius: ",";\n  max-width: 245px;\n"])),(function(e){return e.theme.palette.background.default}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(4)}),(function(e){return e.theme.spacing(3)})),q=(0,P.ZP)(m.Z)(u||(u=(0,C.Z)([""]))),G=JSON.parse('[{"text":"A pessimist is a man who thinks everybody is as nasty as himself, and hates them for it","author":"George Bernard Shaw"},{"text":"Always forgive your enemies. Nothing annoys them more","author":"Oscar Wilde"},{"text":"Never make fun of someone who speaks broken English. It means they know another language","author":"H. Jackson Brown, Jr."},{"text":"Love all, trust a few, do wrong to none","author":"William Shakespeare"},{"text":"Never compare your love story with those in the movies, because they are written by scriptwriters. Yours is written by God","author":"Unknown"},{"text":"The very essence of romance is uncertainty","author":"Oscar Wilde, The Importance of Being Earnest and Other Plays"},{"text":"Nothing is impossible, the word itself says, I\'m possible!","author":"Audrey Hepburn"},{"text":"Life is 10% what happens to me and 90% of how I react to it","author":"Charles Swindoll"},{"text":"There are people who have money and people who are rich","author":"Coco Chanel"},{"text":"Remember no one can make you feel inferior without your consent","author":"Eleanor Roosevelt"},{"text":"There are no shortcuts to any place worth going","author":"Helen Keller"},{"text":"Build your own dreams, or someone else will hire you to build theirs","author":"Farrah Gray"},{"text":"It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change","author":"Charles Darwin"},{"text":"You miss 100% of the shots you don\'t take","author":"Wayne Gretzky"},{"text":"Success is one percent inspiration, ninety-nine percent perspiration","author":"Thomas Edison"}]'),O=function(){var e=(0,x.useState)((function(){return Math.floor(-9*Math.random())+10})),n=(0,E.Z)(e,2),t=n[0],r=n[1];return(0,x.useEffect)((function(){var e=setInterval((function(){var e,n,t=(e=0,n=G.length-1,Math.floor(Math.random()*(n-e+1))+e);r(t)}),6e4);return function(){return clearInterval(e)}}),[]),(0,S.jsxs)(J,{elevation:0,children:[(0,S.jsxs)(q,{paragraph:!0,variant:"body1",children:['"',G[t].text,'"']}),(0,S.jsx)(q,{paragraph:!0,variant:"body1",children:G[t].author})]})},W=t(4371),Y=(0,P.ZP)(d.Z)(c||(c=(0,C.Z)(["\n  position: relative;\n  width: 260px;\n  box-shadow: 26px -2px 10px -30px rgba(0, 0, 0, 0.66);\n  min-height: 88vh;\n"]))),D=(0,P.ZP)(d.Z)(l||(l=(0,C.Z)(["\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),H=(0,P.ZP)(d.Z)(h||(h=(0,C.Z)(["\n  padding: ",";\n  flex-grow: 1;\n"])),(function(e){return e.theme.spacing(4)})),R=function(){var e=(0,Z.T)(),n=(0,W.Z)().isLogIn;return(0,x.useEffect)((function(){n&&e((0,w.yF)())}),[e,n]),(0,S.jsxs)(d.Z,{display:"flex",children:[(0,S.jsx)(Y,{as:"aside",children:(0,S.jsxs)(D,{children:[(0,S.jsx)(m.Z,{component:"h1",variant:"h5",my:0,children:"My PhoneBook"}),(0,S.jsx)(T,{}),(0,S.jsx)(B,{}),(0,S.jsx)(O,{})]})}),(0,S.jsx)(H,{children:(0,S.jsx)(x.Suspense,{fallback:(0,S.jsx)(f.Z,{color:"secondary"}),children:(0,S.jsx)(p.j3,{})})})]})}},2593:function(e,n,t){t.d(n,{Z:function(){return d}});var r,o,a=t(5984),i=t(168),s=t(277),u=t(2506),c=(0,s.ZP)(u.gN)(r||(r=(0,i.Z)(["\n  border: 1px solid #6f4e37;\n  padding: ",";\n  border-radius: ",";\n  margin-bottom: ",";\n"])),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)})),l=(0,s.ZP)(u.Bc)(o||(o=(0,i.Z)(["\ncolor: red;\n"]))),h=t(3329),d=function(e){var n=e.name,t=e.type,r=e.autoComplete,o=(0,a.x0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{htmlFor:o,children:n?n[0].toUpperCase()+n.slice(1):""}),(0,h.jsx)(c,{id:o,type:t,name:n,autoComplete:r?"on":"off"}),(0,h.jsx)(l,{name:n,component:"div"})]})}},3537:function(e,n,t){t.d(n,{Af:function(){return o},Cc:function(){return a},DI:function(){return s},YI:function(){return i}});var r=t(6916),o=function(e){return e.contacts.items},a=function(e){return e.contacts.isLoading},i=function(e){return e.filter},s=(0,r.P1)([o,i],(function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}))}}]);
//# sourceMappingURL=729.9ee5866f.chunk.js.map