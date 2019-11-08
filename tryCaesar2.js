var getString = document.getElementById("conversionButton");
var onButtonClick = function() {
  var getMyString = document.getElementById("input").value;
  function conversionFunc(str) {
    var stringToArr = str.split("");
    var goThroughIt = stringToArr.map(convertIt);
    function convertIt(word) {
      var makeItNum = word.charCodeAt();
      if (makeItNum >= 65 && makeItNum <= 77) {
        return String.fromCharCode(makeItNum + 13);
      } else if (makeItNum >= 78 && makeItNum <= 90) {
        return String.fromCharCode(makeItNum - 13);
      } else if (makeItNum >= 97 && makeItNum <= 109) {
        return String.fromCharCode(makeItNum + 13);
      } else if (makeItNum >= 110 && makeItNum <= 122) {
        return String.fromCharCode(makeItNum - 13);
      } else {
        return word;
      }
    }
    return goThroughIt.join("").replace(/-/g, " ");
  }
  var conversionMessage = conversionFunc(getMyString);

  document.getElementById("output").value = conversionMessage;
};
getString.addEventListener("click", onButtonClick);
