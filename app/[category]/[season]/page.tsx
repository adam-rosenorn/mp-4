import TopList from "@/components/TopList";
import {StyledH1} from "@/lib/styled";


export default async function TopCategoryPage({params}:{ params: Promise<{category: string, season: number}>;}) {
    const category = decodeURIComponent((await params).category);
    const season = Number((await params).season);
    console.log(category, season);


    return (
        <main>
            <StyledH1>Top {category} in the {season}/{season + 1} season in the Danish Superliga</StyledH1>
            <div>
                <TopList category={category} season={season}/>
            </div>
        </main>
    );
}
