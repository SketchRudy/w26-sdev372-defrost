# Project Overview
## Project Name & Tagline
Defrost: Discard the Frost

## Problem Statement: What problem does this solve? Be specific!
- Waking up on cold mornings is already hard enough. It's worse when you're all ready to start your day just to see your car's windows are freezing with frost. With Defrost, on the mornings that the app detects (by checking the night before) the weather is cold enough to freeze your windows: you will recieve a notification to wake up earlier telling you to defrost your car.

## Target Users: Who would actually use this?
- Students heading to school early in the morning, employees heading to work, or simply a parent taking their child to school. People living in cold or even snowy climates. Seattle has seasons, like the one we're currently in, where this is a recurring problem people face. 

# Feature Breakdown
## MVP Features: Core functionality that could be built in the first sprint or two
1. Weather API successfully handles requests. User is able to see future forecast.
2. Website successfully sends a text to a users phone from the email the user inputs

## Extended Features: Additional functionality for later development phases
1. Logic of logins and storing that data
2. Database of the fastest to slowest defrosters when looking at each car maker
3. Interface asking for user's car's defrost time then using that to base how much earlier the user should plan ahead. (Ex. if Toyotas defrost in 15min and Hondas in 12min, the separate users of each car would be told to defrost for at least that many minutes)

# Data Model Planning
## Core Entities: What are the main data objects? What are you storing?
- User: stores phone number, location, and wake-up time
- Defrost Preference: stores temperature threshold and how much earlier to wake up
- Notification Log (optional): records whether a text was sent

## Key Relationships: How do these entities connect / relate to each other?
- A User has one defrost preference
- A User can have many notification logs
- The defrost preference belongs to a User

# User Experience
## User Flows: How do users accomplish key tasks?
1. User opens the web app
2. User enters phone number, location, wake-up time, and temperature preference
3. User submits the form
4. The app checks the weather each night
5. If it’s cold enough, the app sends a text reminder to wake up earlier

## Wireframes/Sketches: Basic layout ideas for main screens
### HERO: 
#### “Tomorrow Morning Status”
- 🌡 Forecast low: 26°F
- 🚗 Defrost reminder: ON
- ⏰ Suggested alarm: 6:30 AM
- 📍 Location: Seattle

### PAGE / SECTION FOR LOGS:
#### “Past Reminders”
- Jan 4 – Sent (24°F)
- Jan 3 – Skipped (41°F)
