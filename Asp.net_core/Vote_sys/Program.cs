using System;
using System.Collections.Generic;
using System.Linq;

namespace Vote_sys
{

    public class Counter
    {
        // private string _name;
        public Counter(string name, int count)
        {
            Name = name;
            Count = count;
        }
        /*
        public string GetName()
        {
            return _name;
        }
        public void SetName (string name)
        {
            _name = name;
        }*/


        public string Name { get; }
        public int Count { get; private set; }

        public double GetPercent(int total)
        {
            return Math.Round(Count * 100.0 / total);
        }
        public void Increment() => Count++;
    }

    public class CounterManager
    {
        public CounterManager(params Counter[] counters)
        {
            Counters = new List<Counter>(counters);
        }
        public List<Counter> Counters { get; set; }

        public int Total() => Counters.Sum(x => x.Count);
        /*public int Total()
        {
           
            
            int total = 0;
            foreach(var c in Counters)
            {
                total += c.Count;
            }
            return total;}
            */

        public double TotalPercentage() => Counters.Sum(x => x.GetPercent(Total()));

        public void AnnounceWinner(){
            var excess = Math.Round(100 - TotalPercentage(), 2);

            Console.WriteLine($"Excess: {excess}");
            /* var yesPercent = yes.GetPercent(manager.Total());
             var noPercent = no.GetPercent(manager.Total());
             var maybePercent = maybe.GetPercent(manager.Total());
             */

            var biggestAmountOfVotes = Counters.Max(x => x.Count);

            var winners = Counters.Where(x => x.Count == biggestAmountOfVotes).ToList();

            if(winners.Count == 1) {
                var winner = winners.First();
                Console.WriteLine($"{winner.Name} Won");
            }else if (winners.Count == Counters.Count)
            {
                string.Join(" -DRAW- ", winners.Select(x => x.Name));
            }
            // Axcess



            foreach (var c in Counters)
            {
                Console.WriteLine($"{c.Name} Counts: {c.Count}, Percentage: {c.GetPercent(Total())}%");

            }
            /*Console.WriteLine($"Yes Counter: {yes.Count}, Percentage:{yesPercent}%");
            Console.WriteLine($"No Counter: {no.Count}, Percentage:{noPercent}%");
            Console.WriteLine($"Maybe Counter: {maybe.Count}, Percentage:{maybePercent}%");
            */
            Console.WriteLine($"Total Percentage:{Math.Round(TotalPercentage(),2)}%");
        }

    }

    


    class Program
    {
        static void Main(string[] args)
        {
            // les declarations
            var yes = new Counter("Yes", 4);
            var no = new Counter("No", 6);
            var maybe = new Counter("Maybe", 2);

            var manager = new CounterManager(yes, no, maybe);
            manager.AnnounceWinner();



        }

    }
}
