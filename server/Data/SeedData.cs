using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using models;


namespace Data;

public class SeedingDataForTest
{
    public static async Task SeedAsync(Context context)
    {
        await context.Database.EnsureCreatedAsync();
        await SeedProductsAsync(context);

    }

    private static async Task SeedProductsAsync(Context context)
    {
        if (!context.Product.Any())
        {
            Product[] products = {

                new Product{Id = 1,
                 Name = "Cactus",
                    Price = 22,
      ImgUrl = "../images/alex-furgiuele-UkH7L-aag8A-unsplash.jpg",
      Description = "Poster of a green cactus.",
      Size = "20x30cm",
      Tags = "green cactus", },

      new Product{
      Id = 2,
      Name= "Eucalyptus in hand",
      Price= 23,
      ImgUrl= "../images/alex-lvrs-4N5huJDOydQ-unsplash.jpg",
      Description= "Poster with eucalyptus in hand",
      Size= "20x30cm",
      Tags= "plant green eucalyptus hand",


    }};

            await context.Product.AddRangeAsync(products);
            await context.SaveChangesAsync();
        }
    }


}