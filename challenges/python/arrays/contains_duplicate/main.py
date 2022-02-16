from typing import List

""" Returns true if a given list has duplicated values

    :param nums: List of integers
    :type nums:  List
    :returns:    True if duplicates otherwise false
"""
def contains_duplicate(nums: List[int]) -> bool:
  seen: dict = {}
  
  for idx, n in enumerate(nums):
    # Check if n is a duplicate
    if n in seen:
      # Return true
      return True
    else:
      # Otherwise add n to the dict
      seen[n] = idx

  return False

def main():
  tests: List[int] = [
    [1,2,3,4],
    [1,2,3,1],
    [1,1,1,3,3,4,3,2,4,2]
  ]

  for test in tests:
    print(
      contains_duplicate(test)
    )


main()

