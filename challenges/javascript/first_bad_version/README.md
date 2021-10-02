# First Bad Version

 September ／2️⃣ 8️⃣ ／ 2️⃣ 0️⃣ 2️⃣ 1️⃣

## Overview

 You are a product manager currently leading a team in development of a new product. Unfortunately, the latest version fails quality check. Since every version is a descendent of the pervious version, all versions after a bad version are adversely affected.

 Write an algorithm that finds the first bad version, which causes the proceeding and current versions to be bad. Versions are numbered sequentially from 1 to n.

For the task, you are given an API `isVersionBad(version)` which determines if a version is bad or not. Use it to complete the challenge.

## Solution

The optimal solution for this problem is a unique variation on the binary search. The key here is that versions are numbered sequentially and that bad versions affect proceeding versions.

Let's say there's five versions total. Look first at the version in the middle 3; bad or not? If the version is bad, then we've eliminated half of our search pool - no need to check 4-5 as we know they're bad. All that's left is to check version 2. If version 2 is bad, then we have to check 1. If at any point we find a good version preceding a bad version, then the following version is the first bad one.

Therein lies the difference.