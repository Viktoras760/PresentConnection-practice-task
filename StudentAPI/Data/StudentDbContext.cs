using Microsoft.EntityFrameworkCore;

namespace StudentAPI.Data
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options) { }

        public DbSet<Student> Students { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString: "Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=StudentDb");
        }*/
    }
}
