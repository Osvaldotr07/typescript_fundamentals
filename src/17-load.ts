// var _ =require('lodash');
import  _ from 'lodash';

const data =  [
  {
    username: 'osvaldo',
    role: 'admin'
  },
  {
    username: 'osvaldo',
    role: 'user'
  },
  {
    username: 'osvaldo',
    role: 'seller'
  },
  {
    username: 'osvaldo',
    role: 'customer'
  },
  {
    username: 'osvaldo',
    role: 'admin'
  }
  
]



const rta =  _.groupBy(data, (item) => item.role );
console.log(rta)
