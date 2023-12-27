using Microsoft.EntityFrameworkCore;
using StudentRegisterApi.Models;

namespace StudentRegisterApi.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions option):base(option) 
        {
            
        }

        public DbSet<Student> Studnts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasData(
                new Student
                {
                    Id=1,
                    Name="chathura",
                    Address="colombo",
                    Phone="0774733245"
                },
                 new Student
                 {
                     Id = 2,
                     Name = "Kamal",
                     Address = "kandy",
                     Phone = "0786543213"
                 },
                  new Student
                  {
                      Id = 3,
                      Name = "Amara",
                      Address = "Galle",
                      Phone = "0775645890"
                  }

                );
        }


    }
}
