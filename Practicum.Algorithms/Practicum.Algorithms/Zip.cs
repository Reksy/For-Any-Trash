using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Practicum.Algorithms
{
    internal class Zip
    {
        private static TextReader reader;
        private static TextWriter writer;
        public static void Run()
        {
            reader = new StreamReader(Console.OpenStandardInput());
            writer = new StreamWriter(Console.OpenStandardOutput());

            var n = ReadInt();
            var arrA = ReadList();
            var arrB = ReadList();

            writer.WriteLine(String.Join(" ", Zipper(arrA, arrB)));
            reader.Close();
            writer.Close();
        }
        private static List<int> Zipper(List<int> arrA, List<int> arrB)
        {
            var result = new List<int>();

            for (var i = 0; i < arrA.Count; i++)
            {
                result.Add(arrA[i]);
                result.Add(arrB[i]);
            }

            return result;
        }

        private static int ReadInt()
        {
            return int.Parse(reader.ReadLine());
        }

        private static List<int> ReadList()
        {
            return reader.ReadLine()
                .Split(new[] { ' ', '\t', }, StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToList();
        }
    }
}
