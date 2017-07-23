
////////////////////////////////////
//    WEIGHT CONVERTER START      //
////////////////////////////////////
let result = document.getElementById('result');
if(result) {
    result.style.visibility = 'hidden';
}
let weightInput = document.getElementById('weightInput');

if(weightInput){
            weightInput.addEventListener('input', function(e){

            let poundsValue = e.target.value;

            if(poundsValue > 0) {
    
            result.style.visibility = 'visible';

            //Grams Output
            document.getElementById('gramsOutput').innerHTML = poundsValue/0.0022046;

            //Kilograms Output
            document.getElementById('kilogramsOutput').innerHTML = poundsValue/2.2046;

            //Ounces Output
            document.getElementById('ouncesOutput').innerHTML = poundsValue * 16;
            } else {
                result.style.visibility = 'hidden';
            }

        });
}

////////////////////////////////////
//    WEIGHT CONVERTER END        //
////////////////////////////////////

