import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // timeer = setInterval(Meteor.bindEnvironment(function() {
  //   let date = new Date();
  //   if(date.getHours()==14){
  //     let mates = Mates.find().fetch();
  //     if(mates.length>0){
  //       _.each(mates,function(v,i){
  //         Mates.update(v._id,{$set:{
  //           food:false
  //          }});
  //       });
  //       clearInterval(timmer);
  //     }
      
  //   }
  // }),20*60000);
});
