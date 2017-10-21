package org.web.dao;

import org.web.entity.Login;
import org.web.entity.Msgcontent;

public interface msgconDao {
	public boolean addcon(Msgcontent msgcon)throws RuntimeException;
}
