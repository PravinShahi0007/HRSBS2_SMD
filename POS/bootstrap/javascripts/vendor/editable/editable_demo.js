$(function(){$("#username").editable({type:"text",pk:1,name:"username",title:"Enter username"}),$("#firstname").editable({validate:function(e){if($.trim(e)=="")return"This field is required"}}),$("#sex").editable({prepend:"not selected",source:[{value:1,text:"Male"},{value:2,text:"Female"}],display:function(e,t){var n={"":"gray",1:"green",2:"blue"},r=$.grep(t,function(t){return t.value==e});r.length?$(this).text(r[0].text).css("color",n[e]):$(this).empty()}}),$("#status").editable(),$("#group").editable({showbuttons:!1}),$("#vacation").editable(),$("#dob").editable(),$("#event").editable({placement:"right",combodate:{firstItem:"name"}}),$("#comments").editable({showbuttons:!0}),$("#note").editable(),$("#pencil").click(function(e){e.stopPropagation(),e.preventDefault(),$("#note").editable("toggle")}),$("#state").editable({source:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}),$("#fruits").editable({pk:1,limit:3,source:[{value:1,text:"banana"},{value:2,text:"peach"},{value:3,text:"apple"},{value:4,text:"watermelon"},{value:5,text:"orange"}]}),$("#tags").editable({inputclass:"input-large",select2:{tags:["html","javascript","css","ajax"],tokenSeparators:[","," "]}});var e=[];$.each({"Customer01","Customer02","Customer03"},function(t,n){e.push({id:t,text:n})}),$("#country").editable({inputclass:"input-large",source:e}),$("#address").editable({value:{city:"Moscow",street:"Lenina",building:"12"},validate:function(e){if(e.city=="")return"city is required!"},display:function(e){if(!e){$(this).empty();return}var t="<b>"+$("<div>").text(e.city).html()+"</b>, "+$("<div>").text(e.street).html()+" st., bld. "+$("<div>").text(e.building).html();$(this).html(t)}}),$("#user .editable").on("hidden",function(e,t){if(t==="save"||t==="nochange"){var n=$(this).closest("tr").next().find(".editable");$("#autoopen").is(":checked")?setTimeout(function(){n.editable("show")},300):n.focus()}})});