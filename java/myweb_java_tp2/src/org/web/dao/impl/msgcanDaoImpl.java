package org.web.dao.impl;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.web.dao.msgconDao;
import org.web.entity.Msgcontent;
import org.web.util.HibernateUtil;

public class msgcanDaoImpl implements msgconDao {

	@Override
	public boolean addcon(Msgcontent msgcon) throws RuntimeException {
		Session session = HibernateUtil.currentSession();
		boolean b=false;
		Transaction tx=session.beginTransaction();
		try {
			session.save(msgcon);
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
