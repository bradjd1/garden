# garden
This will allow you to keep track of what seeds you planted in your garden and how well they did.  You can make notes about the weather conditions and if the seeds grew well or not and how they tested.  There is a place where you can mark whether you want to purchase that seed again.

Garden Tracker deployed to: https://brad-garden-tracker.herokuapp.com/gardens/
GitHub repo: https://github.com/bradjd1/garden

These are the user stories I was working from as I created this application.
User Stories
as a gardener I want a list of seeds to select from so I know what I can plant
as a gardener I want a way to list what I planted by year so I can keep track of it
as a gardener I want a way to update what I planted so I can add new plantings or remove items tilled under.
as a gardener I want a way to update my garden information to keep information current as the season progresses and/or conditions change
as a gardener I want a way to capture how well the seeds did so I know if I want to buy/plant them again
as a gardener I want a way to record what the weather conditions were for the year to help determine if it was the seeds and/or the weather when evaluating future purchase/planting
as a gardener I want a way to update the weather conditions so I can track the entire growing season
as a gardener, I want a way to record the seeds I planted so I know what is currently planted
as a gardener, I want a way to add to the list of possible seeds so I can grow new things
as a gardener, I want a way to remove seeds that I don't want to plant again
as a gardener, I want a way to update the seed information so I can capture updates/changes
as a gardener, I want a way to track the location of the planted item for future crop rotation or possible fertilizer needs
as a gardender, I want a way to make miscellanwous notes so I can track things like location, fetilizers, herbacides, etc

This app was built using HTML, Node JS, EJS, xpress, method override, Sequelize, Postgres, dotenv, Heroku, Git, GitHub
additional resources used: pgAdmin, excel
I consulted stackoverflow, W3Schools, and the class instructor

I started by creating screen ideas in excel.  Next I drafted what tables and columns I would need and identified primary and foreign keys.  My initial plan was to have a Garden object and add seeds to it.  After consulting with the class instructor, we changed the model to create a list of seeds and add them to a garden.  He also suggested that I start by building the seeds and garden routs, and add the foreign keys in through migration instead of trying to build then into the original design.  Based on that advice, I:
built the seeds and garden routes, added CRUD capabilities, then used migrate to built the link from seeds to gardens.  The application was put in a GitHub repository and published using Heroku.  I added a .css file and gave everything a background color.

tables:
Gardens
id: integer PK, FK to Seeds
npx sequelize model:generate --name Garden --attributes id:integer,seedId:string,year:string,notes:string

Seeds
seedId:int PK
npx sequelize model:generate --name Seed --attributes seedId:string,name:string,variety:string,yrPurchased:string,price:decimal(5,2),purch_from:string,catSeedId:string,desc:string,purch_again:string

relationships:
Gardens can have 0 to many seeds
Seeds can be in 0 to 1 Garden

tables:
Gardens
id: integer PK, FK to Seeds
npx sequelize model:generate --name Garden --attributes id:integer,seedId:string,year:string,notes:string

Garden Screen
<add garden> <list seeds>
year
delete
edit
year
delete
edit

add garden screen:
year
notes
save btn
<back to seeds> <view gardens>

show seeds screen
<add seed> <add garden> <view garden>
seed name 'in' garden-name
delete
edit
seed name 'in' garden-name
delete
edit
seed name 'in' garden-name
delete btn
edit btn

add Seeds Screen
<return to seeds> <list gardens>
name
 var
year
price
purchased from
catalogID
description
again
result
garden
save btn

Thoughts for the future:
Add User routes/logins so multiple people can track gardens
see if I can pull descriptions or pictures from a companies website
ability to copy a seed
perhaps from the garden page you could see a list of seeds, and put a check by the ones you want to add
  to your garden that year.
perhaps a join table between gardens and seeds.  This would allow the same seed to be planted in multiple
  gardens, and eliminate the need to copy/duplicate seeds.

  For me, the hardest part was understanding how to model the data.  My original plan was to have a Garden table and allow you to enter as many seeds as you wanted.  But this would require multiple rows in the garden table, which would violate the unique key constraint.