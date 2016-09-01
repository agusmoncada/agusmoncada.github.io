var people = {
    people: [],
    init: function() {
      this.cacheDom();
      this.bidnEvents();
      this.render();
    },
    cacheDom: function() {
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    bidnEvents: function() {
      this.$button.on('click', this.addPerson.bind(this));
      //this.$button.on('click', this.animatePerson.bind(this));
      this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
    },

    render: function() {
      var data = {
        people: this.people,
      };
      this.$ul.html(Mustache.render(this.template, data));
      this.$ul.find('li').addClass('newLi');
    },
    addPerson: function() {
      this.people.push(this.$input.val());
      this.render();
      this.$input.val('');
    },
    deletePerson: function(event) {
      var $remove = $(event.target).closest('li');
      var i = this.$ul.find('li').index($remove);
      this.people.splice(i, 1);
      this.render();
    }
  };

people.init();
