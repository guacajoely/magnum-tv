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