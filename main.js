
//creates customer profile
function makeProfile(customer) {
  //setting paths to different values that I need
  var image = customer.picture.large;
  var name = customer.name.first + ' ' + customer.name.last;
  var email = customer.email;
  var address = customer.location.street + '\n' + customer.location.city + ' ' + customer.location.state + ' ' + customer.location.postcode;
  var phone = customer.cell;
  var ssn = customer.id.value;
  //main profile div and sets the class
  var profile = document.createElement('div');
  //body selector
  var body = document.querySelector('body');
  //creates divs for different elements and below sets the content
  var imageDiv = document.createElement('img');
  imageDiv.src = image;
  var nameDiv = document.createElement('div');
  nameDiv.textContent = name;
  nameDiv.className = "name";
  var emailDiv = document.createElement('div');
  emailDiv.textContent = email;
  emailDiv.className = "email";
  var addressDiv = document.createElement('div');
  addressDiv.textContent = address;
  addressDiv.className = "address";
  var phoneDiv = document.createElement('div');
  phoneDiv.textContent = phone;
  phoneDiv.className = "phone";
  var ssnDiv = document.createElement('div');
  ssnDiv.textContent = ssn;
  ssnDiv.className = "ssn";

  //array of div elements
  var arrayDiv = [imageDiv, nameDiv, emailDiv, addressDiv, phoneDiv, ssnDiv];
  //appends the divs to the main div
  arrayDiv.forEach(function(div) {
    profile.appendChild(div);
  })

  //appends the main div to body
  body.appendChild(profile);

}

customers.results.forEach(makeProfile);
