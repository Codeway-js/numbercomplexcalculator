# numbercomplexecalculator
## description
it is a calculator for complexe number
## documentation
for create a complexe number use
```js
const complexenumbers = require('numbercomplexecalculator')
const a = new complexnumbers(2/*real axe*/,3/*imagine axe*/)
```
**all the code modify the value written at but nit modify the argument**
* `a.add`(complexenumber)
add two complexe number
* `a.sub`(complexenumber)
substract two comlexe number
* `a.mul`(complexenumber)
multiply two comlexe number
* `a.inverse`()
calculate the inverse of the complexe number
* `a.divide`(complexenumber)
divide two complexe number (a.divide(b) will equal in a = b/a)
* `a.congugate`()
calculate the congugate of the complexe number
* `a.clone`()
clone the current number. any calculation on the clone will **not** modify the current number  