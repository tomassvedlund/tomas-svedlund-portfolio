document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('sv-SE', options);
  
    dateElement.textContent = `${formattedDate}`;
  });