# Psuedo Rugby Scout Front End
===

## App Component
* the `/` route displays the `Dashboard` component

## Dashboard Component 
* The Dashboard component manages the entire **application state** and communicates with MongoDB through async actions creaters
* The state contains player and actions, passed into dashboard as props
* Displays a PlayerForm and an unordered list of Players

## PlayerForm Component
* the form adds a player to the application state OR updates the current player 


## Player Component 
* displays a Player with a PlayerForm to update the component
* Can delete the player by clicking the `x`
