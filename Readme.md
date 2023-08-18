Digital Cowhut is an assignment by PH, to add some buyer, seller and cows listing, where user might have ability to input various information for a cow listing only if the user is seller. 

## buyer 
while registering , the buyer need to provide his budget and name, age and other informations 
## seller
while registering the seller need to provide personal information as well as the income informations
## cows 
while listing, the cow need to have name , price, location , breed and other information as well as having the information of the seller for it. 

Application Routes:

## User

api/v1/auth/signup (POST)

api/v1/users (GET)

api/v1/users/64de551e750e99d217ae03fc (Single GET)

api/v1/users/64de551e750e99d217ae03fc (PATCH)

api/v1/users/64df29e3c4663d671b7d9f21 (DELETE) 

## Cows
api/v1/cows (POST) 

api/v1/cows (GET)

api/v1/cows/64df64edd4d8a611f0ea1483 (Single GET) 

api/v1/cows/64df64edd4d8a611f0ea1483 (PATCH)

api/v1/cows/64df6526e5fdc8e417e7f5d4 (DELETE) 

## Pagination and Filtering routes of Cows

api/v1/cows?pag=1&limit=10

api/v1/cows?sortBy=price&sortOrder=asc

api/v1/cows?minPrice=500&maxPrice=70000

api/v1/cows?location=Dhaka

api/v1/cows?searchTerm=Cha


## Orders

api/v1/orders (POST)

api/v1/orders (GET)
