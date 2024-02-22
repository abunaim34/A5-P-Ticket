const allSeat = document.getElementsByClassName("seats");

for(const seat of allSeat){
    seat.addEventListener('click', function(event){
        const name = event.target.innerText;
        const p = document.createElement('p')
        p.innerText = 'Economoy';
        const p2 = document.createElement('p')
        p2.innerText = '550';

        const category = p.innerText;
        const price = parseInt(p2.innerText);
        const selectedContainer = document.getElementById('selected-container');
        
        // event.target.setAttribute("disabled", true);

        if(getElementById('seats-left') - 0 < 0 || getElementById('seat-number') + 1 > 4){
            event.target.setAttribute("disabled");
        }

        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = 'white';

       const div = document.createElement('div');
       div.style.display = 'flex'
       div.style.justifyContent = 'space-between'
       div.classList.add('seat-container')
       const p3 = document.createElement('p')
       const p4 = document.createElement('p')
       const p5 = document.createElement('p')
       p3.innerText = name;
       p4.innerText = category;
       p5.innerText = price;

       div.appendChild(p3)
       div.appendChild(p4)
       div.appendChild(p5)

       selectedContainer.appendChild(div)

       updateSeatLeft()
       updateTotalCost(price)
       updateGrandTotal()
       updateSeatNumber()
    })
} 
function updateTotalCost(price){
    const total = document.getElementById('total').innerText;
    const convertedTotal = parseInt(total);
    const convertedPrice = parseInt(price);
    const sum = convertedTotal + convertedPrice;
    document.getElementById("total").innerText = sum;
}

function updateGrandTotal(check){
    const total = document.getElementById("total").innerText;
    const convertedTotal = parseInt(total)
    const couponCode = document.getElementById('coupon-code').value;
    
    if(check){
        if (couponCode == "Couple 20") {
            const discount = convertedTotal * 20 / 100;
            document.getElementById("grand-total").innerText =
            convertedTotal - discount;
            hideElementById('input-field')
        }else if(couponCode == "NEW15"){
            const discount = convertedTotal * 15 / 100;
            document.getElementById('grand-total').innerText = 
            convertedTotal - discount;
            hideElementById('input-field')
        }
        else {
            alert("Invalid Coupon Code No Discount");
            hideElementById('input-field')
            return;
          }
        }
    else{
        document.getElementById("grand-total").innerText = convertedTotal;
    
    }
    
}

function updateSeatLeft(){
    const defaultLeft = document.getElementById("seats-left").innerText;
    const convertDefaultLeft = parseInt(defaultLeft)
    document.getElementById('seats-left').innerText = convertDefaultLeft - 1;
}

function updateSeatNumber(){
    const defaultSeatCount = document.getElementById("seat-number").innerText;
    const convertDefaultSeatCountc = parseInt(defaultSeatCount);
    document.getElementById("seat-number").innerText = convertDefaultSeatCountc + 1;
}

function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function getElementById(id){
    const targetElement = document.getElementById(id).innerText;
    return parseInt(targetElement)
}