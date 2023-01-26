const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    s = mpg * fuelLeft
    if(s >= distanceToPump )
      {
        return true
        }
    else 
      {
        return false
        }
  };