var recipes={
  nam : "Eshu",
  age: 42,
  sex: "female"
};
function updateObjectWithKeyAndValue(object, key, value){
  var obj=Object.assign({},object);
  obj[key]=value;
  return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){

  return object;
}
function deleteFromObjectByKey(object, key){

  return obj1;
}
function destructivelyDeleteFromObjectByKey(object, key){
 delete object[key];
 return object;
}
