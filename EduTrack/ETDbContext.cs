using EduTrack.Model;
using Microsoft.EntityFrameworkCore;

namespace EduTrack
{
    public class ETDbContext : DbContext
    {

        public ETDbContext(DbContextOptions<ETDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //Seed
            modelBuilder.Entity<Lookup>().HasData(
                // Users (Major Code =0 )
                new Lookup { Id = 1, MajorCode = 0, MinorCode = 0, Name = "Users" },
                new Lookup { Id = 2, MajorCode = 0, MinorCode = 1, Name = "Teacher" },
                new Lookup { Id = 3, MajorCode = 0, MinorCode = 2, Name = "Parent" }

                );
        }


        //Define Tables

        //Teachers Table
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Lookup> Lookups { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Parent> Parents { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<StudentSAssignments> StudentSAssignments { get; set; }




    }
}

