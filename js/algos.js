// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  //console.log("distanceFromGrenoble - implement me !");
  // console.log(city);
  // console.log(city.latitude);

  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var radius = 6371e3;

  var CityLat = parseFloat(city.latitude);
  var CityLong = parseFloat(city.longitude);

  //if (!(city instanceof LatLonSpherical)) city = LatLonSpherical.parse(city); // allow literal forms
  //if (isNaN(radius)) throw new TypeError(`invalid radius ‘${radius}’`);

  // a = sin²(Δφ/2) + cos(φ1)⋅cos(φ2)⋅sin²(Δλ/2)
  // δ = 2·atan2(√(a), √(1−a))
  // see mathforum.org/library/drmath/view/51879.html for derivation

  const R = radius;
  const φ1 = GrenobleLat.toRadians(),  λ1 = GrenobleLong.toRadians();
  const φ2 = CityLat.toRadians(), λ2 = CityLong.toRadians();
  const Δφ = φ2 - φ1;
  const Δλ = λ2 - λ1;

  const a = Math.sin(Δφ/2)*Math.sin(Δφ/2) + Math.cos(φ1)*Math.cos(φ2) * Math.sin(Δλ/2)*Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;

  return d;

}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j)
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  //console.log("swap - implement me !");
  temp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = temp; 

}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  //console.log("isLess - implement me !");
  let distancei;
  let distancej; 

  distancei= distanceFromGrenoble(csvData[i])
  distancej= distanceFromGrenoble(csvData[j])
  

  if (distancei<distancej)
  {
     return true;
  } 
  else 
  {
     return false;
  }

}


function insertsort()
{
// console.log("insertsort - implement me !");
let j ;
let current ;
for (let i=1; i < csvData.length; i++)
{
    j=i;
    current = csvData[i];
  
    while ((j>=1) && isLess(j,j-1)) 
    {

        swap(j, j-1)
        j = j -1; 
    }
    csvData[j] = current;
  }
 
}


function selectionsort()
{
  //console.log("selectionsort - implement me !");
  let taille = csvData.length;
  let plus_petit;

  let current ;

 for (current=0; current < taille -1; current++) 
 {
  plus_petit = current;
  for (j = current + 1; j < taille;j++) 
  {
      if (distanceFromGrenoble(csvData[j]) <  distanceFromGrenoble(csvData[plus_petit]))
      {
          plus_petit = j;
      }
  }
  swap(current, plus_petit)
 } 

}

function bubblesort()
{
 // console.log("bubblesort - implement me !");

 
 let current;
 let other_value;
 let permutation = true;
 let passage = 0;

 while (permutation) 
 {
     passage++;
     permutation = false;
     for (current=0; current < csvData.length-passage; current++) 
     {
         if (tableau[current]>csvData[current+1])
         {
                        permutation = true;
             swap(current, current + 1);

         }
     }
 
 }
}

function shellsort()
{
  console.log("shellsort - implement me !");
}

function mergesort()
{
  console.log("mergesort - implement me !");
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort()
{
  console.log("quicksort - implement me !");
}
function quick3sort()
{
  console.log("quick3sort - implement me !");
}


function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}
