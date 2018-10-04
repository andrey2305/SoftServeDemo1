function uniq(array){
  let years = {};
  for( let i = 0; i < array.length; i++){
    let temp = array[i];
    years[temp] = true;
  }
  return Object.keys(years);
}

function eventsCount(events){
  return events.length;
}

function speakersCount(events){
  let speakerList = [];
  events.forEach(elementEvents => {
    elementEvents.speakers.forEach(speaker => {
      let name = speaker.name + speaker.surname;
      speakerList.push(name);
    });
  });
  return uniq(speakerList).length;
}

function placesCount(events){
  let placeList = [];
  events.forEach(elementEvents => {
      placeList.push(elementEvents.place);
  });
  return uniq(placeList).length;
}

function getYearForCard(date){
  let dateCard = new Date(date);
  return dateCard.getFullYear();
}

function getDateForModal(date){
  const listMonth = ['JUN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  date = date.split('-');
  let day = date[2];
  let month = date[1];
  return day + ' ' + listMonth[month - 1];
}