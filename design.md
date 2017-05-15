# shop task

The task consists of create a basic webshop showing a product catalog and an order page including two lines of products; beer and pizza related.

This demo-application shows a working webshop written in Angular2 deployed to a Firebase backend.

## technology choices

To use some of the benefits of the platform I will use the angular-cli, angular fire, angular material.

I would also like to try the Visual Studio Code editor with Typescript.

I will try to use the Reactive programming paradigm where I can.

For bdd I would like to incorporate Cucumber for both domain-model level testing and ui acceptance testing using protractor and jasmin.

All in all quite a challenge I've set learning Anglur2 and Typescript. Material Design, Firebase and Rx.js I have used before.

I will translate the task into Gherkin files using the following assumptions and made-up requirements.

## use cases

There are two types of users: customer and shopkeeper. A customer can be unauthenticated for browsing, but must register for ordering and viewing order history. The shopkeeper must be authenticated.

The customer can
* browse the catalog
* search the catalog
* view inventory status in realtime
* view a product details page
* put a product-item in the basket
* save a basket for registered users
* place an order with the items in the basket
* use a default restired delivery address
* modify the delivery address as need an click to save as default
* payment is stubbed to a simple click to pay button
* view a history of orders
* place a product review of ordered items
* read product reviews by other customers

The shopkeeper can
* add/remove/publish/unpublish products to the catalog
* can set promotions on a product; new or discount
* add/remove product-items to the inventory
* set an order to sent
* set an order to delayed
* set an order to cancelled 
* view order / sales stats
* block a customer
* remove a review
* publish a customer review

## domain

###shopkeeper


customer


product

product-item


order


basket


review





## routes

all actions that need to be persisted have a route
all views of repository state have a route, update automatically

###customer views

1. / promotions offer search and browse controls
1. /collections/:collection-id
1. /colections/;collection-id/products/:product-id
1. /basket
1. /account
1. /orders
1. /orders/:order-id
1. /reviews
1. /reviews/:review-id
1. /payment-received

###customer actions

1. /login
1. /place-in-basket/:product-id
1. /search/:query
1. /place-order
1. /change-account
1. /place-review/:product-id
1. /remove-review/:review-id


###keep view

1. /keep/search/:query
1. /keep/orders
1. /keep/orders/:order-id
1. /keep/collections/:collection-id
1. /keep/collections/:collection-id/products/:product-id
1. /keep/collections/:collection-id/products/:product-id
1. /keep/customers
1. /keep/customers/:customer-id
1. /keep/reviews

###keep actions

1. /login
1. /keep/process-order/:order-id
1. /keep/add-collection
1. /keep/change-collection/
1. /keep/remove-collection
1. /keep/add-product
1. /keep/remove-product
1. /keep/change-product
1. /keep/add-product-item?product=:product-id
1. /keep/remove-product-item?product=:product-id
1. /keep/authorise-review
1. /keep/block-review


