package org.web.dao;

import org.web.entity.Login;

public interface LoginDao {
	public Login login(String userName,String userPass)throws RuntimeException;
	public Login validatephone(String phone)throws RuntimeException;
	public boolean adduser(Login login)throws RuntimeException;
}
