from typing import List

""" Finds the missing integers in a sequence with range n

	:Param  nums: A non-sorted list of positive integers
	:Type   nums: List[int]
	:Return     : The missing integers in the sequence
	:Type return: List[int]
"""
def find_disappeared_nums(nums: List[int]) -> List[int]:
	output = []

	for n in nums:
		temp = abs(n) - 1

		# If element is non-negative
		if nums[temp] > 0:
			# Negate it
			nums[temp] *= -1
		else:
			continue
	
	# Find positive indices
	for i, n in enumerate(nums):
		if n > 0:
			output.append(i + 1)
		else:
			continue
	
	return output

def main():
	tests = [
			[4, 3, 2, 7, 8, 2, 3, 1],
			[1, 1],
		]  
			
	for test in tests:
		print(find_disappeared_nums(test))


main()
