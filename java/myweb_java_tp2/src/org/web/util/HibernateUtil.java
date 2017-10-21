package org.web.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class HibernateUtil {
	
	private static final ThreadLocal sessionTL = new ThreadLocal(); // 1
	
	private static Configuration configuration;
	
	private final static SessionFactory sessionFactory;
	static {
		try {		
			configuration = new Configuration().configure();			
			sessionFactory = configuration.buildSessionFactory();
		} catch (Throwable ex) {
			throw new ExceptionInInitializerError(ex);
		}
	}
	public static Session currentSession() {		
		Session session = (Session) sessionTL.get(); // 2		
		if (session == null) { // 3	
			session = sessionFactory.openSession(); // 4
			sessionTL.set(session); // 5
		}
		return session; // 6
	}
	public static void closeSession(){
		Session session = (Session) sessionTL.get(); // 2
		sessionTL.set(null);
		if(session!=null)
			session.close();
	}

}
