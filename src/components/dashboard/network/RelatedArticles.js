import React from 'react'
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';



function RelatedArticles() {
    

  return (
    <>
    <Box sx={{ flexGrow: 1,margin:10 }}>
    <Grid container spacing={2}>

      {/* ROW1 column1 */}
    <Grid item xs={4}>
    <Card sx={{elevation:0,  }}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       How US state media rebrands Nazi collaborators as freedom fighters
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         In an effort to redefine the roots of Ukrainian statehood, Stepan Bandera&apos;s war crimes are being whitewashed
        </Typography>
       </CardContent>
       {/* cards start from here */}
       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
      {/* CARD1 */}
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/623cb59685f540451f6c7ec6.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      The road to Ukraine started with 1999&apos;s Kosovo War
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/news/552646-kosovo-war-nato-ukraine-hypocrisy/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    {/* CARD2 */}
    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/623cb43985f5404ff777a0c5.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography  variant="body1" color="text.secondary" >
      NATO&apos;s bombing of Serbia: A tragedy in three acts
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/news/552650-nato-bombing-serbia-remains-unrecognized/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>

    {/* CARD3 */}
    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/622bcb1b85f5401b7737687f.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Serbia vows punishment for volunteers going to Ukraine
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/551732-volunteers-serbia-punishment-ukraine/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>
   
 {/* ROW1 column2 */}
 
    <Grid item xs={4}>
    <Card sx={{elevation:0,  }}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       China urges Pentagon to open up about ‘biolabs’ in Ukraine
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         Beijing said that the US defense department controls 336 laboratories around the world
         </Typography>
       </CardContent>

       {/* cards start from here */}
       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/6229e1322030277e284e1fda.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      US-funded labs in Ukraine dealt with bat coronavirus, Moscow claims
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/551617-bat-coronavirus-us-funded-labs-ukraine/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>

    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://cdnn1.img.sputniknews.com/img/07e6/02/19/1093361426_0:212:2048:1365_1920x0_80_0_0_20f232f0785522438ec24332620de081.jpg.webp"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      How Western Press Has Kept Silent For Years on War in Donbass and Neo-Nazism in Ukraine
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://sputniknews.com/20220227/how-western-press-has-kept-silent-for-years-on-war-in-donbass--neo-nazism-in-ukraine-1093401313.html"}`}>
        
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.05/l/60958aa685f540423828e7b1.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      27 million Soviet citizens lost their lives fighting the Nazis, Westerners comparing USSR to Hitler&apos;s Germany insult their memory
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/523213-soviet-union-nazis-victory-day/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>
   {/* ROW1 column3 */}
     <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       Russia says military action in Ukraine highly likely
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         The risk of an all-out armed conflict in south-eastern Ukraine is extremely high and is becoming a matter of grave concern for Russia, Moscow has cautioned, as international tensions heighten over the war-torn Donbass region.
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/l/620b79a220302738b3590211.png"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      &apos;West has been destroyed without a shot fired&apos; – Russia
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/549410-western-war-propaganda-failed/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.01/l/61f29f5785f5400a151207ae.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Peace with US only possible after &apos;new world order&apos; – Putin ally
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/547529-crisis-between-moscow-washington/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/l/6213d96c85f5407ef82f8d63.JPG"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Major explosion in Lugansk city center
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/550162-ukraine-lugansk-explosion/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>

      {/* ROW 2 COL1 */}

     <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       OSCE observers leaving – DPR
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         SMM OSCE cars are filmed heading towards Russian borders to evacuate
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/62211df685f54072d133dfde.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      UN estimates number of civilian casualties in Ukraine
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/551181-ukraine-civilian-casualties-un/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/l/6244c20220302748393a3a2b.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Twitter deletes &apos;pro-Moscow&apos; Indian accounts
   
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/news/553013-twitter-deletes-pro-putin-indians/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.07/l/60f1743120302756a549bdda.JPG"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      The word for it is &apos;propaganda&apos;: Wikipedia co-founder says website has morphed into playground for rich and powerful manipulators
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/news/529378-wikipedia-founder-establishment-propaganda/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>

      {/* ROW 2 COL2 */}

      <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       ZeroHedge accused of spreading Russian propaganda
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         The libertarian financial blog shot back by accusing AP of amplifying CIA propaganda
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/l/621c780f203027254c6a49c9.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Neo-Nazi Ukrainian group prepares pig-fat laden bullets for Muslim fighters
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/550815-pork-bullets-muslims-ukraine/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/xxl/6230848785f540304964b19d.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Under the Wolfsangel: The uncomfortable truth about radical ideologies in Ukraine
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/551975-nazi-influence-ukrainian-politics/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.01/l/61f26e4d85f54004473b42b1.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Whу are armed Americans operating in the trenches of Eastern Ukraine?
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/547425-us-soldiers-ukraine-front/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>
 {/* ROW 2 COL3 */}

 <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       Ukrainian plan for new race law, which refuses to recognize Russians as indigenous people, has echoes of Hitler, Putin warns
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         Russian President Vladimir Putin has blasted a controversial new bill under consideration by lawmakers in Kiev, which critics say would stoke ethnic tensions and deprive millions of residents of important rights if it is passed
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.06/l/60c1e3fd2030275b7777386c.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Ukraine to be forced to remove WW2 Nazi collaborator slogan from Euro 2020 shirt after UEFA deems it political and militaristic
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/526178-ukraine-remove-slogan-euro2020-shirt/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.06/l/60bde10085f5404016549d16.jpg"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Ukraine&apos;s Euro 2020 soccer shirt to carry slogan of Holocaust perpetrators, weeks after arena named for WWII Nazi massacre leader
      
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/525861-ukraine-soccer-shirt-holocaust/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/l/62101861203027588c2685cc.JPG"
      component="img"
      sx={{ width: 200,height:200 }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Powerful explosions hit another city in eastern Ukraine – reports
          </Typography>
       
        <Link href={`/dashboard/network?lk=${"https://www.rt.com/russia/549924-lugansk-explosion-ukraine/"}`}>
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained"> Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>

    </Grid>

    </Box>
    </>
  )
}

export default RelatedArticles;
  