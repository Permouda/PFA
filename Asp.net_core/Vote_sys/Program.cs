using System;

namespace Vote_sys
{
    class Program
    {
        static void Main(string[] args)
        {
            int yesCounter = 5;
            int noCounter = 3;
            
            // Les pourcentages
            int total = yesCounter + noCounter;

            var yesPercent = Math.Round(yesCounter * 100.0 / total) ;
            var noPercent = noCounter * 100.0 / total;



            Console.WriteLine($"Yes Counter: {yesCounter}, Percentage:{yesPercent}%");
            Console.WriteLine($"No Counter: {noCounter}, Percentage:{noPercent}%");

            if (yesCounter > noCounter)
            {
                Console.WriteLine($"Yes Won");
            }else if (noCounter>yesCounter)
            {
                Console.WriteLine($"No Won");

            }
            else
            {
                Console.WriteLine($"DRAW");
            }

        }

    }
}
