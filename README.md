# artistDiscog
App to comment on the discography of artist Randy Newman. Uses MongoDB, Cheerio, Mongoose, Express

# Introduction

artistDiscog is a way for users to comment on their favorite albums from an artist. The app is currently built around the discography of Randy Newman, but future builds could potentially involve almost any artist.

# Scraping 

![alt tag](https://raw.githubusercontent.com/ltdelia/artistDiscog/master/Code%20GIFs/artistDiscog-scrape.gif)

When a user initially travels to the app path, they will see an empty table. Once the user navigates to the app's "/scrape" route, artistDiscog will scrape data (using Cheerio) from the Wikipedia page listing Randy Newman's discography, and display the data on the front page in a table.

# The API

![alt tag](https://raw.githubusercontent.com/ltdelia/artistDiscog/master/Code%20GIFs/artistDiscog-api.gif)

The scraped data appears in the app's "/albums" route. Each document holds information for the album name, the release date, the label (if any), and the format (CD, LP). If a comment has been left for that album, the id generated for that comment will show here.

# Creating a Comment

![alt tag](https://raw.githubusercontent.com/ltdelia/artistDiscog/master/Code%20GIFs/artistDiscog-comment.gif)

If a user clicks on the "Comment" button for a particular album, a modal will pop up with the data for that album, and fields to enter in a title and comment to be stored in the database.


# Viewing Comments

![alt tag](https://raw.githubusercontent.com/ltdelia/artistDiscog/master/Code%20GIFs/artistDiscog-viewcomment.gif)

When a user clicks on the "View Comments" button connected to a particular album, a separate modal will pop up with the previous comment entered for that particular album.

# Viewing Comments in the API

![alt tag](https://raw.githubusercontent.com/ltdelia/artistDiscog/master/Code%20GIFs/artistDiscog-apicomment.gif)

To view the comment associated with the album, the user will navigate to the "/albums" route, with the document id. Once navigated, the user will see the contents of the comment here (the title, and the body).