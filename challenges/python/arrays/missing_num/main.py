from typing import List

""" Returns the missing number in a sequence of numbers [0, n]

    	:param  nums: A list of numbers with size n
    	:type   nums: List[int]
	:return     : The missing number in the sequence
	:return type: int
"""
def missing_num(nums: List[int]) -> int:
	sum = 0
	ideal_sum = 0
	
	# Compute sums
	# sum <- n0 + n1 + n2 ... nk
	# ideal_sum <- (i + 1) + (i + 1) + (i + 1) ... 
	for i, n in enumerate(nums):
		sum += n
		ideal_sum += i + 1
	
	# The missing number is the difference of sums
	return ideal_sum - sum

def main():
	# Expect 2
	print(missing_num([3, 0, 1]))

	# Expect 2
	print(missing_num([0, 1]))

	# Expect 8
	print(missing_num([9, 6, 4, 2, 3, 5, 7, 0, 1]))


main()

