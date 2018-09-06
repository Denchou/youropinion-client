Youropinion is a web app that allows users to express their opinions on the
internet anonymously. Users do not need to sign in to read the opinions of other
people on the internet. If a User wish to submit their own opinion, they can
create an account for free and begin submitting their own opinions as view only
their opinions and then delete or update them.

Link to the client: https://denchou.github.io/youropinion-client/
Link to the API: https://whispering-caverns-60041.herokuapp.com/
Link to the Wireframe: [Imgur](https://i.imgur.com/ZeZDE7M.jpg)

Link to API repo: https://github.com/Denchou/youropinion-api

User Story version 1:

As a User I want to view other Users reviews without an account so that I can see what others are saying
As a User I want to write participate and write reviews so I will need an account
As a User I want to be able to create an account so I can write reviews
As a User I want to be able to sign into my account after creating one
As a User I want to be able to log out when I need to
As a User I want to be able to write a review once I am signed in
As a User I want to be able to assign a rating to a topic of a review I am submitting
As a User I want to be able to view only my own reviews
As a User I want to be able to delete my own review
As a User I want to be able to update my own review

User Story version 2:

As a User I want to rate other Users reviews
As a User I want to rate other Users
As a User I want to have statistics on my own ratings to see how well people like my reviews
(WIP)

Technology used:
Github
Node.JS Javascript
Bootstrap 4
handlebars
CSS3
HTLML5
Ruby on Rails
PostgresSQL
Grunt
Rake
Heroku server

Unsolved problems for future iterations:
1) Create a new resource to store aggregate data on user in a viewable profile
2) Figure out a way to group similar topics together
3) Allow Users to rate other reviews and create an aggregate review data
4) Allow users to rate other Users

I started the problem by thinking as simply as possible, starting with a wireframe
and user story in order to be able to limit my scope. The first thing I did was
spend a couple of hours piecing everything together on a whiteboard before I
begin with scaffolding and testing the resources I need in rails.

After determining that my API is RESTful, I proceeded with the front-end portion
this time testing my API call with JQUERY and AJAX to ensure that my routes are
working through my client.

After determining that all of the routes are working as intended from the client
to the API, I proceeded to flesh out the code for CRUD to ensure that my user
can create an account, log in, log out, change password, Create a new resource
Read resources, Update and Delete them.

Once my CRUD was a success, I finished up with some UI/UX improvements using
bootstrap, Handlebars, HTML5 and CSS3. A lot of the planning and ideas I used
for this project was found by searching online for free and readily available
resources such as Stack Overflow, and various documentation sites at MDM and
Bootstrap's main page.
