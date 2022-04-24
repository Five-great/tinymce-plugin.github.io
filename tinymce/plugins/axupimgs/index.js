 /**
 * axupimgs (Enhancement 1.7v) 2021-07-18
 * 
 * 
 * https://github.com/Five-great/tinymce-plugins
 * 
 * Copyright 2021, Five(Li Hailong) The Chengdu, China https://www.fivecc.cn/
 *
 * Licensed under MIT
 */
  var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,e){a.raw=e;return a};
tinymce.PluginManager.add("axupimgs",function(a,e){window.axupimgs={};axupimgs.images_upload_handler=a.getParam("images_upload_handler",void 0,"function");axupimgs.images_upload_base_path=a.getParam("images_upload_base_path","","string");axupimgs.axupimgs_filetype=a.getParam("axupimgs_filetype",".png,.gif,.jpg,.jpeg","string");axupimgs.res=[];var f=function(){return a.windowManager.open({title:"Ax\u591a\u56fe\u7247\u4e0a\u4f20",size:"large",body:{type:"panel",items:[{type:"iframe",name:"iframe_axupimgs",
label:"   ",sandboxed:!0}]},initialData:{iframe_axupimgs:"<!doctype html>\n\t\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t<meta charset=\"utf-8\" />\n\t\t\t\t<title>axupimgs</title>\n\t\t\t\t<meta name=\"viewport\" content=\"user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0\"/>\n\t\t\t\t<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n\t\t\t\t<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n\t\t\t\t<meta name=\"format-detection\" content=\"telephone=no\">\n\t\t\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\n\t\t\t\t<style>\n\t\t\t\t\thtml,body{height:100%;margin:0;padding:0;background:#fff;}\n\t\t\t\t\tul{margin:0;padding:0;list-style:none;}\n\t\t\t\t\t#wrap{padding:10px;}\n\t\t\t\t\t#topbar{padding:10px 0;border-bottom:1px solid #ccc;text-align:right;}\n\t\t\t\t\t#topbar button {margin:0;margin-left:5px;outline:none;padding: 4px 16px;box-sizing: border-box;\n\t\t\t\t\t\tdisplay:inline-block;border:none;border-radius:3px;text-align:center;cursor:pointer;\n\t\t\t\t\t\tfont-size:14px;line-height:1.5;background-color:#f0f0f0;color:#223;\n\t\t\t\t\t}\n\t\t\t\t\t#topbar button.primary{background-color:#3d97d4;color:#fff;}\n\t\t\t\t\t#topbar button:hover{background-color:#207ab7;color:#fff;}\n\t\t\t\t\t#topbar button.removeall{float:left}\n\t\t\t\t\t#file_list {display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));padding-top:10px;}\n\t\t\t\t\t#file_list:empty:after{content:'\u53ef\u4ee5\u76f4\u63a5\u62d6\u62fd\u6587\u4ef6\u5230\u8fd9\u91cc';color:#777;font-size:0.8em;}\n\t\t\t\t\t#file_list li{position:relative;display:block;vertical-align:top;padding:5px 5px;border-radius:5px;}\n\t\t\t\t\t#file_list li.up-over {}\n\t\t\t\t\t#file_list li.up-now {}\n\t\t\t\t\t#file_list li.up-now:after{content:'';position:absolute;top:0;left:0;display:block;width:100%;height:100%;background:rgba(255,255,255,0.8) url(loading.gif) center center no-repeat;border-radius:5px;z-index:999;}\n\t\t\t\t\t#file_list li:hover{background-color:#ddd;}\n\t\t\t\t\t#file_list li .picbox {display:flex;flex:0 0 auto;justify-content:center;overflow:hidden;position:relative;width:100%;padding-top:100%;align-items:center;}\n\t\t\t\t\t#file_list li .picbox img {display:block;max-width:100%;max-height:100%;position:absolute;\n\t\t\t\t\t\ttop:50%;left:50%;transform:translateX(-50%) translateY(-50%);}\n\t\t\t\t\t#file_list li.up-over .picbox:after{content:url('data:image/svg+xml;%20charset=utf8,%3Csvg%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%3Cpath%20d%3D%22M512%200C229.376%200%200%20229.376%200%20512s229.376%20512%20512%20512%20512-229.376%20512-512S794.624%200%20512%200z%22%20fill%3D%22%234AC711%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M855.552%20394.752l-358.4%20358.4a50.9952%2050.9952%200%200%201-72.192%200l-204.8-204.8c-18.944-19.968-18.944-51.2%200-71.168a50.5344%2050.5344%200%200%201%2072.192-1.024L460.8%20644.608l322.048-322.048c19.968-18.944%2051.2-18.944%2071.168%200%2020.48%2019.456%2020.992%2051.712%201.536%2072.192z%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');position:absolute;bottom:2px;right:2px;z-index:9;}\n\t\t\t\t\t#file_list li .tools {display:none;position:absolute;bottom:5px;right:5px;z-index:99;}\n\t\t\t\t\t#file_list li:hover .tools {display:block;}\n\t\t\t\t\t#file_list li .tools .remove{cursor:pointer;}\n\t\t\t\t\t#file_list li .tools .remove:after{content:url('data:image/svg+xml;%20charset=utf8,%3Csvg%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M17%206h3a1%201%200%200%201%200%202h-1v11a3%203%200%200%201-3%203H8a3%203%200%200%201-3-3V8H4a1%201%200%201%201%200-2h3V5a3%203%200%200%201%203-3h4a3%203%200%200%201%203%203v1zm-2%200V5a1%201%200%200%200-1-1h-4a1%201%200%200%200-1%201v1h6zm2%202H7v11a1%201%200%200%200%201%201h8a1%201%200%200%200%201-1V8zm-8%203a1%201%200%200%201%202%200v6a1%201%200%200%201-2%200v-6zm4%200a1%201%200%200%201%202%200v6a1%201%200%200%201-2%200v-6z%22%3E%3C/path%3E%3C/svg%3E');}\n\t\t\t\t\t#file_list li .namebox {font-size:14px;line-height:20px;max-height:40px;overflow:hidden;padding:5px 10px;text-align:center;display:flex;justify-content:center;align-items:flex-start;}\n\t\t\t\t\t#file_list li .namebox span{word-break:break-all;vertical-align:top;}\n\t\t\t\t</style>\n\t\t\t\t\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t<div id=\"wrap\">\n\t\t\t\t\t<div id=\"topbar\"><button class=\"addfile primary\" >+ \u6dfb\u52a0\u6587\u4ef6</button><button class=\"upall primary\">\u5168\u90e8\u4e0a\u4f20</button><button class=\"removeall\">\u6e05\u7a7a\u5217\u8868</button></div>\n\t\t\t\t\t<ul id=\"file_list\"></ul>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<script>\n\t\t\t\t\tvar editor=parent.tinymce.activeEditor;\n\t\t\t\t\tvar axupimgs=parent.axupimgs;\n\t\t\t\t\taxupimgs.res = []; //\u5b58\u653e\u672c\u5730\u6587\u4ef6\u7684\u6570\u7ec4\n\t\t\t\t\tvar blobInfo = {file:null}\n\t\t\t\t\tblobInfo.blob = function(){return this.file;}\n\t\t\t\t\tvar upload_handler = axupimgs.images_upload_handler;\n\t\t\t\t\tvar upload_base_path = axupimgs.images_upload_base_path;\n\t\t\t\t\n\t\t\t\t\t//\u4e3a\u5217\u8868\u6dfb\u52a0\u6392\u5e8f\n\t\t\t\t\tfunction reSort(){\n\t\t\t\t\t\tdocument.querySelectorAll('#file_list li').forEach((el,i)=>{\n\t\t\t\t\t\t\tel.setAttribute('data-num',i);\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\tfunction addList(files){\n\t\t\t\t\t\tvar files_sum = files.length;\n\t\t\t\t\t\tvar vDom = document.createDocumentFragment();\n\t\t\t\t\t\tfor(let i=0;i<files_sum;i++){\n\t\t\t\t\t\t\tlet file = files[i];\n\t\t\t\t\t\t\tlet blobUrl = window.URL.createObjectURL(file)\n\t\t\t\t\t\t\taxupimgs.res.push({file:file,blobUrl:blobUrl,url:''});\n\t\t\t\t\t\t\tlet li = document.createElement('li');\n\t\t\t\t\t\t\tli.setAttribute('class','up-no');\n\t\t\t\t\t\t\tli.setAttribute('data-time',file.lastModified);\n\t\t\t\t\t\t\tli.innerHTML='<div class=\"picbox\"><img src=\"'+blobUrl+'\"></div><div class=\"namebox\"><span>'+file.name+'</span></div><div class=\"tools\"><a class=\"remove\"></a></div>';\n\t\t\t\t\t\t\tvDom.appendChild(li);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdocument.querySelector('#file_list').appendChild(vDom);\n\t\t\t\t\t\t//reSort();\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t//\u6e05\u7a7a\u5217\u8868\n\t\t\t\t\tdocument.querySelector('#topbar .removeall').addEventListener('click',function(){\n\t\t\t\t\t\taxupimgs.res = []\n\t\t\t\t\t\tdocument.querySelectorAll('#file_list li').forEach(function(el,i){\n\t\t\t\t\t\t\tel.parentNode.removeChild(el)\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t\t//\u62d6\u62fd\u6dfb\u52a0\n\t\t\t\t\tdocument.addEventListener('dragover', function(e){\n\t\t\t\t\t\te.stopPropagation();\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\te.dataTransfer.dropEffect = 'copy';\n\t\t\t\t\t});\n\t\t\t\t\tdocument.addEventListener('drop', function(e){\n\t\t\t\t\t\te.stopPropagation();\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\tif(!e.dataTransfer.files){return false;}\n\t\t\t\t\t\tvar dropfiles = e.dataTransfer.files;\n\t\t\t\t\t\tif(!(dropfiles.length>0)){return false;}\n\t\t\t\t\t\tvar exts=axupimgs.axupimgs_filetype.replace(/(s)+/g,'').toLowerCase().split(',');\n\t\t\t\t\t\tvar files=[];\n\t\t\t\t\t\tfor( let file of dropfiles ){\n\t\t\t\t\t\t\text = file.name.split('.');\n\t\t\t\t\t\t\text = '.'+ext[ext.length-1];\n\t\t\t\t\t\t\tfor(let s of exts){\n\t\t\t\t\t\t\t\tif(s==ext){\n\t\t\t\t\t\t\t\t\tfiles.push(file);\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif(files.length>0){ addList(files) }\n\t\t\t\t\t});\n\t\t\t\t\tvar global$1 = upfile.tinymce.util.Tools.resolve('tinymce.util.Promise');var global$2 = upfile.tinymce.util.Tools.resolve('tinymce.Env');var global$3 = upfile.tinymce.util.Tools.resolve('tinymce.util.Delay');\n\t\t\t\t\tvar pickFile=function(a){return new global$1(function(e){var c=document.createElement(\"input\");c.type=\"file\";c.setAttribute('multiple', 'multiple');c.style.position=\"fixed\";c.style.left=\"0\";c.style.top=\"0\";c.style.opacity=\"0.001\";document.body.appendChild(c);var b=function(f){e(Array.prototype.slice.call(f.target.files))};c.addEventListener(\"change\",b);var d=function(g){var f=function(){e([]);c.parentNode.removeChild(c)};if(global$2.os.isAndroid()&&g.type!==\"remove\"){global$3.setEditorTimeout(a,f,0)}else{f()}a.off(\"focusin remove\",d)};a.on(\"focusin remove\",d);c.click()})};\n\t\t\t\t \n\t\t\t\t\t//\u6dfb\u52a0\u6587\u4ef6\n\t\t\t\t\tdocument.querySelector('#topbar .addfile').addEventListener('click',function(){\n\t\t\t\t\t\tpickFile(editor).then(function(files){\n\t\t\t\t\t\t\taddList(files);\n\t\t\t\t\t\t})\n\t\t\t\t\t});\n\t\t\t\t\n\t\t\t\t\tvar file_i = 0;\n\t\t\t\t\n\t\t\t\t\tfunction upAllFiles(n){\n\t\t\t\t\t\tvar len = axupimgs.res.length;\n\t\t\t\t\t\tfile_i = n;\n\t\t\t\t\t\tif(len == n){\n\t\t\t\t\t\t\tfile_i=0;\n\t\t\t\t\t\t\tdocument.querySelector('#topbar .upall').innerText='\u5168\u90e8\u4e0a\u4f20';\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif( axupimgs.res[n].url!='' ){\n\t\t\t\t\t\t\tn++;\n\t\t\t\t\t\t\tupAllFiles(n)\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tblobInfo.file=axupimgs.res[n].file;\n\t\t\t\t\t\t\tupload_handler(blobInfo,function(url){\n\t\t\t\t\t\t\t\tif(upload_base_path){\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tif(upload_base_path.slice(-1)=='/' && url.substr(0,1)=='/' ){\n\t\t\t\t\t\t\t\t\t\turl = upload_base_path + url.slice(1);\n\t\t\t\t\t\t\t\t\t}else if(upload_base_path.slice(-1)!='/' && url.substr(0,1)!='/' ){\n\t\t\t\t\t\t\t\t\t\turl = upload_base_path + '/' + url;\n\t\t\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\t\t\turl = upload_base_path + url;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\taxupimgs.res[file_i].url = url;\n\t\t\t\t\t\t\t\tfilename = url.split('/').pop();\n\t\t\t\t\t\t\t\tvar li = document.querySelectorAll('#file_list li')[file_i];\n\t\t\t\t\t\t\t\tli.setAttribute('class','up-over');\n\t\t\t\t\t\t\t\tli.querySelector('.namebox span').innerText = filename;\n\t\t\t\t\t\t\t\tn++\n\t\t\t\t\t\t\t\tupAllFiles(n);\n\t\t\t\t\t\t\t},function(err){\n\t\t\t\t\t\t\t\tdocument.querySelector('#topbar .upall').innerText='\u5168\u90e8\u4e0a\u4f20';\n\t\t\t\t\t\t\t\tdocument.querySelectorAll('#file_list li.up-now').forEach((el,i)=>{\n\t\t\t\t\t\t\t\t\tel.setAttribute('class','up-no');\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\talert(err);\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\tdocument.querySelector('#topbar .upall').addEventListener('click',(e)=>{\n\t\t\t\t\t\tif(e.target.innerText!='\u5168\u90e8\u4e0a\u4f20'){return false;}\n\t\t\t\t\t\tif(axupimgs.res.length>0){\n\t\t\t\t\t\t\tdocument.querySelectorAll('#file_list li.up-no').forEach((el,i)=>{\n\t\t\t\t\t\t\t\tel.classList ? el.classList.add('up-now') : el.className+=' up-now';\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\te.target.innerText='\u4e0a\u4f20\u4e2d...';\n\t\t\t\t\t\t\tupAllFiles(0);\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t\n\t\t\t\t\tvar observ_flist = new MutationObserver( (muList,observe)=>{\n\t\t\t\t\t\tif(muList[0].addedNodes.length>0){\n\t\t\t\t\t\t\tmuList[0].addedNodes.forEach((el)=>{\n\t\t\t\t\t\t\t\tel.querySelector('.remove').addEventListener('click',(e)=>{\n\t\t\t\t\t\t\t\t\tvar li = e.target.parentNode.parentNode;\n\t\t\t\t\t\t\t\t\tvar n = li.getAttribute('data-num');\n\t\t\t\t\t\t\t\t\tvar el = document.querySelectorAll('#file_list li')[n];\n\t\t\t\t\t\t\t\t\tel.parentNode.removeChild(el);\n\t\t\t\t\t\t\t\t\taxupimgs.res.splice(n,1);\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t\treSort();\n\t\t\t\t\t});\n\t\t\t\t\tobserv_flist.observe(document.querySelector('#file_list'),{childList:true});\n\t\t\t\t\n\t\t\t\t\x3c/script>\n\t\t\t\t</body>\n\t\t\t\t</html>\t\t\t\t\n\t\t\t\t"},
buttons:[{type:"cancel",text:"Close"},{type:"custom",text:"Save",name:"save",primary:!0}],onAction:function(g,b){switch(b.name){case "save":b="";for(var d=axupimgs.res,h=d.length,c=0;c<h;c++)d[c].url&&(b+='<img src="'+d[c].url+'" />');a.insertContent(b);axupimgs.res=[];g.close()}}})};a.ui.registry.getAll().icons.axupimgs||a.ui.registry.addIcon("axupimgs",'<svg viewBox="0 0 1280 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M1126.2,779.8V87.6c0-24-22.6-86.9-83.5-86.9H83.5C14.7,0.7,0,63.7,0,87.7v692c0,36.2,29.2,89.7,83.5,89.7l959.3-1.3c51.7,0,83.5-42.5,83.5-88.3zm-1044,4V86.3h961.6V783.7H82.2v0.1z" fill="#53565A"/><path d="M603,461.6L521.1,366.3,313,629.8,227.2,546.8,102.4,716.8H972.8v-170L768.2,235.2,603.1,461.6zM284.6,358.4a105.4,105.4,0,0,0,73.5-30c19.5-19.1,30.3-45,30.2-71.8,0-56.8-45.9-103-102.4-103-56.6,0-102.4,46.1-102.4,103C183.4,313.5,228,358.4,284.6,358.4z" fill="#9598A0"/><path d="M1197.7,153.6l-0.3,669.3s13.5,113.9-67.4,113.9H153.6c0,24.1,23.9,87.2,83.5,87.2h959.3c58.3,0,83.6-49.5,83.6-89.9V240.8c-0.1-41.8-44.9-87.2-82.3-87.2z" fill="#53565A"/></svg>');
a.ui.registry.addButton("axupimgs",{icon:"axupimgs",tooltip:"Ax\u591a\u56fe\u7247\u4e0a\u4f20",onAction:function(){f();document.querySelector(".tox-dialog__body-content").style.padding=0}});a.ui.registry.addMenuItem("axupimgs",{icon:"axupimgs",text:"\u56fe\u7247\u6279\u91cf\u4e0a\u4f20...",onAction:function(){f();document.querySelector(".tox-dialog__body-content").style.padding=0}});return{getMetadata:function(){return{name:"Ax\u591a\u56fe\u7247\u4e0a\u4f20",url:"https://github.com/Five-great/tinymce-plugins"}}}});