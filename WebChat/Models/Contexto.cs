using Microsoft.EntityFrameworkCore;

namespace WebChat.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<RespostaChat> RespostaChat { get; set; }
    }
}
