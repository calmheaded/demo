package org.web.dao.impl;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.web.dao.infoDao;
import org.web.entity.Logininfo;
import org.web.util.HibernateUtil;

public class infoDaoImpl implements infoDao {

	@Override
	public boolean addinfo(Logininfo info) throws RuntimeException {
		Session session = HibernateUtil.currentSession();
		boolean b=false;
		Transaction tx=session.beginTransaction();
		try {
			session.save(info);
			tx.commit();
			b=true;
		} catch (Exception e) {
			tx.rollback();
			b=false;
			System.out.println("ÃÌº” ß∞‹");
			e.printStackTrace();
		}
		return b;
	}

}
