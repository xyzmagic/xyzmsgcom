function initCopyButton(){$("[name='copyBtn']").click(function(){var a=this,c=$(a).attr("id"),d=new Clipboard("#"+c,{});d.on("success",function(b){var e=$(b.trigger);e.attr("data-tip")?$.bootstrapGrowl("\u5df2\u590d\u5236\u94fe\u63a5\u3002",{type:"info",align:"center",delay:1E3}):(e.tooltip("show"),setTimeout(function(){e.tooltip("hide")},500))});d.on("error",function(){$(a).tooltip("hide")});setTimeout(function(){d.destroy()},1E3)})}
function refreshVi(a,c){$(a).attr("src","vi?vct="+c+"&d="+(new Date).getTime())}function initLoginModal(){$.HSCore.components.HSValidation.init("#loginForm",{rules:{username:"required",password:"required",vc:{required:!0,minlength:4,maxlength:4}},submitHandler:function(){loginFromModal("loginForm")}});document.onkeydown=function(){event.keyCode=="13"&&$("#loginBtnInModal").trigger("click")}}
function loginFromModal(a){$("#messageTip").text("");var c=$("#"+a+" #username");if(c){var d=c.val(),d=$.trim(d);c.val(d)}a=$("#"+a).serialize();$.ajax({type:"POST",url:"login",data:a,dataType:"json",complete:function(b){(b=b.responseJSON)?b.login?($("[name='loginedBtn']").toggle(!0),$("[name='loginBtn']").toggle(!1),Custombox.modal.close()):(b=b.message,$("#messageTip").text(b)):$("#messageTip").text("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u3002");$("#vi").trigger("click");$("#vc").val("")}})}
function followToggle(a,c){var d=c.id;$.ajax({type:"POST",url:a,data:c,dataType:"json",beforeSend:function(){var b=$("span[name='fw-"+d+"']");return b.attr("disabled")?($.bootstrapGrowl("\u8bf7\u7b49\u5f85\uff0c\u4e0d\u8981\u91cd\u590d\u70b9\u51fb\u3002",{type:"info",align:"center",delay:5E3}),!1):(b.attr("disabled",!0),!0)},complete:function(b){var e=$("span[name='fw-"+d+"']");if(b=b.responseJSON){var a=b.isFollowed,f=b.message,f=b.follows;b.commit?(a?(e.find("i[class='fa fa-star']").toggle(!0),
e.find("i[class='far fa-star']").toggle(!1)):(e.find("i[class='fa fa-star']").toggle(!1),e.find("i[class='far fa-star']").toggle(!0)),e.find("span[name='follows']").text(f+" "),c.tip&&$.bootstrapGrowl(a?"\u5df2\u5173\u6ce8/\u6536\u85cf\u3002":"\u5df2\u53d6\u6d88\u5173\u6ce8/\u6536\u85cf\u3002",{type:"info",align:"center",delay:3E3})):(f=b.message,$.bootstrapGrowl(f?f:"\u5931\u8d25\u7a0d\u540e\u8bf7\u91cd\u8bd5\u3002",{type:"info",align:"center",delay:3E3}))}else $.bootstrapGrowl("\u5931\u8d25\u7a0d\u540e\u8bf7\u91cd\u8bd5\u3002",
{type:"info",align:"center",delay:5E3});e.attr("disabled",!1)}})}
function voteToggle(a,c){var d=c.answerId;$.ajax({type:"POST",url:a,data:c,dataType:"json",complete:function(b){var a=$("#like-"+d),c=$("#dislike-"+d);if(b=b.responseJSON){var f=b.vote,g=b.message,g=b.likes,h=b.dislikes;b.commit?(f==1?(a.find("i[name='thumbs-up']").toggle(!0),a.find("i[name='thumbs-up-o']").toggle(!1),c.find("i[name='thumbs-down']").toggle(!1),c.find("i[name='thumbs-down-o']").toggle(!0)):f==-1?(a.find("i[name='thumbs-up']").toggle(!1),a.find("i[name='thumbs-up-o']").toggle(!0),c.find("i[name='thumbs-down']").toggle(!0),
c.find("i[name='thumbs-down-o']").toggle(!1)):f==0&&(a.find("i[name='thumbs-up']").toggle(!1),a.find("i[name='thumbs-up-o']").toggle(!0),c.find("i[name='thumbs-down']").toggle(!1),c.find("i[name='thumbs-down-o']").toggle(!0)),a.find("span[name='likes']").text(g+" "),c.find("span[name='dislikes']").text(h+" ")):(g=b.message,$.bootstrapGrowl(g?g:"\u5931\u8d25\u7a0d\u540e\u8bf7\u91cd\u8bd5\u3002",{type:"info",align:"center",delay:3E3}))}else $.bootstrapGrowl("\u5931\u8d25\u7a0d\u540e\u8bf7\u91cd\u8bd5\u3002",
{type:"info",align:"center",delay:5E3})}})}function toggleBox(a,c){$("#allBox_"+a).toggle();$("#partBox_"+a).toggle();$("#hideBtn_"+a).toggle();var d=$("#"+c);d&&$("html,body").finish().animate({scrollTop:d.offset().top-100},400)};