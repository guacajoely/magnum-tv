import { Actors } from "./actors.js";
import { Shows } from "./shows.js";
import { Watchlist } from "./watchlist.js";

export const HTMLcreator = () => {
    return `
        <section class="container">
            <article class="actors column">
                <h2>Actors</h2>
                ${Actors()}
            </article>
            <article class="shows column">
                <h2>Shows</h2>
                ${Shows()}
            </article>
        </section>
        <article class="watchlist column">
            <h2>Watch List</h2>
            ${Watchlist()}
        </article>
        
      `;
  };