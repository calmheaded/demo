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

import org.web.biz.msgconBiz;
import org.web.biz.impl.msgconBizImpl;
import org.web.entity.Msgcontent;

public class addmsgconservlet extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8"); 
		response.setCharacterEncoding("UTF-8");
		msgconBiz msgconbiz=new msgconBizImpl();
		Msgcontent mct=new Msgcontent();
		String userphone = request.getParameter("userphone");
        String str = request.getParameter("str");
		mct.setLoginphone(userphone);
		mct.setMessagetext(str);
		DateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
	    Date date = new Date();
		mct.setMessagedate(dateFormat.format(date).toString());
		boolean b=msgconbiz.addcon(mct);
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
