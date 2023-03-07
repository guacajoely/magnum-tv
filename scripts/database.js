const database = {



}




export const getShows = () => {
  return database.shows.map(showObject => ({...showObject}))
}