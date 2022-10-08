import { CardContent, Paper, Card, Typography } from "@mui/material";

function PropogandaDetection()
{
    const articles = [{title: "Washington urges US citizens to avoid Russia", 
    text: "Americans should not visit “ due to ongoing tension along the border with Ukraine ” Americans should avoid visiting Russia because of the current Ukrainian crisis , Covid-19 , and alleged “ harassment by Russian government security officials , ” among other reasons , the US State Department said on Sunday . The agency issued a “ Do Not Travel ” advisory message , noting that the US government ’s ability “ to provide routine or emergency services ” is “ severely limited . ” “ Due to Russia ’s heightened military presence and ongoing military exercises along the border region with Ukraine , US citizens located in or considering travel to the districts of the Russian Federation immediately bordering Ukraine should be aware that the situation along the border is unpredictable and there is heightened tension , ” the State Department ’s advisory states , also noting a potential risk of terrorism , harassment , and “ the arbitrary enforcement of local law . ” Read more EU responds to US evacuation", 
    tags: [{range:[457,465], tag: "Loaded_Language", color: "#b0a481"}]},
    {title: "Australia Halts Embassy Work in Kiev Over Security Concerns - Foreign Minister", 
    text: "MOSCOW ( Sputnik ) - Australia is suspending operations of its embassy in Kiev and is moving diplomatic staff to a temporary office in the Ukrainian city of Lviv , amid concerns over the security situation , Australian Foreign Minister Marise Payne said on Sunday . Given the deteriorating security situation caused by the build up of Russian troops on Ukraine ’s border , the Government has directed the departure of staff at the Australian Embassy in Kyiv and temporarily suspended operations at our Embassy in Kyiv , Payne said in a statement . The foreign minister added that Australia ’s ability to provide consular assistance to its citizens in Ukraine could become limited . We will be moving our operations to a temporary office in Lviv , Payne specified , adding that Australians are being advised to leave Ukraine immediately as  security conditions could change at short notice. On Saturday , Canadian Foreign Minister Melanie Joly said that the Canadian", 
    tags: [{range: [840,888], tag: "Appeal_To_Fear-Prejudice", color: "#dd9e3e"}]},
    {title: "US Getting Ready to Withdraw All of Its Personnel From Kiev Within 24-48 Hours - Reports", 
    text: "WASHINGTON ( Sputnik ) - The United States is planning to pull out all the remaining American personnel from Kiev within the next one to two days , CBS reports . On Saturday , the US State Department said that the United States was relocating some of its diplomatic personnel from the Ukrainian capital to the city of Lviv amid security concerns . US citizens are being urged to leave Ukraine as soon as possible and Poland has agreed to help Americans depart Ukraine by simplifying the entry procedures , according to the US Embassy in Ukraine . CBS reported on Sunday that the administration of US President Joe Biden \" \" is preparing to withdraw all US personnel from Kyiv within the next 24 - 48 hours . \" \" ' Hysteric Fit' : Western Media 's Russian ' Invasion' Claims Coordinated by Washington - Zakharova 12 February , 23:32 GMT US Secretary of State Antony Blinken said during a press conference in Honolulu , Hawaii , on Saturday , that the departure of most of the American staff at", 
    tags: [{range: [714,726], tag: "Loaded_Language", color: "#b0a481"}, {range: [757,765], tag: "Name_Calling,Labeling", color: "#5f5b97"}]},
    {title: "US removes non-emergency embassy staff from Ukraine", 
    text: "Washington has warned of possible Russian “ military action ” The US is partially evacuating its embassy in Kiev amid heightened tensions between NATO and Russia over Ukraine . The Department of State has “ ordered non - emergency US employees at the embassy to depart due to continued reports of a Russian military build - up on the border with Ukraine , indicating potential for significant military action , ” the embassy in Kiev tweeted on Saturday . Earlier on Saturday , Washington issued a red travel notice , urging Americans not to go to Ukraine due to “ the increased threats of Russian military action and Covid-19 . ” Those already in the country bordering Russia were advised to return home . READ MORE : Russia pulls diplomats from Ukraine The announcement came after several Western news outlets reported that Russia may invade Ukraine early next week . Moscow has denied plans to attack its neighbor . The US ordered an evacuation of diplomats ’ families from Kiev last month , and several", 
    tags: []},
    {title: "US tells all Americans to leave Ukraine now", 
    text: "The US State Department told those still in the country to depart immediately citing an alleged threat of Russian invasion The US government advised Americans in Ukraine to leave the country immediately and by any means available on Thursday . The previous US travel alert issued in January cited the same concerns of “ increased threats of Russian military action and Covid-19 ” while calling on US citizens to avoid going to Ukraine , but did not go as far as to urge them to flee the country as soon as possible . “ Do not travel to Ukraine due to the increased threats of Russian military action and COVID-19 ; those in Ukraine should depart now via commercial or private means , ” the US State Department said in its new travel alert . Those Americans who opt to remain in Ukraine should stay vigilant “ due to crime , civil unrest , and potential combat operations should Russia take military action , ” the advisory continued , before warning that the US government would “ not be able to evacuate U.S. citizens ” if a", 
    tags: []}]

    return (<Paper style={{display: "flex", flexDirection: "column", padding: "20px"}}>
            <Typography variant="h4" style={{marginBottom: "20px", marginLeft: "10px"}}>Propoganda Detection</Typography>
            {articles.map((article, id) => {
                return (<Card key={id} variant="outlined" style={{marginBottom: "20px", border: "1px solid black"}}>
                    <CardContent>
                        <Typography variant="h5" style={{marginBottom: "10px"}}>{article.title}</Typography>
                        <ArticleBody article={article} />
                    </CardContent>
                </Card>)
            })}
            <Typography variant="h4" style={{marginBottom: "20px", marginTop: "10px"}}>Topics</Typography>
            <TopicsList />
        </Paper>);
}

