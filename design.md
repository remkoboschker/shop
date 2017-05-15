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
* place an order
* use a default restired delivery address
* modify the delivery address as need an click to save as default
* payment is stubbed to a simple click to pay button
* view a history of orders
* place a product review of ordered items
* read product reviews by other customers

The shopkeeper can
* add/remove/publish/unpublish products to the catalog
* add/remove product-items to the inventory
* set an order to sent
* set an order to delayed
* set an order to cancelled 
* view order / sales stats
* block a customer
* remove a review
* publish a customer review

## domain

An product consists of 


