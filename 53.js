function betterThanAverage(classPoints, yourPoints) {
    mean = classPoints.reduce((a, b) => (a + b)) / classPoints.length 
    if (yourPoints < mean)
      return false
    else
      return true
    
  }
  