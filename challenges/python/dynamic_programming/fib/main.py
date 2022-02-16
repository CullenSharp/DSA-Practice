class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

"""	Finds the value of the nth term of the fibonacci sequence	

	param: n: The desired term of the fibonacci sequence
	type: n: int
	param: memo: Pervious memoized terms of the fibonacci sequence
	type: memo: dict
	return: int: The value of the nth term of the fibonacci sequence 
"""
def fib(n: int, memo: dict) -> int:
	if n in memo:
		return memo[n]
	elif n == 1:
		return 1
	elif n == 2:
		return 1
	else:
		memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
		return memo[n]
def main():
	print("\t" + bcolors.HEADER + "The first 7 terms of the fibonacci sequence: \n")
	print("\t" + bcolors.OKGREEN + f"1, {fib(1, {})}")
	print("\t" + bcolors.OKGREEN + f"2, {fib(2, {})}")
	print("\t" + bcolors.OKGREEN + f"3, {fib(3, {})}")
	print("\t" + bcolors.OKGREEN + f"4, {fib(4, {})}")
	print("\t" + bcolors.OKGREEN + f"5, {fib(5, {})}")
	print("\t" + bcolors.OKGREEN + f"6, {fib(6, {})}")
	print("\t" + bcolors.OKGREEN + f"7, {fib(7, {})}")


main()

