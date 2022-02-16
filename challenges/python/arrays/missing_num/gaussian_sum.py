from typing import List

""" Returns the missing number in a sequence using a difference of actual and gaussian sums

	:param  nums: A list of ints missing a number
	:type   nums: List[int]
	:return     : The missing number in the sequence
	:return type: Int
"""
def missing_number(nums: List[int]) -> int:
	n = len(nums)

	# Compute gaussian sum <- (n * (n + 1)) / 2
	# Compute difference of sums
	return (n * (n + 1)) // 2 - sum(nums)


