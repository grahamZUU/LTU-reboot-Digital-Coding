


let ss = [ 
{name:"loaf"			,type:"food"	,quantity:1, price:0.85 	},
{name:"multipack beans"	,type:"food"	,quantity:10,price:1 	    },
{name:"prosseco"		,type:"alcohol"	,quantity:1, price:8.99 	},
{name:"steak"			,type:"food"	,quantity:2, price:3.99 	},
{name:"can of beer"		,type:"alcohol"	,quantity:1, price:1.1 	    },
{name:"white wine"		,type:"alcohol"	,quantity:1, price:8.99 	},
{name:"steak"			,type:"food"	,quantity:2, price:3.99 	},
{name:"green cheese"	,type:"food"	,quantity:1, price:2.99	    },
{name:"candles"	     	,type:"food"	,quantity:3, price:1.99 	},
{name:"cheesecake"		,type:"alcohol"	,quantity:3, price:4.99	    },
{name:"onions"		    ,type:"alcohol"	,quantity:1, price:.4	    } 
];
    
    function shoppingCost(cart, inType, inDisc){

        let pTotal = 0,
            dTotal = 0, 
            disc = 0;
        console.log(inType + ", " + inDisc);
        console.log(cart[0].name);
        disc = (100 - inDisc) / 100;
        
        for (var i = 0; i < cart.length; i++) {
            console.log(cart[i].quantity + " " + cart[i].price);
            
            disc = (100 - inDisc) / 100;	// Discount, e.g. 20 %
            console.log(inType + "  item:" + cart[i].type);
            if (inType == "any" || inType == cart[i].type) 
            {
                console.log("=> Match, " + cart[i].type);
                pTotal += (cart[i].quantity * cart[i].price);
                dTotal += (cart[i].price * disc * cart[i].quantity);
            } 	
        }
    
        dTotal = dTotal.toFixed(2);
        pTotal = pTotal.toFixed(2);
        document.write ("<h2>" + 
                        "Item:" + inType + ", Price " + pTotal + 
                        ",  Discount " + dTotal +
                        ", % discount:" + inDisc +
                        "</h2>");
    }   //   shoppingCost
    
    var done = false;
    while(!done) {
    
        let itemType 
        = prompt("Shop for [food], [alcohol}, A)ny. Q)uit ? ");
        console.log(itemType);
        if (itemType == "Q") { 
            done = true; 
        }
        else {
             let discount  = prompt("Discount percentage "); 
             shoppingCost(ss, itemType, discount);
        }
    }
    console.log("Out of loop");
    