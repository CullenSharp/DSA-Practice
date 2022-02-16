from gaussian_sum import (
    missing_number as gauss_missing_no
)
from xor import (
    missing_number as xor_missing_no
)


def main():
    print("Find missing num with gauss theorem\n")

    # Expect 2
    print(gauss_missing_no([3, 0, 1]))

    # Expect 2
    print(gauss_missing_no([0, 1]))

    # Expect 8
    print(gauss_missing_no([9, 6, 4, 2, 3, 5, 7, 0, 1]))

    print("\nThen with XOR\n")

    # Expect 2
    print(xor_missing_no([3, 0, 1]))

    # Expect 2
    print(xor_missing_no([0, 1]))

    # Expect 8
    print(xor_missing_no([9, 6, 4, 2, 3, 5, 7, 0, 1]))


main()
