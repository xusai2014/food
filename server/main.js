import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  setInterval(Meteor.bindEnvironment(function() {
    let date = new Date();
    if(date.getHours()==5){
      let mates = Mates.find().fetch();
      if(mates.length>0){
        _.each(mates,function(v,i){
          Mates.update(v._id,{$set:{
            food:false
           }});
        });

      }
      
    }
  }),20*60000);
});
