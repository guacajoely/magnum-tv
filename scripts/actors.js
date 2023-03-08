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