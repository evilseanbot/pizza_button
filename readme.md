The application as it stands now:

The application presents a form for including all relevant information to order a pizza, including a zip code.

The zip code is used to select what pizza place in SF to order from, and correspondingly what pizza to order: (Try "94102", "94103", "94177" and "12345")

On the second page, the user can click on the pizza to initiate a pizza order. Currently this does nothing, but my design is that it would send an email to a pizza operator (Possibly me) that would call the relevant pizza places and place orders, and then supply orders with an ETA or a notice if service is unavailable.

What I would do if I worked on it further:

1. I would probably redo it as a heavier-server side Rails app. I find client-side angular apps easier to throw together in 2 hours, but a more robust server side application would have several advantages in terms of making permanent storage simpler, making security simpler, etc. This would include moving the terrible awful nogood model in the controller code into a SQL database.

2. I would connect the "mailPizzaOrder" function to an api for mailing requests to the pizza order operator (Me), who would place the phone calls to order the pizza. (I also considered using some pizza ordering APIs, which would be preferable because they wouldn't require a human to go through orders, but the only one I could find was for Dominos and I wanted fancier pizzas than dominos. Ultimately I would probably want to work out deals with pizza places to set up APIs for them). After the operator makes the calls, they would use a web service to either supply the estimated time of arrival for the pizzas, or let the user know that their service was cancelled (Maybe all their nearby pizza places are closed for some reason.). Once a minute has passed, the application would query an API to find the ETA of the pizza and display it to the user.

3. I would add the ability to change your information by clicking on the areas on the right. I would probably add a geolocation feature (HTML5's navigation.geolcation) such that if you're not using a desktop, the website will request your location and will either use that for an approximate address (If the pizza people I'm working with are okay with approximate addresses), or detect if you're X distance from your previous address, in which case it would prompt you for a new address.

4. Store credit card information to make purchases easier. (I'm not sure if pizza places around here will allow orders without credit cards?)

5. Put in a "cancel" feature on the pizza ordering. How I'm imagining it would work, is that there would be a wait time where you would have 15 seconds to cancel an order before the request is sent to the order operator.

6. Actually store user information so that on subsequent visits they're information is retained. I don't think I would prompt users for a password upfront, I would just ask for a password to make their user account complete after they've actually ordered a pizza. (Less upfront form filling)

7. Make the pizza image on the order button reflect the pizza that is being ordered.

8. Remove the zip code entry, and create a service that will find the appropiate pizza place through a preference score and a lat/long point which is estimated from the supplied address. The app would use whichever pizza place with the highest preference score of pizza places within X distance of the supplied addresss. (Or possibly some weighted measure of preference scores + distance + whatever)

9. Allow people to give feedback on pizzas, which could change which pizza place will be chosen for you, possibly using a simple recommendation engine.

10. Allow pizza ordering in places other than San Francisco by scraping Yelp information about pizza places nationally/globally, with some manual curation to correct for outdated entries.

11. Test the site thoroughly with a range of browsers/OSes/mobile devices.

12. Have the site check whether any nearby pizza places are still open according to posted schedule / holiday calendar, and if not, inform the user that they can't order a pizza.

13. Allow users to actually pick pizzas to order optionally. I wouldn't pick a big focus on that, as it could be thereotically difficult to include all ordering options include a national range of pizza stores, but I would probably add non-half-vegan options, at the least. A simple "next place" option on the pizza button would be good if a user knows that they don't like a provided pizza place.

14. Allow users to order different quantities/sizes of pizzas.