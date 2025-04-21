function updateClock() {
    const clockElement = document.getElementById("clock");
  
    // Skapa ett datumobjekt med svensk tid
    const now = new Date();
  
    // Formatera till svensk tid (HH:MM:SS)
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      
      hour12: false,
      timeZone: 'Europe/Stockholm'
    };
  
    const timeString = new Intl.DateTimeFormat('sv-SE', options).format(now);
    clockElement.textContent = `${timeString}`;
  }
  
  // Uppdatera direkt + var sekund
  setInterval(updateClock, 1000);
  updateClock();