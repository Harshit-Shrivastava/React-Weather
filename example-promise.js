// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Bloomington', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//     });
// }
//
// getTempPromise('Bloomington').then(function(temp){
//   console.log('Promise success', temp);
// }, function(err){
//   console.log('Promise error', err);
// })

function addPromise(a, b){
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a + b);
    }else{
      reject('Incorrect input');
    }
  });
}

addPromise(6, 5).then(function(temp){
  console.log('result', temp);
}, function(err){
  console.log('error', err);
});
