var properties = {
    fName: {
      type: String,
      required: true
    },
    lName: {
      type: String,
      required: true
    }
  };
  
  var client = loopback.Model.extend('user', properties);