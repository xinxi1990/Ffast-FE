webpackJsonp([17],{QHaD:function(e,t,a){var l=a("XtNU");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("a2db6a0c",l,!0,{})},XtNU:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},d5hO:function(e,t,a){"use strict";function l(e){a("QHaD")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("bGai"),s={width:600,labelWidth:70,dynamic:[[{name:"id",hidden:!0},{name:"name",type:"text",span:12,label:"资源名",rules:{required:!0}},{name:"parentId",type:"treeSelect",dataFromTree:!0,span:12,label:"父资源"}],[{name:"url",type:"text",span:24,label:"菜单Url"}],[{name:"identity",type:"text",span:12,label:"标识符"},{name:"icon",type:"text",span:12,label:"图标"}],[{name:"weight",type:"text",span:12,label:"权重"}],[{name:"status",openText:"显示",closeText:"隐藏",type:"switch",span:12,label:"状态",value:1,trueValue:1,falseValue:0},{name:"resType",type:"radio",span:12,label:"类型",value:1,data:[{label:"菜单",value:1},{label:"权限",value:2}],rules:{required:!0,type:"number"}}],[{name:"addBaseCrud",type:"switch",openText:"是",closeText:"否",span:12,label:"添加基础权限",value:!1}]]},r={title:"权限菜单",dataUrl:"/sys/res/list",createUrl:"/sys/res/create",deleteUrl:"/sys/res/delete",updateUrl:"/sys/res/update",showToolbar:!0,editOptions:s},i={editOptions:s,selection:[],pageSize:20,title:"权限菜单",permsPrefix:"res",dataUrl:"/sys/res/list",createUrl:"/sys/res/create",deleteUrl:"/sys/res/delete",updateUrl:"/sys/res/update",param:{},columns:[{type:"selection",width:60,align:"center"},{key:"name",title:"资源名",minWidth:160,maxWidth:280},{key:"resType",width:80,title:"类型",enum:[{value:"菜单",id:1,el:"strong"},{value:"权限",id:2}]},{key:"identity",title:"标识符",width:200},{key:"url",title:"菜单Url",minWidth:200,maxWidth:400},{key:"parentId",title:"父资源",width:160,dataFromTree:!0},{key:"icon",width:100,title:"菜单图标",render:function(e,t){return e("Icon",{props:{type:t.row.icon}})}},{key:"weight",title:"权重",width:80},{key:"status",width:80,title:"状态",enum:["隐藏","显示"]}],searchDynamic:[[{name:"name",label:"资源名",span:4,type:"text"},{name:"identity",label:"标识符",span:4,type:"text"},{name:"url",label:"Url",span:4,type:"text"},{name:"status",type:"select",data:[{label:"显示",value:1},{label:"隐藏",value:0}],span:4,label:"状态"},{name:"resType",type:"select",data:[{label:"菜单",value:1},{label:"权限",value:2}],span:4,label:"类型"}]]},p={data:function(){return{tableOptions:i,treeOptions:r}},computed:{},methods:{},mounted:function(){},components:{CrudView:n.d}},d=function(){var e=this,t=e.$createElement;return(e._self._c||t)("CrudView",{attrs:{tableOptions:e.tableOptions,treeOptions:e.treeOptions}})},u=[],o={render:d,staticRenderFns:u},y=o,c=a("VU/8"),m=l,b=c(p,y,!1,m,"data-v-1c0d1052",null);t.default=b.exports}});