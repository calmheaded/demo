package org.web.biz;

import org.web.entity.Login;

public interface LoginBiz {
	public Login login(String userName,String userPass);
	public Login validatephone(String phone);
	public boolean adduser(Login login);
}
