package org.web.entity;

/**
 * Msgcontent entity. @author MyEclipse Persistence Tools
 */

public class Msgcontent implements java.io.Serializable {

	// Fields

	private Integer messageid;
	private String loginphone;
	private String messagetext;
	private String messagedate;
	public Integer getMessageid() {
		return messageid;
	}
	public void setMessageid(Integer messageid) {
		this.messageid = messageid;
	}
	public String getLoginphone() {
		return loginphone;
	}
	public void setLoginphone(String loginphone) {
		this.loginphone = loginphone;
	}
	public String getMessagetext() {
		return messagetext;
	}
	public void setMessagetext(String messagetext) {
		this.messagetext = messagetext;
	}
	public String getMessagedate() {
		return messagedate;
	}
	public void setMessagedate(String messagedate) {
		this.messagedate = messagedate;
	}

	
}