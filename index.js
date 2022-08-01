class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
}
add(num) {

  this.items.push(num);
  this.items.sort((a,b)=>a>b?1:-1);
  this.length=this.items.length;
 
}
get(position) {
   if(position>this.length-1){
     throw new Error('OutOfBounds');
   }
   else{
     return this.items[position];
   }
}
max() {
  if(this.length===0){
    throw new Error('EmptySortedList');
  }
  else{
    return Math.max(...this.items);
  }

}
min() {
  if(this.length===0){
    throw new Error('EmptySortedList');
  }
  else{
    return Math.min(...this.items);
  }

}
avg() {
  if(this.length===0){
    throw new Error('EmptySortedList');
  }
  else{
    
    return this.sum()/this.length;
  }
 
}

sum() {
      let sum=this.items.reduce((total,value)=>{
        return total+value;
      },0);

      return sum;
}  
};

module.exports = SortedList;
