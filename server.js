const { response } = require('express')
const express= require('express')
const app = express() 
const cors= require('cors') 
const PORT= 3000

app.use(cors()) 

let cats={
    'molly':{
        'catName': "Molly",
        'age': "Senior",
        'behavior': "Gentle",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/DDBDF682-5174-4C98-A936-C044D91828FD_1_105_c.jpeg',
        'story': "Molly and Wendy were my first two foster cats and thus hold a special place in The Considerate Cat Family. I was told that since they were a senior bonded pair that I may be taking on long term cats. Within a few weeks the cats were adopted by a lovely couple and remain with them to this day."



    },
    'wendy':{
        'catName': "wendy",
        'age': "Senior",
        'behavior': "Gentle",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/F97601FF-B3FD-4B63-889E-3581112DC081_1_105_c.jpeg',
        'story': "Molly and Wendy were my first two foster cats and thus hold a special place in The Considerate Cat Family. I was told that since they were a senior bonded pair that I may be taking on long term cats. Within a few weeks the cats were adopted by a lovely couple and remain with them to this day."

    },
    'phaedra':{
        'catName': "Phaedra",
        'age': "Young Adult",
        'behavior': "Diffult",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/DC78138D-7E12-4CD1-AB15-4CBE9EB07B5F.jpeg',
        'story': " When Molly and Wendy where adopted so quickly, I begged the rescue I work with to give me another cat. They said they had one available... but wasn't sure I'd want her. Well I took her anyways and that was Phaedra. Months upon months of behavior work yielded a somewhat tolerable cat. She only became tolderable when she was introduced to her future Buddy: Butters. Butters and Phaedra became my most beloved and long term fosters. I had them on and off for years until they were finally adopted by an amazing couple where they remain (to my shock, suprise and joy!)"

    },
    'butters':{
        'catName': "Butters",
        'age': "Young Adult",
        'behavior': "Very Challenging",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/A64208F1-7D03-45CC-A0DD-2513D025BC68_1_105_c.jpeg',
        'story': "Butters came into The Considerate Cat Family after I needed a Buddy for my bored foster; Phaedra. Butters was a bully, for lack of a kinder term. He would corner me in my own apartment and maul me several times a day. But inside he's just a big softie. After years of work and patience he became a lovely boy and a good buddy to Phaedra. They both are adopted and remain adopted and even have a real life human baby brother now."
    },
    'charlotte and kittens':{
        'catName': "Charlotte and Her Kittens",
        'age': "Young Adult",
        'behavior': "Very Challenging",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/630BADDC-1CD0-45E9-9FA1-8FD407387855_1_105_c.jpeg',
        'story': "My friends and I were in Penticton for our Highschool Reunion (Who actually goes to those?!) and I saw a posting from the rescue I work at that a bunch of kittens and their mum needed to be picked up and brought back to Vancouver from an abandonded AirBnB in Penticton. Of course we rose to the challenge and delivered them to VOKRA. I fostered them shortly after they were cleared for fostering. All the kittens and Mama Charlotte were adopted to good homes where they remain."
    },
    'gigi':{
        'catName': "GiGi",
        'age': "Young Adult",
        'behavior': "Sweet As Pie",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/697E3154-4D23-4101-80E1-3784E651D0A2_1_105_c.jpeg',
        'story': "Of course I love all my foster kittens equally- But I think GiGi was the most beautiful of all. Tied with Abe maybe. Gigi was my foster cat for a short while when I lived at a boarding school full of teenagers. I had an apartment in a girls dormitory and Gigi would often go missing only to be found curled up with one of the girls helping to study or releive stress. Gigi was snapped up very quickly by adopters where she remains."

    },
    'mrMystery':{
        'catName': "Mr.Mystery",
        'age': "Young Adult",
        'behavior': "A Bit Grumpy",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/697E3154-4D23-4101-80E1-3784E651D0A2_1_105_c.jpeg',
        'story': "Mr.Mystery was picked up from a farm by me and brought back to my tiny apartment. Upon arival and obvservation- Mr.Mystery was very depressed. At his farm he had tons of space and cats to play with. So I reached out to my rescue and requested him a Buddy. Shortly after matching him with someone- I drove to drop him off at his new home. To his delight; the house I dropped him at was 6 stories tall and in the ritziest neighbourhoods in Vancouver. I love it when my cats are more successful than... I'll ever be?."

    },
    'mama and kittens':{
        'catName': "Mama and Her 9 Kittens",
        'age': "Young Adult",
        'behavior': "So Sweet",
        'image':'https://consideratecat.com/wp-content/uploads/2022/04/B007ABE5-2FF7-497A-82A6-F5D740DCA1D0_1_105_c.jpeg',
        'story': "I asked my rescue if I could please foster a pregnant mother before I moved (I wasn't sure if my next apartment would allow multiple cats.) They obliged and gave me Mama! Well, she ended up birthing 9 kittens so for the next 10 weeks after birth my house was complete chaos. Wonderfully; the chaos was so well balanced by the kittens sweetness. Each kitten was adopted in pairs and the ninth kitten was adopted with Mama."


    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:catName',(request,response) =>{
    const catName= request.params.catName  
    if(cats[catName]){
    response.json(cats[catName])}


})


app.listen(process.env.PORT || PORT, () => {
    console.log("Your server is running :) Great job, Madie")
})