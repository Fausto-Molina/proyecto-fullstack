(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0851"],{"9d5e":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.headers,items:t.notas,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("NOTAS")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-text-field",{attrs:{flat:"",color:"white","solo-inverted":"","hide-details":"","background-color":"teal accent-4","prepend-inner-icon":"mdi-magnify",label:"Busqueda"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t.$vuetify.breakpoint.mdAndUp?[a("v-spacer"),a("v-select",{attrs:{color:"white","background-color":"teal accent-4",flat:"","solo-inverted":"","hide-details":"",items:t.headers4,"prepend-inner-icon":"mdi-magnify",label:"Modo de Busqueda "},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})]:t._e(),a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"auto"},model:{value:t.dialog1,callback:function(e){t.dialog1=e},expression:"dialog1"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[t._v("Selecione un Estudiante?")]),a("v-spacer"),a("v-text-field",{attrs:{flat:"",color:"white","solo-inverted":"","hide-details":"","background-color":"teal accent-4","prepend-inner-icon":"mdi-magnify",label:"Busqueda"},model:{value:t.search1,callback:function(e){t.search1=e},expression:"search1"}}),t.$vuetify.breakpoint.mdAndUp?[a("v-spacer"),a("v-select",{attrs:{color:"white","background-color":"teal accent-4",flat:"","solo-inverted":"","hide-details":"",items:t.headers2,"prepend-inner-icon":"mdi-magnify",label:"Modo de Busqueda "},model:{value:t.sortBy1,callback:function(e){t.sortBy1=e},expression:"sortBy1"}})]:t._e()],2),a("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search1,headers:t.headers1,items:t.estudoiates,"single-select":t.singleSelect=!0,"item-key":"_id","show-select":""},scopedSlots:t._u([{key:"top",fn:function(){},proxy:!0}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:function(e){t.dialog1=!1}}},[t._v(" Cancelar ")]),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:t.dessavilitar1},on:{click:function(e){t.dialog1=!1}}},[t._v(" Guardar ")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"teal accent-4",dark:""}},"v-btn",s,!1),o),[t._v(" Nueva nota ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{elevation:"50"}},[a("v-card-title",[a("span",{attrs:{dark:""}},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-btn",{staticClass:"ma-2 white--text",attrs:{color:"teal accent-4"},on:{click:function(e){t.dialog1=!0}}},[t._v(" SELECIONE ESTUDIANTE ")])],1),a("v-col",{attrs:{cols:"20",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.todasMaterias,required:"",rules:t.materia1,label:"MATERIA"},model:{value:t.materia,callback:function(e){t.materia=e},expression:"materia"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.valores,required:"",rules:t.nota1,label:"SELECIONE LA NOTA"},model:{value:t.nota,callback:function(e){t.nota=e},expression:"nota"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:t.periodos,required:"",rules:t.periodo1,label:"SELECIONE EL PERIODO"},model:{value:t.periodo,callback:function(e){t.periodo=e},expression:"periodo"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4"},on:{click:t.close}},[t._v(" Cancel ")]),[a("v-btn",{staticClass:"ma-2",attrs:{color:"teal accent-4",disabled:t.dessavilitar},on:{click:t.save}},[t._v(" Guardar ")])]],2)],1)],1),a("v-col",{attrs:{cols:"auto"}},[a("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-toolbar",{attrs:{color:"teal accent-4",dark:""}},[t._v("REGISTRO DE TODAS LAS NOTAS REGISTRADAS DE "+t._s(t.nombre)+" "+t._s(t.apellidos)+" ")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers3,items:t.notasEstudiantes,"hide-default-header":"","hide-default-footer":""}}),a("v-card-actions",{staticClass:"justify-end"},[a("v-btn",{attrs:{color:"teal accent-4"},on:{click:function(e){t.dialog2=!1}}},[t._v("Cerrar")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"auto"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[t._v("ESTAS SEGURO DE QUE QUIERES ELIMINAR LA NOTA DE ETUDIANTE "+t._s(t.nombreSede)+" DE LA MATERIA "+t._s(t.materia)+" ?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",elevation:"2"},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"green",elvation:"2"},on:{click:t.deleteItemConfirm}},[t._v("Eliminar")]),a("v-spacer")],1)],1)],1)],2)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[a("v-btn",{staticClass:"mx-1",attrs:{fab:"",small:"",color:"teal accent-4"},on:{click:function(e){return t.editItem(o)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-pencil")])],1),a("v-btn",{staticClass:"mx-1",attrs:{fab:"",color:"red",small:""},on:{click:function(e){return t.deleteItem(o)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-delete")])],1)]}},{key:"item.opcion",fn:function(e){var o=e.item;return[a("v-btn",{staticClass:"mx-1",attrs:{fab:"",small:"",color:"teal accent-4"},on:{click:function(e){return t.notasEstudiante(o)}}},[a("v-icon",{attrs:{color:"white"}},[t._v("fa-bars")])],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)},s=[],n=(a("d81d"),a("bc3a")),i=a.n(n),r=a("3d20"),l=a.n(r),c={data:function(){return{search:"",search1:"",sortBy:"name",sortBy1:"name",id:"",corecto:"",mensaje1:"",nombre:"",apellidos:"",nombreSede:"",numeroSede:"",ubicacion:"",materia:"",anoCurso:"",periodo:"",nota:"",profesor:"",dialog:!1,dialog1:!1,dialog2:!1,estudoiates:[],dialogDelete:!1,selected:[],notas:[],notasEstudiantes:[],periodos:[],valores:["1.0","1.2","1.3","1.4","1.5","1.6","1.7","1.8","1.9","2.0","2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","3.0","3.1","3.2","3.3","3.5","3.5","3.6","3.7","3.8","3.9","4.0","4.1","4.2","4.3","4.4","4.5","4.6","4.7","4.8","4.9","5.0"],components:{},todasMaterias:[],headers:[{text:"REGISTRO NOTAS",value:"opcion",sortable:!1},{text:"MATERIA",align:"",sortable:!1,value:"materia.nombre"},{text:"NOMBRE ESTUDISNTE",value:"anoCurso.nombreEtudiante.nombre"},{text:"APELLIDOS",value:"anoCurso.nombreEtudiante.apellidos"},{text:"NUMEROO DE DUCUMENTO",value:"anoCurso.nombreEtudiante.numeroDocuemnto"},{text:"PERIODO",value:"periodo.nombrePeriodo"},{text:"NOTA",value:"nota"},{text:"FECHA",value:"createdAt"},{text:"OPCIONES",value:"actions",sortable:!1}],headers4:[{text:"NOMBRE ESTUDISNTE",value:"anoCurso.nombreEtudiante.nombre"},{text:"APELLIDOS",value:"anoCurso.nombreEtudiante.apellidos"},{text:"NUMEROO DE DUCUMENTO",value:"anoCurso.nombreEtudiante.numeroDocuemnto"}],headers3:[{text:"PERIODO",value:"periodo.nombrePeriodo"},{text:"MATERIA",align:"",sortable:!1,value:"materia.nombre"},{text:"NOTA",value:"nota"},{text:"FECHA",value:"createdAt"}],headers1:[{text:"CURSO",align:"curso",sortable:!1,value:"curso.nombreCurso"},{text:"NOMBRE ESTUDIANTE",value:"nombreEtudiante.nombre"},{text:"APELLIDOS ESTUDIANTE",value:"nombreEtudiante.apellidos"},{text:"NUMERO DE DOCUMENTO",value:"nombreEtudiante.numeroDocuemnto"},{text:"SEDE",value:"sede.nombreSede"},{text:"AÑO",value:"ano"}],headers2:[{text:"CURSO",align:"curso",sortable:!1,value:"curso.nombreCurso"},{text:"NOMBRE ESTUDIANTE",value:"nombreEtudiante.nombre"},{text:"NUMERO DE DOCUMENTO",value:"nombreEtudiante.numeroDocuemnto"},{text:"SEDE",value:"sede.nombreSede"},{text:"AÑO",value:"ano"}],editedIndex:-1,materia1:[function(t){return!!t||"LA MATERIA ES REQUERIDA"}],periodo1:[function(t){return!!t||"EL PERIODO ES REQUERIDO"}],nota1:[function(t){return!!t||"LA NOTA ES REQUERIDA"}]}},computed:{formTitle:function(){return-1===this.editedIndex?"NUEVA NOTA?":"EDITAR NOTA"},dessavilitar:function(){return 0===this.nota.length||0===this.materia.length||0===this.periodo.length||this.selected===[]}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},created:function(){this.listarperiodos(),this.listarNotas(),this.listarMaterias(),this.listarAnocurso()},methods:{error:function(t){l.a.fire({icon:"error",title:"NOMBRE DE SEDE",text:t})},msjAlerta:function(t){l.a.fire({position:"top",icon:"success",title:t,showConfirmButton:!1,timer:3e3})},notasEstudiante:function(t){var e=this;this.nombre=t.anoCurso.nombreEtudiante.nombre,this.apellidos=t.anoCurso.nombreEtudiante.apellidos,this.dialog2=!0;var a=t.anoCurso._id;console.log(a);var o={headers:{token:this.$store.state.token}};i.a.get("notas?value=".concat(a),o).then((function(t){console.log(t.data),e.notasEstudiantes=t.data.notas,console.log(e.notasEstudiantes)})).catch((function(t){console.log(t.msg)}))},listarperiodos:function(){var t=[],e=this,a={headers:{token:this.$store.state.token}};i.a.get("periodos",a).then((function(a){t=a.data.periodos,t.map((function(t){e.periodos.push({text:t.nombrePeriodo,value:t._id})}))})).catch((function(t){console.log(t.msg)}))},listarAnocurso:function(){var t=this,e={headers:{token:this.$store.state.token}};i.a.get("anocurso",e).then((function(e){t.estudoiates=e.data.anosNuevo})).catch((function(t){console.log(t.msg)}))},listarMaterias:function(){var t=[],e=this,a={headers:{token:this.$store.state.token}};i.a.get("materias",a).then((function(a){t=a.data.materias,t.map((function(t){e.todasMaterias.push({text:t.nombre,value:t._id})}))})).catch((function(t){console.log(t.msg)}))},listarNotas:function(){var t=this,e={headers:{token:this.$store.state.token}};i.a.get("notas",e).then((function(e){console.log(e.data),t.notas=e.data.datos})).catch((function(t){console.log(t.msg)}))},editItem:function(t){this.id=t._id,this.editedIndex=0,this.materia=t.materia._id,this.periodo=t.periodo._id,this.nota=t.nota,this.selected[0]=t.anoCurso,this.dialog=!0},deleteItem:function(t){this.nombreSede=t.anoCurso.nombreEtudiante.nombre,this.materia=t.materia.nombre,this.dialogDelete=!0,this.id=t._id,this.editedIndex=0},deleteItemConfirm:function(){console.log(this.id);var t=this,e={headers:{token:this.$store.state.token}};i.a.delete("notas/".concat(this.id),e).then((function(){t.listarNotas(),t.closeDelete(),t.corecto="NOTA ELIMINADA CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(t){console.log(t)}))},close:function(){this.dialog=!1,this.limpiar()},closeDelete:function(){var t=this;this.dialogDelete=!1,this.id="",this.limpiar(),this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},limpiar:function(){this.nota="",this.materia="",this.selected=[],this.periodo=""},save:function(){var t=this;if(-1===this.editedIndex){var e={headers:{token:this.$store.state.token}};i.a.post("notas",{nota:this.nota,materia:this.materia,periodo:this.periodo,anoCurso:this.selected[0]._id},e).then((function(){console.log("Guardadndo"),t.listarNotas(),t.limpiar(),t.close(),t.corecto="NOTA GUARDADA CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(t){console.log(t.msg)}))}else{var a={headers:{token:this.$store.state.token}};i.a.put("notas/".concat(this.id),{nota:this.nota,materia:this.materia,periodo:this.periodo,anoCurso:this.selected[0]._id},a).then((function(){console.log("editando"),t.listarNotas(),t.limpiar(),t.close(),t.corecto="NOTA EDITADA CORECTAMENTE",t.msjAlerta(t.corecto)})).catch((function(t){console.log(t.msg)}))}this.close()}}},d=c,u=a("2877"),m=a("6544"),v=a.n(m),h=a("8336"),E=a("b0af"),f=a("99d9"),b=a("62ad"),p=a("a523"),g=a("8fea"),A=a("169a"),x=a("ce7e"),C=a("132d"),k=a("0fd9"),D=a("b974"),O=a("2fa4"),T=a("8654"),I=a("71d9"),N=a("2a7f"),S=Object(u["a"])(d,o,s,!1,null,null,null);e["default"]=S.exports;v()(S,{VBtn:h["a"],VCard:E["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:b["a"],VContainer:p["a"],VDataTable:g["a"],VDialog:A["a"],VDivider:x["a"],VIcon:C["a"],VRow:k["a"],VSelect:D["a"],VSpacer:O["a"],VTextField:T["a"],VToolbar:I["a"],VToolbarTitle:N["a"]})}}]);
//# sourceMappingURL=chunk-2d0f0851.3082e379.js.map