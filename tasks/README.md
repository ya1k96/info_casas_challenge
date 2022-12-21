## API info_casas
This project should provide an API to handle CRUD operations for the task manager app.
This API will be used by frontend project.

Requirements:
● Must use one of Laravel or Lumen framework
● We will need to be able to Create, Update, Delete, Get single task and Get list of task
● The “Get list of tasks” must be able to retrieve all tasks and filter completed tasks.
● The “Get list of tasks” must have a search by name.

## Setup environments
To setup the ambience you will need to rename .env_example file with your environment variables like database engine, host and port.

# Next Step 
Execute  `composer install` on terminal.
Execute  `php artisan migrate` on terminal to set tables.

## Seed 
You will to use seeder to build data test.

Execute `php artisan db:seed --class=task_seeder` 

And finaly execute `php artisan serve`.

Greetings. Enjoy!


