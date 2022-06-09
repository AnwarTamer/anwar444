fetch('https://web52426.herokuapp.com/data')
  .then(response => response.json())
  .then(json =>{
      studentsSelect = document.getElementById('students');
      json.Sheet1.forEach(element => {
          var option = document.createElement('option')
          option.innerHTML = element["A"]
          studentsSelect.appendChild(option);
          
      });
  })