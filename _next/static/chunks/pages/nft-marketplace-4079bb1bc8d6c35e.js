(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{89859:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nft-marketplace",function(){return n(80482)}])},48378:function(e,i,n){"use strict";var t=n(85893),s=n(61227),l=n(77268),a=n(87521),r=n(31601),d=n(48583),c=n(67294),o=n(63328),x=n(17831),m=n(72150),p=n(8652),u=n(78062),f=n(37918),h=n(52621),j=n(24592),g=n(5590),v=n(2593),N=n(71100),_=n(11880),y=n(4356),w=n(1359),b=n(92069);let k=e=>{let{data:i,collectionName:n,id:k,prices:Z,listingId:C,onBuy:I}=e,L=(0,d.b9)(a.HP),{address:T}=(0,o.mA)(),[O,E]=(0,c.useState)(!1),[F,A]=(0,c.useState)(!1),[M,S]=(0,c.useState)(void 0),{listingOrder:P,listingOrderLoading:R,refetchListing:B}=(0,b.D)({orderId:C}),z=(0,c.useCallback)(async()=>{if(P&&T){E(!0);try{let{data:e}=await j.w.requestSignature(C),i={signature:e.signature,parameters:{chainId:null==P?void 0:P.chain_id,conduitKey:null==P?void 0:P.conduit_key,counter:P.counter,endTime:null==P?void 0:P.end_time,offerer:P.offerer,orderType:null==P?void 0:P.order_type,salt:null==P?void 0:P.salt,startTime:null==P?void 0:P.start_time,totalOriginalConsiderationItems:null==P?void 0:P.total_original_consideration_items,zone:null==P?void 0:P.zone,zoneHash:P.zone_hash,offer:P.offer_items.map(e=>({itemType:e.item_type,endAmount:e.end_amount,startAmount:e.start_amount,identifierOrCriteria:e.identifier_or_criteria,token:e.token})),consideration:P.consideration_items.map(e=>({itemType:e.item_type,endAmount:e.end_amount,startAmount:e.start_amount,identifierOrCriteria:e.identifier_or_criteria,recipient:e.recipient,token:e.token}))}};if(!i)return;let n=await w.B.acceptOffer({myAddress:T,order:i,chainId:null==P?void 0:P.chain_id});S(n.hash),await j.w.triggerOrderRecheck(C),I()}catch(e){E(!1),L({open:!0,message:(0,g.W)(e)})}}},[P,T,C,L]),{isLoading:D}=(0,o.BX)({hash:M,enabled:!!M,onSuccess(){A(!0),E(!1)},onError(e){E(!1),null==B||B(),L({open:!0,message:(0,g.W)(e)})}}),q=O||D,K=(0,c.useMemo)(()=>{var e,i;return null==P?void 0:null===(e=P.offer_items)||void 0===e?void 0:null===(i=e[0])||void 0===i?void 0:i.token},[P]),{type:X}=(0,y.v)({chainId:null==P?void 0:P.chain_id,tokenAddress:K}),H="lai-capsule"===X,{tier:W,daysLeft:Y,tierExpirationDurationDays:$,tierExpirationDurationMonths:Q,tierLoading:U}=(0,h.r)({chainId:null==P?void 0:P.chain_id,tokenAddress:K,nftId:k,enabled:H});return(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:h-[469px] md:overflow-hidden",children:[(0,t.jsxs)("div",{className:"md:h-[469px] min-h-[200px] relative",children:[H&&(0,t.jsx)(f.Z,{tier:W}),(0,t.jsx)("img",{src:i.image,alt:i.name,className:"object-cover object-center w-full h-full"}),H&&(0,t.jsx)(u.Z,{className:"mt-[-27px] relative z-10",tier:W,tierExpirationDurationMonths:Q})]}),(0,t.jsxs)("div",{className:"px-[20px] grid grid-cols-1 gap-[20px] py-[20px] overflow-auto md:max-h-[469px]",children:[H?(0,t.jsxs)("div",{children:[(0,t.jsx)(p.Z,{tier:W,nftId:k}),(0,t.jsx)(m.Z,{tier:W,daysLeft:Y,tierExpirationDurationDays:$})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-[22px] font-bold",children:i.name}),(0,t.jsx)(N.Z,{collectionName:i.name,nftId:k}),i.description&&(0,t.jsx)("p",{className:"italic mt-[10px]",children:i.description})]}),(0,t.jsxs)("div",{className:"relative flex flex-col w-full justify-end",children:[R&&(0,t.jsx)(x.Z,{}),!R&&(0,t.jsx)(l.Z,{validChains:[null==P?void 0:P.chain_id],showMessage:!1,className:"flex flex-col w-full justify-end gap-[10px]",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-full",children:(0,t.jsx)(r.Z,{})}),(0,t.jsx)("div",{className:"flex w-full",children:F?(0,t.jsx)("div",{className:"min-h-[50px] flex w-full items-center justify-center text-center p-[20px] rounded-full from-theme-main/20 bg-gradient-to-r",children:(0,t.jsxs)("span",{className:"w-full flex items-center gap-[4px] justify-center",children:[(0,t.jsx)("span",{children:"Bought for"}),P&&(0,t.jsx)("span",{children:Z.map(e=>(0,t.jsx)(_.Z,{paymentToken:e.token,price:v.O$.from(e.price),chainId:P.chain_id},e.token))})]})}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(s.Z,{className:"w-full",onClick:z,disabled:q,loading:q,children:(0,t.jsxs)("span",{className:"w-full flex items-center gap-[4px] justify-center",children:[(0,t.jsx)("span",{children:"Buy for"}),P&&(0,t.jsx)("span",{children:Z.map(e=>(0,t.jsx)(_.Z,{paymentToken:e.token,price:v.O$.from(e.price),chainId:P.chain_id},e.token))})]})})})}),!F&&(0,t.jsx)("p",{className:"block text-xs text-[#828282]",children:"* You might need to approve contract"})]})})]})]})]})};i.Z=k},92069:function(e,i,n){"use strict";n.d(i,{D:function(){return l}});var t=n(17e3),s=n(24592);function l(e){let{orderId:i}=e,{data:n,isLoading:l,refetch:a}=(0,t.a)({queryKey:["listing-order",{orderId:i}],queryFn:async()=>await s.w.getListing({orderId:i}),enabled:!!i});return{listingOrder:n,listingOrderLoading:l,refetchListing:a}}},80482:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return B}});var t=n(85893),s=n(41650),l=n(66906),a=n(75994),r=n(63508),d=n(68200),c=n(14644);let o=e=>{let{showHeading:i}=e;return(0,t.jsx)(c.Z,{children:i&&(0,t.jsx)("div",{className:"absolute left-0 bottom-0 right-0",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"font-shape flex flex-col pb-[20px]",children:[(0,t.jsx)("span",{className:"text-[140px] sm:text-[200px] font-bold leading-none mb-[-0.14em] ml-[-.04em]",children:"NFT"}),(0,t.jsx)("span",{className:"text-theme-main  text-[35px] sm:text-[51px] font-bold leading-none m-0",children:"MARKETPLACE"})]})})})})};var x=n(67294),m=n(58293),p=n(61227),u=n(41664),f=n.n(u),h=n(72696),j=n(17e3),g=n(63328),v=n(2974),N=n(69392),_=n(24592),y=n(76201),w=n(58298),b=n(2593),k=n(48583),Z=n(13264),C=n(62714),I=n(48378),L=n(92350),T=n(12075),O=n(29537),E=n(11880);let F=e=>{let{className:i,nftOffer:n,onBuy:s,showChain:l=!0}=e,{data:a,isLoading:r,collectionName:d,collectionNameLoading:c}=(0,Z.p)({tokenAddress:n.token,id:n.id,tokenChainId:n.chain_id}),{data:o,isLoading:m}=(0,C._)({uri:a}),u=(0,x.useMemo)(()=>(0,T.L)(null==n?void 0:n.price),[n]),f=(0,k.b9)(L.R),h=(0,x.useCallback)(()=>{o&&n&&f({open:!0,nftCollection:{name:d},nft:o,nftId:n.id,children:(0,t.jsx)(I.Z,{data:o,collectionName:d,id:n.id,prices:u,listingId:n.listing_id,onBuy:s})})},[f,o,d,u,n]);return(0,t.jsx)(O.Z,{data:o,isLoading:r||c||m,collectionName:d,className:i,nftId:n.id,nftChainId:l?n.chain_id:void 0,collectionAddress:n.token,bottomContent:(0,t.jsxs)("div",{className:"w-full flex flex-col items-center pt-[10px]",children:[(0,t.jsxs)("div",{className:"flex flex-col items-start flex-wrap justify-between w-full mb-[10px]",children:[(0,t.jsx)("p",{className:"flex items-center gap-[4px] leading-none whitespace-nowrap",children:(0,t.jsx)("span",{className:"text-[20px]",children:u.map(e=>(0,t.jsx)(E.Z,{paymentToken:e.token,price:b.O$.from(e.price),chainId:n.chain_id},e.token))})}),(0,t.jsxs)("p",{className:"flex items-center gap-[4px] whitespace-nowrap text-[10px]",children:[(0,t.jsx)("span",{className:"text-[10px]",children:"Ends in:"}),(0,t.jsx)("span",{children:(0,N.t)(n.end_time)})]})]}),(0,t.jsx)("div",{className:"flex items-center w-full justify-center",children:(0,t.jsx)(p.Z,{onClick:h,borderFullyRounded:!0,className:"w-full",children:"BUY"})})]})})};var A=n(67339);let M=e=>{let{collectionAddress:i,offerer:n,price:s,limit:l,page:a,clearFilters:r}=e,{nftData:d,listingsLoading:c,refetchListings:o}=function(e){let{collectionAddress:i,offerer:n,price:t,limit:s,page:l}=e,{setCount:a,setFilterPage:r}=(0,x.useContext)(m._),d=(0,g.xx)(),{data:c,isLoading:o,refetch:p}=(0,j.a)({queryKey:["listings",{collectionAddress:i,offerer:n,price:t,page:l,limit:s}],queryFn:async()=>await _.w.getListings({collection:i,offerer:n,price:t,page:l,limit:s}),onSuccess(e){a(e.count)},onError(){r(1)},enabled:!!d}),u=(0,N.H)(null==c?void 0:c.data),f=(0,x.useMemo)(()=>{var e;return!u||u.length<1?[]:null!==(e=u.map(e=>{let{id:i,token:n}=e;return{address:n,abi:v.j,functionName:"tokenURI",args:[i]}}))&&void 0!==e?e:[]},[u]),{data:h,isLoading:y}=(0,g.Dm)({contracts:f,enabled:!!f&&f.length>0,select:e=>e?e.map((e,i)=>{var n;return{uri:null==e?void 0:e.replace(/\.json\d*/g,".json"),id:null==u?void 0:null===(n=u[i])||void 0===n?void 0:n.id}}):e});return{listings:c,listingsLoading:o||y,nftUris:h,nftData:u,refetchListings:p}}({collectionAddress:i,offerer:n,price:s,limit:l,page:a}),{itemHasListing:u,refetchListings:b}=(0,y.k)({collectionAddress:i,page:1,limit:1e3}),k=(0,x.useMemo)(()=>i||n,[i,n]),Z=(0,x.useCallback)(()=>{o(),b()},[o,b]);return(0,t.jsx)(w.Z,{loading:c,empty:!c&&0===d.length,emptyMessage:k?"No listings found using your filters.":void 0,emptyCta:(0,t.jsx)(t.Fragment,{children:k?(0,t.jsx)(p.Z,{onClick:r,className:"mt-[20px]",children:"CLEAR FILTERS"}):(0,t.jsx)(f(),{className:"mt-[20px]",href:h.t.myNfts.href,children:(0,t.jsx)(p.Z,{children:"LIST MY NFT"})})}),children:null==d?void 0:d.map(e=>u(e.id)?(0,t.jsx)(A.Z,{nftOffer:e,showChain:!0,onCancelListing:Z},e.listing_id):(0,t.jsx)(F,{nftOffer:e,onBuy:Z},e.listing_id))})},S=()=>{let{filterCollection:e,filterOfferer:i,filterPrice:n,filterLimit:s,filterPage:l,clearFilters:a}=(0,x.useContext)(m._);return(0,t.jsx)(M,{collectionAddress:e,offerer:i,price:n,limit:s,page:l,clearFilters:a})};var P=n(20345),R=n(85275);function B(e){let{initialQuery:i}=e,n=(0,s.X)("enabledNftMarketplacePage");return n?(0,t.jsx)(l.Z,{title:"NFT Marketplace",children:(0,t.jsxs)("main",{className:"w-full flex flex-grow flex-col justify-between bg-[#0F1013]",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(o,{}),(0,t.jsx)(P.Z,{})]}),(0,t.jsxs)(m.v,{initialQuery:i,children:[(0,t.jsx)(r.Z,{className:"mb-[20px]"}),(0,t.jsxs)("div",{className:"md:container pb-[20px] md:pt-[20px] md:pb-[50px]",children:[(0,t.jsxs)("div",{className:"hidden md:grid gap-[20px] md:grid-cols-[235px_1fr] xl:grid-cols-[285px_1fr] items-start mb-[20px]",children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{className:"relative z-10",children:(0,t.jsx)(d.Z,{className:"max-w-[185px]"})})]}),(0,t.jsxs)("div",{className:"grid gap-[20px] md:grid-cols-[235px_1fr] xl:grid-cols-[285px_1fr] items-start",children:[(0,t.jsx)(a.Z,{includeStyles:!0,classNameWrapper:"hidden md:block"}),(0,t.jsxs)("div",{className:"container md:px-0",children:[(0,t.jsx)(S,{}),(0,t.jsx)(R.Z,{})]})]})]})]})]})}):(0,t.jsx)(l.Z,{title:"NFT Marketplace",children:(0,t.jsxs)("main",{className:"w-full flex flex-grow flex-col justify-between bg-[#0F1013]",children:[(0,t.jsx)("div",{children:(0,t.jsx)(o,{})}),(0,t.jsx)("div",{className:"md:container py-[100px] md:py-[150px]",children:(0,t.jsxs)("div",{className:"text-[24px] sm:text-[40px] md:text-[60px] text-center font-bold tracking-widest leading-none w-full flex flex-col gap-[30px]",children:[(0,t.jsx)("p",{className:"text-[1.4em]",children:"NFT MARKETPLACE"}),(0,t.jsx)("p",{children:"COMING SOON"})]})})]})})}B.getInitialProps=async e=>{let{query:i}=e;return{initialQuery:i}}}},function(e){e.O(0,[5048,8764,5812,5678,6906,1703,4312,1694,9774,2888,179],function(){return e(e.s=89859)}),_N_E=e.O()}]);