function ArticleBody({article})
{
    const textStyle = {display: "inline"};
    
    const texts = [];
    if(article.tags.length > 0)
    {
        texts.push(<Typography variant="body1" style={textStyle}>{article.text.substring(0,article.tags[0].range[0])}</Typography>);
        for(let i = 0; i < article.tags.length; ++i)
        {
            texts.push(<div style={{display: "inline-flex", outline: "solid 1px black", marginRight: "2px"}}>
                <Typography variant="caption" style={{backgroundColor: article.tags[i].color, color: "white", padding: "2px", fontWeight: "bold"}}>{article.tags[i].tag}</Typography>
                <Typography variant="body1" style={{...textStyle, padding: "2px"}}>{article.text.substring(article.tags[i].range[0], article.tags[i].range[1])}</Typography>
            </div>)
            if(i != article.tags.length-1)
                texts.push(<Typography variant="body1" style={textStyle}>{article.text.substring(article.tags[i].range[1],article.tags[i+1].range[0])}</Typography>);
            else
            texts.push(<Typography variant="body1" style={textStyle}>{article.text.substring(article.tags[i].range[1],article.text.length)}</Typography>);
        }
    }
    else
        texts.push(<Typography variant="body1">{article.text}</Typography>)

    return (
        <div>
            {texts}
        </div>
    )
}

function TopicsList()
{
    const topicGroups = [{topics: "embassy, citizens, consular", color: "#F47459", size: 3, pscore: 0.901},
    {topics: "evacuations, evacuate, evacuating, leave, evacuation", color: "#F4F459", size: 5, pscore: 1.865},
    {topics: "travel, advised", color: "#59D5F4", size: 2, pscore: 0.245}];

    const colStyle = {border: "1px solid black", textAlign: "center", fontWeight: "bold"};
    const cells = [];
    topicGroups.map((grp) => {
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.topics}</Typography>);
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.size}</Typography>);
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.pscore}</Typography>);
    });
    
    return(<div style={{display: "grid", gridTemplateColumns: "8fr 1fr 1fr"}}>
            <Typography variant="h6" style={colStyle}>Topics</Typography>
            <Typography variant="h6" style={colStyle}>Topic Size</Typography>
            <Typography variant="h6" style={colStyle}>Propoganda Score</Typography>
            {cells}
        </div>)
}

export default PropogandaDetection;