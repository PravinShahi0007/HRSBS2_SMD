/*
dhtmlxScheduler v.4.3.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.form_blocks.combo={render:function(e){e.cached_options||(e.cached_options={});var t="";return t+="<div class='"+e.type+"' style='height:"+(e.height||20)+"px;' ></div>"},set_value:function(t,i,a,n){!function(){function i(){if(t._combo&&t._combo.DOMParent){var e=t._combo;e.unload?e.unload():e.destructor&&e.destructor(),e.DOMParent=e.DOMelem=null}}i();var a=e.attachEvent("onAfterLightbox",function(){i(),e.detachEvent(a)})}(),window.dhx_globalImgPath=n.image_path||"/",t._combo=new dhtmlXCombo(t,n.name,t.offsetWidth-8),n.onchange&&t._combo.attachEvent("onChange",n.onchange),n.options_height&&t._combo.setOptionHeight(n.options_height);
var s=t._combo;if(s.enableFilteringMode(n.filtering,n.script_path||null,!!n.cache),n.script_path){var r=a[n.map_to];r?n.cached_options[r]?(s.addOption(r,n.cached_options[r]),s.disable(1),s.selectOption(0),s.disable(0)):dhtmlxAjax.get(n.script_path+"?id="+r+"&uid="+e.uid(),function(e){var t=e.doXPath("//option")[0],i=t.childNodes[0].nodeValue;n.cached_options[r]=i,s.addOption(r,i),s.disable(1),s.selectOption(0),s.disable(0)}):s.setComboValue("")}else{for(var d=[],o=0;o<n.options.length;o++){var l=n.options[o],_=[l.key,l.label,l.css];
d.push(_)}if(s.addOption(d),a[n.map_to]){var h=s.getIndexByValue(a[n.map_to]);s.selectOption(h)}}},get_value:function(e,t,i){var a=e._combo.getSelectedValue();return i.script_path&&(i.cached_options[a]=e._combo.getSelectedText()),a},focus:function(){}},e.form_blocks.radio={render:function(t){var i="";i+="<div class='dhx_cal_ltext dhx_cal_radio' style='height:"+t.height+"px;' >";for(var a=0;a<t.options.length;a++){var n=e.uid();i+="<input id='"+n+"' type='radio' name='"+t.name+"' value='"+t.options[a].key+"'><label for='"+n+"'> "+t.options[a].label+"</label>",t.vertical&&(i+="<br/>")
}return i+="</div>"},set_value:function(e,t,i,a){for(var n=e.getElementsByTagName("input"),s=0;s<n.length;s++){n[s].checked=!1;var r=i[a.map_to]||t;n[s].value==r&&(n[s].checked=!0)}},get_value:function(e){for(var t=e.getElementsByTagName("input"),i=0;i<t.length;i++)if(t[i].checked)return t[i].value},focus:function(){}},e.form_blocks.checkbox={render:function(t){return e.config.wide_form?'<div class="dhx_cal_wide_checkbox" '+(t.height?"style='height:"+t.height+"px;'":"")+"></div>":""},set_value:function(t,i,a,n){t=document.getElementById(n.id);
var s=e.uid(),r="undefined"!=typeof n.checked_value?i==n.checked_value:!!i;t.className+=" dhx_cal_checkbox";var d="<input id='"+s+"' type='checkbox' value='true' name='"+n.name+"'"+(r?"checked='true'":"")+"'>",o="<label for='"+s+"'>"+(e.locale.labels["section_"+n.name]||n.name)+"</label>";if(e.config.wide_form?(t.innerHTML=o,t.nextSibling.innerHTML=d):t.innerHTML=d+o,n.handler){var l=t.getElementsByTagName("input")[0];l.onclick=n.handler}},get_value:function(e,t,i){e=document.getElementById(i.id);
var a=e.getElementsByTagName("input")[0];return a||(a=e.nextSibling.getElementsByTagName("input")[0]),a.checked?i.checked_value||!0:i.unchecked_value||!1},focus:function(){}}});