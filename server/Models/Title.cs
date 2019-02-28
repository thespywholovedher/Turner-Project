using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Server.Models 
{
    public class Title
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Awards")]
        public BsonArray Awards { get; set; }

        [BsonElement("Genres")]
        public BsonArray Genres { get; set; }

        [BsonElement("KeyGenres")]
        public BsonArray KeyGenres { get; set; }

        [BsonElement("Keywords")]
        public BsonArray Keywords { get; set; }

        [BsonElement("OtherNames")]
        public BsonArray OtherNames { get; set; }

        [BsonElement("Participants")]
        public BsonArray Participants { get; set;}

        [BsonElement("ReleaseYear")]
        public int ReleaseYear { get; set; }

        [BsonElement("Storylines")]
        public BsonArray Storylines { get; set; }

        [BsonElement("TitleId")]
        public int Number { get; set; }

        [BsonElement("TitleName")]
        public string Name { get; set; }

        [BsonElement("TitleNameSortable")]
        public string SortableName { get; set;}  
    }
}