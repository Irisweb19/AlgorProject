/ javascript program to count no of words
// from given input string.
    var OUT = 0;
    var IN = 1;
     
    // returns number of words in str
    function countWords( str)
    {
        var state = OUT;
        var wc = 0; // word count
        var i = 0;
         
        // Scan all characters one
        // by one
        while (i < str.length)
        {
         
            // If next character is a separator,
            // set the state as OUT
            if (str[i] == ' ' || str[i] == '\n'||
                                  str[i] == '\t')
                state = OUT;
                 
     
            // If next character is not a word
            // separator and state is OUT, then
            // set the state as IN and increment
            // word count
            else if (state == OUT)
            {
                state = IN;
                ++wc;
            }
     
            // Move to next character
            ++i;
        }
         
        return wc;
    }
     
    // Driver program to test above functions
        var str = "One two     three\n four\tfive ";
        document.write("No of words : "
                              + countWords(str));
 
// This code is contributed by bunnyram19.