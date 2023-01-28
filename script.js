 alert('Welcome To Burger King')

 let menu = 'cheeseburger wopper doubleburger '
 
 let choice = prompt(' our menu cheeseburger wopper doubleburger ' ).toLowerCase.trim()
 
 let drink = (' pepsi mirinda lipton ')

 let dessert =(' icecream cake snikers ')
  
 if(menu .includes(choice)){
    console.log('ok')
    alert('ok')
    let not = confirm(' Do you want to order anythung else from drinks')
    if(not === true){

    let choicedrink = prompt(' our drink menu pepsi mirinda lipton').toLowerCase().trim()
    if(drink .includes(choicedrink)){
        console.log('ok')
        alert('ok')
       let nots =confirm(' Do you want to order anythung else from dessert ')
       
       let dessertchoice = prompt(' our dessert menu icecream cake snikers ').toLowerCase().trim()
       if(nots === true)
       {
     
        if(dessert .includes(dessertchoice)){
console.log('ok')
alert('your order?')
confirm( choice + ' ' +  choicedrink  + ' ' +   dessertchoice)
        }


    } else{ alert(' not on the menu ')}
 
    }else{alert('its a pity')}


    }else{alert('its a pity')}


}else{ alert(' not on the menu ')}
 