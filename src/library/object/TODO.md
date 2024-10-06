## Mapped improvements for the ObjectUtilities class
Here's a summary of planned/mapped improvements to be done on the `ObjectUtilities` class. Feel free to open a pull request to either add other potential improvements or to implement one of the following mapped items:


### orderBy
- Implement quicksort algorithm for object ordering
    - Custom implementation is less dependant on native js methods
    - Faster than `.sort`'s timsort, specially on smaller or random data
    - Lower memory overhead
- Implement ordering direction (asc or desc)
- Implement general options
    - Case sensitiviness
    - Batch ordering
    - Nested ordering
    - Option to mutate the original array or not (default is not mutating it)