const database = {
  actors: [
    { 
    id: 1,
    name: "Bryan Cranston"
    },
    { 
    id: 2,
    name: "Jon Hamm"
    },
    { 
    id: 3,
    name: "Norman Reedus"
    }

  ],

  shows: [
    { 
    id: 1,
    name: "Breaking Bad", 
    type: "drama",
    actorID: 1,
    weeklyDay: "Monday",
    weeklyTime: "7:00pm"
    },
    { 
    id: 2,
    name: "Mad Men", 
    type: "drama",
    actorID: 2,
    weeklyDay: "Wednesday",
    weeklyTime: "8:00pm"
    },

    { 
    id: 3,
    name: "The Walking Dead", 
    type: "drama",
    actorID: 3,
    weeklyDay: "sunday",
    weeklyTime: "9:00pm"
    }
      

  ],

  watchlist: [
    {id: 1, showID: 1},
    {id: 2, showID: 2},
    {id: 3, showID: 3}
  ]
}


export const getActors = () => {
  return database.actors.map(actorObject => ({...actorObject}))
}

export const getShows = () => {
  return database.shows.map(showObject => ({...showObject}))
}

export const getWatchlist = () => {
  return database.watchlist.map(watchlistObject => ({...watchlistObject}))
}