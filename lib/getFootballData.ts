"use server";
import {TopLeadersProps} from "@/types";



const FOOTBALL_API_KEY = String(process.env.FOOTBALL_API_KEY);


export default async function getFootballData(category: string, season: number): Promise<TopLeadersProps[] | null | undefined> {
    try {
        if (!category || !season) return undefined;

        const response = await fetch(`https://v3.football.api-sports.io/players/top${category}?season=${season}&league=119`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": FOOTBALL_API_KEY
            }
        });
        if (response.status !== 200) {
              console.log('Error fetching data');
              return null;
        }


        const jsonResScorer = await response.json();
        console.log(jsonResScorer);
        return jsonResScorer.response;
    } catch (err) {
        console.error('Error:', err);
    }
};



