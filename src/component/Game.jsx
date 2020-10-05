import React, {useState} from 'react';
import times from 'loadsh/times';
import { MAX_POS } from "../constant";
import { getInitialTileList } from "../util/tile";
import useMoveTile from "../hook/useMoveTile";
import Tile from "./Tile";

function Game() {
    const [tileList, setTileList] = useState(getInitialTileList);
    console.log(tileList)
    useMoveTile({tileList, setTileList});

    return (
        <div className="game-container">
            <div className="grid-container">
                {times(MAX_POS, index => (
                    <div key={index} className="grid-row">
                        {times(MAX_POS, index2 => (
                            <div key={index2} className="grid-cell"></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="tile-container">
                {tileList.map(item => (
                    <Tile key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
}

export default Game;
