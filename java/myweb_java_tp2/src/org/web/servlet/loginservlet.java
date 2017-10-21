package org.web.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.web.biz.LoginBiz;
import org.web.biz.infoBiz;
import org.web.biz.impl.LoginBizImpl;
import org.web.biz.impl.infoBizImpl;
import org.web.entity.Login;
import org.web.entity.Logininfo;

public class loginservlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		 doPost(request, response); 
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			request.setCharacterEncoding("UTF-8"); 
			response.setCharacterEncoding("UTF-8");
//			response.setContentType("text/html;charset=gb2312");
			LoginBiz loginbiz=new LoginBizImpl();
	        String loginname = request.getParameter("loginname");
	        String loginpsd = request.getParameter("loginpsd");     
	        System.out.println(loginname);
	        Login login = loginbiz.login(loginname,loginpsd);
//	      	 向info表添加数据
			infoBiz infobiz=new infoBizImpl();
	        Logininfo info=new Logininfo();
	        DateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
		    Date date = new Date();
	        info.setInfophone(loginname);
	        info.setInfodata(dateFormat.format(date).toString());
	        String i="";
			if(login!=null){
				i=login.getPhone();
				System.out.println("----------"+i);
		        boolean b=infobiz.addinfo(info);
		        if(b){
		        	System.out.println("添加成功！");
		        }
			}else{
				i="0";
			}
	        PrintWriter out = response.getWriter();
			out.print(i);
			out.flush();
			out.close();
	}

}
