import {TopLeadersProps} from "@/types";
import getFootballData from "@/lib/getFootballData";
import { CardsDiv, SingleCardDiv, InfoDiv } from "@/lib/styled";




export default async function TopList(props: {category: string, season: number}) {
    const data = await getFootballData(props.category, props.season);

    if (!data) {
        return <div>No data available</div>;
    }


    console.log(data);
    return (
        <CardsDiv>
            {
            data.map((leader: TopLeadersProps) => (

                    <SingleCardDiv key={leader.player.id}>
                        <img
                           src={leader.player.photo}
                           alt={`Football player: ${leader.player.name}`}
                        />
                        <div>
                            <InfoDiv>
                                <h1>{leader.player.name}</h1>
                                <p>Age: {leader.player.age}</p>
                            </InfoDiv>
                            <InfoDiv>
                                <p>Team: {leader.statistics[0].team.name}</p>
                                <p>Position: {leader.statistics[0].games.position}</p>
                            </InfoDiv>
                            <InfoDiv>
                                <p>Appearances: {leader.statistics[0].games.appearences}</p>
                                {props.category === "scorers" && (
                                  <p>Goals: {leader.statistics[0].goals.total}</p>
                                )}
                                {props.category === "assists" && (
                                  <p>Assists: {leader.statistics[0].goals.assists}</p>
                                )}
                            </InfoDiv>
                        </div>
                    </SingleCardDiv>
    ))
}
        </CardsDiv>
    );
};


