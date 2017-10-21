package org.web.test;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.crypto.Data;

import org.web.biz.LoginBiz;
import org.web.biz.impl.LoginBizImpl;
import org.web.entity.Login;

public class test {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		LoginBiz loginBiz=new LoginBizImpl();
		Login login=loginBiz.login("123456", "123456");
		if (login!=null) {
			System.out.println("µÇÂ¼³É¹¦"+login.getPhone());
		}else{
			System.out.println("µÇÂ¼Ê§°Ü£¡");
		}
		
		
		
//		LoginBiz loginBiz=new LoginBizImpl();
//		Login login=new Login();
//		login.setPhone("123456");
//		login.setPassword("123456");
//		DateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
//	    Date date = new Date();
//		login.setCreatdate(dateFormat.format(date).toString());
//		boolean b=loginBiz.adduser(login);
//		if(b){
//			System.out.println("×¢²á³É¹¦");
//		}else{
//			System.out.println("×¢²áÊ§°Ü");
//		}
	}

}
