const API = {
  getfromDatabase: function(placeId) {
    return fetch(`http://localhost:8088/interests?placeId=${placeId}`) //Access all points of interest for a specific place
      .then(data => data.json()); //A promise object is being converted from JSON back to regular Javascript
  },
  addtoDatabase: function(whichResource, oneItem) {
    return fetch(`http://localhost:8088/${whichResource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(oneItem) //Being converted to JSON format from Javascript
    });
  }
}

export { API }