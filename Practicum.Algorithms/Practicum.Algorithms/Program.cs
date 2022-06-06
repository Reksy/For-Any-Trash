using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

public class Solution
{
    private static TextReader reader;
    private static TextWriter writer;

    public static void Main(string[] args)
    {
        reader = new StreamReader(Console.OpenStandardInput());
        writer = new StreamWriter(Console.OpenStandardOutput());

        var n = ReadInt();
        var arrA = ReadList();
        var k = ReadInt();

        writer.WriteLine(String.Join(" ", MovingAvg(arrA, k)));
        reader.Close();
        writer.Close();
    }

    public static List<double> MovingAvg(List<int> arr, int k)
    {
        var result = new List<double>();

        double sum = 0;
        for (var i = 0; i < k; i++)
        {
            sum += arr[i];
        }
        result.Add(sum / k);

        for (var i=0; i< arr.Count - k; i++)
        {
            sum -= arr[i];
            sum+=arr[i+k];
            result.Add(sum / k);
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