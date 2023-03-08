import { getActors } from "./database.js"
const allActors = getActors()

export const Actors = () => {
    
    let HTML = "<ul>"

    for (const actor of allActors) {
        HTML += `<li id="actor--${actor.id}">${actor.name}</li>`
    }

    HTML += "</ul>"

    return HTML
}

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF SHOWS BECAUSE THAT IS WHERE THE SHOW NAMES ARE STORED
import { getShows } from "./database.js"
const allShows = getShows()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN ACTOR?
        if (itemClicked.id.startsWith("actor")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED ACTOR?
            const [,PrimaryKey] = itemClicked.id.split("--")

            let matchingActor = null
            let matchingShow = null

            //GRAB THE WHOLE ACTOR OBJECT TO GET THEIR NAME
            // for (const actor of allActors){
            //     if (parseInt(PrimaryKey) === actor.id){
            //         matchingActor = actor
            //     }
            // }

            //WHILE YOU"RE HERE, LOOP THROUGH THE SHOWS ALSO TO FIND THE RELATED SHOW OBJECT SO WE CAN GET ITS NAME
            // for (const show of allShows){
            //     if (show.actorID === matchingActor.id){
            //         matchingShow = show
            //     }
            // }

            
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //OR USE FIND METHOD
             matchingActor = allActors.find(item => item.id === parseInt(PrimaryKey));
             matchingShow = allShows.find(item => item.id === matchingActor.id);

                
            //can also just use innerHTML INSTEAD of looping through actor objects for name
            const testActorName = itemClicked.innerHTML

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            // INSERT THE MATCHED ACTOR NAME AND THE MATCHED SHOW NAME INTO ALERT
            window.alert(`${testActorName} stars in ${matchingShow.name}`)

            }

        }
    
)