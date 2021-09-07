# fit2095week7
FIT2095 week 7 lab tasks:

Delete a movie by its ID
Delete an actor by its ID and all its movies from the 'Movie' collection.
Remove a movie from the list of movies of an actor
Example: http://localhost:8080/actores/1234/987
where 1234 is the actor's ID
and 987 is the movie's ID
Remove an actor from the list of actors in a movie
Example: http://localhost:8080/movies/567/2234
where 567 is the movie ID
and 2234 is the actor ID
Add an existing actor to the list of actors in a movie
Retrieve (GET) all the movies produced between year1 and year2, where year1>year2.
The current implementation of getAll actors function retrieves the list of actors, where each actor has an array of IDs that represents his/her movies.  Update the implementation such that the array of movies should contain the details of the movies instead of IDs.
Like point (7), reimplement getAll movies such that it retrieves the details of all actors for each individual movie.
Delete all the movies that are produced between two years. The two years (year1 & year2) must be sent to the backend server through the request's body in JSON format.
Deploy your app into a VM instance in your GCP account.

