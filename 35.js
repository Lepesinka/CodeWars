function mango(quantity, price){
    if (quantity >= 3)
      {
        ost = quantity % 3
        temp = quantity / 3
        if (ost == 0)
          {
             
             totalcost = ((quantity - temp)*price )
            
             return totalcost
          }
        else
          {
               
            temp1 = Math.trunc(temp)
            totalcost = ((quantity - temp1)*price )
            return totalcost         
            
          }
        }
    else
      {
         totalcost = quantity * price
         return totalcost
        
      }
  
        
        
      }