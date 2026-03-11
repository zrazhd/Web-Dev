def sum13(nums):
  ans = 0
  add = True
  i = 0
  while(i < len(nums)):
    if nums[i] == 13:
      i += 2
      continue
    ans += nums[i]
    i += 1
      
      
    
  return ans
    
