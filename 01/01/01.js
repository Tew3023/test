// const array = [1,2,4,5,6]
// const array = [10, 11, 12, 14]
const array = [3, 4, 5, 6, 7]
let missvalue
for(i = 0; i <= array.length; i++){
    if(array[i] - array[i + 1] < -1){
        missvalue = array[i] + 1
        break
    }
    missvalue = 'None'

} 

console.log(missvalue)

//เพราะค่าในarrayมันเรียงกันถ้าเราเอา array[i] - array[i + 1] จะทีค่าเท่ากับ -1 เสมอถ้าค่าน้อยกว่า -1 เท่ากับว่าค่าตัวหลังจาก array[i] หายไป

