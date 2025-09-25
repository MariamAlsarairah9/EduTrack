using EduTrack.Model;
using Microsoft.EntityFrameworkCore;

namespace EduTrack
{
    public class HrDbContext : DbContext
    {
        public HrDbContext(DbContextOptions<HrDbContext> options) : base(options)
        { 
        
        }

        //Define Tables

        //Teachers Table
        public DbSet<Teacher> Teachers { get; set; }
    }
}
