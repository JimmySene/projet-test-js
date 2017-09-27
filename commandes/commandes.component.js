angular.module('commandesList').component('commandesList', {
  templateUrl: 'commandes/commandes.template.html',
  controller: function CommandesList($http) {

    this.list = [];
    var self = this;

    $http.get("data.json").then(function(response) {
      self.list = response.data;
    });

    this.addCommande = function() {
      this.list.push({name: this.name, desc: this.desc});
    };
  }
});
