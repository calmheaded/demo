package org.web.biz.impl;

import org.web.biz.infoBiz;
import org.web.dao.infoDao;
import org.web.dao.impl.infoDaoImpl;
import org.web.entity.Logininfo;

public class infoBizImpl implements infoBiz {
	private infoDao infodao=new infoDaoImpl();
	@Override
	public boolean addinfo(Logininfo info) {
		return infodao.addinfo(info);
	}

}
