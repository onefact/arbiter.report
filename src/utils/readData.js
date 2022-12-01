import Papa from "papaparse"

export const readCSVData = async (csvPath) =>
{
  try {
    const response = await fetch(csvPath);
    const reader = response.body.getReader();
    const result = await reader.read();
    const csv = (new TextDecoder("utf-8")).decode(result.value);
    
    const csvData =  Papa.parse(csv, {header: true});
    return csvData.data;
    } catch(e){
        console.log("ERROR",e)
        throw(new Error(e))
    }
    
}
export const readJSONData = async (path)=>{
    try{
        const response = await fetch(path
            ,{
              headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            }
            )
            const json = await response.json();
            return json;
    } catch(e){
        console.log("ERROR",e)
        throw(new Error(e))
    }
}
