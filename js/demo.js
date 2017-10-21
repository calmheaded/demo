$(function(){
//	alert(window.navigator.userAgent.toLowerCase());
					var a=0;
					setTimeout(function(){
						$(".c1-img").css("opacity","1")
					},2000);
						var c2width=parseInt($("#c2").css("width"));
						var c2left=c2width/2-c2width+380;
						var c2left1=(c2width/2-190)-(c2width/2-190)*2;
						var x=0;
						var y=0;
						var z=0;
						$("body").mousedown(function(e){
							x+=e.clientX/2;
							y+=e.clientY/2;
							z=y/x;
							$("body").mousemove(function(e){
								$(".box").css('transform','rotateX('+y+'deg) rotateY('+x+'deg) rotateZ(0deg)');
								$(".box").css('transition','transform 1s');
								x=e.clientX/2;
								y=e.clientY/2;	
							});
						});
						$("#c2m2").click(function(){
							$("#box").attr("class","box");
							$("#box").css({"margin":"100px auto","transform":"translateX("+c2left+"px) translateY(-100px)"});
							for(var i=1;i<=34;i++){
								$("#box").children().eq(i-1).attr("id","box"+i);
								$("#box"+i).css('transition','transform 5s');
//								$("#box"+i).css('-ms-transition','transform 5s');
							}
						});
						$("#c2m4").click(function(){
							$("#box").attr("class","box");
							$("#box").css({"margin":"100px auto","transform":"translateX("+c2left+"px) translateY(-100px)"});
							for(var i=35,o=1;i<=68,o<=34;i++,o++){
								$("#box").children().eq(o-1).attr("id","box"+i);
								$("#box"+i).css('transition','transform 5s');
							}
						});
						$("#c2m3").click(function(){
							$("#box").attr("class","box");
							$("#box").css({"margin":"100px auto","transform":"translateX("+c2left+"px) translateY(-100px)"});
							for(var i=69,o=1;i<=102,o<=34;i++,o++){
								$("#box").children().eq(o-1).attr("id","box"+i);
								$("#box"+i).css('transition','transform 5s');
							}
						});
						$("#c2m1").click(function(){
							$("#box").removeClass("box");
							$("#box").css({"margin":"100px auto","transform":"translateX("+c2left1+"px) translateY(-100px)"});
							for(var i=103,o=1;i<=137,o<=34;i++,o++){
								$("#box").children().eq(o-1).attr("id","box"+i);
								$("#box"+i).css('transition','transform 5s');
							}
						});
					$('.main').onepage_scroll({
						sectionContainer: '.page',
						afterMove: function(index){
							$("#c2").css("overflow","hidden");
							$("#c3").css("overflow","hidden");
							if(index==2){
								a++;
								if(a==0||a==1){
									setTimeout(function(){
										$("#els").css("top","300px");
									},7000);
								}
								setTimeout(function(){
									$("#els").css("top","100px");
									$("#heiban").css("display","block");
								},16000);
								setTimeout(function(){
									$("#schdate").css("display","block");
								},19000);
								for(var i=1;i<=16;i++){
									$("#e"+i).addClass("e"+i);
								}
							}
						}
					});	
					//按钮开始
					var munei=-180;
					$("#c2m").toggle(
						function(){
							munei-=180;
							$("#mune").css("transform","rotateZ("+munei+"deg)");
							$(".c2mp").css("opacity","0");
							$("#c2m").css({"transform":"scale(0.8,0.8) translate(340px,340px)"});
		//					$("#c2m").attr("class","c2m");
							$(".c2ms1").css("transform","rotateZ(45deg) translate(24px,10px)")
							$(".c2ms2").css("transform","rotateZ(-45deg) translate(-10px,24px)")
						},
						function(){
							munei-=180;
							$("#mune").css("transform","rotateZ("+munei+"deg)");
							$(".c2mp").css("opacity","0.6");
							$("#c2m").css({"transform":"scale(1,1) translate(275px,275px)"});
		//					$("#c2m").removeClass("c2m");
							$(".c2ms1").css("transform","translate(12px,16px) rotateZ(15deg)")
							$(".c2ms2").css("transform","translate(3px,25px) rotateZ(80deg)")
						}
					)
					//按钮结束	
				});
				//c2画布代码开始
				$(function(){
					var color="rgba(221,226,149,1)";
					var c=document.getElementById("can");
					var ctx=c.getContext("2d");
					ctx.font="20px Arial";
					ctx.fillStyle=color;
					ctx.fillText("var num=[8,3,5,0,1,2]",20,40);
					ctx.fillText("var index=[4,0,1,3,4,3,2,5,4,3,3]",20,80);
					ctx.fillText("var tel=' '",20,120);
					ctx.fillText("for(var i=0;i<index.length;i++)",20,160);
					ctx.fillText("tel+=num[index[i]]",20,200);
					ctx.fillText("tel=?",20,240);
					ctx.fillText("双击可清空黑板！",20,280);
					
//					ctx.fill();
					$("#heiban").dblclick(function(){
						var remocvs=document.getElementById("can");
						var remopen=remocvs.getContext("2d");
						remopen.beginPath();
						    remopen.fillStyle="#2c3a36";
							remopen.fill();
						    remopen.fillRect(0,0,519,308);
						remopen.closePath();
					})
		            $("#can").mousemove(function(){
		            	$("#eqb").addClass("eqb");
		            	$("#ehb").addClass("ehb");
		            });
		            $("#eqb").click(function(){
						$(this).css("display","none");
						$("#c2").css("backgroundColor", color);
						$("#ehb").css("display","block");
						$("#colorlist").css({'opacity':'1','z-index':'0'});
						//***************************************************此处修改
						$("#can").css("cursor","url(img/eqb.ico),auto");
						var canvas=document.getElementById("can");
						var cobj=canvas.getContext("2d");
//						canvas.onmousedown=function(b) {
//						    var mx=b.clientX-60;
//						    var my=b.clientY-200;
//						    cobj.moveTo(mx,my);
//						canvas.onmousemove=function(b) {
//						    var endx=b.clientX-60;
//						    var endy=b.clientY-200;
//							cobj.lineTo(endx,endy);
//							cobj.stroke();
//							cobj.strokeStyle=color;
//				 			cobj.lineWidth="2";
//						   	}
//						canvas.onmouseup=function() {
//						    canvas.onmousemove=null;
//							canvas.onmouseup=null;
//						   	}
//		            	};
		            	canvas.onmousedown=function(b) {
						    var mx=b.clientX-60;
						    var my=b.clientY-200;
						    cobj.moveTo(mx,my);
						canvas.onmousemove=function(b) {
							var endx=b.clientX-60;
						    var endy=b.clientY-200;
							cobj.lineTo(endx,endy);
							cobj.stroke();
							cobj.strokeStyle=color;
							cobj.beginPath();
							cobj.moveTo(endx,endy);
							cobj.closePath();
				 			cobj.lineWidth="2";
						   	}
						canvas.onmouseup=function() {
						    canvas.onmousemove=null;
							canvas.onmouseup=null;
						   	}
		            	};
					});
					$("#ehb").click(function(){
						$(this).css("display","none");
						$("#c2").css("backgroundColor","#dde295");
						$("#eqb").css("display","block");
						$("#colorlist").css({'opacity':'0','z-index':"-1"});
						//***********************************************此处修改
						$("#can").css("cursor","url(img/ebc.ico),auto");
						var cvs=document.getElementById("can");
						var pen=cvs.getContext("2d");
						cvs.onmousedown=function(b) {
						    var mx1=b.clientX-60;
						    var my1=b.clientY-200;
						cvs.onmousemove=function(b) {						
							pen.beginPath();
						    var endx1=b.clientX-60;
						    var endy1=b.clientY-198;
						    pen.fillStyle="#2c3a36";
							pen.fill();
						    pen.fillRect(endx1,endy1,10,10);
							pen.closePath();
						   	}
						cvs.onmouseup=function() {
						    cvs.onmousemove=null;
							cvs.onmouseup=null;
						   	}
		           		};
					});
					//色板开始
					var colorcvs=document.getElementById("colorcan");
					var colorpen=colorcvs.getContext("2d");
					var img=new Image();
					//***************************************************此处修改
					img.src="img/elscvs.png";
					img.onload=function(){
						colorpen.drawImage(img,0,0,512,512);
					};
					colorcvs=$("#colorcan")
					colorcvs.click(function (e) {
						var canvasOffset = colorcvs.offset();
						var canvasX = Math.floor(e.pageX - canvasOffset.left);
						var canvasY = Math.floor(e.pageY - canvasOffset.top);
						var colorData = document.getElementById("colorcan").getPixelColor(canvasX, canvasY);
						color = colorData.rgba;
						$("#c2").css("backgroundColor", color);
					});
					//色板结束
					
					//表开始
					var canvas=document.getElementById("datecan");
				    var pen=canvas.getContext("2d");
				    var originx=258;
				    var originy=185;
				    var radius=30;
			   		setInterval(function(){
			           	pen.clearRect(0,0,512,512);
						var date=new Date();
						var ha=date.getHours()*30+(date.getMinutes()*6/12)-90;
						var ma=date.getMinutes()*6-90;
						var sa=date.getSeconds()*6-90;
						drawPointer(16,ha,1.4);
						drawPointer(19,ma,1.2);
						drawPointer(22,sa,1);
						pen.shadowColor="#888";
						pen.shadowOffsetX=1;
						pen.shadowOffsetY=1;
						pen.shadowBlur=3;
						pen.fillStyle="#aaa";
						pen.beginPath();
						pen.arc(originx,originy,1,0,2*Math.PI);
						pen.fill();
			   		},1000)
			   		function drawPointer (radius,angle,width) {
			           pen.lineWidth=width;
					   pen.strokeStyle="#5e747d";
					   pen.beginPath();
					   pen.moveTo(originx,originy);
					   pen.lineTo(originx+radius*Math.cos(angle*Math.PI/180),originy+radius*Math.sin(angle*Math.PI/180));
					   pen.stroke();
			   		}
					//表结束
				});
				//c2画布代码结束
				
				
				//c4代码开始
				$(function(){
				$("body").mousemove(function(e){
					x=e.clientX;
					y=e.clientY;
					alx=e.clientX-15;
					aly=e.clientY+20050;
					$("#c4box2").css("background","-webkit-gradient(radial,"+x+" "+y+",80,"+x+" "+y+",120,from(rgba(255, 255, 255, 0)),to(rgba(255, 255, 255, 1)))")
					$("#aletter").css({'top':aly,'left':alx});
					var len=$("#aletter p").length;
					for(var i=0;i<len-2;i++){
						$("#aletter").children("p").eq(i).remove();
					}
					var spanlen=$("#aletter span").length;
					for(var i=0;i<spanlen-7;i++){
						$("#aletter").children("span").eq(i).remove();
					}
				});	

				$("#loginname").keydown(function(e){
					ale(e);
					ale(e); 
				});
				$("#regname").keydown(function(e){
					ale(e);
					ale(e); 
				});
				
				function ale(e){
					var key=e.keyCode;
					var anirand=parseInt(Math.random()*8+1);
					if((key<=90&&key>=65)||(key<=122&&key>=97)||(key>=48&&key<=57)){
						var char=String.fromCharCode(key);
	//					var r=parseInt(Math.random()*256);
	//					var g=parseInt(Math.random()*256);
	//					var b=parseInt(Math.random()*256);
	//					var p=$("<p>"+char+"</p>").appendTo($("#aletter")).css("color","rgba("+r+","+g+","+b+",1)");
						var p=$("<p>"+char+"</p>").appendTo($("#aletter")).css("color","rgba(0,0,0,0.8)");
						p.addClass("f-c4-rand"+anirand);
					}else{
						var p=$("<p><img src='img/kulian.png'></p>").appendTo($("#aletter")).css("color","rgba(0,0,0,0.8)");
						p.addClass("f-c4-rand"+anirand);
					}
					
				};
				
				
		        var backh=$(window).height();
		        var backw=$(window).width();
//		        var w10=$(window).width();
//		        alert(w10);
		        var logoh=backh*0.75;
		        var mloginh=backh*0.5+25;
		        var mregh=backh*0.5+95;
		        var mloginw=backw/2-150;
		        $("#c4box1").css("height",backh);
		        $("#c4box2").css("height",backh);
		        $("#logo").css("top",logoh);
		        $("#mlogin").css({"top":mloginh,"left":mloginw});
		        $(".loginblock").css({"top":mregh-69,"left":mloginw});
		        $(".regblock").css({"top":mregh-293,"left":mloginw-42});
		        $("#loginimg").css({"top":mregh+3,"left":mloginw+3});
		        $("#regimg").css({"top":mregh+3,"left":mloginw+3});
		        $("#mreg").css({"top":mregh,"left":mloginw});
		        $("#back img").css("height",backh);
		        var i=0;
		        setInterval(function(){
		            $('#back li').eq(i).fadeIn(2000).siblings().fadeOut(2000);
		            i++;
		            if(i==5){
		                i=0;
		            }
		        },5000);
		        $("#login").click(function(){
		        	$("#rb").css("z-index","1");
		        	$("#lb").css("z-index","2");
		        	$("#logmoz").css("z-index","3");
		        	$(this).css("transform","translateY(69px)");
		        	$("#loginimg").css({"z-index":"3","opacity":"1","transition":"opacity 1s ease 1s"});
		        	$(".loginblock").css("display","block");
		        	$(".loginblock1").css("transform","translateY(-69px)")
		        });
		        $("#loginimg").mousemove(function(){
		        	login_i=0;
		        	$("#login").css("transform","translateY(-1px)")
		        	$(".loginblock").css("display","none");
		        	$(this).css({"opacity":"0","transition":"none"});
		        	$(".loginblock1").css("transform","translateY(69px)")
		        })
		        $("#mreg").click(function(){
		        	$("#rb").css("z-index","2");
		        	$("#lb").css("z-index","1");
		        	$("#login").css("transform","translateY(69px)");
		        	$("#regimg").css({"z-index":"3","opacity":"1","transition":"opacity 1s ease 1s"});
		        	$(".regblock").css("display","block");
		        	$(".regblock1").css("transform","translateY(-69px)")
		        })
		        $("#regimg").mousemove(function(){
		        	mreg_i=0;
		        	$("#login").css("transform","translateY(-1px)")
		        	$(this).css({"opacity":"0","transition":"none"});
		        	$(".regblock").css("display","none");
		        	$(".regblock1").css("transform","translateY(69px)")
		        })
		        $(".hideol").hide();
				$(".regblock>li").click(function(){
					$(this).children("ol").slideDown().parent().siblings().children("ol").slideUp();
				});
				var charale="";
				function loginale(ch){
					var str=ch.split(' ');
					var len=str.length;
					var i=0;
					var timer=setInterval(function(){
						var anirand=parseInt(Math.random()*8+1);
						var span=$("<span>"+str[i]+"</span>").appendTo($("#aletter")).css("color","rgba(0,0,0,1)");
						span.addClass("f-c4-rand"+anirand);
						i++;
						if(i==len){
							clearTimeout(timer);
						}
					},250);
					
				};
				var login_i=0;
				var mreg_i=0;
				$("#login").click(function(){
					if(login_i!=0){
//						alert("开始判断")
						var username=$("#loginname").val();
						var password=$("#loginpsd").val();
						if(username==""){
							charale="手 机 号 不 能 为 空 ！";
							loginale(charale);
							return false;
						}else if(password==""){
							charale="密 码 不 能 为 空 ！"
							loginale(charale);
							return false;
						}else{
//							charale="登 录 成 功 ！"
//							loginale(charale);
							alert("登录成功！");
							return true;
						}
						
					}
					login_i++;
				})
				var regnamenum=0;
				var regnamenum1=0;
				var regpsdnum=0;
				var regpsdnum1=0;
				var regpsdnum2=0;
				var newregpsdnum=0;
				var regname;
				var regpsd;
				var newregpsd;
				var phoneattr=/^1[3|4|5|7|8][0-9]\d{8}$/;
				var isnum=/^[0-9]*$/;
				var pwdlength=/^\w{6,16}$/;
				var pwdnull = new RegExp(" ");
				$("#regname").keyup(function(){
					regname=$(this).val();
					if(phoneattr.test(regname)){
						$("#regphone1").addClass("regcolor");
//						placeholder
						
						regnamenum=1;
					}else{
						$("#regphone1").removeClass("regcolor");
						regnamenum=0;
						regnamenum1=0;
					}
					if(isnum.test(regname)){
						$("#regphone2").addClass("regcolor");
						regnamenum1=1;
					}else{
						$("#regphone2").removeClass("regcolor");
						regnamenum1=0;
						regnamenum=0;
					}
				});
				$("#regpsd").keyup(function(){
					regname=$("#regname").val();
					regpsd=$(this).val();
					newregpsd=$("#newregpsd").val();
					if(pwdlength.test(regpsd)){
						$("#regpsd1").addClass("regcolor");
						regpsdnum=1;
					}else{
						$("#regpsd1").removeClass("regcolor");
						regpsdnum=0;
					}
					if(pwdnull.test(regpsd)==false){
						$("#regpsd2").addClass("regcolor");
						regpsdnum1=1;
					}else{
						$("#regpsd2").removeClass("regcolor");
						regpsdnum1=0;
					}
					if(regpsd!=regname){
						$("#regpsd3").addClass("regcolor");
						regpsdnum2=1;
					}else{
						$("#regpsd3").removeClass("regcolor");
						regpsdnum2=0;
					}
					if(newregpsd==regpsd){
						$("#newregpsd1").addClass("regcolor");
						newregpsdnum=1;
					}else{
						$("#newregpsd1").removeClass("regcolor");
						newregpsdnum=0;
					}
				});
				$("#newregpsd").keyup(function(){
					newregpsd=$(this).val();
					regpsd=$($("#regpsd")).val();
					if(newregpsd==regpsd){
						$("#newregpsd1").addClass("regcolor");
						newregpsdnum=1;
					}else{
						$("#newregpsd1").removeClass("regcolor");
						newregpsdnum=0;
					}
				});
				//bug一个接一个的来  都快人格分裂了   - -
				$("#mreg").click(function(){
					if(mreg_i!=0){
						if(regnamenum==0 || regnamenum1==0){
							$("#regli1").children("ol").slideDown().parent().siblings().children("ol").slideUp();
						}
						else if(regpsdnum==0 || regpsdnum1==0 || regpsdnum2==0){
							$("#regli2").children("ol").slideDown().parent().siblings().children("ol").slideUp();
						}
						else if(newregpsdnum==0){
							$("#regli3").children("ol").slideDown().parent().siblings().children("ol").slideUp();
						}
						else{
							alert("成功");
						}
					}
					mreg_i++;
				})
				
			})
				//c4代码结束