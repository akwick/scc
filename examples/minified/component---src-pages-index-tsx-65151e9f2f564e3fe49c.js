(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(2),o=n(245),l=n(247),c=n(249),m=n(287),d=n.n(m),u=a.c.div.withConfig({displayName:"MetadataSection__MetadataSectionContainer",componentId:"sc-2n8vyk-0"})(["display:flex;flex-direction:column;align-items:center;"]),s=a.c.div.withConfig({displayName:"MetadataSection__MetadataSearchBar",componentId:"sc-2n8vyk-1"})(["width:100vw;display:flex;justify-content:center;background-color:black;padding:20px 0;"]),f=a.c.div.withConfig({displayName:"MetadataSection__MetadataTogglesContainer",componentId:"sc-2n8vyk-2"})(["width:",";display:flex;font-family:",";@media ","{font-size:0.9375rem;letter-spacing:0.0625rem;line-height:1.1875rem;margin-right:2.5rem;justify-content:flex-end;}@media ","{justify-content:space-around;font-size:0.6875rem;letter-spacing:0.045625rem;line-height:0.875rem;}"],function(e){return e.theme.dimensions.maxWidth},function(e){return e.theme.fonts.HeaderSans},function(e){return e.theme.mediaQueries.desktop},function(e){return e.theme.mediaQueries.mobile}),g=a.c.button.withConfig({displayName:"MetadataSection__ToggleButton",componentId:"sc-2n8vyk-3"})(["border:none;background-color:black;color:#ffffff;cursor:pointer;@media ","{margin-left:3rem;}"],function(e){return e.theme.mediaQueries.desktop}),h=a.c.span.withConfig({displayName:"MetadataSection__ChevronContainer",componentId:"sc-2n8vyk-4"})(["margin-left:7rem;@media ","{margin-left:1.1rem;}> svg{transform:",";transition-duration:0.3s;}"],function(e){return e.theme.mediaQueries.mobile},function(e){return e.showContent?"rotate(180deg)":"rotate(0deg)"}),p=a.c.div.withConfig({displayName:"MetadataSection__MetadataContent",componentId:"sc-2n8vyk-5"})(["background-color:",";width:",";@media ","{max-width:96vw;}transition:max-height 0.3s ease-out;max-height:",";overflow-y:hidden;"],function(e){return e.theme.site.color.Background},function(e){return e.theme.dimensions.maxWidth},function(e){return e.theme.mediaQueries.mobile},function(e){return e.showContent?"300px":"0px"}),y=a.c.div.withConfig({displayName:"MetadataSection__TagsContainer",componentId:"sc-2n8vyk-6"})(["margin-top:60px;padding-bottom:60px;display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;border-bottom:2px gray solid;> *{margin:1rem;}"]),x=function(e){return r.a.createElement(g,{type:"button",onClick:e.onClickHandler},e.children,r.a.createElement(h,{showContent:e.showContent},r.a.createElement(d.a,null)))},w=function(e){var t=e.allTags,n=e.allAuthors,a=Object(i.useState)(!1),o=a[0],l=a[1],m=Object(i.useState)(!1),d=m[0],g=m[1];return r.a.createElement(u,null,r.a.createElement(s,null,r.a.createElement(f,null,r.a.createElement(x,{showContent:d,onClickHandler:function(){g(!d),l(!1)}},"ALL AUTHORS"),r.a.createElement(x,{showContent:o,onClickHandler:function(){l(!o),g(!1)}},"ALL TAGS"))),r.a.createElement(p,{showContent:o},r.a.createElement(y,null,t.map(function(e){return r.a.createElement(c.b,{key:e.fieldValue,name:e.fieldValue})}))),r.a.createElement(p,{showContent:d},r.a.createElement(y,null,n.map(function(e){return r.a.createElement(c.a,{key:e.fieldValue,name:e.fieldValue})}))))};n.d(t,"pageQuery",function(){return k});var b=a.c.div.withConfig({displayName:"pages__PageTitle",componentId:"sc-1puqih7-0"})(["font-size:4.6875rem;line-height:6.875rem;letter-spacing:0.09375rem;font-family:",";@media ","{font-size:1.875rem;line-height:2.75rem;}"],function(e){return e.theme.fonts.Title},function(e){return e.theme.mediaQueries.mobile}),v=a.c.div.withConfig({displayName:"pages__SiteDescription",componentId:"sc-1puqih7-1"})(["font-size:2.1875rem;line-height:2.8125rem;font-family:",";font-weight:700;@media ","{font-size:0.9375rem;line-height:1.5rem;}"],function(e){return e.theme.fonts.HeaderSans},function(e){return e.theme.mediaQueries.mobile}),E=a.c.div.withConfig({displayName:"pages__HomePageBanner",componentId:"sc-1puqih7-2"})(["height:465px;max-width:100vw;margin:13px auto 0;background-image:",";background-size:cover;background-position:center;display:flex;flex-direction:column;justify-content:center;text-align:center;color:white;@media ","{height:210px;}"],function(e){var t=e.bgUrl;return"url("+e.bgWebPUrl+"), \n url("+t+")"},function(e){return e.theme.mediaQueries.mobile}),k=(t.default=function(e){var t=e.data;return r.a.createElement("div",null,r.a.createElement(o.Helmet,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,"Kablamo Engineering blog")),r.a.createElement(E,{bgUrl:t.allFile.edges&&t.allFile.edges[0]&&t.allFile.edges[0].node&&t.allFile.edges[0].node.childImageSharp&&t.allFile.edges[0].node.childImageSharp.fluid&&t.allFile.edges[0].node.childImageSharp.fluid.src,bgWebPUrl:t.allFile.edges&&t.allFile.edges[0]&&t.allFile.edges[0].node&&t.allFile.edges[0].node.childImageSharp&&t.allFile.edges[0].node.childImageSharp.fluid&&t.allFile.edges[0].node.childImageSharp.fluid.srcWebp},r.a.createElement(b,null,"THE BLOG"),r.a.createElement(v,null,"Insights from the Kablamo Team.")),r.a.createElement(w,{allTags:t.allMdx.tags,allAuthors:t.allMdx.authors}),r.a.createElement(l.a,{mdxEdges:t.allMdx.edges}))},"3991476874")},242:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n(0),r=n.n(i),a=n(2).c.div.withConfig({displayName:"byLine__DateWrapper",componentId:"sc-1vu2w2p-0"})(["font-family:",";color:",";letter-spacing:0.03em;font-size:1rem;line-height:1.1875rem;@media ","{font-size:0.75rem;letter-spacing:0.025rem;line-height:0.9375rem;}"],function(e){return e.theme.fonts.Body},function(e){return e.theme.site.color.Title.Foreground},function(e){return e.theme.mediaQueries.mobile}),o=function(e){var t=e.date,n=e.author,i=new Date(t);return r.a.createElement(a,null,i.getDate()+"."+(i.getMonth()+1)+"."+i.getFullYear()+" - By "+n)}},243:function(e,t,n){"use strict";n.d(t,"a",function(){return w});n(5),n(4),n(3),n(6),n(12);var i=n(0),r=n.n(i),a=n(2),o=n(244),l=n.n(o),c=n(43),m=n(242);function d(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var u=Object(a.c)(c.a).withConfig({displayName:"card__Link",componentId:"sc-14d9ofs-0"})(["text-decoration:none;border-radius:1rem;padding:1rem;flex:1;margin:0.2rem;"]),s=a.c.h1.withConfig({displayName:"card__Title",componentId:"sc-14d9ofs-1"})(["display:inline;color:",";font-size:1.56rem;font-family:",";text-transform:uppercase;line-height:2.5rem;letter-spacing:0.03rem;text-decoration:none;@media ","{font-size:1.125rem;line-height:1.6875rem;letter-spacing:-0.008125rem;}",":hover &{background-image:linear-gradient( to right,",","," );background-repeat:repeat-x;background-position:0 1.4em;background-size:8px 3px;}"],function(e){return e.theme.site.color.Foreground},function(e){return e.theme.fonts.Title},function(e){return e.theme.mediaQueries.mobile},u,function(e){return e.theme.site.color.Title.Foreground},function(e){return e.theme.site.color.Title.Foreground}),f=a.c.div.withConfig({displayName:"card__Excerpt",componentId:"sc-14d9ofs-2"})(["font-family:",";text-transform:none;font-size:1.125rem;letter-spacing:0.03em;line-height:1.7rem;min-height:2em;align-self:flex-end;justify-self:flex-end;width:100%;margin-top:0.9rem;@media ","{font-size:0.8125rem;line-height:1.375rem;}"],function(e){return e.theme.fonts.Body},function(e){return e.theme.mediaQueries.mobile}),g=a.c.div.withConfig({displayName:"card__Meta",componentId:"sc-14d9ofs-3"})(["display:flex;flex-direction:row;margin:1rem 0;"]),h=Object(a.c)(l.a).withConfig({displayName:"card__Image",componentId:"sc-14d9ofs-4"})(["min-height:300px;max-height:375px;@media ","{","}"],function(e){return e.theme.mediaQueries.desktop},function(e){return e.fullwidth&&"width: 40%;\n      float: left;\n      margin: 0 3rem 0 0;\n    "}),p=function(e){var t=e.node,n=t.fields.route,i=t.frontmatter,a=i.title,o=i.excerpt,l=i.date,c=i.author,p=i.cardImage,y=e.fullwidth,x=d(e,["node","fullwidth"]);return r.a.createElement(u,Object.assign({to:n},x),p&&r.a.createElement(h,{objectFit:"fill",objectPosition:"50% 50%",fluid:p.childImageSharp.fluid,fullwidth:!!y}),r.a.createElement(g,null,r.a.createElement(m.a,{author:c.id,date:l})),r.a.createElement(s,null,a),r.a.createElement(f,null,o))},y=a.c.div.withConfig({displayName:"card__CardPairWrapper",componentId:"sc-14d9ofs-5"})(["display:flex;justify-content:space-between;max-width:",";margin:0rem auto 0 auto;width:100%;@media ","{padding:4rem 0;}"],function(e){return e.theme.dimensions.maxWidth},function(e){return e.theme.mediaQueries.desktop}),x=a.c.div.withConfig({displayName:"card__CardPairInner",componentId:"sc-14d9ofs-6"})(["display:flex;justify-content:space-between;max-width:",";width:100%;margin:0 auto;@media ","{flex-direction:column;}"],function(e){return e.theme.dimensions.maxWidth},function(e){return e.theme.mediaQueries.mobile}),w=function(e){var t=e.prev,n=e.next,i=d(e,["prev","next"]);return t||n?r.a.createElement(y,i,r.a.createElement(x,null,t&&r.a.createElement(p,Object.assign({},t,{fullwidth:!n})),n&&r.a.createElement(p,n))):null}},247:function(e,t,n){"use strict";var i=n(0),r=n.n(i),a=n(243);t.a=function(e){var t=e.mdxEdges,n=t.filter(function(e,t){return t%2==0}),i=t.filter(function(e,t){return t%2!=0});return r.a.createElement("div",null,n.map(function(e,t){var n=i[t];return r.a.createElement(a.a,{prev:e,next:n,key:e.node.fields.route})}))}},249:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});n(5),n(4),n(3),n(6),n(21);var i=n(2),r=n(0),a=n.n(r),o=n(43),l=n(254),c=n.n(l);var m=Object(i.c)(o.a).withConfig({displayName:"tag__Link",componentId:"wl9txb-0"})(["color:",";background-color:",";border:0.06rem solid ",";text-decoration:none;font-family:",";display:inline-block;font-size:0.9375em;padding:0.03rem 0.84rem;&:hover{color:",";background-color:",";border:1px solid ",";}"],function(e){return e.theme.site.color.Tag.Foreground},function(e){return e.theme.site.color.Tag.Background},function(e){return e.theme.site.color.Tag.Border},function(e){return e.theme.fonts.Body},function(e){return e.theme.site.color.Tag.Hover.Foreground},function(e){return e.theme.site.color.Tag.Hover.Background},function(e){return e.theme.site.color.SubtleForeground}),d=function(e){var t=e.name,n=e.to,i=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["name","to"]);return a.a.createElement(m,{to:n,className:i.className},t)},u=function(e){var t=e.name;return a.a.createElement(d,{name:t,to:"/tag/"+c()(t)})},s=function(e){var t=e.name;return a.a.createElement(d,{name:t,to:"/author/"+c()(t)})};i.c.span.withConfig({displayName:"tag__TagSpan",componentId:"wl9txb-1"})(["color:",";font-family:",";font-size:0.8rem;display:inline-block;margin:0 0.2rem 0 0;"],function(e){return e.theme.code.color.Comment},function(e){return e.theme.fonts.Body})},287:function(e,t,n){var i=n(0);function r(e){return i.createElement("svg",e,i.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.createElement("g",{transform:"translate(-1332.000000, -587.000000)",fill:"#FFFFFF"},i.createElement("g",{transform:"translate(1150.000000, 579.000000)"},i.createElement("g",{transform:"translate(176.000000, 0.000000)"},i.createElement("polygon",{points:"16.6 8.59997559 12 13.1999756 7.4 8.59997559 6 9.99997559 12 15.9999756 18 9.99997559"}))))))}r.defaultProps={width:"12px",height:"8px",viewBox:"0 0 12 8",version:"1.1"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-65151e9f2f564e3fe49c.js.map