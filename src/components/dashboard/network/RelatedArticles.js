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
       Trump reacts to Putin-Biden talks
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         Donald Trump says Russian President Vladimir Putin is not worried 
         about the Joe Biden administration, criticizing his successor after Biden sat down for an online meeting with the Russian leader.
        </Typography>
       </CardContent>
       {/* cards start from here */}
       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
      {/* CARD1 */}
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.12/l/61b02bb9203027478209d0de.JPG"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      US senator won rule out nuclear strike against Russia
          </Typography>
       
        <Link href="https://www.rt.com/usa/542508-senator-nuclear-strike-russia/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    {/* CARD2 */}
    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ178h1tRmbTE0zrHV_xoJbc51QwuNiqz5w&usqp=CAU"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography  variant="body1" color="text.secondary" >
      Biden hints at NATO-Russia meeting about Ukraine
          </Typography>
       
        <Link href="https://www.rt.com/usa/542598-biden-nato-russia-meeting/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>

    {/* CARD3 */}
    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.12/l/61b0efc885f5403e5579df3a.JPG"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Biden answers if US troops will head to Ukraine
          </Typography>
       
        <Link href="https://www.rt.com/usa/542602-biden-troops-ukraine-nato/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
       Russia avoids FIFA vote after expulsion fears
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         FIFA did not discuss the topic of Russian membership at its congress in Doha, after some had feared Russia could be suspended
         </Typography>
       </CardContent>

       {/* cards start from here */}
       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6245dd5a85f54013270e6732.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      FIFA holds vote on Russian as an official language
          </Typography>
       
        <Link href="https://www.rt.com/sport/553037-fifa-russian-official-language/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>

    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/62458b5420302737b71e8d17.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Ukraine should not be gifted World Cup spot, insists boss
          </Typography>
       
        <Link href="https://www.rt.com/sport/553040-world-cup-draw-ukraine-scotland-wales/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6245b33520302736db7ec3b6.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      FIFA boss explains decision to ban Russian teams
          </Typography>
       
        <Link href="https://www.rt.com/sport/553054-fifa-gianni-infantino-decision-russia/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
       Too rational questions? 
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         When US President Joe Biden described Russia as having its back to the wall in Ukraine and possibly contemplating an attack using Weapons of Mass Destruction, nobody asked how Russia has its back to the wall
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/622c430585f540252c4f1e0f.png"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      End of Western domination? 
          </Typography>
       
        <Link href="https://www.rt.com/shows/sputnik_551740-end-western-domination-ukraine/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/623586c685f54048ee2f8bc2.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      NATO's infowar and the history of the Ukrainian conflict
          </Typography>
       
        <Link href="https://www.rt.com/shows/sputnik_552277-nato-infowar-ukrainian-conflict/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/article/61fcf34520302707095d5b05.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Ukraine invasion and world in chaos (E422)
          </Typography>
       
        <Link href="  https://www.rt.com/shows/sputnik_548303-ukraine-invasion-world-chaos/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
       Biden rejected attempts to slap more sanctions on Russia media
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         US President Joe Biden has dismissed three plans to place more sanctions on Moscow this year as some officials grow frustrated with his Russia policy, a report says.
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.12/article/61b66d3f20302702466f96ae.JPG"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      30 million Americans ready to take up arms, MSNBC claims
          </Typography>
       
        <Link href="https://www.rt.com/usa/543003-msnbc-trump-supporters-coup/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.12/article/61b8842420302744da6ffe87.JPG"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Biden's hands partly tied over Ukraine, Democrats claim
          </Typography>
       
        <Link href="https://www.rt.com/usa/543149-us-ukraine-biden-funds/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2021.12/article/61bcf58785f5401cc6477722.JPG"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      US national security advisor says Putin hasn't yet decided to invade Ukraine
          </Typography>
       
        <Link href="https://www.rt.com/usa/543569-sullivan-russia-talks-ukraine/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
       Putin warns West of new migrant crisis
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
          Russian President Vladimir Putin has warned Europe of a refugee crisis that will come after the food one
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/62461270203027552b2958aa.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      US tells citizens in Russia and Ukraine to leave immediately
          </Typography>
       
        <Link href="https://www.rt.com/russia/553074-state-department-americans-leave-immediately/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/624616c085f540182b2e9836.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Russia sanctions EU leadership
          </Typography>
       
        <Link href="https://www.rt.com/russia/553076-eu-sanctions-russia-ministry/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6246186d203027455335306b.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Poland asks EU for billions to manage Ukrainian refugees
          </Typography>
       
        <Link href="https://www.rt.com/russia_553077-poland-refugees-eu-funds/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
       Warehouse workers steal over $35k of graphics cards
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         Russian warehouse employees arrested after stealing 20 Nvidia RTX 3070 TIs worth over $35,000 and trying to sell them to local pawn shops
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/623ad7ec2030276c9779d304.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Letter Z on Elle Russia front page draws hate
          </Typography>
       
        <Link href="https://www.rt.com/pop-culture_552515-elle-russia-gen-z/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/623dd14b85f5407d3677e5ba.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Russian tree canceled
          </Typography>
       
        <Link href="https://www.rt.com/pop-culture_552702-russian-oak-tree-banned/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6240a25f85f5407fee23d572.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Sean Penn gives ultimatum on Zelensky speech at Oscars
          </Typography>
       
        <Link href="https://www.rt.com/pop-culture_552808-sean-penn-demands-zelensky-invite-to-oscars/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>


      {/* ROW 3 COL1 */}

      <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       How many times has the US said just trust us and then lied?
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         Not accepting because I said so! when the US govt says it now makes you an enemy sympathizer
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/article/61fff51d85f54031d4015026.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Maastricht Treaty 30 years on: Has EU been a success?
          </Typography>
       
        <Link href="https://www.rt.com/op-ed_548483-maastricht-treaty-eu-success/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/article/62014c5a85f540651a7ca5c4.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      NATO cant let Afghan children starve just because it lost
          </Typography>
       
        <Link href="https://www.rt.com/op-ed_548584-afghan-children-starving-nato/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.02/article/620164ce85f54071d069e86f.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Why Biden needs new policy advisers on Russia
          </Typography>
       
        <Link href="https://www.rt.com/op-ed_548591-us-policy-advisers-russia/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>

      {/* ROW 3 COL2 */}

      <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       Germany and France react to Russia's gas-for-ruble demand
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         French and German officials have said they won't buy Russian gas with rubles, calling Vladimir Putin's demand that they do so blackmail
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6245e79185f54008ac03b8c0.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Britain sends more lethal weapons to Ukraine
          </Typography>
       
        <Link href="https://www.rt.com/russia/553074-state-department-americans-leave-immediately/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/62460ff02030274bdd2ae0ff.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      UN condemns British media censorship
          </Typography>
       
        <Link href="https://www.rt.com/news/553075-un-reaction-rt-sanctions/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6246357c85f5400a0818c3a2.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Pakistan PM names foreign power that wants him toppled
          </Typography>
       
        <Link href="https://www.rt.com/news/553080-pakistan-khan-us-no-confidence/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>
    </Card>
   
     </Grid>
 {/* ROW 3 COL3 */}

 <Grid item xs={4}>
    <Card sx={{elevation:0,}}>
    <CardContent sx={{ flex: '1 0 auto',}}>
       <Typography component="div" variant="h5">
       US exempts critical Russian commodity from sanctions
         </Typography>
         <Typography variant="subtitle3" color="text.secondary">
         The US has removed Russian fertilizers from its sanctions list imposed on Moscow over the conflict in Ukraine
         </Typography>
       </CardContent>


       <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6245865485f54058a14abf66.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Russia lifts ban on parallel imports
          </Typography>
       
        <Link href="https://www.rt.com/business/553038-russia-lifts-ban-parallel-imports/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/6245b96d203027368e62bdeb.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      Countries will need to create ruble reserves to buy Russian gas
          </Typography>
       
        <Link href="https://www.rt.com/business/553045-ruble-reserves-gas-expert/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
        </Link>
      
      </CardContent>
      </Box>
    </Card>


    <Card sx={{ display: 'flex', margin:1 }}>
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      
    <CardMedia
      image="https://mf.b37mrtl.ru/files/2022.03/article/62461ea9203027552b2958b4.jpg"
      component="img"
      sx={{ width: 200, }}
      alt="article image"
    />
     
      <CardContent >
      <Typography sx={{wordWrap: "break-word"}} variant="body1" color="text.secondary" >
      US to unleash strategic oil reserves to lower prices
          </Typography>
       
        <Link href="https://www.rt.com/business/553079-biden-oil-release-green-prices/">
        <Button size="small" sx={{p:1,height:30, textTransform: 'none'}}  variant="contained">Open Report</Button>
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
  