import { CardContent, Paper, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {readJSONData } from '../../../utils/readData';

const reportApiUrl = "http://104.197.43.57:8083/report?url=https://www.rt.com/russia/552849-russia-says-west-not-welcome/";

function PropogandaDetection()
{
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState([{title: "Economic Crisis in Ukraine", 
    text: "Inflation in Ukraine will accelerate and the country will find itself on the brink of a default without financing from the International Monetary Fund, according to the chairman of the National Bank of Ukraine Chairman, Volodymyr Stelmakh. But the politicThe government and the National Bank of Ukraine reached an agreement with the IMF over a $US 16.5 billion loan last week, issued on the condition that the government will pass structural reforms to address the current economic crisis._ However, the IMF Board can grant the loan only after the Ukrainian parliament passes amendments to the Ukrainian laws on restricting budget spending and supporting the banking system._ Due to the continuing dispute between President Yushchenko and Prime Minsiter Yulia Timoshenko the parliament so far failed to pass the necessary bills.", 
    tags: [{range:[21,36], tag: "Loaded_Language", color: "#b0a481"}, {range:[53,82], tag: "Appeal_To_Fear-Prejudice", color: "#dd9e3e"}]},
    
    {title: "Russia Switches to Mir Payment System", 
    text: "Russian financial institutions and firms are ready to work without SWIFT's interbank cash transfer services, according to Deputy Prime Minister Arkady Dvorkovich.Dvorkovich said, as quoted by TASS.He added that the measure may have a negative impact on corporations working in the US and Europe.SWIFT reveals new cyber-attacks on its money transfer system he said.The potential disconnection of Russia from SWIFT has been under discussion since 2014, when the EU and the US introduced the first round of international penalties against Moscow over alleged involvement in the Ukraine crisis and the reunification with Crimea.At the time, the European Parliament called for strong actions against Russia, including expelling the country from money transfer services. However, the Society for Worldwide Interbank Financial Telecommunication regarded the recommendations as violating rights and damaging for businesses.Disconnection: Russian banking system has SWIFT alternative ready In 2017, Russia’s Central Bank Governor Elvira Nabiullina told President Vladimir Putin that the banking sector had been provided with all the necessary conditions for operating lenders and payment systems in case of disconnection from SWIFT. According to the regulator, 90 percent of ATMs in Russia were ready to accept the Mir payment system, a domestic version of Visa and MasterCard.The Mir payment system was introduced in 2015 after clients of several Russian banks (SMP Bank, InvestCapitalBank, Russia Bank and Sobinbank) were unable to use Visa and MasterCard due to the sanctions.", 
    tags: [{range: [672,679], tag: "Loaded_Language", color: "#b0a481"}]},

    {title: "Digital Blockade against Russia", 
    text: "Earlier in the week, the Rossiya Segodnya media group lambasted the move by Google to restrict access to its resources online, calling it an act of censorship. The Telegram channels of the Sputnik news agency and RT are being blocked in the European Union, press services revealed Friday. \"\"The telegram channel 'Sputnik Blizhneye Zarubezhye' has been blocked in EU countries\"\", the Sputnik press service said. \"\"In many European countries, the Telegram channels RT DE, RT RU, RT News do not open, in particular, in Germany, France, the Netherlands\"\". The move comes shortly after the EU banned Sputnik news websites and the broadcasting of the RT in the bloc earlier in the week. Additionally, the Rossiya Segodnya media group (which both Sputnik and RT are a part of) said on Wednesday that Meta had suspended the work of those apps related to its resources. A similar decision was made by Google News and Google Discover - the services have limited access to the Rossiya Segodnya media outlets online. The move targeting the Russian state-run media outlets was condemned by the media group as \"\"censorship\"\" and \"\"manipulation of the information agenda\"\". West's Censorship of RT, Sputnik & Psy-Ops Against Russians is Sign of Weakness, Say US Analysts 3 March, 11:04 GMT Harsh criticism was also voiced by the Russian Foreign Ministry as it blamed the West for trying to \"\"deliberately restrict access to Russian information [sources] so that users can see a one-sided picture of the Russian special operation\"\". The YouTube channels, Instagram, and TikTok accounts linked to Sputnik and RT were also blocked across Europe following a slew of anti-Russian sanctions imposed by the bloc over the military operation by Russia in Ukraine. The Kremlin said that the goals of the operation are to \"\"demilitarise and de-Nazify\"\" the nation's neighbour.", 
    tags: [{range: [54,63], tag: "Loaded_Language", color: "#b0a481"}]},
    
    {title: "Ukraine Targeted with Malware", 
    text: "MOSCOW ( Sputnik ) - The computer systems of several Ukrainian government agencies and non - profit organisations have been infected with malware disguised as ransomware , Microsoft said . \" \" Microsoft Threat Intelligence Center ( MSTIC ) has identified evidence of a destructive malware operation targeting multiple organisations in Ukraine . This malware first appeared on victim systems in Ukraine on January 13 , 2022 \" \" , the company wrote on its security blog on Saturday . The malware has impacted \" \" multiple government , non - profit , and information technology organisations , all based in Ukraine \" \" , according to the IT company . MSTIC said that the malware was supposed to resemble a hijacking programme but did not have a ransom recovery mechanism . Instead of securing a ransom , the programme was designed to incapacitate target devices , the company said . Microsoft has not yet identified any significant association between this activity and those of other malware groups the company is tracking . \" \" Given the scale of the observed intrusions , MSTIC is not able to assess the intent of the identified destructive.", 
    tags: [{range: [269,281], tag: "Loaded_Language", color: "#b0a481"},{range: [1129,1140], tag: "Loaded_Language", color: "#b0a481"}]},

    {title: "High Stakes Boxing Match in London", 
    text: "Pound for pound number one fighter in the world, Ukraine's Vasyl Lomachenko, takes on challenger Luke Campell in the British fighter's back yard at London's O2 Arena on Saturday night with Loma's world lightweight titles at stake.Champion 'Loma' will defend his WBA, WBO and Ring magazine 135lbs titles, while the vacant WBC belt will also be up for grabs. Challenger and underdog Campbell will be making his second attempt at winning a world title.The fight will be a meeting of two Olympic gold medalists; Lomachenko and Campbell both won gold at the 2012 London Games in the lightweight and bantamweight divisions respectively.Loma, who has since gone on to capture three world titles in three different weight classes and is widely considered the best boxer in the world, won his first Olympic gold in Beijing in 2008 at featherweight.", 
    tags: [{range: [372,380], tag: "Name_Calling", color: "#2eb82e"}]},

    {title: "Russian Victory in Women's Handball", 
    text: "Team Russia snatched its first ever Olympic gold in women’s handball, while first place finishes in men’s freestyle wrestling, women’s individual artistic gymnastics, and the men’s individual modern pentathlon added to Russia’s gold medal count on Saturday.Team Russia won 22-19 during the duel with France on Saturday. It is the first ever gold medal for the women’s handball team at the Olympic Games. During the 2008 Olympics in Beijing, it took silver.This gold medal is the fourteenth team Russia has won during the Brazil Games. It has also taken a total of 16 silver and 19 bronze medals.Following the victory, Russian Sports Minister Vitaly Mutko applauded the team, saying that it has opened a new era for Russian handball. Mutko said.The head coach of the Russian Women’s handball team, Evgeniy Trefilov, praised his athletes, saying that their achievement was Trefilov said.Speaking with journalists, Russian iconic pole vaulter Yelena Isinbayeva said that the Russian handball victory at the Olympics would boost the school.“.”Russian gymnast Margarita Mamun has won a gold medal in the women’s artistic individual all-around at the Rio 2016 Olympics, bringing Russia’s medal tally to 15.The victory was achieved with a total score of 76,483 for four exercises. Silver was claimed by another Russian artistic gymnast, Yana Kudryavtseva, who earned 75,608 points.As many as eight artistic gymnasts from Russia, Azerbaijan, Belarus, France, Spain, and South Korea made it to the finals.Meanwhile, Russian wrestler Abdulrashid Sadulaev picked up another gold medal for Team Russia on Saturday by beating Turkey’s Selim Yaşar in the men’s 86-kilogram freestyle finals.Another gold was snatched by Russia’s Alexander Lesun, who came in first in the men’s individual modern pentathlon event with an overall score of 1,479 points. Pavlo Tymoshchenko from Ukraine took silver, scoring 1,472 points, while Ismael Hernandez of Mexico won the bronze with 1,468 points.", 
    tags: []}]);

    
    useEffect(() => {
        loadData(setData);
    }, []);

    useEffect(() => {
        if(data)
            parseJsonData(data, setArticles);
    }, [data]);

    return (<Paper style={{display: "flex", flexDirection: "column", padding: "20px"}}>
            <Typography variant="h4" style={{marginBottom: "20px", marginLeft: "10px"}}>Propaganda Detection</Typography>
            {articles.map((article, id) => {
                return (<Card key={id} variant="outlined" style={{marginBottom: "20px", border: "1px solid black"}}>
                    <CardContent>
                        <Typography variant="h5" style={{marginBottom: "10px"}}>{article.title}</Typography>
                        <ArticleBody article={article} />
                    </CardContent>
                </Card>)
            })}
            <Typography variant="h4" style={{marginBottom: "20px", marginTop: "10px"}}>Topics</Typography>
            {data && <TopicsList data={data}/> }
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
            texts.push(<div style={{display: "inline-flex", outline: "solid 1px", marginRight: "2px"}}>
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

function TopicsList({data})
{
    const topicGroups = [{topics: data.article.topic.words.toString(), color: "#DC9696", size: data.article.topic.words.length, pscore: data.article.topic["propaganda_score"].toFixed(4)}];

    const colStyle = {border: "1px solid", textAlign: "center", fontWeight: "bold", overflow: "auto"};
    const cells = [];
    topicGroups.map((grp) => {
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.topics}</Typography>);
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.size}</Typography>);
        cells.push(<Typography variant="body1" style={{...colStyle, backgroundColor: grp.color}}>{grp.pscore}</Typography>);
    });
    
    return(<div style={{display: "grid", gridTemplateColumns: "8fr 1fr 1fr"}}>
            <Typography variant="h6" style={colStyle}>Topics</Typography>
            <Typography variant="h6" style={colStyle}>Topic Size</Typography>
            <Typography variant="h6" style={colStyle}>Propaganda Score</Typography>
            {cells}
        </div>)
}

