

Template.mates.onCreated(function(){
  Template.mates.date = new ReactiveVar(new Date());
  setInterval(function(){
    Template.mates.date.set(new Date());
  },100);
})
Template.mates.helpers({
  currentDate(){
    let date = Template.mates.date.get();
    return "  "+date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日" + date.getHours()+"时"+date.getMinutes()+"分"+"  星期  "+date.getDay();
  },
  mates: function() {
    return Mates.find();
  },
  parts: function(){
    return [
    {
      name:"Boss",

    },
    {
      name:"系统部",

    },
    {
      name:"人事行政",

    },
    {
      name:"销售",

    },{
      name:"社区市场",

    },{
      name:"产品部",

    },
    {
      name:"嵌入式",

    },{
      name:"分公司",

    },{
      name:"访客",

    }
    ]
  },
  foodNumber:function(){
    return Mates.find({food:true}).fetch().length;
  },
  textInput:function(food){
     
     if(food){
        return '取消';

     } else {
        return '订餐';
     }
  },
  classActive:function(food){
    if(food){
        return 'activeS';

     } else {
        return 'inactive';
     }
  }
});

Template.mates.events({
  'click .add':function(e){
    let name = $('.name').val();
    let part = $('.parts').find("option:selected").val();
    if(name && part !== "请选择"){
      Mates.insert({
        name:name,
        part:part,
        food:false
      })
    } else {
      $('.errorinfo').html('请填写完整的姓名和选择部门名称');
      setTimeout(function(){
        $('.errorinfo').html('');
      },1000)
    }
  },
  'click .select':function(e){
     const id = e.currentTarget.parentElement.getAttribute('data-id');
    let mate = Mates.findOne({_id:id});

     
     // if(mate.food){
     //    $(e.currentTarget).html('订餐');

     // } else {
     //    $(e.currentTarget).html('取消');
     // }
     Mates.update(id,{$set:{
      food:!mate.food
     }})

  },
  'click .deletemate':function(e){
    const id = e.currentTarget.parentElement.getAttribute('data-id');
    let r = confirm("确定删除？？？");
    if(r === true){
      Mates.remove(id)
      
    }else{
    }
  }
});