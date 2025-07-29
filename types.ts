export type TopLeadersProps = {
    player: {
        id: number;
        name: string;
        age: number;
        photo: string;
    };
    statistics: [
        {
            team: {
                name: string;
            };
            games: {
                appearences: number;
                position: string;
            };
            goals: {
                total: number;
                assists: number;
            };
        }
    ];
};
