(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb7ff7d","chunk-2d0afe49"],{"0535":function(e,t,n){},"0feb":function(e,t,n){"use strict";n.r(t),n.d(t,"getInfo",function(){return i}),n.d(t,"getInfoById",function(){return a}),n.d(t,"updateInfo",function(){return o}),n.d(t,"addInfo",function(){return l}),n.d(t,"deleteInfoById",function(){return s}),n.d(t,"deleteAll",function(){return c}),n.d(t,"getGroup",function(){return u}),n.d(t,"getPermission",function(){return d}),n.d(t,"Model",function(){return f}),n.d(t,"SearchModel",function(){return p});n("7f7f");var r=n("1c1e");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(r["a"])({url:"/api/permissions",method:"get",params:{pageSize:n,page:t,name:e.name,pid:e.pid,type:e.type}})}function a(e){return Object(r["a"])({url:"/api/permissions/"+e,method:"get"})}function o(e,t){return Object(r["a"])({url:"/api/permissions/"+e,method:"patch",data:t})}function l(e){return Object(r["a"])({url:"/api/permissions",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/api/permissions/"+e,method:"delete"})}function c(e){return Object(r["a"])({url:"/api/permissions/deleteAll",method:"post",data:{ids:e}})}function u(){return Object(r["a"])({url:"/api/permissions/getGroup",method:"post"})}function d(){return Object(r["a"])({url:"/api/permissions/info",method:"get"})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this.name=e,this.pid=t,this.type=n,this.route_name=r,this.remark=i}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.name=e,this.pid=t,this.type=n}},"2c35":function(e,t,n){"use strict";var r=n("0535"),i=n.n(r);i.a},"3f93":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("7618"),i={error:function(e,t){var n=this.errorHandle(t);e.$message({type:"error",message:n})},errorHandle:function(e){var t="无法完成指定的操作，无法提供信息";return e.message&&"string"==typeof e.message&&(t="",t=e.message),e.message&&"object"==Object(r["a"])(e.message)&&(t=this.errorHandleForEachObject(e.message)),e.errors&&"object"==Object(r["a"])(e.errors)&&(t=this.errorHandleForEachObject(e.errors)),t=t.substr(0,t.length-2),t},errorHandleForEachObject:function(e){var t="";for(var n in e)t=t+e[n].join(",")+"☆";return t},success:function(e,t){e.$message({message:t,type:"success"})},errorTips:function(e,t){e.$message.error({message:t})}}},"5df3":function(e,t,n){"use strict";var r=n("02f4")(!0);n("01f9")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},7514:function(e,t,n){"use strict";var r=n("5ca1"),i=n("0a49")(5),a="find",o=!0;a in[]&&Array(1)[a](function(){o=!1}),r(r.P+r.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(a)},ecab:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"permission"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{id:"toolbar",inline:!0,model:e.searchForm}},[n("el-form-item",{attrs:{label:"功能名称"}},[n("el-input",{attrs:{placeholder:"请输入功能"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"功能类型"}},[n("el-select",{attrs:{clearable:"",placeholder:"功能类型"},model:{value:e.searchForm.type,callback:function(t){e.$set(e.searchForm,"type",t)},expression:" searchForm.type"}},[n("el-option",{attrs:{label:"功能组",value:"1"}}),e._v(" "),n("el-option",{attrs:{label:"功能路由",value:"2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"功能组"}},[n("el-select",{attrs:{clearable:"",placeholder:"功能组"},model:{value:e.searchForm.pid,callback:function(t){e.$set(e.searchForm,"pid",t)},expression:"searchForm.pid"}},e._l(e.permissions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{plain:""},on:{click:function(t){return e.find()}}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"info",plain:""},on:{click:function(t){return e.findReset()}}},[e._v("重置")])],1)],1),e._v(" "),n("div",{attrs:{id:"datagrid"}},[n("div",{staticClass:"toolbar"},[n("el-button",{attrs:{plain:"",icon:"el-icon-plus"},on:{click:function(t){return e.add()}}},[e._v("添加功能")]),e._v(" "),n("el-button",{attrs:{plain:"",icon:"el-icon-plus"},on:{click:function(t){return e.addGroup()}}},[e._v("添加组")]),e._v(" "),n("el-alert",{attrs:{title:"为了演示方便，前端屏蔽了序号为1-4号功能的内容编辑操作，具体可以查看详细代码",type:"warning"}})],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"select-all":e.selectChange,"selection-change":e.selectChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{prop:"id",label:"序号",width:"50"}}),e._v(" "),n("el-table-column",{attrs:{label:"功能名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?n("span",[e._v(e._s(t.row.name))]):n("span",[e._v("    |-"+e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"功能类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:1===t.row.type?"primary":"success","close-transition":""}},[e._v(e._s(1===t.row.type?"功能分组":"功能节点"))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"所属组",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("featureGroup")(t.row.pid,e.permissions)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"route_name",label:"后端路由",width:"180"}}),e._v(" "),n("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.id>4?[2===t.row.type?n("el-tooltip",{attrs:{content:"编辑功能",placement:"right-end",effect:"light"}},[n("el-button",{attrs:{plain:"",icon:"el-icon-edit",type:"primary",size:"small"},on:{click:function(n){return e.edit(t.row)}}})],1):e._e(),e._v(" "),1===t.row.type?n("el-tooltip",{attrs:{content:"编辑组",placement:"right-end",effect:"light"}},[n("el-button",{attrs:{plain:"",icon:"el-icon-edit",type:"primary",size:"small"},on:{click:function(n){return e.edit(t.row)}}})],1):e._e(),e._v(" "),n("el-tooltip",{attrs:{content:"删除",placement:"right-end",effect:"light"}},[n("el-button",{attrs:{plain:"",icon:"el-icon-delete",type:"danger",size:"small"},on:{click:function(n){return e.del(t.row)}}})],1)]:void 0}}],null,!0)})],1),e._v(" "),n("el-row",{staticClass:"page"},[n("el-col",{attrs:{span:2,offset:1}},[n("el-button",{attrs:{type:"danger",plain:""},on:{click:function(t){return e.delAll()}}},[e._v("删除选择")])],1),e._v(" "),n("el-col",{attrs:{span:20}},[n("el-pagination",{attrs:{background:"","current-page":e.current_page,"page-sizes":[10,20,25,50],layout:"total,sizes,prev, pager, next","page-size":e.pageSize,total:e.total},on:{"current-change":e.pagination,"size-change":e.sizeChange,"update:currentPage":function(t){e.current_page=t},"update:current-page":function(t){e.current_page=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1)],1)],1),e._v(" "),n("el-dialog",{ref:"permission",attrs:{title:"功能管理",center:"",rules:e.rules,visible:e.editDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"功能名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"功能组",prop:"pid"}},[n("el-select",{attrs:{placeholder:"请选择所属功能组"},model:{value:e.form.pid,callback:function(t){e.$set(e.form,"pid",t)},expression:"form.pid"}},e._l(e.permissions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"后端路由",prop:"route_name"}},[n("el-input",{model:{value:e.form.route_name,callback:function(t){e.$set(e.form,"route_name",t)},expression:"form.route_name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.save()}}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:function(t){return e.cancel()}}},[e._v("取 消")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"组管理",center:"",visible:e.isGroup,"close-on-click-modal":!1},on:{"update:visible":function(t){e.isGroup=t}}},[n("el-form",{attrs:{model:e.form,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"组名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"所属功能组",prop:"pid"}},[n("el-select",{attrs:{placeholder:"请选择所属功能组"},model:{value:e.form.pid,callback:function(t){e.$set(e.form,"pid",t)},expression:"form.pid"}},[n("el-option",{attrs:{label:"全局",value:0}},[e._v("全局")]),e._v(" "),e._l(e.permissions,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})],2)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"组备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.saveGroup()}}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:function(t){return e.cancelGroup()}}},[e._v("取 消")])],1)],1)],1)},i=[],a=(n("7f7f"),n("7514"),n("5df3"),n("ac6a"),n("20d6"),n("0feb")),o=(n("f121"),n("3f93")),l={name:"permission_index",data:function(){return{searchForm:new a["SearchModel"],tableData:[],editDialogFormVisible:!1,uploadId:"",teachers:[],permissions:[],form:new a["Model"],ruleForm:new a["Model"],loading:!1,isNew:!1,isEdit:!1,isGroup:!1,current_page:1,total:0,pageSize:10,session_id:null,multiSelect:[],rules:{name:[{required:!0,message:"请输入功能名称",trigger:"blur"}]}}},methods:{find:function(){this.fetchData()},findReset:function(){this.searchForm=new a["SearchModel"](this.session_id,null,null),this.fetchData()},fetchData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.searchForm,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.current_page,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.pageSize;this.loading=!0,Object(a["getInfo"])(t,n,r).then(function(t){var n=t.data;e.tableData=n,e.total=t.meta.total,e.loading=!1}).catch(function(t){o["a"].error(e,t.response.data),e.loading=!1})},addGroup:function(){this.isNew=!0,this.isGroup=!0,this.form=new a["Model"](null,0,1)},add:function(){this.editDialogFormVisible=!0,this.isNew=!0,this.form=new a["Model"](null,null,2)},edit:function(e){var t=this,n=e.id;this.uploadId=n,Object(a["getInfoById"])(n).then(function(n){var r=n.data;t.form=r,t.isEdit=!0,1===e.type?t.isGroup=!0:t.editDialogFormVisible=!0})},save:function(){this.editDialogFormVisible=!1,this.isNew&&(this.isNew=!1,this.newData()),this.isEdit&&(this.isEdit=!1,this.updateData())},saveGroup:function(){this.isGroup=!1,this.isNew&&(this.isNew=!1,this.newData()),this.isEdit&&(this.isEdit=!1,this.updateData())},cancel:function(){this.editDialogFormVisible=!1,this.isNew=!1,this.isEdit=!1},cancelGroup:function(){this.isGroup=!1,this.isNew=!1,this.isEdit=!1},updateData:function(){var e=this;Object(a["updateInfo"])(this.uploadId,this.form).then(function(t){e.fetchData(),e.getGroup(),o["a"].success(e,"信息更新成功")}).catch(function(t){o["a"].error(e,t.response.data)})},newData:function(){var e=this;Object(a["addInfo"])(this.form).then(function(t){o["a"].success(e,"功能信息添加成功"),e.fetchData(),e.getGroup()}).catch(function(t){o["a"].error(e,t.response.data)})},del:function(e){var t=this;this.$confirm("此操作将永久删除该信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n=e.id;t.tableData.findIndex(function(e){return e.id==n}),Object(a["deleteInfoById"])(n).then(function(e){e.status_code;t.$message({type:"success",message:"删除成功!"}),t.fetchData()}).catch(function(e){o["a"].error(t,e.response.data)})})},selectChange:function(e){this.multiSelect=e},delAll:function(){var e=this;this.$confirm("此操作将永久删除该功能, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[];e.multiSelect.forEach(function(e){t.push(e.id)}),Object(a["deleteAll"])(t).then(function(t){e.fetchData()}).catch(function(e){o["a"].error(e.response.data)})}).catch(function(){o["a"].errorTips(e,"删除操作已经取消")})},getGroup:function(){var e=this;return new Promise(function(t,n){Object(a["getGroup"])().then(function(n){e.permissions=n.data,t("调用信息功能组信息正确")}).catch(function(e){n("调用信息功能组信息出错")})})},pagination:function(e){this.current_page=e,this.fetchData()},sizeChange:function(e){this.pageSize=e,this.fetchData()}},mounted:function(){},created:function(){var e=this;Promise.all([this.getGroup()]).then(function(t){e.fetchData()})},filters:{featureGroup:function(e,t){if(0===e)return"顶层";var n=t.find(function(t){return t.id===e});return n.name}}},s=l,c=(n("2c35"),n("2877")),u=Object(c["a"])(s,r,i,!1,null,null,null);t["default"]=u.exports}}]);