package org.web.dao.impl;

import org.web.util.HibernateUtil;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.web.dao.LoginDao;
import org.web.entity.Login;

public class LoginDaoImpl implements LoginDao {

	@Override
	public Login login(String userName, String userPass)
			throws RuntimeException {
		Session session = HibernateUtil.currentSession();
		String hql = "from Login l where l.phone = :userName and l.password = :userPass";
		Query query = session.createQuery(hql);
		query.setString("userName", userName);
		query.setString("userPass", userPass);
	    Login result = (Login)query.setMaxResults(1).uniqueResult();
		return result;
	}

	@Override
	public Login validatephone(String phone) throws RuntimeException {
		Session session = HibernateUtil.currentSession();
		String hql = "from Login l where l.phone = :phone";
		Query query = session.createQuery(hql);
		query.setString("phone", phone);
	    Login result = (Login)query.setMaxResults(1).uniqueResult();
		return result;
	}

	@Override
	public boolean adduser(Login login) throws RuntimeException {
		Session session = HibernateUtil.currentSession();
		boolean b=false;
		Transaction tx=session.beginTransaction();
		try {
			session.save(login);
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
