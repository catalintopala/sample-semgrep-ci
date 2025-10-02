import { Database } from 'db-mysql';
// import { request } from 'http';
var out;
var valTom;
// var req = request(options, function(res)
// {
// 	res.on('data', function(chunk)
// 	{
// 		valTom = chunk;
// 	}
// 	);
// }
// );
new Database(
	{
		hostname: 'localhost',
		user: 'user',
		password: 'password',
		database: 'test'
	}).connect(function(error)
	{
		var the_Query =
		"INSERT INTO Customers (CustomerName, ContactName) VALUES ('Tom'," +
		valTom + ")";
		this.query(the_Query).execute(function(error, result)
		{
			if (error)
			{
				console.log("Error: " + error);
			}
			else
			{
				console.log('GENERATED id: ' + result.id);
			}
		}
		);
		out = resIn;
	}
);