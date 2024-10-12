using Microsoft.EntityFrameworkCore;

//Criação do DataBase

namespace WebChat.Models
{
    public class Contexto : DbContext
    {

        // Construtor verificar se existe o Db
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {
            Database.EnsureCreated();
        }

        // Cria Db
        public DbSet<RespostaChat> RespostaChat { get; set; }
    }
}
