setTimeout(function() {
  console.log('I excute first')
  setTimeout(function() {
    console.log('I excute next')
    setTimeout(function() {
      console.log('I excute last')
    }, 100)
  }, 500)
}, 1000)
