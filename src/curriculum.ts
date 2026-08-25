import type { Lesson } from './types';

export const curriculum: Lesson[] = [
  {
    id: 'intro-python',
    title: 'Introduction to Python',
    level: 'Beginner',
    category: 'Getting Started',
    content: [
      'Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum and first released in 1991. Its design philosophy emphasizes code readability and simplicity, most famously captured by the principle that "there should be one — and preferably only one — obvious way to do it." Python uses significant indentation to delimit blocks of code rather than curly braces or keywords like "end", which forces developers to write visually consistent and clean code. This makes Python an ideal first language for beginners, because the code you write reads almost like plain English.',
      'Python is dynamically typed, meaning you do not need to declare the type of a variable before using it — the interpreter figures it out at runtime. It is also strongly typed, meaning the interpreter will not silently convert incompatible types for you (for example, adding a number to a string raises an error rather than producing garbage). These two properties together make Python flexible enough to write code quickly, yet strict enough to catch a large class of mistakes before they cause silent data corruption.',
      'The standard way to produce output in Python is the built-in print() function. When you call print("Hello, World!"), Python evaluates the expression inside the parentheses, converts it to a string, and writes it to standard output followed by a newline. You can print multiple values by separating them with commas — print("x =", 5) produces "x = 5". Comments in Python begin with the # symbol and are ignored by the interpreter; they exist to explain your intent to human readers. In this first lesson you will practice using print() and comments, which together form the foundation of every Python program you will ever write.',
    ],
    problems: [
      {
        id: 'intro-p1',
        prompt: 'Print the exact text: Hello, Python!',
        starterCode: '# Use the print function\print("Hello, Python!")',
        expectedOutput: 'Hello, Python!',
        hint: 'Use print() with the text inside quotes.',
      },
      {
        id: 'intro-p2',
        prompt: 'Print your name on one line and the number 2026 on the next line, using a single print call with a comma.',
        starterCode: 'print("My name is Python", "2026")',
        expectedOutput: 'My name is Python 2026',
        hint: 'A single print with a comma separates values with a space, not a newline. To get two lines you need two print calls.',
      },
      {
        id: 'intro-p3',
        prompt: 'Print the sum of 25 and 17 using print with an expression inside the parentheses (not a pre-computed string).',
        starterCode: '# Replace this with a print that computes 25 + 17\nprint(25 + 17)',
        expectedOutput: '42',
        hint: 'Python can do arithmetic inside print(). Just put 25 + 17 inside the parentheses with no quotes.',
      },
    ],
    mcqs: [
      {
        id: 'intro-m1',
        question: 'What does the print() function do?',
        options: [
          'It reads input from the keyboard',
          'It writes text to standard output',
          'It creates a new variable',
          'It saves the program to disk',
        ],
        correctIndex: 1,
        explanation:
          'print() converts its arguments to strings and writes them to standard output, followed by a newline.',
      },
      {
        id: 'intro-m2',
        question: 'Which character starts a comment in Python?',
        options: ['//', '/*', '#', '--'],
        correctIndex: 2,
        explanation:
          'In Python, the # symbol begins a comment that runs to the end of the line.',
      },
    ],
    aiQA: [
      {
        keywords: ['compiled', 'interpreted'],
        question: 'Is Python compiled or interpreted?',
        answer:
          'Python is technically both, but is usually described as interpreted. Your source code is first compiled to bytecode (a lower-level representation stored in .pyc files) and that bytecode is then executed by the Python Virtual Machine at runtime. This is why you do not need a separate compile step before running a .py file — CPython handles the bytecode step for you automatically.',
      },
      {
        keywords: ['indentation', 'indent', 'braces', 'curly'],
        question: 'Why does Python use indentation instead of braces?',
        answer:
          'Indentation makes the visual structure of the code match its logical structure. Because blocks are defined by indentation, Python programs tend to be more readable and consistent. The convention is 4 spaces per level. Mixing tabs and spaces will raise an error.',
      },
    ],
  },
  {
    id: 'variables-types',
    title: 'Variables & Data Types',
    level: 'Beginner',
    category: 'Fundamentals',
    content: [
      'A variable is a name that refers to a value stored in memory. In Python you create a variable simply by assigning a value to a name using the equals sign: age = 25. You do not need to declare the type — Python infers it. Variable names must start with a letter or underscore, can contain letters, digits, and underscores, and are case-sensitive. By convention, variable names use snake_case (lowercase words separated by underscores).',
      'Python has several built-in data types. The most common are int (whole numbers like 42), float (numbers with a decimal point like 3.14), str (text, written inside single or double quotes), and bool (True or False). You can check the type of any value with the built-in type() function, for example type(3.14) returns <class \'float\'>. You can convert between types with functions like int(), float(), str(), and bool() — this is called casting. For example int("123") gives the integer 123, and str(42) gives the string "42".',
      'Variables can be reassigned to a new value of any type at any time, because Python is dynamically typed: x = 5 followed by x = "hello" is perfectly legal. The type belongs to the value, not to the name. This flexibility is powerful but means you must be careful when mixing types in operations — adding an int to a str raises a TypeError. Understanding which type a value has, and how to convert it, is one of the most fundamental skills in Python, because almost every bug a beginner encounters is ultimately a type mismatch.',
    ],
    problems: [
      {
        id: 'vt-p1',
        prompt: 'Create a variable named city with the value "Tokyo" and print it.',
        starterCode: 'city = "Tokyo"\nprint(city)',
        expectedOutput: 'Tokyo',
        hint: 'Assign the string to the variable, then print the variable name with no quotes.',
      },
      {
        id: 'vt-p2',
        prompt: 'Create an integer variable a = 10 and a float variable b = 3.5, then print their sum on one line and the type of their sum on the next line.',
        starterCode: 'a = 10\nb = 3.5\ntotal = a + b\nprint(total)\nprint(type(total))',
        expectedOutput: '13.5\n<class \'float\'>',
        hint: 'Adding an int and a float gives a float. Use type(total) to see its type.',
      },
      {
        id: 'vt-p3',
        prompt: 'Convert the string "100" to an integer, add 23, and print the result.',
        starterCode: 'value = int("100")\nprint(value + 23)',
        expectedOutput: '123',
        hint: 'Wrap the string in int() to convert it, then add 23 inside print().',
      },
    ],
    mcqs: [
      {
        id: 'vt-m1',
        question: 'What is the type of the value 3.14 in Python?',
        options: ['int', 'float', 'str', 'decimal'],
        correctIndex: 1,
        explanation:
          'Any number written with a decimal point is a float (floating-point number).',
      },
      {
        id: 'vt-m2',
        question: 'What happens when you run: x = 5; x = "hello"?',
        options: [
          'An error, because x was already an int',
          'x now refers to the string "hello"',
          'x becomes a list',
          'The program crashes',
        ],
        correctIndex: 1,
        explanation:
          'Python is dynamically typed — a variable can be reassigned to a value of any type at any time.',
      },
    ],
    aiQA: [
      {
        keywords: ['naming', 'name', 'rules', 'convention'],
        question: 'What are the rules for naming variables in Python?',
        answer:
          'Names must start with a letter or underscore, can contain letters, digits, and underscores, and are case-sensitive. They cannot be a Python keyword (like if, for, class). By convention, use snake_case for variables and functions, and UPPER_CASE for constants.',
      },
      {
        keywords: ['dynamic', 'static', 'typing'],
        question: 'What does dynamically typed mean?',
        answer:
          'It means Python determines the type of a value at runtime, and a variable can be reassigned to a value of a different type. You never declare the type of a variable explicitly. This is different from statically typed languages like Java or C++, where you must declare int x = 5; and x can then only ever hold an int.',
      },
    ],
  },
  {
    id: 'operators',
    title: 'Operators & Expressions',
    level: 'Beginner',
    category: 'Fundamentals',
    content: [
      'Operators are special symbols that perform operations on values. Python supports arithmetic operators (+, -, *, / for division, // for floor division, % for modulo/remainder, ** for exponentiation), comparison operators (==, !=, <, >, <=, >=) which return a bool, and logical operators (and, or, not) which combine boolean values. The order of operations follows standard math rules: exponentiation first, then multiplication/division, then addition/subtraction, and you can use parentheses to override the default precedence.',
      'A common source of confusion is the difference between / and //. Regular division / always returns a float, even when dividing two ints that divide evenly: 10 / 2 gives 5.0, not 5. Floor division // returns the integer part of the quotient, truncating toward negative infinity: 10 // 3 gives 3, and -10 // 3 gives -4 (not -3). The modulo operator % returns the remainder: 10 % 3 gives 1. Together, // and % are the foundation of many algorithms, from checking if a number is even (n % 2 == 0) to converting seconds into minutes and seconds.',
      'Comparison and logical operators are how Python makes decisions. The expression 5 > 3 evaluates to True, and 5 > 3 and 2 > 1 evaluates to True because both sides are true. The and operator returns True only if both operands are true; or returns True if at least one is true; not flips the value. These operators short-circuit: and stops as soon as it finds a false value, and or stops as soon as it finds a true value. This is not just an optimization — it is a feature you can rely on to avoid errors, for example checking if a list is non-empty before accessing its first element.',
    ],
    problems: [
      {
        id: 'op-p1',
        prompt: 'Compute and print the floor division of 17 by 5.',
        starterCode: 'print(17 // 5)',
        expectedOutput: '3',
        hint: 'Use the // operator for floor division.',
      },
      {
        id: 'op-p2',
        prompt: 'Compute and print the remainder of 17 divided by 5.',
        starterCode: 'print(17 % 5)',
        expectedOutput: '2',
        hint: 'Use the % (modulo) operator for the remainder.',
      },
      {
        id: 'op-p3',
        prompt: 'Print the result of the boolean expression: 10 > 3 and 2 < 1.',
        starterCode: 'print(10 > 3 and 2 < 1)',
        expectedOutput: 'False',
        hint: 'and returns True only if both sides are True. 2 < 1 is False, so the whole expression is False.',
      },
    ],
    mcqs: [
      {
        id: 'op-m1',
        question: 'What does 10 / 4 return in Python 3?',
        options: ['2', '2.5', '2.0', '3'],
        correctIndex: 1,
        explanation:
          'The / operator always returns a float. 10 / 4 = 2.5.',
      },
      {
        id: 'op-m2',
        question: 'What does 2 ** 3 evaluate to?',
        options: ['6', '8', '23', '9'],
        correctIndex: 1,
        explanation:
          'The ** operator is exponentiation. 2 ** 3 means 2 to the power of 3, which is 8.',
      },
    ],
    aiQA: [
      {
        keywords: ['floor', 'division', '//'],
        question: 'What is the difference between / and //?',
        answer:
          '/ is true division — it always returns a float, even when the result is a whole number (10 / 2 = 5.0). // is floor division — it returns the integer part of the quotient, truncated toward negative infinity. For positive numbers it behaves like truncation, but for negative numbers -10 // 3 = -4 (not -3) because it floors toward negative infinity.',
      },
      {
        keywords: ['modulo', 'remainder', '%'],
        question: 'What does the modulo operator do?',
        answer:
          'The % operator returns the remainder after integer division. 17 % 5 = 2 because 17 = 3*5 + 2. It is commonly used to check for even/odd (n % 2 == 0), to wrap values in a range (i % len(list)), and to extract the last N digits of a number (n % 1000).',
      },
    ],
  },
  {
    id: 'strings',
    title: 'Strings & String Methods',
    level: 'Beginner',
    category: 'Text Processing',
    content: [
      'A string is an immutable sequence of characters. You create one by enclosing text in single quotes, double quotes, or triple quotes for multi-line strings. Because strings are immutable, any operation that appears to "modify" a string actually creates a new string — the original is never changed in place. You can access individual characters with indexing (s[0] is the first character) and substrings with slicing (s[1:4] gives characters from index 1 up to but not including 4). Python uses zero-based indexing, so the first character is at index 0, and negative indices count from the end: s[-1] is the last character.',
      'Python strings come with a rich set of built-in methods. Some of the most used are .upper() and .lower() which return a new string in a different case, .strip() which removes leading and trailing whitespace, .replace(old, new) which returns a copy with all occurrences of old replaced by new, .split(sep) which breaks a string into a list of substrings at each separator, and .join(iterable) which is the inverse — it glues a list of strings together with the string it is called on. For example, "-".join(["a", "b", "c"]) gives "a-b-c". These methods are the bread and butter of text processing in Python.',
      'Two powerful features for combining strings are concatenation and f-strings. Concatenation with the + operator joins two strings: "Hello" + " " + "World" gives "Hello World". However, for combining strings with variables, f-strings (available since Python 3.6) are the idiomatic choice. An f-string is prefixed with the letter f and lets you embed Python expressions inside curly braces: name = "Alice"; print(f"Hello, {name}!") prints "Hello, Alice!". You can also format numbers inside f-strings, for example f"{3.14159:.2f}" gives "3.14". Mastering f-strings will make your code dramatically more readable than the older .format() or %-style formatting.',
    ],
    problems: [
      {
        id: 'st-p1',
        prompt: 'Create a variable name = "python", then print it in all UPPERCASE.',
        starterCode: 'name = "python"\nprint(name.upper())',
        expectedOutput: 'PYTHON',
        hint: 'Use the .upper() method on the string.',
      },
      {
        id: 'st-p2',
        prompt: 'Use an f-string to print: The length of "hello" is 5. Compute the length dynamically with len().',
        starterCode: 'word = "hello"\nprint(f\'The length of "{word}" is {len(word)}\')',
        expectedOutput: 'The length of "hello" is 5',
        hint: 'Use an f-string with len(word) inside the curly braces.',
      },
      {
        id: 'st-p3',
        prompt: 'Take the string "apple,banana,cherry" and print the second item after splitting by comma.',
        starterCode: 's = "apple,banana,cherry"\nparts = s.split(",")\nprint(parts[1])',
        expectedOutput: 'banana',
        hint: 'Split the string with .split(",") which gives a list, then index into it with [1].',
      },
    ],
    mcqs: [
      {
        id: 'st-m1',
        question: 'What does "Hello".upper() return?',
        options: ['hello', 'HELLO', 'Hello', 'Error'],
        correctIndex: 1,
        explanation:
          '.upper() returns a new string with all characters converted to uppercase.',
      },
      {
        id: 'st-m2',
        question: 'Strings in Python are...',
        options: [
          'Mutable — you can change characters in place',
          'Immutable — operations create new strings',
          'A type of list',
          'Only single-line',
        ],
        correctIndex: 1,
        explanation:
          'Python strings are immutable. Any method that appears to modify a string returns a new string instead.',
      },
    ],
    aiQA: [
      {
        keywords: ['f-string', 'fstring', 'format'],
        question: 'What is an f-string?',
        answer:
          'An f-string is a string prefixed with the letter f that lets you embed Python expressions inside curly braces. For example f"{name} is {age} years old" evaluates the variables name and age at runtime and inserts their values. F-strings are faster and more readable than the older .format() method or %-formatting.',
      },
      {
        keywords: ['slice', 'slicing', 'index', 'substring'],
        question: 'How does string slicing work?',
        answer:
          's[start:stop:step] returns a substring from index start up to (but not including) stop, taking every step-th character. Any of the three can be omitted: s[:5] is the first 5 chars, s[3:] is everything from index 3 onward, s[::-1] reverses the string. Negative indices count from the end.',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals (if / elif / else)',
    level: 'Beginner',
    category: 'Control Flow',
    content: [
      'Conditional statements let your program make decisions. The simplest form is an if statement: if the condition after the keyword if evaluates to True, the indented block beneath it runs; otherwise it is skipped. The condition must be an expression that produces a boolean value, such as a comparison (x > 5) or a logical combination (x > 5 and x < 10). Python uses indentation (typically 4 spaces) to define which lines belong to the block — every indented line after the if line is part of the block, and the block ends when the indentation returns to the previous level.',
      'The if/else structure lets you choose between two actions: the if block runs when the condition is true, and the else block runs when it is false. When you have more than two possibilities, use elif (short for "else if") to chain additional conditions. Python checks conditions top-to-bottom and runs the first block whose condition is true, then skips the rest. This means the order of your elif branches matters: put the most specific or restrictive conditions first. For example, if score >= 90: ... elif score >= 80: ... else: ... works because once a grade is found, the rest are skipped.',
      'A common beginner mistake is confusing the assignment operator = with the equality operator ==. The line if x = 5: is a syntax error in Python (unlike C or Java) because = assigns a value and cannot be used where a boolean is expected. The line if x == 5: compares x to 5 and produces True or False. Another useful trick is that Python treats empty sequences and the value None as "falsy" — an empty string "", an empty list [], the number 0, and None all evaluate to False in a boolean context. This means you can write if my_list: to check that a list is non-empty, which is more Pythonic than if len(my_list) > 0.',
    ],
    problems: [
      {
        id: 'cd-p1',
        prompt: 'Given age = 20, print "Adult" if age is 18 or older, otherwise print "Minor".',
        starterCode: 'age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',
        expectedOutput: 'Adult',
        hint: 'Use if age >= 18: with an else: branch.',
      },
      {
        id: 'cd-p2',
        prompt: 'Given score = 85, print "A" for >=90, "B" for >=80, "C" for >=70, otherwise "F".',
        starterCode: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")',
        expectedOutput: 'B',
        hint: 'Chain if / elif / elif / else. Check the highest grade first.',
      },
      {
        id: 'cd-p3',
        prompt: 'Given a variable word = "hello", print "Non-empty" if the string is truthy, otherwise print "Empty".',
        starterCode: 'word = "hello"\nif word:\n    print("Non-empty")\nelse:\n    print("Empty")',
        expectedOutput: 'Non-empty',
        hint: 'Use the string directly as the condition — non-empty strings are truthy.',
      },
    ],
    mcqs: [
      {
        id: 'cd-m1',
        question: 'Which operator checks if two values are equal?',
        options: ['=', '==', '!=', '==='],
        correctIndex: 1,
        explanation:
          '== compares two values for equality and returns a bool. = is assignment, which is why if x = 5: is an error in Python.',
      },
      {
        id: 'cd-m2',
        question: 'What is the output of: if 0: print("yes") else: print("no")?',
        options: ['yes', 'no', 'Error', 'Nothing'],
        correctIndex: 1,
        explanation:
          'The number 0 is falsy in Python, so the else branch runs and "no" is printed.',
      },
    ],
    aiQA: [
      {
        keywords: ['elif', 'else if', 'chain'],
        question: 'What is the difference between elif and multiple if statements?',
        answer:
          'elif is part of a single if/elif/else chain — Python checks each condition in order and runs ONLY the first true block, skipping the rest. Multiple separate if statements are all evaluated independently, so more than one block can run. Use elif when the conditions are mutually exclusive; use separate ifs when each check is independent.',
      },
      {
        keywords: ['truthy', 'falsy', 'falsche', 'empty'],
        question: 'What does truthy and falsy mean?',
        answer:
          'In a boolean context (like an if condition), Python treats these as False: the value None, the bool False, any numeric zero (0, 0.0), any empty sequence ("", [], ()), and any empty mapping ({}). Everything else is True. This lets you write if my_list: instead of if len(my_list) > 0.',
      },
    ],
  },
  {
    id: 'loops',
    title: 'Loops (for & while)',
    level: 'Beginner',
    category: 'Control Flow',
    content: [
      'Loops let you repeat a block of code multiple times. The for loop in Python iterates over the items of any iterable (a list, a string, a range, etc.) one at a time. The most common pattern is for i in range(5):, which runs the block 5 times with i taking the values 0, 1, 2, 3, 4. The range() function can take one, two, or three arguments: range(stop), range(start, stop), or range(start, stop, step). Remember that range never includes the stop value — range(1, 5) gives 1, 2, 3, 4, not 5.',
      'The while loop repeats a block as long as a condition remains True. It is used when you do not know in advance how many iterations you need — for example, reading input until the user types "quit", or looping until a numerical approximation converges. The danger with while loops is the infinite loop: if the condition never becomes False, the loop runs forever. Always make sure something inside the loop changes the condition, for example by incrementing a counter or reading new input. You can exit a loop early with the break statement, and skip to the next iteration with continue.',
      'A powerful pattern is nesting loops — a loop inside another loop. The inner loop runs completely for every single iteration of the outer loop. For example, to print a 3x3 grid you would write for row in range(3): for col in range(3): print(row, col). This produces 9 lines of output. Nesting is useful but be careful: a loop nested three levels deep with a range of 100 each runs a million iterations. Always prefer the simplest loop that gets the job done, and remember that Python\'s built-in functions like sum(), max(), and any() can often replace an explicit loop with a single readable line.',
    ],
    problems: [
      {
        id: 'lp-p1',
        prompt: 'Use a for loop and range to print the numbers 1 through 5 (each on its own line).',
        starterCode: 'for i in range(1, 6):\n    print(i)',
        expectedOutput: '1\n2\n3\n4\n5',
        hint: 'Use range(1, 6) because range stops before the second argument.',
      },
      {
        id: 'lp-p2',
        prompt: 'Use a while loop to print the numbers 3, 2, 1 (each on its own line) counting down from 3.',
        starterCode: 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1',
        expectedOutput: '3\n2\n1',
        hint: 'Start n at 3, print it, then subtract 1 each iteration. Stop when n reaches 0.',
      },
      {
        id: 'lp-p3',
        prompt: 'Use a for loop to print only the even numbers from 0 to 10 (inclusive) on a single line separated by spaces.',
        starterCode: 'for i in range(0, 11, 2):\n    print(i, end=" ")',
        expectedOutput: '0 2 4 6 8 10 ',
        hint: 'Use range(0, 11, 2) with a step of 2, and print(i, end=" ") to stay on one line.',
      },
    ],
    mcqs: [
      {
        id: 'lp-m1',
        question: 'What does range(2, 8) produce?',
        options: ['2,3,4,5,6,7,8', '2,3,4,5,6,7', '2,4,6,8', '8,7,6,5,4,3,2'],
        correctIndex: 1,
        explanation:
          'range(start, stop) produces values from start up to but NOT including stop: 2,3,4,5,6,7.',
      },
      {
        id: 'lp-m2',
        question: 'What does the break statement do?',
        options: [
          'Skips the rest of the current iteration',
          'Exits the loop immediately',
          'Restarts the loop from the top',
          'Pauses the loop',
        ],
        correctIndex: 1,
        explanation:
          'break terminates the nearest enclosing loop immediately. continue, by contrast, skips to the next iteration.',
      },
    ],
    aiQA: [
      {
        keywords: ['range', 'start', 'stop', 'step'],
        question: 'How does range() work?',
        answer:
          'range(stop) gives 0,1,...,stop-1. range(start, stop) gives start,...,stop-1. range(start, stop, step) lets you control the increment. It never includes the stop value. range produces values lazily (one at a time), which is memory-efficient even for huge ranges.',
      },
      {
        keywords: ['break', 'continue', 'difference'],
        question: 'What is the difference between break and continue?',
        answer:
          'break exits the loop entirely — no more iterations run. continue skips the rest of the current iteration and jumps straight to the next one. Use break when you have found what you are looking for; use continue when you want to skip certain items but keep looping.',
      },
    ],
  },
  {
    id: 'lists',
    title: 'Lists & Tuples',
    level: 'Intermediate',
    category: 'Data Structures',
    content: [
      'A list is an ordered, mutable collection of items. You create one with square brackets: fruits = ["apple", "banana", "cherry"]. Lists can hold items of any type, even mixed types, and you can add, remove, or change items after creation. Common list methods include .append(item) to add to the end, .insert(index, item) to add at a position, .remove(item) to remove the first matching value, .pop() to remove and return the last item, and .sort() to sort the list in place. You can check membership with the in operator: "apple" in fruits returns True or False.',
      'Lists support the same slicing syntax as strings: fruits[1:3] returns a new list containing items at index 1 and 2. You can concatenate lists with + and repeat them with *: [1,2] * 3 gives [1,2,1,2,1,2]. To iterate over a list, use a for loop: for fruit in fruits: print(fruit). If you need the index as well, use enumerate(): for i, fruit in enumerate(fruits): gives you both the index and the value. This is more Pythonic than using range(len(fruits)).',
      'A tuple is like a list but immutable — once created, you cannot change its contents. Tuples are written with parentheses: point = (3, 4). Because they are immutable, tuples are slightly faster than lists and are used to represent fixed collections of related values, like coordinates or the RGB values of a color. A very common Python pattern is tuple unpacking: x, y = point assigns 3 to x and 4 to y in a single line. Functions often return multiple values as a tuple: quotient, remainder = divmod(17, 5) gives quotient=3 and remainder=2. Use a list when the collection will change; use a tuple when it should not.',
    ],
    problems: [
      {
        id: 'ls-p1',
        prompt: 'Create a list [10, 20, 30], append 40, then print the list.',
        starterCode: 'nums = [10, 20, 30]\nnums.append(40)\nprint(nums)',
        expectedOutput: '[10, 20, 30, 40]',
        hint: 'Use .append(40) to add 40 to the end of the list.',
      },
      {
        id: 'ls-p2',
        prompt: 'Given the list [5, 2, 8, 1, 9], sort it in ascending order and print it.',
        starterCode: 'nums = [5, 2, 8, 1, 9]\nnums.sort()\nprint(nums)',
        expectedOutput: '[1, 2, 5, 8, 9]',
        hint: 'Call .sort() on the list to sort it in place, then print it.',
      },
      {
        id: 'ls-p3',
        prompt: 'Create a tuple (3, 4), unpack it into variables x and y, and print x and y separated by a space.',
        starterCode: 'point = (3, 4)\nx, y = point\nprint(x, y)',
        expectedOutput: '3 4',
        hint: 'Use tuple unpacking: x, y = point. Then print(x, y) — the comma adds a space.',
      },
    ],
    mcqs: [
      {
        id: 'ls-m1',
        question: 'Which method adds an item to the END of a list?',
        options: ['.insert()', '.add()', '.append()', '.push()'],
        correctIndex: 2,
        explanation:
          '.append(item) adds the item to the end of the list. .insert() adds at a specific index. Python lists do not have .add() or .push().',
      },
      {
        id: 'ls-m2',
        question: 'What is the main difference between a list and a tuple?',
        options: [
          'Lists can hold mixed types, tuples cannot',
          'Lists are mutable, tuples are immutable',
          'Tuples are faster to search',
          'There is no difference',
        ],
        correctIndex: 1,
        explanation:
          'Lists are mutable (you can change them after creation); tuples are immutable (they cannot be changed). Both can hold mixed types.',
      },
    ],
    aiQA: [
      {
        keywords: ['enumerate', 'index'],
        question: 'Why use enumerate() instead of range(len(...))?',
        answer:
          'enumerate(fruits) yields (index, value) pairs directly, which is cleaner and more Pythonic than writing for i in range(len(fruits)): value = fruits[i]. You can also give it a start argument: enumerate(fruits, start=1) begins counting at 1.',
      },
      {
        keywords: ['copy', 'reference', 'alias'],
        question: 'Why does b = a not copy a list?',
        answer:
          'In Python, b = a makes b refer to the SAME list object as a. If you modify one, the other changes too. To make an independent copy, use b = a.copy() or b = a[:] or b = list(a). For nested lists, use copy.deepcopy(a) to copy all levels.',
      },
    ],
  },
  {
    id: 'dicts',
    title: 'Dictionaries',
    level: 'Intermediate',
    category: 'Data Structures',
    content: [
      'A dictionary is an unordered, mutable collection of key-value pairs. You create one with curly braces: person = {"name": "Alice", "age": 30}. Each key must be unique and immutable (strings, numbers, and tuples are common keys; lists cannot be keys because they are mutable). You access a value by its key with square brackets: person["name"] returns "Alice". You add or update a value with assignment: person["email"] = "alice@example.com" adds a new key, and person["age"] = 31 updates an existing one. To remove a key, use del person["email"] or the .pop() method.',
      'The most common way to loop over a dictionary is with the .items() method, which yields key-value pairs: for key, value in person.items(): print(key, value). If you only need the keys, use .keys(); if you only need the values, use .values(). To safely look up a key that might not exist, use the .get() method: person.get("phone", "unknown") returns "unknown" if the key "phone" is missing, instead of raising a KeyError. This is much safer than direct bracket access when you are unsure a key exists.',
      'Dictionaries are extremely common in real Python code because they model any mapping from one thing to another: a phone book (name to number), a word-count (word to frequency), a configuration (setting name to value). Since Python 3.7, dictionaries preserve insertion order — the order in which you add keys is the order they appear when you iterate. A useful pattern is counting items: you can use a plain dict with an if-check, or use collections.Counter which is built for this: Counter("mississippi") gives {\'m\':1, \'i\':4, \'s\':4, \'p\':2}. Dictionaries are the foundation of JSON, APIs, and most data you will handle in modern Python.',
    ],
    problems: [
      {
        id: 'dc-p1',
        prompt: 'Create a dictionary {"name": "Alice", "age": 30}, then print the value associated with the key "name".',
        starterCode: 'person = {"name": "Alice", "age": 30}\nprint(person["name"])',
        expectedOutput: 'Alice',
        hint: 'Access the value with person["name"] using square brackets.',
      },
      {
        id: 'dc-p2',
        prompt: 'Given the dictionary {"a": 1, "b": 2, "c": 3}, use a for loop with .items() to print each key and value on a line like: a -> 1',
        starterCode: 'd = {"a": 1, "b": 2, "c": 3}\nfor k, v in d.items():\n    print(f"{k} -> {v}")',
        expectedOutput: 'a -> 1\nb -> 2\nc -> 3',
        hint: 'Use for k, v in d.items(): and an f-string to format each line.',
      },
      {
        id: 'dc-p3',
        prompt: 'Given the dictionary {"x": 10, "y": 20}, safely get the value for key "z" with a default of 0 and print it.',
        starterCode: 'd = {"x": 10, "y": 20}\nprint(d.get("z", 0))',
        expectedOutput: '0',
        hint: 'Use d.get("z", 0) — the second argument is the default returned when the key is missing.',
      },
    ],
    mcqs: [
      {
        id: 'dc-m1',
        question: 'Which method returns all key-value pairs of a dictionary?',
        options: ['.keys()', '.values()', '.items()', '.pairs()'],
        correctIndex: 2,
        explanation:
          '.items() returns a view of (key, value) tuples. .keys() returns only keys; .values() returns only values.',
      },
      {
        id: 'dc-m2',
        question: 'What does d.get("missing", 5) return if "missing" is not a key in d?',
        options: ['None', '5', 'Raises KeyError', 'False'],
        correctIndex: 1,
        explanation:
          '.get(key, default) returns the default (here 5) when the key is not found, instead of raising an error.',
      },
    ],
    aiQA: [
      {
        keywords: ['key', 'unique', 'duplicate'],
        question: 'Can a dictionary have duplicate keys?',
        answer:
          'No. Each key in a dictionary must be unique. If you assign to a key that already exists, the old value is overwritten with the new one. The keys of a dict behave like a set — no duplicates allowed.',
      },
      {
        keywords: ['order', 'ordered', 'insertion'],
        question: 'Do dictionaries preserve order?',
        answer:
          'Yes, since Python 3.7 dictionaries preserve insertion order. When you iterate over a dict, items come out in the order you added them. Before 3.7 this was only an implementation detail of CPython, but it is now a guaranteed language feature.',
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    level: 'Intermediate',
    category: 'Code Organization',
    content: [
      'A function is a named, reusable block of code. You define one with the def keyword, followed by the function name, parentheses containing any parameters, a colon, and an indented body: def greet(name): return f"Hello, {name}!". You call (run) the function by writing its name followed by arguments: greet("Alice") returns "Hello, Alice!". Functions help you avoid repeating code, make your program easier to test, and let you break a large problem into small named pieces. A well-named function also documents intent: read_temperature() is clearer than a block of inline code.',
      'Parameters are the variables listed in the function definition; arguments are the actual values you pass when calling. Python passes arguments in several ways: by position (the most common), by keyword (greet(name="Alice")), and with default values (def greet(name="World"): lets you call greet() with no arguments). You can also accept a variable number of arguments with *args (collected into a tuple) and **kwargs (collected into a dictionary of keyword arguments). The return statement sends a value back to the caller; if a function has no return, it returns None by default.',
      'A critical concept is scope: variables created inside a function are local to that function and do not exist outside it. This means you can reuse the same variable name in different functions without them interfering. However, functions CAN read variables defined in the outer (global) scope — but to modify a global variable from inside a function, you must declare it with the global keyword, which is generally discouraged. A better design is to pass values in as arguments and return results out. This makes functions self-contained, predictable, and easy to test — they become "pure" functions with no hidden dependencies.',
    ],
    problems: [
      {
        id: 'fn-p1',
        prompt: 'Define a function add(a, b) that returns the sum of a and b. Call it with 3 and 4 and print the result.',
        starterCode: 'def add(a, b):\n    return a + b\n\nprint(add(3, 4))',
        expectedOutput: '7',
        hint: 'Use def add(a, b): with return a + b, then call add(3, 4) inside print().',
      },
      {
        id: 'fn-p2',
        prompt: 'Define a function greet(name="World") that returns "Hello, <name>!". Call it with no arguments and print the result.',
        starterCode: 'def greet(name="World"):\n    return f"Hello, {name}!"\n\nprint(greet())',
        expectedOutput: 'Hello, World!',
        hint: 'Give the parameter a default value with =. Calling greet() uses the default.',
      },
      {
        id: 'fn-p3',
        prompt: 'Define a function is_even(n) that returns True if n is even, False otherwise. Print the result of is_even(10).',
        starterCode: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(10))',
        expectedOutput: 'True',
        hint: 'Return the boolean expression n % 2 == 0 directly — it is already True or False.',
      },
    ],
    mcqs: [
      {
        id: 'fn-m1',
        question: 'What does a function return if it has no return statement?',
        options: ['0', 'An empty string', 'None', 'Error'],
        correctIndex: 2,
        explanation:
          'A function with no return statement (or a bare return with no value) returns None by default.',
      },
      {
        id: 'fn-m2',
        question: 'What is the difference between a parameter and an argument?',
        options: [
          'They are the same thing',
          'Parameters are in the definition; arguments are the actual values passed when calling',
          'Arguments are in the definition; parameters are passed when calling',
          'Parameters are optional; arguments are required',
        ],
        correctIndex: 1,
        explanation:
          'Parameters are the variable names in the function definition (def f(x):). Arguments are the actual values you pass when calling (f(5)).',
      },
    ],
    aiQA: [
      {
        keywords: ['args', 'kwargs', '*args', '**kwargs'],
        question: 'What are *args and **kwargs?',
        answer:
          '*args collects any extra positional arguments into a tuple. **kwargs collects any extra keyword arguments into a dictionary. For example def f(*args, **kwargs) can be called as f(1, 2, 3, name="Bob", age=30) — args becomes (1,2,3) and kwargs becomes {"name":"Bob", "age":30}. They let you write flexible functions that accept varying inputs.',
      },
      {
        keywords: ['scope', 'local', 'global'],
        question: 'What is variable scope in Python?',
        answer:
          'A variable created inside a function is local — it only exists inside that function. A variable created at the top level of a file is global — functions can read it, but to modify it you must declare global x inside the function. Best practice is to avoid globals: pass values in as arguments and return results out.',
      },
    ],
  },
  {
    id: 'list-comprehensions',
    title: 'List Comprehensions',
    level: 'Intermediate',
    category: 'Pythonic Code',
    content: [
      'A list comprehension is a compact way to create a list by transforming and/or filtering another iterable, all in a single readable line. The syntax is [expression for item in iterable if condition]. For example, [x*x for x in range(5)] produces [0, 1, 4, 9, 16]. The equivalent with a for loop would be four lines: create an empty list, loop, compute, append. List comprehensions are not just shorter — they are often faster because the loop runs at C speed inside the interpreter.',
      'You can add a condition to filter items: [x for x in range(10) if x % 2 == 0] gives only the even numbers [0, 2, 4, 6, 8]. You can also transform with any expression: [word.upper() for word in ["hi", "bye"]] gives ["HI", "BYE"]. Comprehensions can even be nested, though more than one level of nesting quickly becomes hard to read. The rule of thumb is: use a comprehension when it fits on one line and is clear; use a regular for loop when the logic is complex or needs multiple statements.',
      'Python offers related comprehensions for other data structures. A dictionary comprehension is {k: v for k, v in pairs} — for example {x: x*x for x in range(5)} gives {0:0, 1:1, 2:4, 3:9, 4:16}. A set comprehension is {x for x in items} and produces a set (no duplicates). There is no tuple comprehension — (x for x in items) creates a generator, which is a lazy iterable that produces values one at a time instead of building the whole list in memory. Generators are the right choice when you only need to iterate once over a large sequence.',
    ],
    problems: [
      {
        id: 'lc-p1',
        prompt: 'Use a list comprehension to create a list of the squares of 1, 2, 3, 4, 5 and print it.',
        starterCode: 'squares = [x*x for x in range(1, 6)]\nprint(squares)',
        expectedOutput: '[1, 4, 9, 16, 25]',
        hint: 'The pattern is [x*x for x in range(1, 6)].',
      },
      {
        id: 'lc-p2',
        prompt: 'Use a list comprehension with a condition to get only the even numbers from 1 to 10 and print the list.',
        starterCode: 'evens = [x for x in range(1, 11) if x % 2 == 0]\nprint(evens)',
        expectedOutput: '[2, 4, 6, 8, 10]',
        hint: 'Add an if clause: [x for x in range(1, 11) if x % 2 == 0].',
      },
      {
        id: 'lc-p3',
        prompt: 'Use a dictionary comprehension to map each number 0..4 to its square and print the dict.',
        starterCode: 'd = {x: x*x for x in range(5)}\nprint(d)',
        expectedOutput: '{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}',
        hint: 'Use {x: x*x for x in range(5)} — curly braces with a key: value pair.',
      },
    ],
    mcqs: [
      {
        id: 'lc-m1',
        question: 'What does [x*2 for x in [1,2,3]] produce?',
        options: ['[1, 2, 3]', '[2, 4, 6]', '[1, 4, 9]', 'Error'],
        correctIndex: 1,
        explanation:
          'Each item is multiplied by 2: 1*2=2, 2*2=4, 3*2=6, giving [2, 4, 6].',
      },
      {
        id: 'lc-m2',
        question: 'When should you prefer a regular for loop over a list comprehension?',
        options: [
          'Never — comprehensions are always better',
          'When the logic is complex or needs multiple statements',
          'When the list has more than 3 items',
          'When you need a list of numbers',
        ],
        correctIndex: 1,
        explanation:
          'If the expression or condition is hard to read, or you need multiple statements per iteration, a regular for loop is clearer. Readability beats brevity.',
      },
    ],
    aiQA: [
      {
        keywords: ['generator', 'lazy', 'yield'],
        question: 'What is the difference between a list comprehension and a generator?',
        answer:
          'A list comprehension [x for x in n] builds the entire list in memory at once. A generator expression (x for x in n) produces values lazily, one at a time, using almost no memory. Use a list when you need random access or to iterate multiple times; use a generator when you only iterate once, especially over large data.',
      },
      {
        keywords: ['nested', 'multiple', 'two for'],
        question: 'Can a list comprehension have more than one for clause?',
        answer:
          'Yes. [x*y for x in range(3) for y in range(3)] is equivalent to two nested loops and produces 9 items. You can also nest comprehensions: [[x for x in row] for row in matrix]. However, deeply nested comprehensions get hard to read fast — prefer a regular loop when you go beyond two levels.',
      },
    ],
  },
  {
    id: 'file-io',
    title: 'File Handling',
    level: 'Intermediate',
    category: 'Working with Data',
    content: [
      'File handling lets your program read from and write to files on disk, so data can persist between runs. The built-in open() function opens a file and returns a file object. The most important argument after the filename is the mode: "r" for read (the default), "w" for write (which erases the file first), "a" for append (which adds to the end), and "b" for binary mode. Text mode is the default. For example, f = open("data.txt", "w") opens data.txt for writing.',
      'The modern, recommended way to handle files is the with statement (a context manager): with open("data.txt", "r") as f: content = f.read(). The with block automatically closes the file when the block ends, even if an error occurs inside. This is far safer than calling f.close() manually, which you might forget if an exception is raised. To read, use f.read() for the whole file as a single string, f.readline() for one line at a time, or iterate over f directly with a for loop to process one line at a time without loading the whole file into memory.',
      'To write, use f.write(string) — note that write does not add a newline automatically, so you often need to add "\\n" yourself. When working with structured data, the json module is invaluable: json.dump(obj, f) writes a Python object (like a dict or list) to a file as JSON, and json.load(f) reads it back. This is the standard way to save and load configuration or exchange data with web APIs. Always close files (preferably with with), and be careful with the "w" mode — it silently destroys the existing content of the file.',
    ],
    problems: [
      {
        id: 'fi-p1',
        prompt: 'Write the text "Hello, File!" to a file named "test.txt" using a with block, then read it back and print the contents.',
        starterCode: 'with open("test.txt", "w") as f:\n    f.write("Hello, File!")\n\nwith open("test.txt", "r") as f:\n    print(f.read())',
        expectedOutput: 'Hello, File!',
        hint: 'Use with open("test.txt", "w") as f: to write, then with open("test.txt", "r") as f: to read.',
      },
      {
        id: 'fi-p2',
        prompt: 'Write three lines ("one", "two", "three") to "lines.txt" each followed by a newline, then read and print the file content.',
        starterCode: 'with open("lines.txt", "w") as f:\n    f.write("one\\ntwo\\nthree\\n")\n\nwith open("lines.txt", "r") as f:\n    print(f.read().strip())',
        expectedOutput: 'one\ntwo\nthree',
        hint: 'Write with explicit \\n between each line. Use .strip() when printing to avoid a trailing blank line.',
      },
      {
        id: 'fi-p3',
        prompt: 'Use the json module to save {"name": "Alice", "age": 30} to "data.json", then load it back and print the value of the "name" key.',
        starterCode: 'import json\n\nwith open("data.json", "w") as f:\n    json.dump({"name": "Alice", "age": 30}, f)\n\nwith open("data.json", "r") as f:\n    data = json.load(f)\n\nprint(data["name"])',
        expectedOutput: 'Alice',
        hint: 'Use json.dump(obj, f) to write and json.load(f) to read. Then access data["name"].',
      },
    ],
    mcqs: [
      {
        id: 'fi-m1',
        question: 'What is the advantage of using "with open(...) as f" over open() and close()?',
        options: [
          'It is faster',
          'It automatically closes the file even if an error occurs',
          'It can read larger files',
          'There is no advantage',
        ],
        correctIndex: 1,
        explanation:
          'The with statement guarantees the file is closed when the block ends, even if an exception is raised inside. This prevents resource leaks.',
      },
      {
        id: 'fi-m2',
        question: 'What does the "w" mode do if the file already exists?',
        options: [
          'Appends to the end',
          'Raises an error',
          'Erases the existing content and starts fresh',
          'Reads the existing content first',
        ],
        correctIndex: 2,
        explanation:
          '"w" (write mode) truncates the file — it deletes any existing content before writing. Use "a" (append) to add to the end instead.',
      },
    ],
    aiQA: [
      {
        keywords: ['readlines', 'readline', 'iterate'],
        question: 'Should I use f.readlines() or iterate over f?',
        answer:
          'Iterating directly (for line in f:) reads one line at a time and is memory-efficient for large files. f.readlines() loads the entire file into a list in memory at once. For small files the difference does not matter, but for large files iterating is much better. You can also use f.read() to get the whole file as a single string.',
      },
      {
        keywords: ['json', 'save', 'load'],
        question: 'Why use json instead of just writing strings?',
        answer:
          'JSON preserves the structure of your data — dicts, lists, numbers, strings, booleans, and None all round-trip correctly. If you write a dict to a text file with str(), you get a Python-specific representation that is hard to parse back. json.dump() and json.load() handle nesting and types automatically, and JSON is the standard format for web APIs and config files.',
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes & Objects (OOP)',
    level: 'Advanced',
    category: 'Object-Oriented Programming',
    content: [
      'Object-oriented programming (OOP) is a way to organize code by bundling data and the functions that operate on that data together into "objects". A class is a blueprint for creating objects. You define one with the class keyword: class Dog: .... Inside the class, you define methods (functions that belong to the class). The most important method is __init__, the constructor, which runs automatically when you create a new object. Its job is to initialize the object\'s attributes. The first parameter of every method is always self, a reference to the current object — it is how a method accesses the object\'s own data.',
      'Here is a complete example: class Dog: def __init__(self, name): self.name = name  def bark(self): return f"{self.name} says Woof!". You create an object by calling the class like a function: rex = Dog("Rex"). This calls __init__ with name="Rex", which stores it as rex.name. Then rex.bark() returns "Rex says Woof!". The key idea is that each object (each Dog) has its own independent set of attributes — two Dog objects can have different names. The class defines the behavior (the methods); the objects hold the state (the attributes).',
      'OOP really shines with inheritance, which lets you create a new class that reuses and extends an existing one. class Cat(Animal): means Cat inherits all the attributes and methods of Animal. You can add new methods in Cat, or override methods from Animal by defining a method with the same name. Inside an overridden method, you can call the parent\'s version with super().method(). This lets you build hierarchies: Animal -> Mammal -> Dog, where each level adds specialization. Other key concepts are encapsulation (hiding internal data by convention with a leading underscore like _private) and polymorphism (different classes can have methods with the same name, and code can call them without caring which class it is).',
    ],
    problems: [
      {
        id: 'cl-p1',
        prompt: 'Define a class Counter with an __init__ that sets self.count to 0, and a method increment that adds 1 to self.count. Create a Counter, call increment twice, and print the count.',
        starterCode: 'class Counter:\n    def __init__(self):\n        self.count = 0\n    def increment(self):\n        self.count += 1\n\nc = Counter()\nc.increment()\nc.increment()\nprint(c.count)',
        expectedOutput: '2',
        hint: 'Define __init__ to set self.count = 0 and increment to do self.count += 1. Call increment() twice.',
      },
      {
        id: 'cl-p2',
        prompt: 'Define a class Rectangle with __init__(self, width, height) and a method area that returns width * height. Create a Rectangle(4, 5) and print its area.',
        starterCode: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    def area(self):\n        return self.width * self.height\n\nr = Rectangle(4, 5)\nprint(r.area())',
        expectedOutput: '20',
        hint: 'Store width and height as self.width and self.height. area() returns self.width * self.height.',
      },
      {
        id: 'cl-p3',
        prompt: 'Define a base class Animal with a method speak that returns "...". Define a subclass Cat that overrides speak to return "Meow". Create a Cat and print its speak().',
        starterCode: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Cat(Animal):\n    def speak(self):\n        return "Meow"\n\nc = Cat()\nprint(c.speak())',
        expectedOutput: 'Meow',
        hint: 'Define Animal with speak returning "...", then class Cat(Animal): with speak returning "Meow".',
      },
    ],
    mcqs: [
      {
        id: 'cl-m1',
        question: 'What is the purpose of the __init__ method?',
        options: [
          'It deletes an object',
          'It initializes a new object\'s attributes when the object is created',
          'It is a class variable',
          'It imports a module',
        ],
        correctIndex: 1,
        explanation:
          '__init__ is the constructor. It runs automatically when you create an object (e.g., Dog("Rex")) and sets up the object\'s initial attributes.',
      },
      {
        id: 'cl-m2',
        question: 'What does the self parameter represent in a method?',
        options: [
          'The class itself',
          'The specific object the method is being called on',
          'A global variable',
          'The parent class',
        ],
        correctIndex: 1,
        explanation:
          'self is a reference to the specific object (instance) the method is called on. It lets the method access that object\'s own attributes and other methods.',
      },
    ],
    aiQA: [
      {
        keywords: ['inheritance', 'subclass', 'parent'],
        question: 'How does inheritance work in Python?',
        answer:
          'class Child(Parent): makes Child inherit all attributes and methods of Parent. The Child can add new methods, or override existing ones by defining a method with the same name. Inside an overridden method, call super() to access the parent\'s version. A class can inherit from multiple parents (multiple inheritance), but this should be used carefully due to complexity.',
      },
      {
        keywords: ['dunder', 'magic', '__str__', '__repr__'],
        question: 'What are dunder methods?',
        answer:
          'Dunder (double-underscore) methods like __init__, __str__, __len__, __eq__ let your classes integrate with Python\'s built-in behavior. For example, defining __str__ controls what print(obj) shows; __len__ makes len(obj) work; __eq__ makes == compare your objects the way you want. They are how your custom objects feel like built-in types.',
      },
    ],
  },
  {
    id: 'exceptions',
    title: 'Exceptions & Error Handling',
    level: 'Advanced',
    category: 'Robust Code',
    content: [
      'An exception is an error that occurs while your program is running, like dividing by zero, accessing a missing dictionary key, or opening a file that does not exist. If an exception is not handled, it propagates up the call stack and crashes your program with a traceback. The try/except structure lets you catch and handle these errors gracefully so your program can recover or fail with a useful message instead of crashing. The syntax is: try: <risky code> except SomeError: <recovery code>. You can have multiple except blocks for different error types.',
      'Python has a rich hierarchy of built-in exception types. Some common ones are ValueError (wrong type of value, like int("abc")), TypeError (wrong type of operation, like "a" + 1), ZeroDivisionError (dividing by zero), KeyError (missing dictionary key), IndexError (list index out of range), and FileNotFoundError (file does not exist). You can catch a specific type with except ValueError: or several at once with except (ValueError, TypeError):. A bare except: (with no type) catches everything, including KeyboardInterrupt — this is almost always a bad idea because it hides bugs and makes Ctrl-C not work. Always catch the specific exceptions you expect.',
      'The full try structure has two more optional clauses: else and finally. The else block runs only if no exception occurred in the try — it is useful for code that should run on success but might itself raise an error you do not want to catch in the same handler. The finally block runs no matter what, whether an exception happened or not — it is the place to clean up resources like closing files or network connections. You can also raise your own exceptions with the raise keyword: raise ValueError("n must be positive"). This is how you signal that a function\'s caller made a mistake, like passing an invalid argument.',
    ],
    problems: [
      {
        id: 'ex-p1',
        prompt: 'Use try/except to catch a ZeroDivisionError. Divide 10 by 0 and, on error, print "Cannot divide by zero".',
        starterCode: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")',
        expectedOutput: 'Cannot divide by zero',
        hint: 'Put the division in the try block and catch ZeroDivisionError in the except block.',
      },
      {
        id: 'ex-p2',
        prompt: 'Use try/except to convert "abc" to an int. Catch ValueError and print "Not a number".',
        starterCode: 'try:\n    n = int("abc")\nexcept ValueError:\n    print("Not a number")',
        expectedOutput: 'Not a number',
        hint: 'int("abc") raises ValueError. Catch it and print the message.',
      },
      {
        id: 'ex-p3',
        prompt: 'Use try/except/finally. In try, attempt to access d["missing"] where d = {"a": 1}. Catch KeyError and print "Key missing". In finally, print "Done".',
        starterCode: 'd = {"a": 1}\ntry:\n    d["missing"]\nexcept KeyError:\n    print("Key missing")\nfinally:\n    print("Done")',
        expectedOutput: 'Key missing\nDone',
        hint: 'Accessing a missing key raises KeyError. The finally block always runs, after the except block.',
      },
    ],
    mcqs: [
      {
        id: 'ex-m1',
        question: 'Which exception is raised when you divide a number by zero?',
        options: ['ValueError', 'ZeroDivisionError', 'TypeError', 'ArithmeticError'],
        correctIndex: 1,
        explanation:
          'Dividing by zero raises ZeroDivisionError. (ArithmeticError is its parent class, but the specific type is ZeroDivisionError.)',
      },
      {
        id: 'ex-m2',
        question: 'What does the finally block do?',
        options: [
          'Runs only if an exception occurred',
          'Runs only if no exception occurred',
          'Always runs, whether or not an exception occurred',
          'Runs before the try block',
        ],
        correctIndex: 2,
        explanation:
          'The finally block always executes, regardless of whether an exception was raised or caught. It is used for cleanup like closing files.',
      },
    ],
    aiQA: [
      {
        keywords: ['raise', 'throw', 'custom'],
        question: 'How do I raise my own exception?',
        answer:
          'Use the raise keyword followed by an exception instance: raise ValueError("n must be positive"). You can also create your own exception classes by subclassing Exception: class MyError(Exception): pass. Raise it with raise MyError("something went wrong"). Custom exceptions make your code\'s error handling more expressive and specific.',
      },
      {
        keywords: ['bare except', 'except:', 'catch all'],
        question: 'Why is a bare except: bad?',
        answer:
          'A bare except: catches EVERY exception, including KeyboardInterrupt (Ctrl-C) and SystemExit, which you usually do not want to catch. It also hides bugs by swallowing errors you did not anticipate. Always catch specific exception types like except ValueError: or except (KeyError, IndexError): so you only handle the errors you actually expect and understand.',
      },
    ],
  },
  {
    id: 'modules',
    title: 'Modules & Packages',
    level: 'Advanced',
    category: 'Code Organization',
    content: [
      'A module is simply a .py file containing Python code that you can import into other files. This lets you split a large program into manageable pieces and reuse code across projects. You import a module with the import statement: import math gives you access to everything in the math module via the math. prefix, like math.sqrt(16) or math.pi. You can import specific names with from math import sqrt, which lets you use sqrt(16) directly without the prefix. You can also rename an import with the as keyword: import numpy as np is a common convention in data science.',
      'Python comes with a large standard library of built-in modules that you get for free — no installation required. Some of the most useful are math (mathematical functions), random (random numbers and choices), datetime (dates and times), os (interacting with the operating system), sys (system-specific parameters), json (JSON encoding), re (regular expressions), and collections (specialized containers like Counter and defaultdict). Learning what is in the standard library is one of the highest-leverage things a Python developer can do, because it lets you solve problems without reaching for third-party packages.',
      'A package is a collection of modules organized in a directory. The directory must contain a file named __init__.py (which can be empty) to be recognized as a package. You import from a package with dot notation: from mypackage.mymodule import myfunction. The Python Package Index (PyPI) hosts hundreds of thousands of third-party packages you can install with pip, the package manager that comes with Python. You install a package with pip install package_name and it becomes available to import in all your projects. Popular packages include requests (HTTP), numpy (arrays), pandas (data analysis), and flask (web apps). Managing dependencies with a requirements.txt file or a virtual environment is essential for reproducible code.',
    ],
    problems: [
      {
        id: 'md-p1',
        prompt: 'Import the math module and print the square root of 16 (use math.sqrt).',
        starterCode: 'import math\nprint(math.sqrt(16))',
        expectedOutput: '4.0',
        hint: 'Use import math, then math.sqrt(16). The result is a float.',
      },
      {
        id: 'md-p2',
        prompt: 'Use from random import randint. Print a random integer between 1 and 3. (To get a deterministic output, set random.seed(42) first.)',
        starterCode: 'import random\nrandom.seed(42)\nprint(random.randint(1, 3))',
        expectedOutput: '2',
        hint: 'Use random.seed(42) before randint so the output is predictable.',
      },
      {
        id: 'md-p3',
        prompt: 'Import the datetime module and print the current year. Use datetime.date.today().year.',
        starterCode: 'import datetime\nprint(datetime.date.today().year)',
        expectedOutput: '2026',
        hint: 'Use import datetime, then datetime.date.today().year gives the current year as an int.',
      },
    ],
    mcqs: [
      {
        id: 'md-m1',
        question: 'What is the difference between "import math" and "from math import sqrt"?',
        options: [
          'No difference',
          'The first requires the math. prefix; the second lets you use sqrt() directly',
          'The first is faster',
          'The second imports the whole module',
        ],
        correctIndex: 1,
        explanation:
          'import math gives you math.sqrt. from math import sqrt binds the name sqrt directly, so you write sqrt() without the prefix. The from form can be less clear about where a name comes from.',
      },
      {
        id: 'md-m2',
        question: 'What is a package in Python?',
        options: [
          'A single .py file',
          'A directory of modules with an __init__.py file',
          'A third-party installer',
          'A type of variable',
        ],
        correctIndex: 1,
        explanation:
          'A package is a directory containing module files and an __init__.py file. It lets you organize related modules into a hierarchy.',
      },
    ],
    aiQA: [
      {
        keywords: ['pip', 'install', 'package', 'pypi'],
        question: 'How do I install third-party packages?',
        answer:
          'Use pip, the package manager that comes with Python: pip install requests installs the requests package from PyPI. To manage dependencies for a project, list them in a requirements.txt file (one package per line) and install them all with pip install -r requirements.txt. Best practice is to use a virtual environment (venv) so each project has its own isolated set of packages.',
      },
      {
        keywords: ['virtualenv', 'venv', 'environment'],
        question: 'Why use a virtual environment?',
        answer:
          'A virtual environment (venv) gives each project its own isolated set of installed packages and versions, so project A can use Django 3 while project B uses Django 4 without conflict. Create one with python -m venv .venv, activate it (source .venv/bin/activate on Mac/Linux), then pip install your packages. Without a venv, all projects share one global set of packages, which leads to version conflicts.',
      },
    ],
  },
  {
    id: 'generators',
    title: 'Generators & Iterators',
    level: 'Pro',
    category: 'Advanced Python',
    content: [
      'A generator is a special kind of function that produces a sequence of values lazily, one at a time, instead of computing and storing them all at once. You write a generator with the yield keyword instead of return. When a generator function is called, it does not run immediately — it returns a generator object. Each time you ask for the next value (with next() or by iterating in a for loop), the function runs until it hits a yield statement, produces that value, and pauses. When you ask again, it resumes right after the yield and continues. This makes generators extremely memory-efficient for large or infinite sequences.',
      'For example, a generator to count forever: def counter(): n = 0; while True: n += 1; yield n. Calling counter() returns a generator. next(gen) gives 1, next(gen) gives 2, and so on, without ever building a list in memory. A more practical example is reading a large file line by line: a generator can yield one line at a time so you never load the whole file into RAM. The key insight is that yield pauses the function\'s execution and saves its local state (all local variables) so it can resume exactly where it left off. This is fundamentally different from return, which discards all local state.',
      'An iterator is the general concept: any object that implements __iter__ and __next__ can be iterated. Generators are a convenient way to create iterators without writing a class. The built-in functions map(), filter(), and zip() return iterators (lazy), as do dict.keys(), dict.values(), and dict.items(). You can convert any iterator to a list with list(iterator) if you need random access, but this defeats the memory benefit. Generator expressions (like list comprehensions but with parentheses) are another syntax: (x*x for x in range(1000000)) creates a generator that produces squares on demand. Use generators when you have a large or infinite sequence, or when you want to pipeline data through multiple stages without building intermediate lists.',
    ],
    problems: [
      {
        id: 'gn-p1',
        prompt: 'Write a generator function count_up_to(n) that yields numbers from 1 up to (but not including) n. Use it to create a generator for count_up_to(4), then print all values by converting to a list.',
        starterCode: 'def count_up_to(n):\n    i = 1\n    while i < n:\n        yield i\n        i += 1\n\nprint(list(count_up_to(4)))',
        expectedOutput: '[1, 2, 3]',
        hint: 'Use a while loop with yield i inside, then list(...) to collect the values.',
      },
      {
        id: 'gn-p2',
        prompt: 'Use a generator expression to create the squares of 1,2,3,4 and print them as a list.',
        starterCode: 'squares = (x*x for x in range(1, 5))\nprint(list(squares))',
        expectedOutput: '[1, 4, 9, 16]',
        hint: 'A generator expression looks like a list comprehension but uses parentheses: (x*x for x in range(1, 5)).',
      },
      {
        id: 'gn-p3',
        prompt: 'Write a generator evens() that yields even numbers 2, 4, 6 (then stops). Use next() to get the first value and print it.',
        starterCode: 'def evens():\n    yield 2\n    yield 4\n    yield 6\n\ngen = evens()\nprint(next(gen))',
        expectedOutput: '2',
        hint: 'Use multiple yield statements. next(gen) returns the first yielded value.',
      },
    ],
    mcqs: [
      {
        id: 'gn-m1',
        question: 'What is the key difference between yield and return?',
        options: [
          'yield is faster',
          'yield pauses the function and saves its state; return ends the function',
          'yield can only be used once',
          'return is for generators only',
        ],
        correctIndex: 1,
        explanation:
          'yield produces a value and pauses the function, saving its local state so it can resume. return produces a value and terminates the function for good.',
      },
      {
        id: 'gn-m2',
        question: 'Why are generators memory-efficient?',
        options: [
          'They use less CPU',
          'They produce values one at a time instead of building the whole list in memory',
          'They compress the data',
          'They store data on disk',
        ],
        correctIndex: 1,
        explanation:
          'A generator yields one value at a time on demand, so it never needs to hold the entire sequence in memory. This makes it ideal for large or infinite sequences.',
      },
    ],
    aiQA: [
      {
        keywords: ['infinite', 'stream', 'large'],
        question: 'Can a generator produce an infinite sequence?',
        answer:
          'Yes. Because a generator yields one value at a time and does not store the whole sequence, it can run forever. For example def naturals(): n=1; while True: yield n; n+=1 produces 1,2,3,... endlessly. You just need to stop consuming it at some point (with break in a for loop, or by using itertools.islice to take a finite number).',
      },
      {
        keywords: ['iterator', 'iterable', 'difference'],
        question: 'What is the difference between an iterable and an iterator?',
        answer:
          'An iterable is anything you can loop over (it has an __iter__ method) — like a list, string, or dict. An iterator is the object that actually produces the values one at a time (it has __next__ as well). Calling iter(iterable) returns an iterator. A generator is a convenient way to create an iterator. Lists are iterable but store all values; iterators are lazy and produce values on demand.',
      },
    ],
  },
  {
    id: 'decorators',
    title: 'Decorators',
    level: 'Pro',
    category: 'Advanced Python',
    content: [
      'A decorator is a function that takes another function and extends or changes its behavior without modifying its source code. The syntax uses the @ symbol placed above the function definition. For example, @my_decorator above def foo(): is shorthand for foo = my_decorator(foo). This means my_decorator is called with foo as an argument, and whatever it returns replaces the original foo. Decorators are a form of metaprogramming — code that transforms other code. They are used extensively in Python frameworks for things like routing web requests (@app.route), marking test functions (@pytest.mark.test), or controlling access (@login_required).',
      'A decorator is typically written as a function that defines and returns an inner wrapper function. The wrapper uses *args and **kwargs to accept any arguments the decorated function might take, calls the original function, and can do something before and/or after. For example: def log(func): def wrapper(*args, **kwargs): print(f"Calling {func.__name__}"); result = func(*args, **kwargs); print(f"Done {func.__name__}"); return result; return wrapper. Applying @log to any function now prints a message before and after each call, without changing the function itself. The functools.wraps decorator should be used on the wrapper to preserve the original function\'s name and docstring.',
      'Decorators can also take arguments, which requires a third level of nesting: a function that returns a decorator that returns a wrapper. For example @repeat(3) to call a function 3 times. The pattern is: def repeat(times): def decorator(func): def wrapper(*args, **kwargs): for _ in range(times): result = func(*args, **kwargs); return result; return wrapper; return decorator. Class-based decorators are also possible by defining __call__. Understanding decorators deeply means understanding that functions are first-class objects in Python — they can be passed as arguments, returned from functions, and assigned to variables, just like any other value. This is the foundation of functional programming in Python.',
    ],
    problems: [
      {
        id: 'dc-p1-deco',
        prompt: 'Write a decorator called shout that makes a function\'s return value uppercase. Apply it to a function greet that returns "hello", then print greet().',
        starterCode: 'def shout(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs).upper()\n    return wrapper\n\n@shout\ndef greet():\n    return "hello"\n\nprint(greet())',
        expectedOutput: 'HELLO',
        hint: 'The wrapper calls the original function and returns its result uppercased with .upper().',
      },
      {
        id: 'dc-p2-deco',
        prompt: 'Write a decorator called double that calls the decorated function twice and returns a list of both results. Apply it to a function roll that returns 7. Print roll().',
        starterCode: 'def double(func):\n    def wrapper(*args, **kwargs):\n        return [func(*args, **kwargs), func(*args, **kwargs)]\n    return wrapper\n\n@double\ndef roll():\n    return 7\n\nprint(roll())',
        expectedOutput: '[7, 7]',
        hint: 'The wrapper calls func() twice, collects both results into a list, and returns it.',
      },
      {
        id: 'dc-p3-deco',
        prompt: 'Write a decorator called timer that prints "start" before calling the function and "end" after. Apply it to a function run that returns "ok". Print the return value of run().',
        starterCode: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print("start")\n        result = func(*args, **kwargs)\n        print("end")\n        return result\n    return wrapper\n\n@timer\ndef run():\n    return "ok"\n\nprint(run())',
        expectedOutput: 'start\nend\nok',
        hint: 'Print "start" before calling func, print "end" after, then return the result. The prints happen before the final print(run()).',
      },
    ],
    mcqs: [
      {
        id: 'dc-m1-deco',
        question: 'What does @decorator above def foo(): mean?',
        options: [
          'It calls foo() immediately',
          'It is shorthand for foo = decorator(foo)',
          'It renames foo to decorator',
          'It imports the decorator module',
        ],
        correctIndex: 1,
        explanation:
          'The @ syntax is syntactic sugar: foo = decorator(foo). The decorator receives the function and its return value replaces the original function.',
      },
      {
        id: 'dc-m2-deco',
        question: 'Why should you use functools.wraps in a decorator?',
        options: [
          'To make the decorator faster',
          'To preserve the original function\'s name and docstring',
          'To allow the decorator to take arguments',
          'To catch exceptions',
        ],
        correctIndex: 1,
        explanation:
          'Without functools.wraps, the wrapper function hides the original function\'s __name__ and __doc__. @wraps(func) copies these attributes so introspection still works.',
      },
    ],
    aiQA: [
      {
        keywords: ['arguments', 'parameterized', 'param'],
        question: 'How do I write a decorator that takes arguments?',
        answer:
          'You need three levels of functions. The outer function takes the arguments (e.g., def repeat(times):), it returns a decorator (def decorator(func):), which returns a wrapper (def wrapper(*args, **kwargs):). Usage is @repeat(3). The outermost function is called first with the arguments, then it returns a normal decorator that receives the function. It feels awkward at first but follows directly from the fact that decorators are just functions returning functions.',
      },
      {
        keywords: ['class', 'class-based', '__call__'],
        question: 'Can a decorator be a class instead of a function?',
        answer:
          'Yes. A class with an __init__ that takes the function and an __call__ method that implements the wrapper behavior works as a decorator. Usage is the same: @MyDecorator above def foo():. This is useful when the decorator needs to maintain state between calls, like a cache or a call counter, because you can store it on self.',
      },
    ],
  },
  {
    id: 'async',
    title: 'Async / Await (Concurrency)',
    level: 'Pro',
    category: 'Advanced Python',
    content: [
      'Asynchronous programming lets a program do other work while waiting for slow operations (like network requests or file I/O) to finish, instead of blocking and doing nothing. In Python, async is built around the async and await keywords. You define an asynchronous function with async def instead of def. When you call an async function, it does not run immediately — it returns a coroutine object that you must schedule on an event loop. Inside an async function, you use await to pause until another coroutine or an awaitable completes, yielding control back to the event loop so other tasks can run.',
      'The event loop is the heart of async Python. It is a loop that keeps checking which coroutines are ready to resume and runs them. You start it with asyncio.run(my_main()). The classic example is fetching multiple web pages: with synchronous code, you wait for each page one after another; with async, you can start all the requests at once with asyncio.gather() and wait for all of them together, which can be dramatically faster when the network is the bottleneck. The key rule is that await can only be used inside an async def function — you cannot await at the top level of a normal function.',
      'A common confusion is the difference between async and threading. Threads let the operating system switch between tasks, but Python\'s Global Interpreter Lock (GIL) means only one thread runs Python code at a time, so threads do not speed up CPU-bound work in CPython. Async, by contrast, is cooperative: a coroutine only gives up control when it awaits, so you never have race conditions on shared data. Use async for I/O-bound work (network, files, databases) where you spend most of the time waiting. Use multiprocessing for CPU-bound work (number crunching) where you need true parallelism. Mixing async and threads is possible but advanced — start by mastering pure async with asyncio.gather() and asyncio.sleep() before reaching for the more complex tools.',
    ],
    problems: [
      {
        id: 'as-p1',
        prompt: 'Define an async function hello() that returns "hi". Run it with asyncio.run() and print the result.',
        starterCode: 'import asyncio\n\nasync def hello():\n    return "hi"\n\nprint(asyncio.run(hello()))',
        expectedOutput: 'hi',
        hint: 'Use async def and return a value. asyncio.run() executes the coroutine and returns its result.',
      },
      {
        id: 'as-p2',
        prompt: 'Define an async function task(n) that awaits asyncio.sleep(0) then returns n*2. Run it with asyncio.run(task(5)) and print the result.',
        starterCode: 'import asyncio\n\nasync def task(n):\n    await asyncio.sleep(0)\n    return n * 2\n\nprint(asyncio.run(task(5)))',
        expectedOutput: '10',
        hint: 'Use await asyncio.sleep(0) inside the async function, then return n*2. asyncio.run() returns the result.',
      },
      {
        id: 'as-p3',
        prompt: 'Use asyncio.gather to run two async functions f1() (returns 1) and f2() (returns 2) concurrently. Print the list of results.',
        starterCode: 'import asyncio\n\nasync def f1():\n    return 1\n\nasync def f2():\n    return 2\n\nasync def main():\n    return await asyncio.gather(f1(), f2())\n\nprint(asyncio.run(main()))',
        expectedOutput: '[1, 2]',
        hint: 'Use asyncio.gather(f1(), f2()) inside an async main(), then asyncio.run(main()). gather returns a list of results in order.',
      },
    ],
    mcqs: [
      {
        id: 'as-m1',
        question: 'What does the await keyword do?',
        options: [
          'It blocks the entire program until the operation finishes',
          'It pauses the coroutine and yields control to the event loop until the awaitable completes',
          'It starts a new thread',
          'It cancels the coroutine',
        ],
        correctIndex: 1,
        explanation:
          'await suspends the coroutine and returns control to the event loop, which can run other coroutines meanwhile. When the awaited operation completes, the coroutine resumes.',
      },
      {
        id: 'as-m2',
        question: 'When should you use async/await over threading?',
        options: [
          'For CPU-bound work like number crunching',
          'For I/O-bound work like network requests where you spend time waiting',
          'For simple scripts',
          'Never — threading is always better',
        ],
        correctIndex: 1,
        explanation:
          'Async is ideal for I/O-bound work (network, files, databases) where the program spends time waiting. For CPU-bound work, use multiprocessing instead, because the GIL prevents threads from running Python in parallel.',
      },
    ],
    aiQA: [
      {
        keywords: ['event loop', 'asyncio.run', 'schedule'],
        question: 'What is the event loop?',
        answer:
          'The event loop is the scheduler that runs coroutines. It keeps a queue of ready coroutines and a set of ones waiting on I/O or timers. When a coroutine awaits, the loop switches to another ready one. When the awaited operation finishes, the loop marks that coroutine ready again. asyncio.run() creates a new loop, runs your main coroutine until it finishes, then closes the loop.',
      },
      {
        keywords: ['gather', 'concurrent', 'parallel'],
        question: 'What does asyncio.gather do?',
        answer:
          'asyncio.gather(*coros) schedules all the given coroutines to run concurrently on the same event loop and returns a future that resolves to a list of their results, in the same order you passed them. They all start at once and run interleaved, so the total time is roughly the slowest one, not the sum of all. This is the main way to achieve concurrency in async Python.',
      },
    ],
  },
  {
    id: 'regex',
    title: 'Regular Expressions',
    level: 'Pro',
    category: 'Text Processing',
    content: [
      'A regular expression (regex) is a compact pattern that describes a set of strings. It is a powerful tool for searching, matching, and replacing text. Python\'s built-in re module provides regex support. The most useful functions are re.search(pattern, string) which finds the first match anywhere in the string, re.match(pattern, string) which matches only at the beginning, re.findall(pattern, string) which returns all matches as a list, and re.sub(pattern, replacement, string) which substitutes matches with new text. You write patterns with special characters: . matches any character, \\d matches a digit, \\w matches a word character, \\s matches whitespace, and ^ and $ match the start and end of the string.',
      'Quantifiers let you match repeated patterns: * means zero or more, + means one or more, ? means zero or one, and {n,m} means between n and m times. For example, \\d{3}-\\d{4} matches a phone number like 555-1234. Square brackets define a character class: [aeiou] matches any vowel, [a-z] matches any lowercase letter. A caret inside brackets negates: [^0-9] matches anything that is not a digit. Parentheses create groups, which let you extract parts of a match: (\\d+)-(\\d+) on "555-1234" gives two groups you can access. The pipe | means "or": cat|dog matches either word.',
      'A crucial gotcha is greedy vs. lazy matching. By default, quantifiers are greedy — they match as much as possible. The pattern <.*> on the string "<a><b>" matches the entire string "<a><b>" because .* grabs everything between the first < and the last >. To make a quantifier lazy (match as little as possible), add a question mark: <.*?> matches just "<a>" first. Another important practice is using raw strings (r"...") for regex patterns, because backslashes are escape characters in both regular strings and regex. Writing r"\\d" is clearer and less error-prone than "\\d". Regex is a deep topic — start with simple patterns and test them with re.findall before building complex ones.',
    ],
    problems: [
      {
        id: 'rx-p1',
        prompt: 'Use re.findall to find all digits in the string "a1b2c3" and print the list.',
        starterCode: 'import re\nprint(re.findall(r"\\d", "a1b2c3"))',
        expectedOutput: "['1', '2', '3']",
        hint: 'Use re.findall(r"\\d", "a1b2c3"). \\d matches a single digit.',
      },
      {
        id: 'rx-p2',
        prompt: 'Use re.sub to replace all digits in "h3llo" with "e", producing "hello". Print the result.',
        starterCode: 'import re\nprint(re.sub(r"\\d", "e", "h3llo"))',
        expectedOutput: 'hello',
        hint: 'Use re.sub(r"\\d", "e", "h3llo") to replace every digit with "e".',
      },
      {
        id: 'rx-p3',
        prompt: 'Use re.search to check if the string "call 555-1234 now" contains a pattern like 555-1234 (three digits, hyphen, four digits). Print the matched group (the full match).',
        starterCode: 'import re\nm = re.search(r"\\d{3}-\\d{4}", "call 555-1234 now")\nprint(m.group())',
        expectedOutput: '555-1234',
        hint: 'Use re.search with the pattern r"\\d{3}-\\d{4}". If found, m.group() returns the full match.',
      },
    ],
    mcqs: [
      {
        id: 'rx-m1',
        question: 'What does \\d match in a regex?',
        options: ['Any letter', 'Any digit 0-9', 'Any whitespace', 'Any character'],
        correctIndex: 1,
        explanation:
          '\\d is shorthand for [0-9] — it matches a single decimal digit. \\D is its opposite (non-digit).',
      },
      {
        id: 'rx-m2',
        question: 'What is the difference between re.match and re.search?',
        options: [
          'They are identical',
          're.match only matches at the start of the string; re.search matches anywhere',
          're.search is faster',
          're.match returns a list',
        ],
        correctIndex: 1,
        explanation:
          're.match anchors the pattern to the start of the string; re.search scans the whole string for the first match anywhere. Use re.fullmatch to require the entire string to match.',
      },
    ],
    aiQA: [
      {
        keywords: ['greedy', 'lazy', '*?'],
        question: 'What is greedy vs. lazy matching?',
        answer:
          'By default, * and + are greedy — they match as much text as possible. Adding a ? after them makes them lazy: *? and +? match as little as possible. For example, on "<a><b>", <.*> (greedy) matches the whole "<a><b>", but <.*?> (lazy) matches just "<a>". Lazy is often what you want when parsing HTML or extracting content between delimiters.',
      },
      {
        keywords: ['raw string', 'r"\\d"', 'escape'],
        question: 'Why use a raw string (r"...") for regex patterns?',
        answer:
          'In a normal Python string, \\d is just a backslash followed by d (Python warns about invalid escapes). In a raw string, backslashes are literal, so r"\\d" is exactly the two characters \\ and d, which is what the regex engine expects. Using raw strings avoids double-escaping confusion like "\\\\d" and is the standard practice for regex in Python.',
      },
    ],
  },
];
