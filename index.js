function loadWeb(data){
  slideTemplate(data);
  openModal(data);
  slickCenter(data);
}

getDataFromDB().then((data) => {return loadWeb(data)})
    .catch(function(error) {console.log(error)})