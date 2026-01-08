# README 
## 1. Project Overview
- **ShelfSpin - Spin your shelf. Start your next book.**
- **Problem Statement:** Many people love reading books, but many of those don't.
This application allows the user to find books that will target what they would
currently want to read based off a few questions. The application will randomly
pick a book based on rules such as length, genre, and mood
- **Target Users:** People who read and non-readers will give it a try
---
## 2. Feature Breakdown
- **MVP Features:**
A very simple website with questions somewhere to start the book-choosing
process
A logo
A catchphrase, about us or something that tells the user what we are
- **Extended Features:**
Improving book-choosing algorithm based off users questions and the book they
decided to read
Possibly some sort of book forumn
Possible links of where to read the book online (Free options prioritized)
---
## 3. Data Model Planning
- **Core Entities:** What are the main data objects? What are you storing?
User: Account info/profile
Book: Title, subtitle, description, pageCount, language, publishedDate
Author: Author
UserBook: Status, Priority, added_at, started_at, finished_at
tag/shelf: Fantasy, Short reads, Spiritual, School
Rouletteprofile(spin rules): min_pages, max_pages, allowed_tags, excluded_tags,
exclude_finished, exclude_series
SpinHistory: helps users avoid repeats and adds a “story” to the app
- **Key Relationships:** How do these entities connect / relate to each other?
Users <-> Books
A user can have many books
Books <-> Authors
One book can have many authors
One book can be on many books
Users <-> Tags
Tag is owned by a user
---
## 4. User Experience
- **User Flows:** How do users accomplish key tasks?
Visiting the site, there will be a filter (current mood, length of book, genre,
etc) and then they could click submit to roll the wheel / shelf to find the next
book they can read along with links of pdf files or other places they could read
it, free options should be prioritized at the top, and paid second.
- **Wireframes/Sketches:** Basic layout ideas for main screens
+----------------------------------------------------------------------------------
+
| ShelfSpin [ Search title / author / ISBN ] [+ Add]
|
| [Spin] [Me]
|
+-------------------------+-------------------------------------------+------------
+
| Filters | Spin Zone | Spin Rules
|
| - Eligible | +---------------------+ Next Pick | Profile:
|
| - All TBR | | Cover | Book — Author | Weeknight
|
| - Reading | | | Why picked: | Quick
|
| - Finished | +---------------------+ • tags: Short | pages 0-
250|
| | [SPIN NOW] [Exclude] • pages ok | weight:
ON |
| Tags | [Start Reading] [Re-spin] |
|
| - Fantasy +-------------------------------------------+ | Recent:
|
| - Short | Eligible Pool (Cards/List) | • Book A
|
| - School | Cover | Title | Tags | Pages | Priority | • Book B
|
| | ... |
|
| Saved Spins | |
|
| - Weeknight Quick | |
|
| - Weekend Deep | |
|
+-------------------------+-------------------------------------------+------------
+
