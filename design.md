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

* payment is stubbed to a simple click to pay button
* no v.a.t.
* no customer reviews

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
* view a history of orders

The shopkeeper can
* add/remove/publish/unpublish products to the catalog
* can set promotions on a product; new or discount
* add/remove product-items to the inventory
* set an order to sent
* set an order to delayed
* set an order to cancelled 
* view order / sales stats
* block a customer

## domain

### shopkeeper


customer


product

product-item


order


basket


review



## pages and routes

* The application keeps no state except for the user id and abilities.
* The available actions on a page and access to a page is controlled through the ability.
* Views update automatically as data changes using firedb.

1. there are two home pages 
    1. / with the promotions, hero block and the collections
    1. /keep with the urgent orders, low inventory, sales stats
1. there are three master detail pages
    1. /orders, /orders/:order-id
    1. /customers, /customer/:customer-id
    1. /collections/:collection-id
1. the special basket page /basket
1. the special search page /search/:query
1. there are sixteen action pages
    1. /login
    1. /place-in-basket/:product-id
    1. /place-order
    1. /change-account
    1. /process-order/:order-id
    1. /add-collection
    1. /change-collection/
    1. /remove-collection
    1. /add-product
    1. /remove-product
    1. /change-product
    1. /add-product-item/product-item-id
    1. /remove-product-item/product-item-id
    1. /block-customer
    1. /add-shopkeeper
    1. /block-shopkeeper