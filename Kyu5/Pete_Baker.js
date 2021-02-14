// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript 

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    const rates = {};
    const ingredients = Object.keys(recipe);
    ingredients.forEach(ing => {
        rates[ing] = available[ing] && recipe[ing]!== 0 ? Math.floor(available[ing] / recipe[ing]) : 0;
    })
    const sortArray = Object.entries(rates).sort((a, b) => a[1] - b[1])
    console.log(sortArray)
    return sortArray[0][1]
}

recipe = {"crumbles":0,"eggs":90,"flour":100};
available = {"butter":4000,"flour":1400,"oil":2400,"nuts":4600,"crumbles":8700,"apples":6700,"eggs":2000,"milk":4000,"chocolate":4200,"sugar":1700,"cocoa":6600,"pears":7900,"cream":300}
console.log(cakes(recipe, available))
