package org.web.entity;

/**
 * Logininfo entity. @author MyEclipse Persistence Tools
 */

public class Logininfo implements java.io.Serializable {

	// Fields

	private Integer infoid;
	private String infophone;
	private String infodata;
	public Integer getInfoid() {
		return infoid;
	}
	public void setInfoid(Integer infoid) {
		this.infoid = infoid;
	}
	public String getInfophone() {
		return infophone;
	}
	public void setInfophone(String infophone) {
		this.infophone = infophone;
	}
	public String getInfodata() {
		return infodata;
	}
	public void setInfodata(String infodata) {
		this.infodata = infodata;
	}

	

}