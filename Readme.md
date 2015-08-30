#About
This is a project I did in the year 2006. I'm not sure what needs to be done to get it up and running but it may contain a lot of useful code samples for the wild.

The php portion is mainly generating xml. The rendering takes place in js. The code contains Window Manager written in Java Script and very early AJAX implementations.

The code might not be safe nor sane. I haven't looked at it for almost 9 years. So use at your own risk!

The project was an assessment project during a course in the year 2006.
#Configuration
##Server
Go and find a LAMP/WAMP dating Nov. 2006. I'm not sure what versions where used.

If you find out what actually works let me know.
##Database
###Database setup
Import the file: localhost.sql into a new mysql database.
###Database configuration
1. Open the file: webshop/includes/app.php
2. In line 85 you will find the database connection configuration
```php
class DB extends DBConnect {
	protected $_host = 'localhost';
	protected $_user = 'databaseusername';
	protected $_pass = 'databasepassword';
	protected $_database = 'webshop';
}
```