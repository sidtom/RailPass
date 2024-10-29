
export const getTrainsBetweenStations = async () =>{
    const url = 'https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations';
    const queryParams = new URLSearchParams({
      fromStationCode: 'BVI',
      toStationCode: 'NDLS',
      dateOfJourney: '2024-10-30'
    });
  
    const response = await fetch(`${url}?${queryParams}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '951fb57393msh3e064b5c35f3652p1bfbe6jsn1eeb065efa33',
        'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Error fetching data:', response.status, response.statusText);
    }
  }