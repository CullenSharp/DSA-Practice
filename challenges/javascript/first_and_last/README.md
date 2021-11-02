# Find First and Last Position of Element in Sorted Array

Given a sorted array of integers `nums` sorted in non-decreasing order, find the first and last position of a given `target` value.

If the target is not found, return [-1, -1]

You must write and algorithm with O(log n)

## Example 1

```JS
 input: [5,7,7,8,8,10] target = 8
 output: [3,4]
```

## Example 2

```JS
 input: [5,7,7,8,8,10] target = 7
 output: [2,3]
```

## Example 3

```JS
 input: [5,7,7,8,8,10] target = 6
 output: [-1,-1]
```

## Algorithm

## Notes

The goal here is to find the first and last occurrence of a given element in the array. For instance, 8 is seen twice.

Clearly this problem is a variation on binary search, but I've never done one like this before. Usually, you stop running once the value is found, but this will have to continue looking after the first occurrence. 
