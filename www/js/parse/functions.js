function create(username, password, email){
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  alert("here's a user!");
  // other fields can be set just like with Parse.Object
  user.signUp(null, {
    success: function(user) {
      $('#create').submit();
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
};


function login(username, password){
  Parse.User.logIn(username, password, {
    success: function(user) {
      loginManager(logout(), null);
      $('#login').submit();
    },
    error: function(user, error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });

};

function logout(){
  Parse.User.logOut();
  var currentUser = Parse.User.current();
};

function loginManager(func, callback){
  setTimeout(function() {
    func();
    if(callback){callback();}
  }, 5400000);

};
