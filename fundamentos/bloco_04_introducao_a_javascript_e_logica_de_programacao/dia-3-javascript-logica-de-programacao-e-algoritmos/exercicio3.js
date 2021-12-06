

let n = 5;
let sinal = "*";
let spac = "";
let d = n;


    for (let index = 0; index < n; index++) {

        for (let i = 0; i < n; i++) {

            //console.log(index);
            //console.log(i);
            if (i<d) {
                
                spac = spac + " ";
                
            } else{

                spac = spac+sinal;
                //console.log(sinal);

            }
            
            
        }

        console.log(spac);
        spac = "";
        d -= 1;

    }   

