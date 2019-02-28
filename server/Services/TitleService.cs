using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using Server.Models;

namespace Server.Services {

    public class TitleService
    {
        private readonly IMongoCollection<Title> titles;

        public TitleService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("TitleDb"));
            var db = client.GetDatabase("dev-challenge");
            titles = db.GetCollection<Title>("Titles");
        }

        public List<Title> Get()
        {
            return titles.Find<Title>( title => true).ToList();
        }

        public Title Get(int id)
        {
            var titlesList = this.Get();

            return titlesList.Find( title => title.Number == id);
        }

        public List<Title> Search(string name)
        {
            return titles.Find<Title>( title => title.Name.Contains(name)).ToList();
        }
    }
}