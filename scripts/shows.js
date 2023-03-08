import { getShows } from "./database.js"
const allShows = getShows()

export const Shows = () => {
    
    let HTML = "<ul>"

    for (const show of allShows) {
        HTML += `<li id="show--${show.id}"><strong>${show.name}</strong> is on at <strong>${show.weeklyTime}</strong></li>`
    }

    HTML += "</ul>"

    return HTML
}

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF ACTORS BECAUSE THAT IS WHERE THE ACTORS NAMES ARE STORED
import { getActors } from "./database.js"
const allActors = getActors()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A SHOW?
        if (itemClicked.id.startsWith("show")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED SHOW?
            const [,PrimaryKey] = itemClicked.id.split("--")


            //GRAB THE WHOLE SHOW OBJECT TO GET THEIR NAME
            let matchingActor = null
            let matchingShow = null
            for (const show of allShows){
                if (parseInt(PrimaryKey) === show.id){
                    matchingShow = show

                    //WHILE YOU"RE HERE, LOOP THROUGH THE ACTORS ALSO TO FIND THE RELATED ACTOR OBJECT SO WE CAN GET THEIR NAME
                    for (const actor of allActors){
                        if (actor.id === matchingShow.actorID){
                            matchingActor = actor
                        }
                    }
                }
            }

            // INSERT THE MATCHED ACTOR NAME AND THE MATCHED SHOW NAME INTO ALERT
            window.alert(`${matchingShow.name} stars ${matchingActor.name}`)

        }
    }
)