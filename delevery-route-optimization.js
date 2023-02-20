const deliveryRouteOptimization = (buildings, start) => {

  // create new js object(hash table) to store order list(array) and distance(numbers)
  let visited = {
    order: start,
    distance: 0
  };

  // while there are buildings that haven't been visited yet
  while (visited.order.length < buildings.length){

    let minDistance = Infinity; // set minimum inifinity as beginning value for minDistance selector 
    let nextBuilding; // next building will be selected from this

     // loop through array of buildings
     for (let i=0; i<buildings.length; i++){

       let building = buildings[i];

       // if current building isn't the starting building, and it hasn't been visited already 
       if (start != building && !visited.order.includes(building)){

         // find distance between current buildings and start's position in the visited solution list  
         const distBetween = building.distance - visited.distance; 

         // find the minimum distance between any of the unvisited buildings and choose the minimum distance       
         if (distBetween < minDistance) {
           minDistance = distBetween;          
           nextBuilding = building   ;    
           }
         } 
      }

    visited[order].push(nextBuilding);  // push chosen building to order list in visited object                 
    visited[distance] += nextBuilding[distance] ; // update total distance of route by adding chosen building's distance to existing number                            
    start = nextBuilding; // reset start variable by newly selected building                        
 
    // add full circle returning phase at the end since it needs to return back to starting point at some point
    visited[order].push(visited.order[0]);        
  
  }

  return visited[order] // return whole traveling history representing the shortest route with all details    

}


// test case 1
let buildings1 = [ {name: 'a', distance: 23},{name: 'b', distance: 2}, {name: 'c', distance: 3}, {name: 'd', distance: 2234}]
let start1 = {name: 'start', distance: 1 }

deliveryRouteOptimization(buildings1, star1)


// test case 2

let buildings2 = [ {name: 'a', distance: 23},{name: 'b', distance: 2}, {name: 'c', distance: 3}, {name: 'd', distance: 2234}]
let start2 = {name: 'start', distance: 1 }

deliveryRouteOptimization(buildings2, start2)

