def sum67(nums):
  allow = True
  ans = 0
  for i in nums:
    if i == 6:
      allow = False
    if allow == True:
      ans += i
    if i == 7:
      allow = True
      
  return ans
