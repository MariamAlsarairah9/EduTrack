using EduTrack.Model;
using Microsoft.EntityFrameworkCore;

namespace EduTrack
{
    public class ETDbContext : DbContext
    {
        public ETDbContext(DbContextOptions<ETDbContext> options) : base(options)
        { 
        
        }

        //Define Tables

        //Teachers Table
        public DbSet<Teacher> Teachers { get; set; }
    }
}
