function call(appId) {
  var xhr = new XMLHttpRequest();
  const loader = document.getElementById('loader');
  loader.classList.remove('hidden');

  xhr.onload = function () {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // This will run when the request is successful
      console.log('success!', xhr);
      message('success');
    } else {
      // This will run when it's not
      console.log('The request failed!', xhr);
      message('error', 'error');
    }

    // This will run either way
    // All three of these are optional, depending on what you're trying to do
    console.log('This always runs...');
    loader.classList.add('hidden');
  };

  xhr.open('POST', '/api/startTitle');
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({appId}));
}

function press(keys) {
  var xhr = new XMLHttpRequest();
  const loader = document.getElementById('loader');
  loader.classList.remove('hidden');

  xhr.onload = function () {

    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // This will run when the request is successful
      console.log('success!', xhr);
      message('success');
    } else {
      // This will run when it's not
      console.log('The request failed!', xhr);
      message('error', 'error');
    }

    // This will run either way
    // All three of these are optional, depending on what you're trying to do
    console.log('This always runs...');
    loader.classList.add('hidden');
  };

  xhr.open('POST', '/api/sendKeys');
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({keys}));
}

function message(txt, type) {
  const msg = document.getElementById('message');

  msg.textContent = txt;
  msg.classList.remove('hidden');
  msg.classList.add(type);

  setTimeout(() => {
    msg.classList.add('hidden');
    msg.classList.remove(type);
  }, 3000);
}