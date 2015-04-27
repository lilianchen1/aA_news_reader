# News Reader (w7d3)

#### RSS News Reader is a backbone-on-rails app.
This project is built on top of a provided skeleton. Skeleton contained backend code (API)

1. Feed index view with the title of all the feed
2. Feed entries view with entries for each feed
  - Entries are sorted so that the most recent is at the top
3. Association between feed and entries are built on both frontend and backend.
4. Backbone routes are used to navigate between feed and entries views.
5. User authentication is implemented so that users must sign up/log in to view feed/entries.

#### To run the program
1. `>> rails server`
2. go to `localhost:3000`

Note: if running rails 4, generate secret key value. Refer to [this entry] on stack overflow.

[this entry]: http://stackoverflow.com/questions/22268669/deprecation-warning-you-didnt-set-config-secret-key-base
