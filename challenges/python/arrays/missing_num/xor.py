from typing import List

""" Return the missing number in a sequence using bitwise XOR

	:param  nums: A list of numbers missing a number
	:type   nums: List[int]
	:return     : The missing number in a sequence
	:return type: Int
"""
def missing_number(nums: List[int]) -> int:
	out: int = 0

	# XOR each term against target
	for i, n in enumerate(nums):
		out = out ^ n ^ (i + 1)
	
	return out

 
