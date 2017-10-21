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

import org.web.biz.LoginBiz;
import org.web.biz.impl.LoginBizImpl;
import org.web.entity.Login;

public class adduserservlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); 
		response.setCharacterEncoding("UTF-8");
//		response.setContentType("text/html;charset=gb2312");
		LoginBiz loginbiz=new LoginBizImpl();
        String regname = request.getParameter("regname");
        String regpsd = request.getParameter("regpsd");
        Login login=new Login();
		login.setPhone(regname);
		login.setPassword(regpsd);
		DateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
	    Date date = new Date();
		login.setCreatdate(dateFormat.format(date).toString());
        boolean b=loginbiz.adduser(login);
        int i=0;
		if(b){
			i=1;
		}else{
			i=0;
		}
        PrintWriter out = response.getWriter();
		out.print(i);
		out.flush();
		out.close();
	}

}
