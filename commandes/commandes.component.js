angular.module('commandesList').component('commandesList', {
  templateUrl: 'commandes/commandes.template.html',
  controller: function CommandesList($http) {

    this.list = [];

    var self = this;
    var args = '{"query":{"match_all" :{ }}}';

    $http.post("http://10.213.93.75:9200/angulartest/commandes/_search", args).then(function(response) {
      for(var i = 0 ; i < response.data['hits']['total']; i++)
        {
          self.list.push(response.data['hits']['hits'][i]['_source']);
        }
    });

    this.addCommande = function() {
        var args2 = '{"name":"' + this.name + '","desc":"'+ this.desc +'"}';
        console.log(args2);
      var commande = this.list.push({name: this.name, desc: this.desc});
      $http.post('http://10.213.93.75:9200/angulartest/commandes', args2);
    };
  }
});
