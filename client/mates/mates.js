Template.mates.helpers({
  mates: function() {
    return Mates.find();
  },
  parts: function(){
    return [
    {
      name:"系统部",

    },
    {
      name:"设计部",

    },
    {
      name:"产品部",

    },
    {
      name:"硬件部",

    },
    {
      name:"临时访客",

    }
    ]
  },
  foodNumber:function(){
    return Mates.find({food:true}).fetch().length;
  }
});

Template.mates.events({
  'click .add':function(e){
    let name = $('.name').val();
    let part = $('.parts').find("option:selected").val();
    if(name && part){
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

     
     if(mate.food){
        $(e.currentTarget).html('已取消');

     } else {
        $(e.currentTarget).html('订餐成功');
     }
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