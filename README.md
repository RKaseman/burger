
# Node Express Handlebars

- - -

> But it's not the end of the world if you don't understand absolutely everything.
__-- Sarah Cullen, Coding Instructor__
> You don’t have to know everything. You just have to know where to find it.
__-- Albert Einstein__

Is it _as important_ to understand and work with existing code as it is to be able to write new code?

I asked myself this question when my front end development head struggled with this back end project. I want to understand everything, but realize it's not possible. What to do? Learn whatever I can, of course.

In light of the fact that my answer to the question posed is "yes", my goals on this project became:
  * record the process of refactoring code that works initially.
  * acknowledge that it's not refactoring, strictly speaking.
    * I do want to change some specific _behaviors_ without changing fundamental functionality, so
    * Refactor and repurpose.
  * comment the heck out of it to show I get it, even if I couldn't write it myself.
  * use even more in depth feedback from editor Visual Studio Code and Chrome Developer Tools to dive into them in greatest possible detail.
  * fight the feeling that this is cheating and _learn as much as I can in the process_.
  * finish with greater understanding and a working project.

## Here is: Cat Burgers (Don't take it wrong. I love cats.)

### changelog:

1. write README.md
1. had already started a few changes based on getting the original code up and running as a working model
1. change diplayed text from cat references to burger references, noting possible deletes (2 files) not radio buttons
1. button .class change-sleep -> eatStatus (2 files) dropping dashes in favor of camelCase
1. burgers_db -> burger_db (2 files)
1. swapped order of AUTO_INCREMENT NOT NULL -> NOT NULL AUTO_INCREMENT (1 file) this fixed an undefined/blank error message I was getting on db creation
1. cats -> burgers (4 files) did plural before singular for easier edit selecting
1. cat -> burger (5 files) not cat-block.handlebars references or filename
1. Cat -> Burger (1 file)
1. TABLE cats -> burgers (HeidiSQL) no change to original cat_db schema or seeds files

