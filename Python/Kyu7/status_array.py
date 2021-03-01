# // https://www.codewars.com/kata/601c18c1d92283000ec86f2b/train/python

# // Javascript
# // function status(num) {
# //     const list = [...num].reduce((accumulate, el, i, array) => {
# //         const numberOfElementInArrayLessThanCurrentEl = array.filter(x => x < el).length;
# //         const statusOfEL = +(i) + numberOfElementInArrayLessThanCurrentEl
# //         accumulate.push([el, statusOfEL])
# //         return accumulate
# //     }, [])
# //     return list.sort((a,b)=> a[1]-b[1]).map(x=>x[0])

# // }
# // console.log(status([6, 9, 3, 8, 2, 3, 1]))

# // Python

def count_number_smaller_than_x(nums, x):
    counter = 0
    for n in nums:
        if n < x:
            counter += 1
    return counter


def status(nums):
    stats = []
    for k, n in enumerate(nums):
        stats.append(k + count_number_smaller_than_x(nums, n))
    rslt = [k for k, v in sorted(zip(nums, stats), key=lambda item:item[1])]
    return rslt


print(status([5 ,5 ,5 ,8 ,7 ,-2 ,-2 ,-3 ,1 ,9, 8 ,3 ,-3, 4 ,-4 ,6]))


# def status(nums):
#     return [n[1] for n in sorted(zip([i + sum([1 for x in nums if x < n]) for i, n in enumerate(nums)], nums), key=lambda x: x[0])]