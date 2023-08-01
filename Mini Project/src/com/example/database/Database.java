package com.example.database;
import java.sql.*;
public class Database {
	static Connection con;
	public static Connection createc() 
		{	
			try 
			{
				
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				String user = "root"; 
				String password = "Soma@152"; 
				String url = "jdbc:mysql://localhost:3306/car";
				con = DriverManager.getConnection(url,user,password);
			}
			catch(Exception e) 
			{
				e.printStackTrace();
			}
			return con;
		}
}
