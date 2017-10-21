package org.web.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.web.biz.LoginBiz;
import org.web.biz.impl.LoginBizImpl;
import org.web.entity.Login;

public class validatephoneservlet extends HttpServlet {
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
        String phone = request.getParameter("phone");     
        System.out.println(phone);
        Login varlidatephone = loginbiz.validatephone(phone);
        int i=0;
		if(varlidatephone!=null){
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
