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