var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String},
    rank:{type:String ,default:"Bronze"},
    score:{type:Number, default: 100},
    admin:{type:Boolean, default: false},
    birthday:{type:Date},
    address:{type:String},
    contacts:[
      {
        personal:{type:Number},
        mother:{type:Number},
        father:{type:Number},
        home:{type:Number},
         
      }
    ],
    confessions:[
      {
        month:{type:Number},
        confessed:{type:Number, default: 0}
      }
    ],
    holy_masses:[
      {
        week:{type:Number},
        attended:{type:Number, default: 0}
      }
    ],
    prayers:[
    ],
    classes:[
      {
        week:{type:Number},
        attended:{type:Number, default: 0},
        score:{type:Number}   
      }
    ],
    gifts:[
      {
        name:{type:String},
        picture:{type:String, default:"NA" }
           
      }
    ]
})

  var User = mongoose.model("user", Schema);

  module.exports = User;