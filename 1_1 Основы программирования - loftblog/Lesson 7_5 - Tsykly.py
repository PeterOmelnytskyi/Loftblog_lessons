arr = [1,4,6,3,10,2]
sum = 0
for i in arr:
	if i == 10 or i == 6 or i == 2:
		# break
		continue
	sum+=i;
print(sum)
