/*  */
type StrOrNum = string | number
/*  */
function addElement(a:StrOrNum,b:StrOrNum){
    if(typeof a ==="string" || typeof b ==='string'){
        return a.toString() + b.toString()
    }
    return a + b
}

const result1 = addElement(1,2)
const result2 = addElement('Nabendu',' Biswas')
const result3 = addElement('Nabendu',2)
result2.split('')
 