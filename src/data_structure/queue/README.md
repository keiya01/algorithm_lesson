# Queue
# Performance
unshift_array:  14.232625007629395
access_array:  0.005119994282722473
1. Queue
- unshift(enqueue): 3.232
- access to head data(peak): 0.057
- access to head data(dequeue): 0.136 

2. Array
- unshift: 14.233
- access to head data(array[0]): 0.005

# When is it used ?
- When a resource is shared among multiple consumers. Examples include CPU scheduling, Disk Scheduling.
- When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes. Examples include IO Buffers, pipes, file IO, etc.

# References
- https://www.google.com/amp/s/www.geeksforgeeks.org/applications-of-queue-data-structure/amp/
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue
