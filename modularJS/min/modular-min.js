var people={people:[],init:function(){this.cacheDom(),this.bidnEvents(),this.render()},cacheDom:function(){this.$el=$("#peopleModule"),this.$button=this.$el.find("button"),this.$input=this.$el.find("input"),this.$ul=this.$el.find("ul"),this.template=this.$el.find("#people-template").html()},bidnEvents:function(){this.$button.on("click",this.addPerson.bind(this)),this.$button.on("click",this.animatePerson.bind(this)).delay(300),this.$ul.delegate("i.del","click",this.deletePerson.bind(this))},render:function(){var t={people:this.people};this.$ul.html(Mustache.render(this.template,t))},animatePerson:function(){this.$ul.find("li").addClass("toggled"),this.$ul.find("li:last-child").addClass("newLi")},notAminateperson:function(){this.$ul.find("li").addClass("toggled")},addPerson:function(){this.people.push(this.$input.val()),this.render(),this.$input.val("")},deletePerson:function(t){var i=$(t.target).closest("li"),e=this.$ul.find("li").index(i);this.people.splice(e,1),this.render(),this.notAminateperson()}};people.init();