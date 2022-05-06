using System;
using System.Collections.Generic;
using System.Linq;

namespace Vote_sys
{

    public class Counter
    {
        private double? _percentage;
        public Counter(string name, int count)
        {
            Name = name;
            Count = count;
        }
        public string Name { get; }
        public int Count { get; private set; }
        public double GetPercent(int total) => _percentage ?? 
            (_percentage = Math.Round(Count * 100.0 / total, 2)).Value;
        
        public void AddExcess(double excess) => _percentage += excess;
        
        
        // had l'inc t7iyd apres
        //public void Increment() => Count++;
    }

    public class CounterManager
    {
        public CounterManager(params Counter[] counters)
        {
            Counters = new List<Counter>(counters);
        }
        public List<Counter> Counters { get; set; }

        public int Total() => Counters.Sum(x => x.Count);

        public double TotalPercentage() => Counters.Sum(x => x.GetPercent(Total()));

        public void AnnounceWinner(){
            var excess = Math.Round(100 - TotalPercentage(), 2);

            Console.WriteLine($"Excess: {excess}");

            var biggestAmountOfVotes = Counters.Max(x => x.Count);

            var winners = Counters.Where(x => x.Count == biggestAmountOfVotes).ToList();
            
            if(winners.Count == 1) {
                var winner = winners.First();
                winner.AddExcess(excess);
                Console.WriteLine($"{winner.Name} Won");
            }else 
            {
                if (winners.Count != Counters.Count)
                {
                    var lowestAmountOfVotes = Counters.Min(x => x.Count);
                    var loser = Counters.First(x => x.Count == biggestAmountOfVotes);
                    loser.AddExcess(excess);
                }
                    Console.WriteLine(string.Join(" -DRAW- ", winners.Select(x => x.Name)));

            }

            foreach (var c in Counters)
            {
                Console.WriteLine($"{c.Name} Counts: {c.Count}, Percentage: {c.GetPercent(Total())}%");

            }
            Console.WriteLine($"Total Percentage:{Math.Round(TotalPercentage(),2)}%");
        }

    }

    


    class Program
    {
        static void Main(string[] args)
        {
            // les declarations
            var partie_1 = new Counter("P1", 9);
            var partie_2 = new Counter("P2", 9);
            var partie_3 = new Counter("P3", 2);
            var partie_4 = new Counter("P4", 9);
            var partie_5 = new Counter("P5", 7);

            var manager = new CounterManager(partie_1, partie_2, partie_3, partie_4, partie_5);
            manager.AnnounceWinner();



        }

    }
}
