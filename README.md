"# delevery-route-optimization" 

- inputs  
buildings - a list of buildings with the name and distance attributes.
start - the starting building.

- output
array of buildings representing the optimized route

- data structures
buildings - array
single building - js object(hash table)
start - js object(hash table)

# psudocode

- create new js object(hash table) to store order list(array) and distance(numbers)
- while there are buildings that haven't been visited yet
	- declare variable to store minimum distance and initialize it with minimum  Infinity
	- declare variable to select the next building from

    - loop through array of buildings
       - if current building isn't the starting building, and it hasn't been visited already 
         	- find distance between current buildings and start's position in the visited solution list  
         	- find the minimum distance between any of the unvisited buildings and choose the minimum distance       
    - push chosen building to order list in visited object 	 
    - update total distance of route by adding chosen building's distance to existing number
    - reset start variable by newly selected building 
    - add full circle returning phase at the end since it needs to return back to starting point at some point

- return whole traveling history representing the shortest route with all details 



#  time complexity 
BigO(n**2)
# space complexity 
BigO(n)


# test case 1
let buildings1 = [ {name: 'a', distance: 23},{name: 'b', distance: 2}, {name: 'c', distance: 3}, {name: 'd', distance: 2234}]
let start1 = {name: 'start', distance: 1 }

deliveryRouteOptimization(buildings1, star1)


# test case 2

let buildings2 = [ {name: 'a', distance: 23},{name: 'b', distance: 2}, {name: 'c', distance: 3}, {name: 'd', distance: 2234}]
let start2 = {name: 'start', distance: 1 }

deliveryRouteOptimization(buildings2, start2)

