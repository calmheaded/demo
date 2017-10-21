package org.web.biz.impl;

import org.web.biz.msgconBiz;
import org.web.dao.msgconDao;
import org.web.dao.impl.msgcanDaoImpl;
import org.web.entity.Msgcontent;

public class msgconBizImpl implements msgconBiz {
	private msgconDao msgcondao=new msgcanDaoImpl();
	@Override
	public boolean addcon(Msgcontent msgcon) {
		return msgcondao.addcon(msgcon);
	}

}
