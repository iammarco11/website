(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"16l3":function(e,a,t){"use strict";t.r(a);t("9VmF");var r=t("q1tI"),c=t.n(r),l=t("Bl7J"),n=t("vrFN"),m=t("Wbzz"),s=t("wNgV"),o=t.n(s),i=function(e){var a=e.project;return c.a.createElement(m.Link,{to:"/projects/"+a.slug,className:"card no-decoration h-100"},c.a.createElement("img",{className:"cover",src:a.cover?a.cover.childImageSharp.resize.src:o.a,alt:a.slug+"'s image"}),c.a.createElement("div",{className:"text-dark px-4 py-4"},c.a.createElement("h6",{className:"mb-2"},a.title),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description}})))};i.defaultProps={project:null};var d=i,p=t("sada");t.d(a,"pageQuery",(function(){return u}));a.default=function(e){var a=e.data.allProjectsYaml.edges,t=Object(r.useState)(""),m=t[0],s=t[1],o=a.filter((function(e){if(e.node.title.toLowerCase().startsWith(m.toLowerCase()))return 1})).map((function(e){return c.a.createElement("div",{key:e.node.id,className:"col-xl-5 col-md-10 col-sm-6 pb-4"},c.a.createElement(d,{project:e.node}))}));return c.a.createElement(l.a,null,c.a.createElement(n.a,{title:"Projects"}),c.a.createElement(p.a,{title:"Projects"}),c.a.createElement("div",{className:"row m-0 p-1"},c.a.createElement("div",{className:"col-md-8 col-lg-9 p-2 order-2 order-md-1"},c.a.createElement("div",{className:"row mx-2 my-4"},o)),c.a.createElement("div",{className:"col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4"},c.a.createElement("div",{className:"card p-4 position-sticky",style:{top:"1rem"},id:"filter-card"},c.a.createElement("h5",{className:"my-3"},"Search & Filter"),c.a.createElement("div",{className:"mx-2"},c.a.createElement("div",null,"Search by Name"),c.a.createElement("input",{id:"search-box",type:"text",className:"form w-100 p-2 mt-2",placeholder:"Search Here",onChange:function(e){return s(e.target.value)}}),c.a.createElement("hr",null))))))};var u="1422597132"}}]);
//# sourceMappingURL=component---src-pages-projects-js-58b3da0b5f68965bad38.js.map