https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript
// In order to prove it's success and gain funding, the wilderness zoo needs to prove to environmentalists that it has x number of mating pairs of bears.

// You must check within string (s) to find all of the mating pairs, and return a string containing only them. Line them up for inspection.

// Rules: Bears are either 'B' (male) or '8' (female), Bears must be together in male/female pairs 'B8' or '8B', Mating pairs must involve two distinct bears each ('B8B' may look fun, but does not count as two pairs).

// Return an array containing a string of only the mating pairs available. e.g:

// 'EvHB8KN8ik8BiyxfeyKBmiCMj' ---> 'B88B' (empty string if there are no pairs)

// and true if the number is more than or equal to x, false if not:

// (6, 'EvHB8KN8ik8BiyxfeyKBmiCMj') ---> ['B88B', false];

function bears(x, s) {
    let copiedS = s.slice();
    let matingPairsS = [];
    let count = 0;

    while (copiedS.length > 1) {
        const pair = copiedS[0] + copiedS[1];
        if(pair=="8B" || pair=="B8"){
            matingPairsS.push(pair);
            count+=1;
            copiedS = copiedS.slice(2)
            
        }else{
            copiedS = copiedS.slice(1)
            continue;
        }
    }
    console.log(count, matingPairsS)
    return[matingPairsS.join(''), count>x]
}

// use RegExp 

function bears1(x, s) {
  let pairs = s.match(/8B|B8/g) || [];
  return [pairs.join(''), pairs.length>x]
}
//use regex

console.log(bears1(3, '88Bifk8hB8BB8BBBB888chl8BhBfd'))