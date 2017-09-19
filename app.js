var testApp = angular.module("testApp", []);
testApp.controller('contentController' , contentController);

function contentController() {
    this.name = "";
    this.desc = "";
    this.list = [];
  };

contentController.prototype.addCommande = function() {
    this.list.push({ name: this.name, desc: this.desc});
  };
