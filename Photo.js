var images = ["https://i.pinimg.com/564x/56/b7/30/56b730291d43898fbff5f9b3fd666612.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/06/12/979123-virat-kohli.jpg",
"https://m.economictimes.com/thumb/msid-71917504,width-1200,height-900,resizemode-4,imgsize-623426/untitled-3.jpg",
"https://images.hindustantimes.com/img/2021/06/23/550x309/AP06_22_2021_000216B_1624429189329_1624429219995.jpg",
"https://images.hindustantimes.com/img/2021/06/22/550x309/2021-06-22T115050Z_652357402_UP1EH6M0WWO13_RTRMADP_3_CRICKET-TEST-IND-NZL_1624368308460_1624368316306.JPG",
"https://img.etimg.com/thumb/msid-76215220,width-650,imgsize-751021,,resizemode-4,quality-100/virat-kohli-earned-a-total-of-379294-pounds-through-his-sponsored-posts-raking-up-126431-pounds-per-post-.jpg",
"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/06/17/145182-untitled-design-10.jpg",
"https://images.newindianexpress.com/uploads/user/imagelibrary/2021/2/20/w900X450/Kohli_IPL.jpg",
"https://c.ndtvimg.com/2021-04/2l7dt0hg_kohli-instagram_625x300_07_April_21.jpg?q=60",
"https://i.cdn.newsbytesapp.com/images/l197_9781587792692.jpg",
"https://images.indianexpress.com/2020/05/virat-kohli.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/31/916523-889617-99c54cdf-b06a-4689-8651-e02b05fd330d.jpg",
"https://cdn.cnn.com/cnnnext/dam/assets/190626120333-virat-kohli-tease-super-tease.jpg",
"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/07/31/916523-889617-99c54cdf-b06a-4689-8651-e02b05fd330d.jpg",
"https://cdn.cnn.com/cnnnext/dam/assets/190626120333-virat-kohli-tease-super-tease.jpg",
"https://english.sakshi.com/sites/default/files/article_images/2021/06/10/Virat-Kohli-1623312310.jpeg",
"https://www.cricketcountry.com/wp-content/uploads/2018/12/Virat-Kohli-PTI.jpeg",
"https://www.cricketcountry.com/wp-content/uploads/2018/10/Virat-Kohli-PTI01.jpg",
"https://cdn.zeebiz.com/sites/default/files/2020/11/28/134610-virat-kohli-pti-j.jpg",
"https://static.toiimg.com/thumb/msid-56584506,imgsize-84284,width-400,resizemode-4/56584506.jpg"
]


for(i=0;i<images.length;i++){
    var temp = document.createElement('img')
    temp.src = images[i];
    document.getElementById("images").appendChild(temp)
}