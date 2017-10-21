package org.web.entity;

/**
 * Login entity. @author MyEclipse Persistence Tools
 */

public class Login implements java.io.Serializable {

	// Fields

	private Integer loginid;
	private String phone;
	private String password;
	private String creatdate;
	
	public Integer getLoginid() {
		return loginid;
	}
	public void setLoginid(Integer loginid) {
		this.loginid = loginid;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCreatdate() {
		return creatdate;
	}
	public void setCreatdate(String creatdate) {
		this.creatdate = creatdate;
	}

	

}