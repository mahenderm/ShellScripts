package com.newt;

import java.util.TimerTask;
import javaConstants.Constants;
 
public class Testing extends TimerTask
{
 
	public void run()
	{
 
                GMailServer sender = new GMailServer(Constants.setFrom, Constants.setPassword);
 
	            try {
			    sender.sendMail("Subject","This is Java4s",Constants.setFrom,Constants.emailTO);
			}
                   catch (Exception e) {
			     e.printStackTrace();
			}  
 
				System.out.println("Email Sent Succesfully...");
 
	        }
}