async function loadData(setData)
{
    try
    {
        const resp = await fetch(reportApiUrl,{
            method: "GET",
            headers: {
                "Authorization" : `Basic ${Buffer.from("parrot:parrot123").toString('base64')}`
            }
        });
        const data = await resp.json();

        console.log(data);
        setData(data);
    }
    catch(err)
    {
        console.log(err);

        const data = await readJSONData("/data/Report.json");
        setData(data);
    }
}

function parseJsonData(data, setArticles)
{
    const newArticles = [];

    const art = data.article;
    const newArticle = {title: art.headline, text: art.tokens.join(" "), tags: []};

    const cumLens = [0];
    for(let i = 1; i < art.tokens.length; ++i)
    {
        cumLens.push(cumLens[i-1]+art.tokens[i-1].length+1);
    }
    console.log(cumLens)
    art.propaganda_spans.forEach((pr) => {
        newArticle.tags.push({range: [cumLens[pr.start], cumLens[pr.end]], tag: pr.technique, color: "#2eb82e"});
    });

    newArticles.push(newArticle);

    console.log(newArticles);
    setArticles(newArticles);
}

export default PropogandaDetection;

/*
const articles = [{title: "Economic Crisis in Ukraine", 
    text: "Inflation in Ukraine will accelerate and the country will find itself on the brink of a default without financing from the International Monetary Fund, according to the chairman of the National Bank of Ukraine Chairman, Volodymyr Stelmakh. But the politicThe government and the National Bank of Ukraine reached an agreement with the IMF over a $US 16.5 billion loan last week, issued on the condition that the government will pass structural reforms to address the current economic crisis._ However, the IMF Board can grant the loan only after the Ukrainian parliament passes amendments to the Ukrainian laws on restricting budget spending and supporting the banking system._ Due to the continuing dispute between President Yushchenko and Prime Minsiter Yulia Timoshenko the parliament so far failed to pass the necessary bills.", 
    tags: [{range:[21,36], tag: "Loaded_Language", color: "#b0a481"}, {range:[53,82], tag: "Appeal_To_Fear-Prejudice", color: "#dd9e3e"}]},
    
    {title: "Russia Switches to Mir Payment System", 
    text: "Russian financial institutions and firms are ready to work without SWIFT's interbank cash transfer services, according to Deputy Prime Minister Arkady Dvorkovich.Dvorkovich said, as quoted by TASS.He added that the measure may have a negative impact on corporations working in the US and Europe.SWIFT reveals new cyber-attacks on its money transfer system he said.The potential disconnection of Russia from SWIFT has been under discussion since 2014, when the EU and the US introduced the first round of international penalties against Moscow over alleged involvement in the Ukraine crisis and the reunification with Crimea.At the time, the European Parliament called for strong actions against Russia, including expelling the country from money transfer services. However, the Society for Worldwide Interbank Financial Telecommunication regarded the recommendations as violating rights and damaging for businesses.Disconnection: Russian banking system has SWIFT alternative ready In 2017, Russia’s Central Bank Governor Elvira Nabiullina told President Vladimir Putin that the banking sector had been provided with all the necessary conditions for operating lenders and payment systems in case of disconnection from SWIFT. According to the regulator, 90 percent of ATMs in Russia were ready to accept the Mir payment system, a domestic version of Visa and MasterCard.The Mir payment system was introduced in 2015 after clients of several Russian banks (SMP Bank, InvestCapitalBank, Russia Bank and Sobinbank) were unable to use Visa and MasterCard due to the sanctions.", 
    tags: [{range: [672,679], tag: "Loaded_Language", color: "#b0a481"}]},

    {title: "Digital Blockade against Russia", 
    text: "Earlier in the week, the Rossiya Segodnya media group lambasted the move by Google to restrict access to its resources online, calling it an act of censorship. The Telegram channels of the Sputnik news agency and RT are being blocked in the European Union, press services revealed Friday. \"\"The telegram channel 'Sputnik Blizhneye Zarubezhye' has been blocked in EU countries\"\", the Sputnik press service said. \"\"In many European countries, the Telegram channels RT DE, RT RU, RT News do not open, in particular, in Germany, France, the Netherlands\"\". The move comes shortly after the EU banned Sputnik news websites and the broadcasting of the RT in the bloc earlier in the week. Additionally, the Rossiya Segodnya media group (which both Sputnik and RT are a part of) said on Wednesday that Meta had suspended the work of those apps related to its resources. A similar decision was made by Google News and Google Discover - the services have limited access to the Rossiya Segodnya media outlets online. The move targeting the Russian state-run media outlets was condemned by the media group as \"\"censorship\"\" and \"\"manipulation of the information agenda\"\". West's Censorship of RT, Sputnik & Psy-Ops Against Russians is Sign of Weakness, Say US Analysts 3 March, 11:04 GMT Harsh criticism was also voiced by the Russian Foreign Ministry as it blamed the West for trying to \"\"deliberately restrict access to Russian information [sources] so that users can see a one-sided picture of the Russian special operation\"\". The YouTube channels, Instagram, and TikTok accounts linked to Sputnik and RT were also blocked across Europe following a slew of anti-Russian sanctions imposed by the bloc over the military operation by Russia in Ukraine. The Kremlin said that the goals of the operation are to \"\"demilitarise and de-Nazify\"\" the nation's neighbour.", 
    tags: [{range: [54,63], tag: "Loaded_Language", color: "#b0a481"}]},
    
    {title: "Ukraine Targeted with Malware", 
    text: "MOSCOW ( Sputnik ) - The computer systems of several Ukrainian government agencies and non - profit organisations have been infected with malware disguised as ransomware , Microsoft said . \" \" Microsoft Threat Intelligence Center ( MSTIC ) has identified evidence of a destructive malware operation targeting multiple organisations in Ukraine . This malware first appeared on victim systems in Ukraine on January 13 , 2022 \" \" , the company wrote on its security blog on Saturday . The malware has impacted \" \" multiple government , non - profit , and information technology organisations , all based in Ukraine \" \" , according to the IT company . MSTIC said that the malware was supposed to resemble a hijacking programme but did not have a ransom recovery mechanism . Instead of securing a ransom , the programme was designed to incapacitate target devices , the company said . Microsoft has not yet identified any significant association between this activity and those of other malware groups the company is tracking . \" \" Given the scale of the observed intrusions , MSTIC is not able to assess the intent of the identified destructive.", 
    tags: [{range: [269,281], tag: "Loaded_Language", color: "#b0a481"},{range: [1129,1140], tag: "Loaded_Language", color: "#b0a481"}]},

    {title: "High Stakes Boxing Match in London", 
    text: "Pound for pound number one fighter in the world, Ukraine's Vasyl Lomachenko, takes on challenger Luke Campell in the British fighter's back yard at London's O2 Arena on Saturday night with Loma's world lightweight titles at stake.Champion 'Loma' will defend his WBA, WBO and Ring magazine 135lbs titles, while the vacant WBC belt will also be up for grabs. Challenger and underdog Campbell will be making his second attempt at winning a world title.The fight will be a meeting of two Olympic gold medalists; Lomachenko and Campbell both won gold at the 2012 London Games in the lightweight and bantamweight divisions respectively.Loma, who has since gone on to capture three world titles in three different weight classes and is widely considered the best boxer in the world, won his first Olympic gold in Beijing in 2008 at featherweight.", 
    tags: [{range: [372,380], tag: "Name_Calling", color: "#2eb82e"}]},

    {title: "Russian Victory in Women's Handball", 
    text: "Team Russia snatched its first ever Olympic gold in women’s handball, while first place finishes in men’s freestyle wrestling, women’s individual artistic gymnastics, and the men’s individual modern pentathlon added to Russia’s gold medal count on Saturday.Team Russia won 22-19 during the duel with France on Saturday. It is the first ever gold medal for the women’s handball team at the Olympic Games. During the 2008 Olympics in Beijing, it took silver.This gold medal is the fourteenth team Russia has won during the Brazil Games. It has also taken a total of 16 silver and 19 bronze medals.Following the victory, Russian Sports Minister Vitaly Mutko applauded the team, saying that it has opened a new era for Russian handball. Mutko said.The head coach of the Russian Women’s handball team, Evgeniy Trefilov, praised his athletes, saying that their achievement was Trefilov said.Speaking with journalists, Russian iconic pole vaulter Yelena Isinbayeva said that the Russian handball victory at the Olympics would boost the school.“.”Russian gymnast Margarita Mamun has won a gold medal in the women’s artistic individual all-around at the Rio 2016 Olympics, bringing Russia’s medal tally to 15.The victory was achieved with a total score of 76,483 for four exercises. Silver was claimed by another Russian artistic gymnast, Yana Kudryavtseva, who earned 75,608 points.As many as eight artistic gymnasts from Russia, Azerbaijan, Belarus, France, Spain, and South Korea made it to the finals.Meanwhile, Russian wrestler Abdulrashid Sadulaev picked up another gold medal for Team Russia on Saturday by beating Turkey’s Selim Yaşar in the men’s 86-kilogram freestyle finals.Another gold was snatched by Russia’s Alexander Lesun, who came in first in the men’s individual modern pentathlon event with an overall score of 1,479 points. Pavlo Tymoshchenko from Ukraine took silver, scoring 1,472 points, while Ismael Hernandez of Mexico won the bronze with 1,468 points.", 
    tags: []}]


    {topics: "IMF, Monetary, Debt, Bailout, fund, loan, default, tranche, finance", color: "#DC9696", size: 9, pscore: 0.901},
    {topics: "Mastercard, payment, interbank, swift, bank, transactions, disconnect, finance, gazprombank", color: "#EFB5B5", size: 9, pscore: 1.865},
    {topics: "content, channels, facebook, google, platforms, apps, meta, roskomnadzor, censorship, youtube", color: "#99EB97", size: 10, pscore: 0.645},
    {topics: "malware, hackers, cyber, ransomware,ddos, cyberattack, servers", color: "#ffcc00", size: 7, pscore: 1.564},
    {topics: "wbo, wba, heavyweight, wbc, usyk, boxing, tyson, rematch, joshua, champion", color: "#1243E6", size: 10, pscore: 0.234}

    const art = data.article;
    const newArticle = {title: art.headline, text: art.topic.narrative.summary, tags: []};
    art.propaganda_spans.forEach((pr) => {
        newArticle.tags.push({range: [pr.start, pr.end], tag: pr.technique, color: "#b0a481"})
    });
    newArticles.push(newArticle);

*/