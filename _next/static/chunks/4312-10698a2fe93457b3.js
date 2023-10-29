"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4312],{58298:function(e,t,n){var l=n(85893),i=n(17831),s=n(94184),a=n.n(s);let r=e=>{let{children:t,className:n,loading:s,empty:r,emptyMessage:c="No listings found.",emptyCta:d,hasNoSidebar:o}=e;return(0,l.jsxs)("div",{className:a()("w-full grid grid-cols-2 gap-[10px] sm:gap-[20px] relative min-h-[150px]",{"sm:grid-cols-2 lg:grid-cols-3":!o,"sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":o},n),children:[s&&(0,l.jsx)(i.Z,{}),!s&&r&&(0,l.jsxs)("div",{className:"col-span-4 py-[40px] px-[20px] text-center rounded-[20px] bg-theme-nft-item-bg text-white flex flex-col items-center justify-center",children:[c,d]}),t]})};t.Z=r},29537:function(e,t,n){n.d(t,{Z:function(){return v}});var l=n(85893),i=n(4356),s=n(17831),a=n(72150),r=n(8652),c=n(78062),d=n(37918),o=n(52621),x=n(31601),m=n(94184),f=n.n(m);let p=e=>{let{isLoading:t,data:n,bottomContent:i,className:m,collectionName:p,nftId:u,nftChainId:h,collectionAddress:g}=e,{tier:v,daysLeft:j,tierExpirationDurationDays:b,tierExpirationDurationMonths:N,tierLoading:w}=(0,o.r)({tokenAddress:g,chainId:h,nftId:u}),k=t||w;return(0,l.jsxs)("div",{className:f()("min-h-[200px] bg-theme-nft-item-bg relative rounded-[20px] overflow-hidden flex flex-col",m),children:[k&&(0,l.jsx)(s.Z,{}),!k&&n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex-none h-0 pb-[100%] relative w-full overflow-hidden",children:[(0,l.jsx)(d.Z,{tier:v}),(0,l.jsx)("img",{src:n.image,alt:n.name,className:f()("object-cover object-center w-full h-full absolute top-0 left-0",{"opacity-60":!0})})]}),(0,l.jsx)(c.Z,{className:"mt-[-27px] relative",tier:v,tierExpirationDurationMonths:N}),(0,l.jsxs)("div",{className:"p-[10px] sm:p-[20px] flex-auto flex flex-col w-full",children:[(0,l.jsx)("div",{className:"flex-auto",children:h&&(0,l.jsx)(x.Z,{propChainId:h})}),(0,l.jsx)(r.Z,{tier:v,nftId:u}),(0,l.jsx)(a.Z,{tier:v,daysLeft:j,tierExpirationDurationDays:b}),!!i&&(0,l.jsx)("div",{className:"flex-none",children:i})]})]})]})};var u=n(71100);let h=e=>{let{isLoading:t,data:n,bottomContent:a,className:r,collectionName:c,nftId:d,nftChainId:o,collectionAddress:m}=e,{type:p}=(0,i.v)({chainId:o,tokenAddress:m});return(0,l.jsxs)("div",{className:f()("min-h-[200px] bg-theme-nft-item-bg relative rounded-[20px] overflow-hidden flex flex-col",r),children:[t&&(0,l.jsx)(s.Z,{}),n&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex-none h-0 pb-[100%] relative w-full overflow-hidden",children:(0,l.jsx)("img",{src:n.image,alt:n.name,className:"object-cover object-center w-full h-full absolute top-0 left-0"})}),(0,l.jsxs)("div",{className:"p-[10px] sm:p-[20px] flex-auto flex flex-col w-full",children:[(0,l.jsxs)("div",{className:"flex-auto",children:[o&&(0,l.jsx)(x.Z,{propChainId:o}),"lai-capsule"!==p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(u.Z,{collectionName:c,nftId:d}),(0,l.jsx)("p",{className:"text-[4.5vw] sm:text-[22px] leading-[1.1em] font-bold",children:n.name})]})]}),!!a&&(0,l.jsx)("div",{className:"flex-none",children:a})]})]})]})},g=e=>{let{nftChainId:t,collectionAddress:n}=e,{type:s}=(0,i.v)({chainId:t,tokenAddress:n});return"lai-capsule"===s?(0,l.jsx)(p,{...e}):(0,l.jsx)(h,{...e})};var v=g},20345:function(e,t,n){var l=n(85893),i=n(94184),s=n.n(i),a=n(41664),r=n.n(a),c=n(39332),d=n(72696);let o=()=>{let e=(0,c.usePathname)();return(0,l.jsx)("div",{className:"w-full bg-theme-main overflow-hidden",children:(0,l.jsx)("div",{className:"container px-0",children:(0,l.jsx)("div",{className:"grid grid-cols-3 items-stretch min-h-[48px] sm:min-h-[60px]",children:d.M.map((t,n)=>{let{title:i,href:a}=t;return(0,l.jsx)(r(),{href:a,className:s()("w-full uppercase font-bold text-center p-[5px] sm:py-[20px] text-[12px] sm:text-[24px] transition-colors flex items-center justify-center leading-none relative text-theme-main-text",{"bg-[#fff] ":e===a,"bg-theme-main hover:bg-[#fff]":e!==a,"before:block before:h-[100vw] top-0 before:w-[1px] before:bg-black before:absolute before:left-[-0.5px]":n>0}),children:i},i)})})})})};t.Z=o},14644:function(e,t,n){var l=n(85893),i=n(25675),s=n.n(i);let a=e=>{let{children:t}=e;return(0,l.jsxs)("div",{className:"relative h-[453px] min-h-[30vh] max-h-[40vh] w-full overflow-hidden",children:[(0,l.jsx)(s(),{src:"/nft-marketplace/nft-marketplace-hero.webp",alt:"Hero Image",className:"events-none w-full h-full object-cover object-center",width:1920,height:1080}),(0,l.jsx)("div",{className:"absolute left-0 top-0 right-0 bottom-0",style:{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%)"}}),t]})};t.Z=a},67339:function(e,t,n){var l=n(85893),i=n(61227),s=n(2593),a=n(48583),r=n(67294),c=n(4356),d=n(13264),o=n(62714),x=n(20955),m=n(92350),f=n(69392),p=n(12075),u=n(29537),h=n(11880);let g=e=>{let{className:t,nftOffer:n,onCancelListing:g,showChain:v=!0}=e,{data:j,isLoading:b,collectionName:N,collectionNameLoading:w}=(0,d.p)({tokenAddress:n.token,id:n.id,tokenChainId:n.chain_id}),{data:k,isLoading:y}=(0,o._)({uri:j}),{type:I}=(0,c.v)({chainId:n.chain_id,tokenAddress:n.token}),Z=(0,r.useMemo)(()=>(0,p.L)(null==n?void 0:n.price),[n]),_=(0,a.b9)(m.y),C=(0,r.useCallback)(()=>{k&&n&&_({open:!0,nftCollection:{name:N},nft:k,nftId:n.id,listing_id:n.listing_id,children:(0,l.jsx)(x.Z,{data:k,collectionName:N,collectionAddress:n.token,nftChainId:n.chain_id,id:n.id,prices:Z,listing_id:n.listing_id,end_time:n.end_time,listing:n,onSuccessCb:g})})},[_,k,n,N,Z]);return(0,l.jsx)(u.Z,{data:k,isLoading:b||w||y,collectionName:N,collectionAddress:n.token,className:t,nftId:n.id,nftChainId:v?n.chain_id:void 0,bottomContent:(0,l.jsxs)("div",{className:"w-full flex flex-col items-center pt-[10px]",children:[(0,l.jsxs)("div",{className:"flex flex-col items-start flex-wrap justify-between w-full mb-[10px]",children:[(0,l.jsx)("p",{className:"flex items-center gap-[4px] leading-none whitespace-nowrap",children:(0,l.jsx)("span",{className:"text-[20px]",children:Z.map(e=>(0,l.jsx)(h.Z,{paymentToken:e.token,price:s.O$.from(e.price),chainId:n.chain_id},e.token))})}),(0,l.jsxs)("p",{className:"flex items-center gap-[4px] whitespace-nowrap text-[10px]",children:[(0,l.jsx)("span",{className:"text-[10px]",children:"Ends in:"}),(0,l.jsx)("span",{children:(0,f.t)(n.end_time)})]})]}),(0,l.jsx)("div",{className:"flex items-center w-full justify-center",children:(0,l.jsx)(i.Z,{onClick:C,variant:"theme-main-outline",borderFullyRounded:!0,className:"w-full",children:"CANCEL LISTING"})})]})})};t.Z=g},72696:function(e,t,n){n.d(t,{M:function(){return i},t:function(){return l}});let l={marketplace:{title:"NFT Marketplace",href:"/nft-marketplace"},myNfts:{title:"My NFTs",href:"/nft-marketplace/my-nfts"},myListings:{title:"My Listings",href:"/nft-marketplace/my-listings"}},i=[l.marketplace,l.myNfts,l.myListings].filter(e=>{let{hidden:t}=e;return!t})},76201:function(e,t,n){n.d(t,{k:function(){return d}});var l=n(17e3),i=n(67294),s=n(63328),a=n(2974),r=n(69392),c=n(24592);function d(e){let{collectionAddress:t,page:n=1,limit:d=50}=e,{address:o}=(0,s.mA)(),x=(0,s.xx)(),{data:m,isLoading:f,refetch:p}=(0,l.a)({queryKey:["listings",{collectionAddress:t,address:o,page:n,limit:d}],queryFn:async()=>await c.w.getListings({collection:t,offerer:o,page:n,limit:d}),enabled:!!x&&!!o}),u=(0,i.useMemo)(()=>(0,r.H)(null==m?void 0:m.data),[m]),h=(0,i.useMemo)(()=>{var e;return t&&u&&!(u.length<1)&&null!==(e=u.map(e=>{let{id:n,chain_id:l}=e;return{address:t,abi:a.j,functionName:"tokenURI",args:[n],chainId:l}}))&&void 0!==e?e:[]},[u,t]),{data:g}=(0,s.Dm)({contracts:h,enabled:h.length>0&&!!t,select:e=>e?e.map((e,t)=>{var n;return{uri:null==e?void 0:e.replace(/\.json\d*/g,".json"),id:null==u?void 0:null===(n=u[t])||void 0===n?void 0:n.id}}):e}),v=(0,i.useMemo)(()=>u.map(e=>e.id),[u]),j=(0,i.useCallback)(e=>v.includes(e),[v]);return{listings:m,listingsLoading:f,refetchListings:p,nftUris:g,nftData:u,itemHasListing:j}}},20853:function(e,t,n){n.d(t,{k:function(){return function e(t,n){return!!t&&!!n&&(t===n||!!t.parentNode&&e(t.parentNode,n))}}})}}]);