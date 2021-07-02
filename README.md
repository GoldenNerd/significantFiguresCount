# Amount of significant digits of any numeric string
Determines the amount of significant digits of any nunber.

Note:

This is not the same as the amount of digits of the number expressed in Scientific Notation.

This extraction tool takes into account the intention to retain zero value digits that are indicative of the resolution of the measuring instrument. 

example: 
"+0123.45600"

The fifth zero decimal place is meaningful because presumably the measuring instrument was able to measure to that resolution, and was intentionally included to be used in further calculations.
Blindly expressing this number in Scientific Notation would strip all leading zeroes.

Scientific Notation:

1.23456e2  (6 significant figures) 

Extraction tool:

1.2345600e2 (8 significant figures) 

Format requirements of the extraction tool:
1. Must be a string
2. Must be numeric

any fixed number

example:
"+001234.567000"

any exponential number

example: "+00123.45000e-03"

Usage tip:

Quotation marks can be omitted if number is input via the browser rendered index.html document provided. 

Module Name: 
xtrac

Revision Information:

html 1.1 2021-04-03.00

css  1.0 2021-04-03.00

js   2.0 2021-04-08.00

(object oriented implementation)
