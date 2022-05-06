using System;

namespace Vote_sys
{




    class Program
    {
        static void Main(string[] args)
        {
            int yesCounter = 5;
            int noCounter = 3;
            int maybeCounter = 6;

            // Les pourcentages
            int total = yesCounter + noCounter + maybeCounter;

            var yesPercent = Math.Round(yesCounter * 100.0 / total) ;
            var noPercent = Math.Round(noCounter * 100.0 / total);
            var maybePercent = Math.Round(maybeCounter * 100.0 / total);



            Console.WriteLine($"Yes Counter: {yesCounter}, Percentage:{yesPercent}%");
            Console.WriteLine($"No Counter: {noCounter}, Percentage:{noPercent}%");
            Console.WriteLine($"No Counter: {maybeCounter}, Percentage:{maybePercent}%");

            if (yesCounter > noCounter)
            {
                if (yesCounter > maybeCounter)
                {
                    Console.WriteLine($"yes won");

                }else if (maybeCounter > yesCounter)
                {
                    Console.WriteLine($"Maybe won");
                }
                else { Console.WriteLine("DRAW");
                }

            }else if (noCounter>yesCounter)
            {
                if (noCounter > maybeCounter)
                {
                    Console.WriteLine($"yes won");

                }
                else if (maybeCounter > noCounter)
                {
                    Console.WriteLine($"Maybe won");
                }
                else
                {
                    Console.WriteLine("DRAW");
                }
            }
            else
            {
                if (maybeCounter > yesCounter)
                {
                    Console.WriteLine($"Maybe won");

                }
                else
                {
                    Console.WriteLine("DRAW");
                }
            }

        }

    }
}
