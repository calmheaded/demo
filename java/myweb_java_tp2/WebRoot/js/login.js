var str;
window.onload=function  () {
			  
		    	var canvas=document.getElementById("canvas");
				var cobj=canvas.getContext("2d");

             canvas.onmousedown=function  (e) {
			   var mx=e.layerX;
			   var my=e.layerY;
			   cobj.moveTo(mx,my);
			   canvas.onmousemove=function  (e) {
			     var endx=e.layerX;
			     var endy=e.layerY;
				 cobj.lineTo(endx,endy);
				 cobj.stroke();
			   }
			   canvas.onmouseup=function  () {
			    canvas.onmousemove=null;
				canvas.onmouseup=null;
				var image = new Image();
				image.src=canvas.toDataURL("image/png");
		  		str=image.src;
			   }
             }
		  }





var userphone;
function userlogin(){
	var loginname=$("#loginname");
	var loginpsd=$("#loginpsd");			
	$.post("servlet/loginservlet",
		{
			loginname:loginname.val(),
			loginpsd:loginpsd.val()
		},
			function(data){
			if(data!=null){
				alert(data);
				userphone=data;
			}
		});
}

function validatephone(){
	var phone=$("#regname");
	$.post("servlet/validatephoneservlet",
			{
				phone:phone.val(),
			},
				function(data){
				if(data==1){
					alert("no");
				}
			});
}

function userreg(){
	var regname=$("#regname");
	var regpsd=$("#regpsd");
	$.post("servlet/adduserservlet",
			{
				regname:regname.val(),
				regpsd:regpsd.val()
			},
				function(data){
				if(data==1){
					alert("yes");
				}
			});
}

function msgcontent1(){
	console.log(str);
	$.post("servlet/addmsgconservlet",
			{
				userphone:userphone,
				str:str
			},
				function(data){
				if(data==1){
					alert("yes");
				}
			});
}
















