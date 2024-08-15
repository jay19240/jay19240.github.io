"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5447],{3289:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(4848),r=s(8453);const t={},l="Gfx2SpriteJAS",o={id:"Module Gfx2/Gfx2SpriteJAS",title:"Gfx2SpriteJAS",description:"A 2D sprite with animations.",source:"@site/docs/Module Gfx2/Gfx2SpriteJAS.md",sourceDirName:"Module Gfx2",slug:"/Module Gfx2/Gfx2SpriteJAS",permalink:"/docs/docs/Module Gfx2/Gfx2SpriteJAS",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Module Gfx2/Gfx2SpriteJAS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gfx2Particles",permalink:"/docs/docs/Module Gfx2/Gfx2Particles"},next:{title:"Gfx2SpriteJSS",permalink:"/docs/docs/Module Gfx2/Gfx2SpriteJSS"}},d={},c=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function x(n){const e={br:"br",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"gfx2spritejas",children:"Gfx2SpriteJAS"})}),"\n",(0,i.jsx)(e.p,{children:"A 2D sprite with animations.\r\nIt emit 'E_FINISHED'"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"inherit from: Gfx2Drawable"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"new Gfx2SpriteJAS"}),"(): Gfx2SpriteJAS"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"clone"}),"(jas: Gfx2SpriteJAS): Gfx2SpriteJAS",(0,i.jsx)(e.br,{}),"\nClone the object."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"jas"}),": The copy object."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getAnimations"}),"()",(0,i.jsx)(e.br,{}),"\nReturns the list of animation descriptors."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getBoundingRect"}),"(dynamicMode: boolean): Gfx2BoundingRect",(0,i.jsx)(e.br,{}),"\nReturns the bounding rect."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dynamicMode"}),": Determines if bounding rect fit the current animation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getCurrentAnimation"}),"()",(0,i.jsx)(e.br,{}),"\nReturns the current animation or null if there is no current animation."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getCurrentAnimationFrameIndex"}),"(): number",(0,i.jsx)(e.br,{}),"\nReturns the current animation frame index."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getFlip"}),"()",(0,i.jsx)(e.br,{}),"\nReturns two booleans, first is the x-axis flip flag, second is the y-axis flip flag."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getTexture"}),"()",(0,i.jsx)(e.br,{}),"\nReturns the sprite texture."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"getWorldBoundingRect"}),"(dynamicMode: boolean): Gfx2BoundingRect",(0,i.jsx)(e.br,{}),"\nReturns the bounding rect in the world space coordinates."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"dynamicMode"}),": Determines if bounding rect fit the current animation."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"loadFromFile"}),"(path: string): Promise",(0,i.jsx)(e.br,{}),"\nLoads asynchronously sprite data from a json file (jas)."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"path"}),": The file path."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"paint"}),"(): void",(0,i.jsx)(e.br,{}),"\nThe paint function."]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"play"}),"(animationName: string, looped: boolean, preventSameAnimation: boolean): void",(0,i.jsx)(e.br,{}),"\nPlay a specific animation."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"animationName"}),": The name of the animation to be played."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"looped"}),": Determines whether the animation should loop or not."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"preventSameAnimation"}),": Determines whether the same animation should be prevented from playing again."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"setAnimations"}),"(animations: JASAnimation[]): void",(0,i.jsx)(e.br,{}),"\nSet the animation descriptors."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"animations"}),": The animations data."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"setFlipX"}),"(x: boolean): void",(0,i.jsx)(e.br,{}),"\nSet flipX."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"x"}),": The x-axis flip flag."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"setFlipY"}),"(y: boolean): void",(0,i.jsx)(e.br,{}),"\nSet flipY."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"y"}),": The y-axis flip flag."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"setTexture"}),"(texture: ImageBitmap): void",(0,i.jsx)(e.br,{}),"\nSet the sprite texture."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"texture"}),": The sprite texture."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"update"}),"(ts: number): void",(0,i.jsx)(e.br,{}),"\nThe update function."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"ts"}),": The timestep."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>o});var i=s(6540);const r={},t=i.createContext(r);function l(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);