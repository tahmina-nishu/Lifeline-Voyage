fetch('places.json')
  .then(response => response.json())
  .then(data => {
    displayPlaces(data);
  })
  .catch(error => console.error('Error fetching data:', error));

const displayPlaces = () => {
    
  const Places = document.getElementById('places');
  Places.innerHTML = `
        <div class="flex flex-col gap-2 p-4 shadow-lg">
            <img class="h-[200px]" src="images/Patenga Beach.jpg">
            <h3 class="text-xl font-bold">Patenga Beach</h3>
            <p class="text-slate-500">A historic fort with beautiful gardens</p>
            <p class="text-slate-500">Location : Old town of Dhaka</p>
        </div>
  `
}