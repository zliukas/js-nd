'use strict'

let knygos = {
    kategorijos: {
        fantastika: {
            isbn: "9781234567897",
            price: "19,99",
            year: "1965",
            title: "dune",
            pagecount: "543",
        },
        romanas: {
            isbn: "86456646555555",
            price: "99,99",
            year: "2012",
            title: "bruv",
            pagecount: "157",
        },
        istorinis: {
            isbn: "69454156154542",
            price: "19,99",
            year: "1990",
            title: "history of obamium",
            pagecount: "543",
        },
        trileris:{
            isbn: "228566595959599",
            price: "19,99",
            year: "1999",
            title: "Hanibalas",
            pagecount: "743",
           
        },
        siaubo: {
            isbn: "955514127599559",
            price: "12,99",
            year: "1999",
            title: "Haris Poteris",
            pagecount: "572",
            
        }
    }
}

for (let i in knygos)
{
    for (let j in knygos[i])
    {
         for(let a in knygos[i][j]) 
         {
            if(knygos[i][j].year == "1999")
            {
              console.log(a + " : "+  knygos[i][j][a]);
            }
            
        } 
    }
}
