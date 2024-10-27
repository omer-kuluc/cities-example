let cities = [
  { 
      city: "Adana", 
      famousFor: "Kebap", 
      type: "food", 
      plateNumber: "01" 
  },
  { 

      city: "Ankara", 
      famousFor: "Simidi", 
      type: "food", 
      plateNumber: "06" 
  },
  { 
      city: "İstanbul", 
      famousFor: "Boğaz", 
      type: "place", 
      plateNumber: "34" 
  },
  { 
      city: "İzmir", 
      famousFor: "Boyoz", 
      type: "food", 
      plateNumber: "35" 
  },
  { 
      city: "Bursa", 
      famousFor: "İskender Kebabı", 
      type: "food", 
      plateNumber: "16" 
  },
  { 
      city: "Antalya", 
      famousFor: "Düden Şelalesi", 
      type: "place", 
      plateNumber: "07" 
  },
  { 
      city: "Gaziantep", 
      famousFor: "Baklava", 
      type: "food", 
      plateNumber: "27" 
  },
  { 
      city: "Konya", 
      famousFor: "Etli Ekmek", 
      type: "food", 
      plateNumber: "42" 
  },
  { 
      city: "Trabzon", 
      famousFor: "Hamsi", 
      type: "food", 
      plateNumber: "61" 
  },
  { 
      city: "Kayseri", 
      famousFor: "Mantı", 
      type: "food", 
      plateNumber: "38" 
  },
  { 
      city: "Eskişehir", 
      famousFor: "Lületaşı", 
      type: "place", 
      plateNumber: "26" 
  },
  { 
      city: "Rize", 
      famousFor: "Çay", 
      type: "food", 
      plateNumber: "53" 
  },
  { 
      city: "Erzurum", 
      famousFor: "Cağ Kebabı", 
      type: "food", 
      plateNumber: "25" 
  },
  { 
      city: "Diyarbakır", 
      famousFor: "Karpuz", 
      type: "food", 
      plateNumber: "21" 
  },
  { 
      city: "Mardin", 
      famousFor: "Taş Evler", 
      type: "place", 
      plateNumber: "47" 
  },
  { 
      city: "Van", 
      famousFor: "Van Kedisi", 
      type: "place", 
      plateNumber: "65" 
  },
  { 
      city: "Sivas", 
      famousFor: "Kangal Köpeği", 
      type: "place", 
      plateNumber: "58" 
  },
  { 
      city: "Şanlıurfa", 
      famousFor: "Balıklıgöl", 
      type: "place", 
      plateNumber: "63" 
  },
  { 
      city: "Mersin", 
      famousFor: "Tantuni", 
      type: "food", 
      plateNumber: "33" 
  },
  { 
      city: "Muğla", 
      famousFor: "Turistik Yerleri", 
      type: "place", 
      plateNumber: "48" 
  },
  { 
      city: "Çanakkale", 
      famousFor: "Tarihi Gelibolu Yarımadası", 
      type: "place", 
      plateNumber: "17" 
  },
  { 
      city: "Hatay", 
      famousFor: "Antakya Mozaikleri", 
      type: "place", 
      plateNumber: "31" 
  },
  { 
      city: "İzmir", 
      famousFor: "Efes Antik Kenti", 
      type: "place", 
      plateNumber: "35" 
  },
  { 
      city: "Nevşehir", 
      famousFor: "Kapadokya", 
      type: "place", 
      plateNumber: "50" 
  },
  { 
      city: "Aydın", 
      famousFor: "Milet Antik Kenti", 
      type: "place", 
      plateNumber: "09" 
  }
];

btnList.addEventListener('click',handleListCities);

function handleListCities() {
    if(citiesList.innerHTML!=='') {
        alert('hata');
    }
    else {
        for(const city of cities) {
            citiesList.innerHTML+= `<li>şehir : ${city.city}, medarıİftiharı : ${city.famousFor},
            ünlü olduğu tip : ${city.type}, plaka : ${city.plateNumber}</li>`
        }
    }
}

btnFood.addEventListener('click',ListFamousForFoods);

function ListFamousForFoods() {
    if(foodsList.innerHTML!=='') {
        alert('hata');
    }
    else {
        for(const city of cities) {
            if(city.type==='food') {
                foodsList.innerHTML+=`<li class='foods-item'>şehir : ${city.city},
               ünlü olduğu yemek : ${city.famousFor} </li>`;
            }
        }
    }
}

btnPlace.addEventListener('click',ListFamousForPlaces);

function ListFamousForPlaces() {
    if(placesList.innerHTML!=='') {
        alert('hata');
    }
    else {
        for(const city of cities) {
            if(city.type==='place') {
                placesList.innerHTML+=`<li class='place-item'>şehir : ${city.city},
               ünlü tarihi yeri : ${city.famousFor} </li>`;
            }
        }
    }
}

btnPlates.addEventListener('click', ListPlates);

let oddPlates = [];
let evenPlates = [];
let oddIndex = 0;
let evenIndex = 0;
function ListPlates() {
    if(oddPlateNumbersList.innerHTML!=='' && evenPlateNumbersList.innerHTML!=='') {
        alert('hata');
    }
    else {
        for(const city of cities) {
            if(Number(city.plateNumber)%2==0) {
                evenPlates[evenIndex] = city;
                evenPlateNumbersList.innerHTML+=`<li>şehir : ${city.city},
                plakası : ${city.plateNumber} </li>`;
                evenIndex++;
                console.log('çift');
            }
            else {
                oddPlates[oddIndex] = city;
                oddPlateNumbersList.innerHTML+=`<li>şehir : ${city.city},
                plakası : ${city.plateNumber} </li>`;
                oddIndex++;    
                console.log('tek');

            }
        }
    }
}