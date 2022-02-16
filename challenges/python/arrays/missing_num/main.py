from typing import List

""" Returns the missing number in a sequence of numbers [0, n]

    	:param  nums: A list of numbers with size n
    	:type   nums: List[int]
	:return     : The missing number in the sequence
	:return type: int
"""
def missing_num(nums: List[int]) -> int:
	n = len(nums)

	# The missing number is the difference of sums
	# Gaussian sum - actual sum
	return (n * (n + 1) // 2) - sum(nums) 		
	

def main():
	# Expect 2
	print(missing_num([3, 0, 1]))

	# Expect 2
	print(missing_num([0, 1]))

	# Expect 8
	print(missing_num([9, 6, 4, 2, 3, 5, 7, 0, 1]))


main()

