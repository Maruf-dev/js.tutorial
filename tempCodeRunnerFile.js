const list = [[1,2,3], false, 4, [1,2,3],'hello',];
const newList = [];

list.forEach((item)=>{
  const res = Arrat.isArray(item)
  if (res){
    item.forEach((number)=>{
      newList.push(number)
    })
  }
})