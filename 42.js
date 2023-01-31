function getAverage(marks){ 
    mean = marks.reduce((a, b) => (a + b)) / marks.length 
    meanMarks = Math.floor(mean)
    return meanMarks
  }