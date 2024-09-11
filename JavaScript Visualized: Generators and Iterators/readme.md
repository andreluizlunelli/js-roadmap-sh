# Comparison

```
with generator
{
  rss: '173.06 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '47.44 MB -> total size of the allocated heap',
  heapUsed: '15.18 MB -> actual memory used during the execution',
  external: '1.57 MB -> V8 external memory'
}
```

```
without generator
{
  rss: '333.64 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '220.39 MB -> total size of the allocated heap',
  heapUsed: '187.5 MB -> actual memory used during the execution',
  external: '1.57 MB -> V8 external memory'
}
```

If we took the `heapTotal` metric, there is an improvement of 78%: (220.39 - 47.44) / 220.39 = ~0.78
