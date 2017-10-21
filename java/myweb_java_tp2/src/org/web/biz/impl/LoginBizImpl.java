package org.web.biz.impl;

import org.web.biz.LoginBiz;
import org.web.dao.LoginDao;
import org.web.dao.impl.LoginDaoImpl;
import org.web.entity.Login;

public class LoginBizImpl implements LoginBiz {
	private LoginDao loginDao=new LoginDaoImpl();
	@Override
	public Login login(String userName, String userPass) {
		return loginDao.login(userName, userPass);
	}
	@Override
	public Login validatephone(String phone){
		return loginDao.validatephone(phone);
	}
	@Override
	public boolean adduser(Login login) {
		return loginDao.adduser(login);
	}

}
