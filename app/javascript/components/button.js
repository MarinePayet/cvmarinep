
//Assistante Chef de projet
 const cpm = document.querySelector("#cpm");
 const assChef = document.querySelector('#assChef');

  cpm.addEventListener("click", (event) => {
  assChef.classList.toggle("hidden");
  });


// 2014-2015 Missions linguistiques à Toronto au Canada

const toronto = document.querySelector("#toronto");
 const torontoToDisplay = document.querySelector('#torontoToDisplay');

  toronto.addEventListener("click", (event) => {
  torontoToDisplay.classList.toggle("hidden");
  });


// 2011-2014 Assistante Communication

const meeschaert = document.querySelector("#meeschaert");
 const meeschaertToDisplay = document.querySelector('#meeschaertToDisplay');

  meeschaert.addEventListener("click", (event) => {
  meeschaertToDisplay.classList.toggle("hidden");
  });



// 2010-2011 Assistante Chargée d’études

const havas = document.querySelector("#havas");
 const havasToDisplay = document.querySelector('#havasToDisplay');

  havas.addEventListener("click", (event) => {
  havasToDisplay.classList.toggle("hidden");
  });



// 2009-2010 Chargée de Relations Clients

const acep = document.querySelector("#acep");
 const acepToDisplay = document.querySelector('#acepToDisplay');

  acep.addEventListener("click", (event) => {
  acepToDisplay.classList.toggle("hidden");
  });
