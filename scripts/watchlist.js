import { getWatchlist, getShows } from "./database.js"
const arrayWatchlist = getWatchlist()
const arrayShows = getShows()

export const Watchlist = () => {
    
    let HTML = "<ul>"

    for (const object of arrayWatchlist) {
        let matchingShow = null
        for (const show of arrayShows){
            if (show.id === object.showID){
                matchingShow = show
            }
        }

        HTML += `<li id="watchlist--${object.id}">New episode of <strong>${matchingShow.name}</strong> every <strong>${matchingShow.weeklyDay}</strong></li>`
    }

    HTML += "</ul>"

    return HTML
}

// FIRST THE ARRAY OF SHOWS IS ALREADY IMPORTED ABOVE AS arrayShows

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON A WATCHLIST ITEM?
        if (itemClicked.id.startsWith("watchlist")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED WATCHLIST ITEM?
            const [,PrimaryKey] = itemClicked.id.split("--")


            //GRAB THE WHOLE ACTOR OBJECT TO GET THEIR NAME
            let matchingWatchItem = null
            let matchingShow = null
            for (const item of arrayWatchlist){
                if (parseInt(PrimaryKey) === item.id){
                    matchingWatchItem = item

                    //WHILE YOU"RE HERE, LOOP THROUGH THE SHOWS ALSO TO FIND THE RELATED SHOW OBJECT SO WE CAN GET ITS NAME
                    for (const show of arrayShows){
                        if (show.id === matchingWatchItem.showID){
                            matchingShow = show
                        }
                    }
                }
            }
            
            // INSERT THE MATCHED ACTOR NAME AND THE MATCHED SHOW NAME INTO ALERT
            window.alert(`${matchingShow.name} is a ${matchingShow.type} series`)

        }
    }
)

