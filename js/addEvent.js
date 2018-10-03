function addEvent(form) {
  let newEvent = {
    "dateTime": form.dateTime.value,
    "description": form.description.value,
    "nameEvent": form.nameEvent.value,
    "place": form.place.value,
    "speakers": [
      {
        "avatar": form.photo.value,
        "social": form.social.value,
        "name": form.name.value,
        "surname": form.surname.value
      }
    ]
  };

  let date = new Date(form.dateTime.value);
  let yearIndex = date.getFullYear();
  yearIndex = yearIndex - data[0].year;
  
  if(data[data.length-1].year < date.getFullYear()){
    dataBase.ref(yearIndex + '/year').set(date.getFullYear());
    dataBase.ref(yearIndex + '/events').child('0').set(newEvent);
    console.log(true);
    } 
    else {
      console.log(false);
      dataBase.ref(yearIndex + '/events').child(data[yearIndex].events.length).set(newEvent);
    }
}

