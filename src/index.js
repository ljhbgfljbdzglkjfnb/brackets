module.exports = function check(str, bracketsConfig) {
  let dict = {};
  for (i=0; i<bracketsConfig.length; i++){
    dict[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let stack = [];
    for (i=0; i<str.length; i++) {
      if (dict[str[i]] === str[i]) {
          
        if (stack.includes(str[i]) && stack[stack.length - 1]!== str[i]) {
          return false
        } else if (stack[stack.length - 1]=== str[i]) {
            stack.pop();
            i++;
          }
        }
      
      if (str[i] in dict) {
        stack.push(str[i])
      } else {
        if (dict[stack[stack.length - 1]] !== str[i]) {
          return false
        } else {
          stack.pop();
        }
      }
    }
    
    return stack.length === 0
  }
