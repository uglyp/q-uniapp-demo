import{d as e,S as s,z as t,b as a,c as l,w as n,e as c,f as r,t as o,u,i as f,y as i,k as d}from"./index-6e705c16.js";const m=e({__name:"pinia",setup(e){const m=s(),_=t(),k=()=>{_.setUserInfo({nickname:"uglyp",avatar:"",token:"abcdef"})},C=()=>{_.clearUserInfo()},x=()=>{_.reset()};return(e,s)=>{const t=f,p=i,I=d("layout-demo-uni");return a(),l(I,null,{default:n((()=>[c(t,{class:"flex justify-center items-center text-blue-500 mt-4 mb-4"},{default:n((()=>[c(t,{class:"w-20"},{default:n((()=>[r("Count: "+o(u(m).count),1)])),_:1}),c(p,{class:"ml-2 mr-2",onClick:u(m).decrement},{default:n((()=>[r("-1")])),_:1},8,["onClick"]),c(p,{class:"ml-2 mr-2",onClick:u(m).increment},{default:n((()=>[r("+1")])),_:1},8,["onClick"]),c(p,{class:"ml-2 mr-2",onClick:u(m).reset},{default:n((()=>[r("重置")])),_:1},8,["onClick"])])),_:1}),c(t,{class:"m-8 text-4 leading-8"},{default:n((()=>[c(t,{class:"text-center"},{default:n((()=>[r(o(u(_).userInfo),1)])),_:1}),c(t,{class:"text-center"},{default:n((()=>[r("请观察小程序的store，可以看到是可以正常设置的")])),_:1}),c(p,{onClick:k},{default:n((()=>[r("设置UserInfo")])),_:1}),c(p,{onClick:C,class:"mt-4"},{default:n((()=>[r("清除UserInfo")])),_:1}),c(p,{onClick:x,class:"mt-4"},{default:n((()=>[r("reset UserStore")])),_:1})])),_:1})])),_:1})}}});export{m as default};